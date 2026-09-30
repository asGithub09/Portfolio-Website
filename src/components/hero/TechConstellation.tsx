"use client";

import { motion } from "framer-motion";

type TechNode = {
  name: string;
  short: string;
  color: string;
  position: string;
  delay: number;
  duration: number;
};

const techNodes: TechNode[] = [
  {
    name: "React",
    short: "⚛",
    color: "#61DAFB",
    position: "left-[4%] top-[18%]",
    delay: 0,
    duration: 6,
  },
  {
    name: "Next.js",
    short: "N",
    color: "#F3EFE6",
    position: "right-[5%] top-[13%]",
    delay: 0.8,
    duration: 7,
  },
  {
    name: "TypeScript",
    short: "TS",
    color: "#5B9BF3",
    position: "left-[1%] top-[54%]",
    delay: 1.4,
    duration: 7.5,
  },
  {
    name: "Node.js",
    short: "JS",
    color: "#8CC84B",
    position: "right-[1%] top-[48%]",
    delay: 0.4,
    duration: 6.5,
  },
  {
    name: "PostgreSQL",
    short: "PG",
    color: "#6FA8DC",
    position: "left-[11%] bottom-[15%]",
    delay: 1.8,
    duration: 8,
  },
  {
    name: "API",
    short: "</>",
    color: "#D6B77A",
    position: "right-[11%] bottom-[13%]",
    delay: 1,
    duration: 7,
  },
];

function TechMark({ node }: { node: TechNode }) {
  if (node.name === "React") {
    return (
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="5"
          transform="rotate(60 16 16)"
          stroke={node.color}
          strokeWidth="1.5"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="5"
          transform="rotate(-60 16 16)"
          stroke={node.color}
          strokeWidth="1.5"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="5"
          stroke={node.color}
          strokeWidth="1.5"
        />
        <circle cx="16" cy="16" r="2.5" fill={node.color} />
      </svg>
    );
  }

  if (node.name === "Next.js") {
    return (
      <span
        className="font-sans text-2xl font-semibold tracking-[-0.08em]"
        style={{ color: node.color }}
      >
        N
      </span>
    );
  }

  if (node.name === "TypeScript") {
    return (
      <span
        className="font-mono text-[11px] font-bold tracking-[-0.08em]"
        style={{ color: node.color }}
      >
        TS
      </span>
    );
  }

  if (node.name === "Node.js") {
    return (
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 3.5 27 9.8v12.4L16 28.5 5 22.2V9.8L16 3.5Z"
          stroke={node.color}
          strokeWidth="1.5"
        />
        <path
          d="M12 19.5c1.4.8 3 .9 4.3.1 1.2-.7 1.3-2.1.1-2.8l-2.7-1.5c-1.2-.7-1.1-2 .1-2.7 1.2-.7 2.8-.6 4.2.2"
          stroke={node.color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (node.name === "PostgreSQL") {
    return (
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 8.5c0-2.3 3.6-4 8-4s8 1.7 8 4v8.2c0 2.4-3.6 4.1-8 4.1s-8-1.7-8-4.1V8.5Z"
          stroke={node.color}
          strokeWidth="1.5"
        />
        <path
          d="M8 8.5c0 2.3 3.6 4 8 4s8-1.7 8-4"
          stroke={node.color}
          strokeWidth="1.5"
        />
        <path
          d="M11 21.5c0 2.4 1.8 4.1 4.2 4.1 2.1 0 3.8-1.3 4.2-3.2"
          stroke={node.color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <span
      className="font-mono text-[10px] font-medium tracking-[-0.08em]"
      style={{ color: node.color }}
    >
      &lt;/&gt;
    </span>
  );
}

export default function TechConstellation() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[15] hidden lg:block"
      aria-hidden="true"
    >
      {techNodes.map((node) => (
        <motion.div
          key={node.name}
          className={`absolute ${node.position}`}
          initial={{ opacity: 0, scale: 0.75, y: 12 }}
          animate={{
            opacity: [0.45, 0.9, 0.45],
            scale: [0.96, 1.04, 0.96],
            y: [0, -10, 0],
          }}
          transition={{
            duration: node.duration,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{ rotateY: [0, 8, 0, -8, 0] }}
            transition={{
              duration: node.duration * 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-[58px] min-w-[58px] items-center justify-center rounded-2xl border border-white/10 bg-[#0b0b0d]/70 px-3 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-md"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
              style={{ background: node.color }}
            />

            <div className="relative flex items-center justify-center">
              <TechMark node={node} />
            </div>

            <motion.span
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{
                duration: 2.5,
                delay: node.delay,
                repeat: Infinity,
              }}
              className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full"
              style={{
                background: node.color,
                boxShadow: `0 0 12px ${node.color}`,
              }}
            />
          </motion.div>

          <div
            className="mt-2 text-center font-mono text-[7px] uppercase tracking-[0.18em]"
            style={{ color: `${node.color}99` }}
          >
            {node.name}
          </div>
        </motion.div>
      ))}

      {/* Faint technical connection lines */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-[5%] h-[90%] w-[90%] opacity-20"
      >
        <defs>
          <linearGradient id="techLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D6B77A" stopOpacity="0" />
            <stop offset="50%" stopColor="#7C9CFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E28A78" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M70 150 C170 100 230 160 300 300 C370 440 450 470 530 390"
          fill="none"
          stroke="url(#techLine)"
          strokeWidth="0.8"
          strokeDasharray="3 12"
        />

        <path
          d="M65 380 C150 430 220 390 300 300 C380 210 450 170 535 145"
          fill="none"
          stroke="url(#techLine)"
          strokeWidth="0.8"
          strokeDasharray="2 14"
        />
      </svg>
    </div>
  );
}
