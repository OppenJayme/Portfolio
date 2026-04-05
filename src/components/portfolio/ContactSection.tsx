"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:jaymekyerivan@gmail.com",
    display: "jaymekyerivan@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kyer-ivan-jayme-a41286318/",
    display: "linkedin.com/in/IvanJayme",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/OppenJayme",
    display: "github.com/OppenJayme",
  },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="max-w-2xl mx-auto text-center">
            {/* Section label */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-px bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Contact
              </span>
              <div className="w-8 h-px bg-primary" />
            </div>

            <h2 className="font-serif-display text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Let's build something
              <br />
              <span className="text-primary">meaningful together</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              I'm actively seeking internships and entry-level data analyst
              roles. Whether you have a project, an opportunity, or just want to
              talk data — I'd love to connect.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-12">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to internships & entry-level data analyst roles
            </div>

            {/* Contact links */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contacts.map(({ icon: Icon, label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 bg-card rounded-2xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 text-muted-foreground">
                    <Icon size={20} />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-foreground">
                      {label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {display}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
