import React from "react";

export const TerminalWindow = ({ title = "samrat@portfolio — zsh", children, className = "" }) => {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-term-line bg-term-panel shadow-[0_8px_40px_rgba(0,0,0,0.4)] ${className}`}
    >
      <div className="flex items-center gap-[7px] border-b border-term-line bg-term-bar px-4 py-[11px]">
        <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
        <span className="ml-2.5 text-xs text-term-dim">{title}</span>
      </div>
      <div className="px-6 py-6">{children}</div>
    </div>
  );
};

export const Prompt = ({ command, id }) => {
  return (
    <div id={id} className="mb-3.5 mt-9 scroll-mt-6 text-sm">
      <span className="text-term-green">➜ </span>
      <span className="text-term-cyan">~</span>{" "}
      <span className="text-term-ink">{command}</span>
    </div>
  );
};
