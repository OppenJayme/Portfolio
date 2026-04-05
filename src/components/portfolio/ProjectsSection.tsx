"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const projects = [
  {
    slug: "<project-slug>",
    title: "<Project Title>",
    summary:
      "<1–2 sentence impact-focused description (include numbers if possible)>",
    tools: ["<Tool 1>", "<Tool 2>", "<Tool 3>", "<Tool 4>"],
    category: "<Category (e.g., Data Visualization / Data Cleaning / ML)>",
    year: "<Year>",
    image: "<Image URL or placeholder>",
  },
  {
    slug: "<project-slug>",
    title: "<Project Title>",
    summary:
      "<1–2 sentence impact-focused description (include numbers if possible)>",
    tools: ["<Tool 1>", "<Tool 2>", "<Tool 3>", "<Tool 4>"],
    category: "<Category (e.g., Data Visualization / Data Cleaning / ML)>",
    year: "<Year>",
    image: "<Image URL or placeholder>",
  },
  {
    slug: "<project-slug>",
    title: "<Project Title>",
    summary:
      "<1–2 sentence impact-focused description (include numbers if possible)>",
    tools: ["<Tool 1>", "<Tool 2>", "<Tool 3>", "<Tool 4>"],
    category: "<Category (e.g., Data Visualization / Data Cleaning / ML)>",
    year: "<Year>",
    image: "<Image URL or placeholder>",
  },
  {
    slug: "<project-slug>",
    title: "<Project Title>",
    summary:
      "<1–2 sentence impact-focused description (include numbers if possible)>",
    tools: ["<Tool 1>", "<Tool 2>", "<Tool 3>", "<Tool 4>"],
    category: "<Category (e.g., Data Visualization / Data Cleaning / ML)>",
    year: "<Year>",
    image: "<Image URL or placeholder>",
  },
];

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "visible" : ""} group bg-card rounded-2xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium text-white bg-primary/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-xs font-medium text-white/80 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-lg font-bold text-foreground leading-snug mb-2.5 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Tool badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border border-border px-4 py-2.5 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200"
        >
          View Case Study
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`fade-in-up ${headerVisible ? "visible" : ""} mb-14`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Projects
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Featured Work
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl">
                Real-world projects where I turned raw data into clear,
                actionable insights — each with measurable business outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
