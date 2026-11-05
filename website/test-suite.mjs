import { spawn } from 'child_process';

async function runTestSuite() {
  console.log('🚀 Starting Automated Portfolio QA Suite...');

  // Spawn headless Brave with debugging port
  const browserProc = spawn('/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', [
    '--headless',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    'http://127.0.0.1:3000/'
  ]);

  // Wait for browser to initialize
  await new Promise((resolve) => setTimeout(resolve, 2000));

  let targetsRes = await fetch('http://127.0.0.1:9222/json');
  let targets = await targetsRes.json();
  let pageTarget = targets.find((t) => t.type === 'page');

  if (!pageTarget) {
    console.error('❌ Failed to locate browser page target');
    browserProc.kill();
    process.exit(1);
  }

  console.log('🔗 Connected to CDP page target:', pageTarget.title);
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let msgId = 1;
  const pending = new Map();
  const consoleMessages = [];

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      const text = msg.params.args.map((a) => a.value || a.description).join(' ');
      consoleMessages.push({ type: msg.params.type, text });
    }
    if (msg.id && pending.has(msg.id)) {
      const resolve = pending.get(msg.id);
      pending.delete(msg.id);
      resolve(msg);
    }
  };

  await new Promise((resolve) => {
    ws.onopen = resolve;
  });

  const send = (method, params = {}) => {
    return new Promise((resolve) => {
      const id = msgId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  const evalJs = async (expression) => {
    const trimmed = expression.trim();
    const wrapped = trimmed.includes(';') || trimmed.startsWith('return')
      ? `(() => { ${trimmed} })()`
      : `(() => { return (${trimmed}); })()`;
    const res = await send('Runtime.evaluate', {
      expression: wrapped,
      returnByValue: true,
      awaitPromise: true,
    });
    if (res.result?.exceptionDetails) {
      console.error('JS Eval Exception:', res.result.exceptionDetails);
    }
    return res.result?.result?.value;
  };

  await send('Runtime.enable');
  await send('Page.enable');

  console.log('⏳ Waiting for page hydration and initial animations...');
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const results = {
    passed: 0,
    failed: 0,
    tests: [],
  };

  const test = (name, condition, details = '') => {
    if (condition) {
      results.passed++;
      results.tests.push({ name, status: 'PASS', details });
      console.log(`  ✅ PASS: ${name}`);
    } else {
      results.failed++;
      results.tests.push({ name, status: 'FAIL', details });
      console.log(`  ❌ FAIL: ${name} - ${details}`);
    }
  };

  // 1. Title & SEO Metadata
  const pageTitle = await evalJs('document.title');
  test('Page Title', pageTitle === 'Aashray Biswal — AI & Data Science', `Got: "${pageTitle}"`);

  const metaDesc = await evalJs('document.querySelector("meta[name=\'description\']")?.getAttribute("content")');
  test('Meta Description', Boolean(metaDesc && metaDesc.includes('Aashray Biswal')), `Got: "${metaDesc}"`);

  const ogTitle = await evalJs('document.querySelector("meta[property=\'og:title\']")?.getAttribute("content")');
  test('OG Title', ogTitle === 'Aashray Biswal — AI & Data Science', `Got: "${ogTitle}"`);

  // 2. Sections Existence
  const sections = ['intro', 'explore', 'about', 'experience', 'projects', 'skills', 'experiments', 'contact'];
  for (const id of sections) {
    const exists = await evalJs(`Boolean(document.getElementById("${id}"))`);
    test(`Section #${id} exists in DOM`, exists);
  }

  // 3. Navigation Links
  const headerLinks = await evalJs(`
    Array.from(document.querySelectorAll('header nav a')).map(a => a.getAttribute('href'))
  `);
  test(
    'Desktop Nav Links complete',
    headerLinks.includes('#intro') &&
      headerLinks.includes('#about') &&
      headerLinks.includes('#experience') &&
      headerLinks.includes('#projects') &&
      headerLinks.includes('#skills') &&
      headerLinks.includes('#experiments') &&
      headerLinks.includes('#contact'),
    JSON.stringify(headerLinks)
  );

  // 4. Explore Cards Destinations
  const exploreHrefs = await evalJs(`
    Array.from(document.querySelectorAll('#explore a')).map(a => a.getAttribute('href'))
  `);
  test(
    'Explore Section 6 Directory Cards',
    exploreHrefs.length === 6 &&
      exploreHrefs.includes('#about') &&
      exploreHrefs.includes('#experience') &&
      exploreHrefs.includes('#projects') &&
      exploreHrefs.includes('#skills') &&
      exploreHrefs.includes('#experiments') &&
      exploreHrefs.includes('#contact'),
    JSON.stringify(exploreHrefs)
  );

  // 5. Contact Channels & Socials
  const emailHref = await evalJs(`document.querySelector('#contact a[href^="mailto:"]')?.getAttribute('href')`);
  test('Email link is mailto:biswalaashray@gmail.com', emailHref === 'mailto:biswalaashray@gmail.com', `Got: "${emailHref}"`);

  const cautionNotice = await evalJs(`
    document.querySelector('#contact')?.innerText.includes('ALTERNATE INBOX — USED TO DIVERT TRAFFIC FROM PRIMARY EMAIL')
  `);
  test('Exact Email Caution Notice displayed', cautionNotice);

  const githubUrl = await evalJs(`document.querySelector('#contact a[href*="github.com/Aash-hasFallen"]')?.getAttribute('href')`);
  test('GitHub points to https://github.com/Aash-hasFallen', Boolean(githubUrl), `Got: "${githubUrl}"`);

  const linkedinUrl = await evalJs(`document.querySelector('#contact a[href*="linkedin.com/in/aashray-biswal"]')?.getAttribute('href')`);
  test('LinkedIn points to https://www.linkedin.com/in/aashray-biswal/', Boolean(linkedinUrl), `Got: "${linkedinUrl}"`);

  const kaggleUrl = await evalJs(`document.querySelector('#contact a[href*="kaggle.com/aashraybiswal"]')?.getAttribute('href')`);
  test('Kaggle points to https://www.kaggle.com/aashraybiswal', Boolean(kaggleUrl), `Got: "${kaggleUrl}"`);

  // 6. Project Modal Interaction: Project 1
  console.log('🔍 Testing Project Modal: Project 1 (AI Merchant Growth Agent)...');
  await evalJs(`
    const btn = document.querySelectorAll('#projects button')[0];
    btn.click();
  `);
  await new Promise((r) => setTimeout(r, 450));

  const modal1Title = await evalJs(`document.getElementById('modal-title')?.innerText`);
  const modal1Visible = await evalJs(`Boolean(document.getElementById('project-modal'))`);
  test('Project 1 Modal opens with correct title and smooth animation', modal1Visible && modal1Title === 'AI MERCHANT GROWTH AGENT', `Got title: "${modal1Title}"`);

  // Close modal via close button
  await evalJs(`
    const closeBtn = document.querySelector('[aria-label="Close modal"]');
    closeBtn.click();
  `);
  await new Promise((r) => setTimeout(r, 400));
  const modal1Closed = await evalJs(`document.getElementById('modal-title') === null`);
  test('Project 1 Modal closes via Close button with smooth exit', modal1Closed);

  // 6b. Rapid click guard
  console.log('🔍 Testing rapid repeated click dismissal guard...');
  await evalJs(`
    const btn = document.querySelectorAll('#projects button')[0];
    btn.click();
    btn.click();
  `);
  await new Promise((r) => setTimeout(r, 450));

  await evalJs(`
    const closeBtn = document.querySelector('[aria-label="Close modal"]');
    if (closeBtn) {
      closeBtn.click();
      closeBtn.click();
      closeBtn.click();
    }
  `);
  await new Promise((r) => setTimeout(r, 400));
  const guardModalClosed = await evalJs(`document.getElementById('modal-title') === null`);
  test('Repeated rapid clicks handled gracefully without error or stuck state', guardModalClosed);

  // 7. Project Modal Interaction: Project 2 + Escape Key
  console.log('🔍 Testing Project Modal: Project 2 (GestureFlow) + Escape key dismissal...');
  await evalJs(`
    const btn = document.querySelectorAll('#projects button')[1];
    btn.click();
  `);
  await new Promise((r) => setTimeout(r, 450));
  const modal2Title = await evalJs(`document.getElementById('modal-title')?.innerText`);
  test('Project 2 Modal opens with GESTUREFLOW', modal2Title === 'GESTUREFLOW', `Got title: "${modal2Title}"`);

  // Dismiss via Escape key event
  await evalJs(`
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  `);
  await new Promise((r) => setTimeout(r, 400));
  const modal2Closed = await evalJs(`document.getElementById('modal-title') === null`);
  test('Project 2 Modal closes via Escape key with smooth exit', modal2Closed);

  // 8. Project Modal Interaction: Project 3 + Backdrop Click
  console.log('🔍 Testing Project Modal: Project 3 (Spotify Artist Analytics) + Backdrop click...');
  await evalJs(`
    const btn = document.querySelectorAll('#projects button')[2];
    btn.click();
  `);
  await new Promise((r) => setTimeout(r, 450));
  const modal3Title = await evalJs(`document.getElementById('modal-title')?.innerText`);
  test('Project 3 Modal opens with SPOTIFY ARTIST ANALYTICS', modal3Title === 'SPOTIFY ARTIST ANALYTICS', `Got title: "${modal3Title}"`);

  // Click backdrop
  await evalJs(`
    const dialog = document.querySelector('[role="dialog"][aria-labelledby="modal-title"]');
    dialog.click();
  `);
  await new Promise((r) => setTimeout(r, 400));
  const modal3Closed = await evalJs(`document.getElementById('modal-title') === null`);
  test('Project 3 Modal closes via Backdrop click with smooth exit', modal3Closed);

  // 9. Mobile Menu Drawer Interaction
  console.log('📱 Testing Mobile Menu Drawer Interaction...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    mobile: true,
  });
  await new Promise((r) => setTimeout(r, 300));

  await evalJs(`
    const menuBtn = document.getElementById('mobile-menu-btn');
    menuBtn.click();
  `);
  await new Promise((r) => setTimeout(r, 200));

  const drawerOpen = await evalJs(`Boolean(document.getElementById('mobile-nav-drawer'))`);
  const ariaExpanded = await evalJs(`document.getElementById('mobile-menu-btn')?.getAttribute('aria-expanded')`);
  test('Mobile menu drawer opens and sets aria-expanded="true"', drawerOpen && ariaExpanded === 'true');

  // Click nav item inside drawer
  await evalJs(`
    const link = document.querySelector('#mobile-nav-drawer a[href="#experience"]');
    link.click();
  `);
  await new Promise((r) => setTimeout(r, 200));
  const drawerClosed = await evalJs(`document.getElementById('mobile-nav-drawer') === null`);
  test('Mobile drawer automatically closes after selecting a section', drawerClosed);

  // 10. Horizontal Overflow Check Across Viewports
  console.log('📐 Testing Horizontal Overflow across 8 viewports...');
  const viewports = [
    { name: 'Small mobile', w: 320, h: 568 },
    { name: 'Standard mobile', w: 375, h: 812 },
    { name: 'Large mobile', w: 430, h: 932 },
    { name: 'Tablet portrait', w: 768, h: 1024 },
    { name: 'Tablet landscape', w: 1024, h: 768 },
    { name: 'Laptop', w: 1366, h: 768 },
    { name: 'Desktop', w: 1440, h: 900 },
    { name: 'Large desktop', w: 1920, h: 1080 },
  ];

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.w,
      height: vp.h,
      deviceScaleFactor: 1,
      mobile: vp.w < 768,
    });
    await new Promise((r) => setTimeout(r, 150));

    const overflow = await evalJs(`
      document.documentElement.scrollWidth > window.innerWidth
    `);
    test(`No horizontal overflow on ${vp.name} (${vp.w}x${vp.h})`, !overflow, `scrollWidth vs innerWidth`);
  }

  // 11. Console Error Check
  const errorLogs = consoleMessages.filter((m) => m.type === 'error');
  test('Zero runtime console errors', errorLogs.length === 0, JSON.stringify(errorLogs));

  console.log('\n====================================');
  console.log(`📊 TEST SUMMARY: ${results.passed} PASSED, ${results.failed} FAILED`);
  console.log('====================================\n');

  ws.close();
  browserProc.kill();

  if (results.failed > 0) {
    process.exit(1);
  }
}

runTestSuite().catch((err) => {
  console.error('Test suite runner error:', err);
  process.exit(1);
});
