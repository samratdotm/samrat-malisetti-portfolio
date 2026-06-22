import React from "react";
import { motion } from "motion/react";
import { Prompt } from "./TerminalWindow";

const projects = [
  {
    name: "agent-inc",
    featured: true,
    meta: "YC × HUD RL hackathon · 2026",
    description: (
      <>
        An RL environment that teaches a model to{" "}
        <b className="font-medium text-term-ink">run a business</b> — read the
        brief, research, make a truthful priced offer, ship a deliverable —
        scored by a hybrid reward (70% deterministic + 30% LLM judge) that{" "}
        <b className="font-medium text-term-ink">
          only pays for honest, complete work
        </b>
        . RL-trained an open model (Qwen3.5-4B, on-policy GRPO){" "}
        <b className="font-medium text-term-ink">0.327 → 0.647</b> — nearly
        doubling and closing ~half the gap to a frontier model, on 24 scenarios
        it never trained on.
      </>
    ),
    tags: ["python", "hud", "grpo", "fastmcp", "qwen", "claude-api"],
    links: [
      { href: "https://agent-inc-three.vercel.app", label: "live demo ↗" },
      { href: "https://github.com/samratdotm/agent-inc", label: "source ↗" },
    ],
    media: {
      src: "/media/agent-inc-demo.gif",
      alt: "Agent Inc. RL training result — the open model's reward climbing from a 0.327 baseline to 0.647 after GRPO training, shown as a curve and a before/after level-up card",
    },
  },
  {
    name: "amparo-ai",
    meta: "YC hackathon · 2026",
    description: (
      <>
        Multilingual voice agent for health insurance. Call a phone number,
        speak any language →{" "}
        <b className="font-medium text-term-ink">
          24 parallel doc lookups at &lt;100ms
        </b>{" "}
        → cited 4-plan cost comparison in under 2 seconds. Exposed a
        &quot;cheap&quot; plan hiding{" "}
        <b className="font-medium text-term-ink">
          $25k of out-of-network costs
        </b>
        .
      </>
    ),
    tags: ["livekit", "python", "moss", "nextjs", "minimax-tts", "sip"],
    links: [{ href: "https://github.com/samratdotm/amparo-ai", label: "source ↗" }],
    media: {
      src: "/media/amparo-demo.gif",
      alt: "Amparo AI live panel showing parallel Moss lookups and the 4-plan cost comparison during a phone call",
    },
  },
  {
    name: "engram",
    private: true,
    meta: "Agentic AI Hackathon SF · 2026",
    description: (
      <>
        A shared &quot;account brain&quot; for sales teams, delivered over
        iMessage. Text a fact update →{" "}
        <b className="font-medium text-term-ink">
          contradictions auto-detected
        </b>{" "}
        against the team ledger → stale facts superseded with full v1→v2→v3
        lineage → any teammate gets a{" "}
        <b className="font-medium text-term-ink">source-attributed brief</b>{" "}
        on current truth before their next call.
      </>
    ),
    tags: ["typescript", "express", "rocketride", "butterbase", "xtrace", "imessage"],
    links: [{ href: "https://acme-demo.butterbase.dev", label: "live demo ↗" }],
    media: {
      src: "/media/engram-panel.png",
      alt: "Engram memory panel showing active facts with version lineage — budget superseded v1 through v6",
    },
  },
  {
    name: "specforge",
    meta: "Google I/O hackathon · 2026",
    description: (
      <>
        Speak an API into existence. Describe a backend in plain English — a
        Managed Gemini Agent{" "}
        <b className="font-medium text-term-ink">
          writes it and tests it in its own sandboxed VM until green
        </b>
        , then the control plane hot-reloads it behind a public URL. Keep
        talking (&quot;now add auth&quot;) and the service evolves across
        turns.
      </>
    ),
    tags: ["python", "fastapi", "gemini-managed-agents", "htmx", "ngrok"],
    links: [{ href: "https://github.com/samratdotm/specforge", label: "source ↗" }],
    media: {
      src: "/media/specforge-demo.gif",
      alt: "Specforge walkthrough — describing an API in plain English, the agent generating and testing it, then a live URL with curl commands and a follow-up iteration",
    },
  },
  {
    name: "platewise",
    private: true,
    meta: "Android · 2026",
    description: (
      <>
        AI meal planner built in a weekend, live as a sideloadable APK.
        Generates a personalized{" "}
        <b className="font-medium text-term-ink">
          7-day plan with zero recipe repeats
        </b>{" "}
        from your cuisines, diet, and pantry — then writes the week&apos;s
        grocery list for whatever you&apos;re missing.
      </>
    ),
    tags: ["react-native", "expo", "claude-api", "eas-build"],
    media: {
      src: "/media/platewise-demo.gif",
      alt: "Platewise onboarding — goal, meals, and pantry — then the generated 7-day meal plan with one-tap recipe swaps",
    },
  },
  {
    name: "mindwatch",
    meta: "in progress · 2026",
    description: (
      <>
        YouTube without the rabbit hole — a wrapper that keeps your
        personalized feed but strips the distraction machinery: Shorts,
        autoplay, and recommendation bait.
      </>
    ),
    tags: ["react", "youtube-api"],
    media: {
      src: "/media/mindwatch-demo.gif",
      alt: "Mindwatch onboarding — picking interests and feed rules — then the distraction-free personalized feed with focus stats",
    },
  },
  {
    name: "video-chat-app",
    meta: "real-time · 2025",
    description: (
      <>
        Peer-to-peer video chat built on WebRTC with Cloudflare Durable
        Objects handling signaling — serverless, low-latency, no media server.
      </>
    ),
    tags: ["webrtc", "cloudflare", "durable-objects", "react"],
    links: [
      { href: "https://github.com/malisettisamrat/video-chat-app", label: "source ↗" },
    ],
    media: {
      src: "/media/video-chat-architecture.jpeg",
      alt: "Architecture diagram — clients exchange media peer-to-peer over WebRTC while signaling flows over WebSocket through a Cloudflare Worker routed to a Durable Object",
    },
  },
  {
    name: "stock-market-dashboard",
    meta: "performance deep dive · 2025",
    description: (
      <>
        Stock dashboard that stays smooth at{" "}
        <b className="font-medium text-term-ink">10,000+ rows</b> — virtualized
        infinite scroll renders only visible rows (
        <b className="font-medium text-term-ink">90% fewer DOM nodes</b>,
        constant memory), deferred-value search eliminates UI lag, and
        react-query caching cuts redundant API calls ~60% and initial load
        40%.
      </>
    ),
    tags: ["react", "react-window", "react-query", "suspense", "usedeferredvalue"],
    links: [
      {
        href: "https://github.com/malisettisamrat/stock-market-dashboard",
        label: "source ↗",
      },
      {
        href: "https://www.loom.com/share/03aa7aad757448c3aea151066fce570e",
        label: "demo ↗",
      },
    ],
    media: {
      src: "/media/stock-dashboard-demo.gif",
      alt: "Stock dashboard scrolling smoothly through thousands of virtualized rows",
    },
  },
];

const ProjectCard = ({ project }) => {
  const primaryLink = project.links?.[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35 }}
      className="rounded-[10px] border border-term-line bg-term-panel px-5 py-4 transition-colors hover:border-term-green"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-1.5">
        <span className="font-bold text-white">
          {primaryLink ? (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-term-green"
            >
              {project.name}
            </a>
          ) : (
            project.name
          )}
          {project.featured && (
            <span className="ml-2 text-term-amber">★ featured</span>
          )}
          {project.private && (
            <span className="ml-2 text-xs font-normal text-term-faint">
              [private]
            </span>
          )}
        </span>
        <span className="text-xs text-term-dim">{project.meta}</span>
      </div>
      <p className="mt-1.5 text-[13.5px] text-term-dim">
        {project.description}
      </p>
      {project.media && (
        <a
          href={project.media.src}
          target="_blank"
          rel="noopener noreferrer"
          title="Open full size"
          className="mt-3 block w-fit"
        >
          <img
            src={project.media.src}
            alt={project.media.alt}
            loading="lazy"
            className="max-h-44 w-auto max-w-full rounded-md border border-term-line transition-opacity hover:opacity-90"
          />
        </a>
      )}
      <div className="mt-2.5 flex flex-wrap items-baseline justify-between gap-1.5 text-xs">
        <span className="text-term-cyan">
          {project.tags.map((tag) => `[${tag}]`).join(" ")}
        </span>
        {project.links && (
          <span className="flex gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-term-green hover:underline"
              >
                {link.label}
              </a>
            ))}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section>
      <Prompt id="projects" command="ls projects/ --sort=recent" />
      <div className="flex flex-col gap-3.5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};
