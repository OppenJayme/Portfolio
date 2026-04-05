"use client";

import Link from "next/link";
import { ArrowLeft, Github, CheckCircle2, Database, Wrench, TrendingUp, Lightbulb, Zap } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  duration: string;
  problem: string;
  objective: string;
  dataset: {
    source: string;
    size: string;
    period: string;
    format: string;
  };
  tools: string[];
  process: { step: string; description: string }[];
  insights: string[];
  impact: string;
  githubUrl: string;
  image: string;
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-72 lg:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Breadcrumb + Back */}
        <div className="flex items-center gap-3 py-6 text-sm text-muted-foreground">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>
          <span>/</span>
          <span>{project.category}</span>
          <span>/</span>
          <span className="text-foreground truncate">{project.title}</span>
        </div>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-3 py-1 rounded-full">
              {project.year}
            </span>
            <span className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-3 py-1 rounded-full">
              {project.duration}
            </span>
          </div>
          <h1 className="font-serif-display text-3xl lg:text-5xl text-foreground leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Problem / Objective */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card rounded-2xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-destructive/10 flex items-center justify-center">
                <TrendingUp size={14} className="text-destructive" />
              </div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-wide">The Problem</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>
          <div className="bg-card rounded-2xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap size={14} className="text-primary" />
              </div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-wide">The Objective</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.objective}</p>
          </div>
        </div>

        {/* Dataset Info */}
        <div className="bg-card rounded-2xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 mb-12">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Database size={14} className="text-blue-500" />
            </div>
            <h2 className="text-sm font-bold text-foreground uppercase tracking-wide">Dataset</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(project.dataset).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {key}
                </div>
                <div className="text-sm text-foreground font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <Wrench size={14} className="text-amber-500" />
            </div>
            <h2 className="text-sm font-bold text-foreground uppercase tracking-wide">Tools & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-sm font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-foreground mb-6">Process Timeline</h2>
          <div className="space-y-0">
            {project.process.map((step, i) => (
              <div key={step.step} className="relative pl-10 pb-8 last:pb-0">
                {/* Line */}
                {i < project.process.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
                )}
                {/* Step number */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="bg-card rounded-xl border border-border p-5">
                  <h3 className="text-sm font-bold text-foreground mb-2">{step.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard placeholder */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-foreground mb-5">Dashboard Preview</h2>
          <div className="bg-card rounded-2xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-secondary to-background flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <TrendingUp size={24} className="text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Dashboard Screenshot</p>
                <p className="text-xs text-muted-foreground">Interactive preview available on GitHub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Lightbulb size={14} className="text-green-600" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Key Insights</h2>
          </div>
          <div className="space-y-3">
            {project.insights.map((insight, i) => (
              <div
                key={i}
                className="flex gap-3 bg-card rounded-xl border border-border p-4"
              >
                <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap size={14} className="text-primary" />
            </div>
            <h2 className="text-sm font-bold text-foreground uppercase tracking-wide">Business Impact</h2>
          </div>
          <p className="text-base text-foreground leading-relaxed font-medium">{project.impact}</p>
        </div>

        {/* GitHub CTA */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border px-5 py-2.5 rounded-xl hover:bg-secondary transition-all duration-200"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
          >
            <Github size={16} />
            View on GitHub
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
