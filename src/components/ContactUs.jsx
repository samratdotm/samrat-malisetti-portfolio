import React from "react";
import { motion } from "motion/react";
import { TerminalWindow, Prompt } from "./TerminalWindow";

const contacts = [
  {
    key: "email",
    value: "samratmalisetti@gmail.com",
    href: "mailto:samratmalisetti@gmail.com",
  },
  {
    key: "github",
    value: "github.com/samratdotm",
    href: "https://github.com/samratdotm",
  },
  {
    key: "linkedin",
    value: "linkedin.com/in/samrat-malisetti",
    href: "https://www.linkedin.com/in/samrat-malisetti/",
  },
  {
    key: "location",
    value: "California, United States",
  },
];

const KEY_PAD = Math.max(...contacts.map((contact) => contact.key.length)) + 1;

export const ContactUs = () => {
  return (
    <section className="pb-20">
      <Prompt id="contact" command="contact --all" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.35 }}
      >
        <TerminalWindow>
          <div className="text-[13.5px] leading-7">
            {contacts.map((contact) => (
              <div key={contact.key} className="whitespace-pre-wrap">
                <span className="text-term-pink">
                  {`${contact.key}:`.padEnd(KEY_PAD + 1)}
                </span>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-term-green hover:underline"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-term-ink">{contact.value}</span>
                )}
              </div>
            ))}
            <div className="whitespace-pre-wrap">
              <span className="text-term-pink">{"status:".padEnd(KEY_PAD + 1)}</span>
              <span className="text-term-green">
                ● Open to new opportunities — Agentic AI Development
              </span>
            </div>
            <div className="mt-4 text-term-faint">
              # Let&apos;s build something together.
            </div>
          </div>
        </TerminalWindow>
      </motion.div>
    </section>
  );
};
