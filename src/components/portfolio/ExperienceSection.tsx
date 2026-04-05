"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    period: "Aug 2023 – Jun 2027",
    title: "BS Information Technology",
    org: "University of San Carlos",
    type: "Academic",
    description:
      "I am currently studying Information Technology at the University of San Carlos (USC), where I have developed a strong foundation in statistics, data analytics, and software development. My academic experience includes working with data analysis techniques, building web-based applications, and understanding core networking concepts using Cisco devices and tools like Packet Tracer. Through my studies and projects, I have gained hands-on experience in problem-solving, data interpretation, and system design. I am continuously expanding my skills in analytics and technology, with a strong focus on becoming a data analyst capable of delivering meaningful, data-driven insights.",
    tags: [
      "Statistics",
      "SQL",
      "Python",
      "Research",
      "Web development",
      "Networking",
      "Virtual Machines",
    ],
  },
  {
    period: "Currently Taking 2026",
    title: "Google Data Analytics Certificate",
    org: "Google / Coursera",
    type: "Certification",
    description:
      "Completed 8-course professional certificate covering data cleaning, analysis, visualization, and R programming. Capstone project analyzed bike-share usage data to identify user behavior patterns.",
    tags: ["R", "SQL", "Tableau", "Google Sheets"],
  },
  {
    period: "March 2026",
    title: "Assosicate Data Analyst",
    org: "DataCamp",
    type: "Bootcamp",
    description:
      "I have earned the Data Analyst Associate certification from DataCamp, where I developed practical skills in data cleaning, analysis, and visualization using tools such as SQL, and Excel. Through hands-on projects, I learned to work with real-world datasets, apply analytical techniques, and communicate insights effectively. This certification strengthened my ability to transform raw data into meaningful information that supports data-driven decision-making.",
    tags: ["Advanced SQL", "Data Visualization", "Power BI", "Excel"],
  },
  {
    period: "Aug 2024",
    title: "SQL Associate",
    org: "Datacamp",
    type: "Certification",
    description:
      "I earned the SQL Associate certification from DataCamp, where I demonstrated proficiency in querying and managing data using SQL. This included working with real-world datasets, performing data cleaning and transformation, writing complex queries using joins, aggregations, and subqueries, and extracting meaningful insights from structured data. Through practical assessments, I strengthened my ability to analyze data efficiently and support data-driven decision-making using SQL.",
    tags: ["SQL", "Window Functions", "Common Table Expressions"],
  },
];

const typeColors: Record<string, string> = {
  Internship:
    "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800",
  Certification:
    "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800",
  Bootcamp:
    "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800",
  Academic: "text-primary bg-primary/10 border-primary/20",
};

function ExperienceEntry({
  exp,
  delay,
}: {
  exp: (typeof experiences)[0];
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "visible" : ""} relative pl-8 pb-10 last:pb-0`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-[9px] top-4 bottom-0 w-px bg-border last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      <div className="bg-card rounded-2xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-shadow duration-200">
        <div className="flex flex-wrap items-start gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-foreground">{exp.title}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{exp.org}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${typeColors[exp.type]}`}
            >
              {exp.type}
            </span>
          </div>
        </div>
        <p className="text-xs font-medium text-muted-foreground mb-3">
          {exp.period}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-foreground bg-secondary border border-border px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`fade-in-up ${headerVisible ? "visible" : ""} mb-14`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Experience
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Learning Journey
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            A timeline of my education, certifications, and hands-on work
            experience in data analytics.
          </p>
        </div>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <ExperienceEntry key={exp.title} exp={exp} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
