"use client";

import { useId } from "react";
import { Laptop, Code2, Check } from "lucide-react";

type Variant = "web" | "code";

const palette = {
  web: { eye: "#38BDF8", accent: "#1D5BD8", glow: "rgba(56,189,248,0.55)" },
  code: { eye: "#FCD34D", accent: "#F59E0B", glow: "rgba(252,211,77,0.5)" },
};

/** Keyframes shared by all robots (rendered once). */
export const RobotStyles = () => (
  <style>{`
    @keyframes pl-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
    @keyframes pl-shadow { 0%,100% { transform: scaleX(1); opacity:.45 } 50% { transform: scaleX(.75); opacity:.25 } }
    @keyframes pl-wave { 0%,100% { transform: rotate(18deg) } 50% { transform: rotate(-38deg) } }
    @keyframes pl-tap { 0%,100% { transform: rotate(0deg) } 50% { transform: rotate(-10deg) } }
    @keyframes pl-blink { 0%,90%,100% { transform: scaleY(1) } 94% { transform: scaleY(.1) } }
    @keyframes pl-flame { 0%,100% { transform: scaleY(1); opacity:.95 } 50% { transform: scaleY(.6); opacity:.6 } }
    @keyframes pl-pulse { 0%,100% { opacity:1 } 50% { opacity:.25 } }
    @keyframes pl-bar { 0%,100% { transform: scaleY(.35) } 50% { transform: scaleY(1) } }
    @keyframes pl-type { 0% { width:0 } 45%,85% { width:var(--w) } 100% { width:0 } }
    @keyframes pl-holo { 0%,100% { transform: translateY(0) rotate(-2deg) } 50% { transform: translateY(-6px) rotate(1deg) } }
    .pl-float { animation: pl-float 4.2s ease-in-out infinite }
    .pl-shadow { animation: pl-shadow 4.2s ease-in-out infinite; transform-origin:center; transform-box:fill-box }
    .pl-wave { animation: pl-wave 1.6s ease-in-out infinite; transform-origin: 62px 122px; transform-box: view-box }
    .pl-tap { animation: pl-tap .9s ease-in-out infinite; transform-origin: 138px 122px; transform-box: view-box }
    .pl-blink { animation: pl-blink 4s infinite; transform-origin:center; transform-box:fill-box }
    .pl-flame { animation: pl-flame .35s ease-in-out infinite; transform-origin: top; transform-box: fill-box }
    .pl-pulse { animation: pl-pulse 1.4s ease-in-out infinite }
    .pl-bar { animation: pl-bar 1.1s ease-in-out infinite; transform-origin: bottom; transform-box: fill-box }
    .pl-type { animation: pl-type 4.5s steps(18) infinite; overflow:hidden; white-space:nowrap }
    .pl-holo { animation: pl-holo 5s ease-in-out infinite }
    @media (prefers-reduced-motion: reduce) {
      .pl-float,.pl-shadow,.pl-wave,.pl-tap,.pl-blink,.pl-flame,.pl-pulse,.pl-bar,.pl-type,.pl-holo { animation: none !important }
      .pl-type { width: var(--w) }
    }
  `}</style>
);

const RobotSvg = ({ variant, delay = 0 }: { variant: Variant; delay?: number }) => {
  const c = palette[variant];
  const id = `pl-${variant}-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const d = { animationDelay: `${delay}s` };

  return (
    <svg viewBox="0 0 200 240" className="w-full h-auto overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-shell`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#C9D6EE" />
        </linearGradient>
        <linearGradient id={`${id}-flame`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.eye} />
          <stop offset="100%" stopColor={c.eye} stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0%" stopColor={c.glow} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse className="pl-shadow" style={d} cx="100" cy="230" rx="38" ry="6" fill="#000" />

      <g className="pl-float" style={d}>
        {/* Aura */}
        <circle cx="100" cy="110" r="95" fill={`url(#${id}-glow)`} opacity="0.35" />

        {/* Thruster flame */}
        <path className="pl-flame" style={d} d="M88 176 Q100 214 112 176 Z" fill={`url(#${id}-flame)`} />

        {/* Antenna */}
        <line x1="100" y1="30" x2="100" y2="14" stroke="#C9D6EE" strokeWidth="4" strokeLinecap="round" />
        <circle className="pl-pulse" style={d} cx="100" cy="11" r="6" fill={c.eye} />

        {/* Outer arm (waving) */}
        <g className="pl-wave" style={d}>
          <rect x="30" y="115" width="36" height="14" rx="7" fill="#EEF3FC" />
          <circle cx="28" cy="122" r="10" fill={c.accent} />
        </g>

        {/* Inner arm (typing / tapping) */}
        <g className="pl-tap" style={d}>
          <rect x="134" y="115" width="34" height="14" rx="7" fill="#EEF3FC" />
          <circle cx="170" cy="122" r="10" fill={c.accent} />
        </g>

        {/* Ear pods */}
        <rect x="45" y="50" width="14" height="28" rx="7" fill={c.accent} />
        <rect x="141" y="50" width="14" height="28" rx="7" fill={c.accent} />

        {/* Head */}
        <rect x="54" y="28" width="92" height="70" rx="26" fill="#EEF3FC" />
        <rect x="65" y="42" width="70" height="42" rx="17" fill="#0A142D" />
        <g className="pl-blink" style={d}>
          <ellipse cx="86" cy="61" rx="6.5" ry="8" fill={c.eye} />
          <ellipse cx="114" cy="61" rx="6.5" ry="8" fill={c.eye} />
        </g>
        <path d="M91 73 Q100 79 109 73" stroke={c.eye} strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Neck & body */}
        <rect x="90" y="96" width="20" height="10" rx="3" fill="#94A3B8" />
        <rect x="62" y="104" width="76" height="72" rx="24" fill="#EEF3FC" />

        {/* Chest screen */}
        <rect x="76" y="118" width="48" height="32" rx="9" fill="#0F1E42" />
        {variant === "web" ? (
          <>
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                className="pl-bar"
                style={{ animationDelay: `${delay + i * 0.15}s` }}
                x={84 + i * 9}
                y="126"
                width="5"
                height="17"
                rx="2"
                fill={i % 2 ? "#38BDF8" : "#60A5FA"}
              />
            ))}
          </>
        ) : (
          <text
            x="100"
            y="140"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontWeight="800"
            fontSize="15"
            fill={c.eye}
          >
            {"</>"}
          </text>
        )}
        <circle className="pl-pulse" style={d} cx="100" cy="162" r="3.5" fill="#10B981" />
      </g>
    </svg>
  );
};

/* ---------- Floating holographic cards ---------- */

const WebHolo = () => (
  <div className="w-[150px] rounded-xl bg-[#0A142D]/90 border border-sky-400/40 shadow-[0_0_25px_rgba(56,189,248,0.25)] backdrop-blur p-2">
    <div className="flex gap-1 mb-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
      <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
    </div>
    <div className="h-6 rounded-md bg-gradient-to-r from-[#1D5BD8] to-sky-400 mb-1.5" />
    <div className="grid grid-cols-3 gap-1">
      <div className="h-5 rounded bg-white/15" />
      <div className="h-5 rounded bg-white/15" />
      <div className="h-5 rounded bg-white/15" />
    </div>
    <div className="mt-1.5 flex items-center justify-between">
      <span className="text-[8px] font-bold text-sky-300">UI Responsif</span>
      <span className="w-6 h-2.5 rounded-full bg-emerald-400/80" />
    </div>
  </div>
);

const CodeHolo = () => (
  <div className="w-[150px] rounded-xl bg-[#0A142D]/90 border border-amber-300/40 shadow-[0_0_25px_rgba(252,211,77,0.2)] backdrop-blur p-2 font-mono text-[8.5px] leading-[1.55]">
    <div className="text-slate-400">$ run tugas.py</div>
    <div className="pl-type text-sky-300" style={{ ["--w" as string]: "100%" }}>
      def solve(n):
    </div>
    <div className="pl-type text-slate-200 pl-2" style={{ ["--w" as string]: "100%", animationDelay: "0.6s" }}>
      return n * 2
    </div>
    <div className="flex items-center gap-1 text-emerald-400 font-bold"><Check className="w-2.5 h-2.5 shrink-0" /><span>12/12 test passed</span></div>
  </div>
);

/* ---------- Public figure ---------- */

interface RobotFigureProps {
  variant: Variant;
  compact?: boolean;
  delay?: number;
}

export const RobotFigure = ({ variant, compact = false, delay = 0 }: RobotFigureProps) => {
  const isWeb = variant === "web";
  const Icon = isWeb ? Laptop : Code2;

  return (
    <div className={`relative flex flex-col items-center ${compact ? "w-24" : "w-[170px]"}`}>
      {/* Label chip */}
      <div
        className={`pl-holo mb-1 inline-flex items-center gap-1.5 rounded-full border font-extrabold whitespace-nowrap shadow-lg ${
          compact ? "px-2 py-0.5 text-[9px]" : "px-3 py-1 text-[11px]"
        } ${
          isWeb
            ? "bg-[#1D5BD8] border-sky-300/50 text-white shadow-blue-600/40"
            : "bg-amber-400 border-amber-200 text-slate-950 shadow-amber-500/30"
        }`}
        style={{ animationDelay: `${delay}s` }}
      >
        <Icon className={compact ? "w-3 h-3" : "w-3.5 h-3.5"} />
        {isWeb ? "Website & Aplikasi" : "Jasa Tugas Coding"}
      </div>

      <RobotSvg variant={variant} delay={delay} />

      {!compact && (
        <div className="pl-holo -mt-3" style={{ animationDelay: `${delay + 0.8}s` }}>
          {isWeb ? <WebHolo /> : <CodeHolo />}
        </div>
      )}
    </div>
  );
};
