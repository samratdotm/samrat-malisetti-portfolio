import React from "react";
import { motion } from "motion/react";
import { Prompt } from "./TerminalWindow";

const skillGroups = [
  {
    label: "ai-and-agents/",
    featured: true,
    skills: [
      "LLM Agents (Strands SDK)",
      "Multi-Agent Orchestration",
      "RL Environments (HUD)",
      "Reinforcement Fine-Tuning (GRPO/RFT)",
      "Open-Model Training (Qwen · Tinker)",
      "AWS Bedrock · AgentCore Memory",
      "Claude API",
      "Azure OpenAI",
      "Gemini Managed Agents",
      "Voice Agents (LiveKit · STT/TTS)",
      "RAG & Hybrid Retrieval",
      "Eval Frameworks",
      "LLM-as-Judge Evals",
      "LLM Observability (Langfuse)",
      "HITL Guardrails",
      "Prompt Caching",
      "MCP / FastMCP",
    ],
  },
  {
    label: "languages/",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    label: "frontend-and-mobile/",
    skills: ["React", "Next.js", "React Native", "Expo", "TailwindCSS"],
  },
  {
    label: "backend/",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "FastAPI",
      "GraphQL",
      "WebRTC",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "cloud-and-devops/",
    skills: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "CI/CD (Concourse)"],
  },
];

export const Technologies = () => {
  return (
    <section>
      <Prompt id="skills" command="tree skills/" />
      <div className="grid gap-3.5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className={`rounded-[10px] border bg-term-panel px-5 py-4 ${
              group.featured
                ? "border-term-green/40 sm:col-span-2"
                : "border-term-line"
            }`}
          >
            <div
              className={`mb-2.5 text-[13px] font-bold ${
                group.featured ? "text-term-green" : "text-term-pink"
              }`}
            >
              {group.label}
              {group.featured && (
                <span className="ml-2 font-normal text-term-faint">
                  # what I do best
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-md border px-2.5 py-1 text-xs ${
                    group.featured
                      ? "border-term-green/30 bg-term-bg text-term-ink"
                      : "border-term-line bg-term-bg text-term-ink"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
