import React from "react";
import { motion } from "motion/react";
import { TerminalWindow, Prompt } from "./TerminalWindow";

const formatDuration = (totalMonths) => {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
};

const monthsSince = (year, month) => {
  const now = new Date();
  return (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month) + 1;
};

const experiences = [
  {
    year: "2025 — now",
    duration: formatDuration(monthsSince(2025, 5)), // ADP started May 2025
    role: "Software Engineer",
    company: "ADP",
    highlights:
      "Production AI agents on ADP Assist, serving 41M+ employees · Strands SDK agent architecture · HITL guardrails + eval framework · TTFT cost −75% via prefix caching · deploys 80min → 12min",
    tags: [
      "agentic-ai",
      "typescript",
      "strands-sdk",
      "aws-bedrock",
      "azure-openai",
      "langfuse",
      "kubernetes",
    ],
  },
  {
    year: "2024 — 2025",
    duration: "9 mos",
    role: "Full Stack Engineer (Contract)",
    company: "GorgeousTV",
    highlights:
      "GCP/AWS → Azure migration · Kubernetes + Docker deployments · Prometheus + Grafana observability · cross-cloud IAM",
    tags: ["gcp", "azure", "aws", "kubernetes", "docker", "prometheus", "grafana"],
  },
  {
    year: "2022 — 2024",
    role: "M.S. Computer Science",
    company: "CSU Long Beach",
    highlights:
      "Graduate study + open-source contributions — SuperMemory · Polar · TensorZero",
    tags: ["react", "nextjs", "typescript", "open-source"],
  },
  {
    year: "2021 — 2022",
    duration: "1 yr 4 mos",
    role: "Software Engineer",
    company: "ZeMoSo Technologies",
    highlights:
      "Field Squared field-service app · offline request queue + sync · GraphQL middleware latency −25%",
    tags: ["react-native", "typescript", "graphql", "realmdb", "jest", "aws"],
  },
  {
    year: "2019 — 2021",
    duration: "2 yrs 2 mos",
    role: "Software Engineer",
    company: "KeeStep",
    highlights:
      "College management platform · NestJS REST APIs + RBAC · real-time WebSocket security",
    tags: ["react", "nestjs", "express", "mongodb", "passportjs", "websockets"],
  },
];

export const Experience = () => {
  return (
    <section>
      <Prompt id="experience" command="cat experience.log" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.35 }}
      >
        <TerminalWindow>
          <div className="mb-3 text-[13px]">
            <span className="text-term-faint"># total: </span>
            <span className="font-bold text-term-green">
              5+ years of engineering experience
            </span>
            <span className="text-term-faint">
              {" "}
              — AI agents · full-stack · cloud
            </span>
          </div>
          <div className="-my-2 divide-y divide-term-line text-[13px]">
            {experiences.map((experience) => (
              <div
                key={experience.year}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-4"
              >
                <span className="w-[110px] shrink-0 text-term-dim">
                  <span className="whitespace-nowrap">{experience.year}</span>
                  {experience.duration && (
                    <span className="block whitespace-nowrap text-xs text-term-faint">
                      {experience.duration}
                    </span>
                  )}
                </span>
                <div>
                  <span className="font-medium text-white">
                    {experience.role}
                  </span>
                  {experience.company && (
                    <span className="text-term-amber">
                      {" "}
                      @ {experience.company}
                    </span>
                  )}
                  <div className="text-term-dim">{experience.highlights}</div>
                  {experience.tags && (
                    <div className="mt-1.5 text-xs text-term-cyan">
                      {experience.tags.map((tag) => `[${tag}]`).join(" ")}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </motion.div>
    </section>
  );
};
