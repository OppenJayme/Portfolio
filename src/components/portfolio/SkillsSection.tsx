"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    icon: "🐍",
    category: "Programming",
    skills: ["Python", "R", "SQL", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    icon: "📊",
    category: "Visualization",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "D3.js"],
  },
  {
    icon: "🗄️",
    category: "Data & Databases",
    skills: ["MySQL", "PostgreSQL", "BigQuery", "Excel", "Google Sheets", "dbt"],
  },
  {
    icon: "☁️",
    category: "Cloud & Tools",
    skills: ["Google Cloud", "AWS S3", "Jupyter", "Git", "VS Code", "Airflow"],
  },
  {
    icon: "📈",
    category: "Analytics",
    skills: ["A/B Testing", "Regression", "Clustering", "Time Series", "Cohort Analysis"],
  },
  {
    icon: "🧠",
    category: "Machine Learning",
    skills: ["Linear Models", "Random Forest", "XGBoost", "Feature Engineering", "Cross-validation"],
  },
];

function SkillCard({ icon, category, skills, delay }: { icon: string; category: string; skills: string[]; delay: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "visible" : ""} bg-card rounded-2xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-2.5 py-1 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`fade-in-up ${headerVisible ? "visible" : ""} mb-14`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            A curated set of tools I use to collect, clean, analyze, and visualize data at every stage of the pipeline.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.category}
              icon={cat.icon}
              category={cat.category}
              skills={cat.skills}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
