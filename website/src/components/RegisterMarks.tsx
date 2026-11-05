import React from 'react';

export const RegisterMarks: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 p-2 sm:p-3 select-none">
      <div className="w-full h-full border border-[#242424]/40 relative">
        <span className="absolute -top-2 -left-1.5 font-label-sm text-[11px] text-[#e60012] leading-none">
          +
        </span>
        <span className="absolute -top-2 -right-1.5 font-label-sm text-[11px] text-[#e60012] leading-none">
          +
        </span>
        <span className="absolute -bottom-2 -left-1.5 font-label-sm text-[11px] text-[#e60012] leading-none">
          +
        </span>
        <span className="absolute -bottom-2 -right-1.5 font-label-sm text-[11px] text-[#e60012] leading-none">
          +
        </span>
      </div>
    </div>
  );
};

