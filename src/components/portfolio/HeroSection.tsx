"use client";

import { ArrowDown, Download } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background accent glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for opportunities
              </span>
              <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight">
                Turning data
                <br />
                <span className="text-primary">into insight</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mt-4">
                Hi, I'm{" "}
                <span className="text-foreground font-semibold">
                  Ivan Jayme
                </span>{" "}
                — a data analyst passionate about transforming complex datasets
                into clear, actionable stories that drive business decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium text-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowDown size={15} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-xl font-medium text-sm hover:bg-secondary transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-2">
              {[
                { value: "3+", label: "Projects Completed" },
                { value: "5+", label: "Tools Using" },
                { value: "2+", label: "Years Learning" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Abstract data graphic */}
          <div className="hidden lg:flex items-center justify-center">
            <AbstractDataGraphic />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-current flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
      </button>
    </section>
  );
}

function AbstractDataGraphic() {
  const bars = [65, 80, 45, 90, 70, 55, 85, 60, 75, 50, 88, 40];

  return (
    <div className="relative w-[420px] h-[420px]">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-border/40" />
      <div className="absolute inset-8 rounded-full border border-border/30" />

      {/* Central card */}
      <div className="absolute inset-16 rounded-2xl bg-card border border-border shadow-lg flex flex-col items-center justify-center gap-3 p-4">
        {/* Mini bar chart */}
        <div className="w-full flex items-end justify-center gap-1 h-20">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-primary/80"
              style={{
                height: `${h}%`,
                opacity: 0.4 + (i / bars.length) * 0.6,
              }}
            />
          ))}
        </div>
        <div className="text-center">
          <div className="text-xs text-muted-foreground">Q4 Sales Analysis</div>
          <div className="text-lg font-bold text-primary">+23.4%</div>
          <div className="text-xs text-muted-foreground">Revenue Growth</div>
        </div>
      </div>

      {/* Floating nodes */}
      {[
        { top: "8%", left: "50%", label: "Python" },
        { top: "50%", left: "90%", label: "SQL" },
        { top: "85%", left: "60%", label: "Tableau" },
        { top: "75%", left: "10%", label: "Excel" },
        { top: "25%", left: "5%", label: "Power BI" },
      ].map((node, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: node.top, left: node.left }}
        >
          <div className="bg-card border border-border rounded-lg px-2.5 py-1 text-xs font-medium text-foreground shadow-md whitespace-nowrap">
            {node.label}
          </div>
        </div>
      ))}

      {/* Connection lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <line
          x1="50%"
          y1="8%"
          x2="50%"
          y2="38%"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="text-primary"
        />
        <line
          x1="90%"
          y1="50%"
          x2="62%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="text-primary"
        />
        <line
          x1="10%"
          y1="25%"
          x2="38%"
          y2="38%"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="text-primary"
        />
      </svg>
    </div>
  );
}
