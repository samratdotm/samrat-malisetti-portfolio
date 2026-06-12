import React from "react";
import { motion } from "motion/react";
import { TerminalWindow } from "./TerminalWindow";

const navLinks = [
  { label: "./projects", href: "#projects" },
  { label: "./experience", href: "#experience" },
  { label: "./skills", href: "#skills" },
  { label: "./contact", href: "#contact" },
];

export const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <TerminalWindow>
        <div className="text-sm">
          <span className="text-term-green">➜ </span>
          <span className="text-term-cyan">~</span>{" "}
          <span className="text-term-ink">whoami</span>
        </div>
        <h1 className="mb-1.5 mt-3.5 text-2xl font-bold text-white sm:text-3xl">
          Samrat Malisetti
          <span className="ml-1 inline-block h-7 w-[13px] animate-blink bg-term-green align-[-3px]" />
        </h1>
        <p className="text-term-amber">
          Software Engineer @ ADP · Agentic AI &amp; LLM Systems · Voice
          Agents · Full-Stack
        </p>
        <p className="mt-2.5 max-w-xl text-term-dim">
          <b className="font-medium text-term-ink">
            5+ years of experience
          </b>{" "}
          building systems that ship — production AI agents serving 41M+
          employees at ADP, plus voice agents, self-building APIs, and mobile
          apps at hackathons on weekends. M.S. Computer Science.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg border border-term-line px-4 py-1.5 text-[13px] text-term-cyan transition-colors hover:border-term-cyan hover:bg-term-cyan/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-term-green bg-term-green px-4 py-1.5 text-[13px] font-bold text-term-bg transition-opacity hover:opacity-85"
          >
            resume.pdf ↓
          </a>
        </div>
      </TerminalWindow>
    </motion.div>
  );
};
