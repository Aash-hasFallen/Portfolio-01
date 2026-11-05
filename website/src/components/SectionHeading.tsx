import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  meta?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  meta,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-wrap items-end justify-between gap-4 border-b border-[#242424] pb-4 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        <span className="bg-[#e60012] text-white px-2.5 py-1 font-label-sm text-[11px] font-bold uppercase font-mono shadow-[0_0_8px_rgba(230,0,18,0.5)] self-start">
          {badge}
        </span>
        <h2 className="font-headline-lg text-[32px] sm:text-[42px] lg:text-[48px] uppercase tracking-tight text-[#f1f0eb]">
          {title}
        </h2>
      </div>
      {meta && (
        <span className="font-label-sm text-[11px] text-[#bdbdbd] uppercase font-mono max-w-sm">
          {meta}
        </span>
      )}
    </div>
  );
};

