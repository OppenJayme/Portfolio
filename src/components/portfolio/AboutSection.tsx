"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    category: "Tools Used",
    items: [
      "Python",
      "SQL",
      "Tableau",
      "Power BI",
      "Excel",
      "Pandas",
      "MYSQL Server",
    ],
  },
  {
    category: "Certifications",
    items: [
      "Associate Data Analyst",
      "IBM Data Science",
      "Tableau Desktop Specialist",
    ],
  },
  {
    category: "Learning",
    items: ["1 Year", "1 Bootcamps", "5+ Projects"],
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              About
            </span>
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Bio */}
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  Passionate about the stories
                  <br />
                  <span className="text-primary">data tells</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a 3rd Year Information Technology student with hands-on
                    experience in exploratory data analysis, statistical
                    modeling, and data visualization. I thrive at the
                    intersection of business problems and technical solutions.
                  </p>
                  <p>
                    My projects span victim demographics analysis , sales
                    forecasting, and operational efficiency — each one teaching
                    me to ask better questions and present findings that
                    actually move the needle.
                  </p>
                  <p>
                    When I'm not analyzing datasets, I'm experimenting with new
                    visualization techniques, learning datacamp, doing the
                    Google Certification, or just playing badminton!
                  </p>
                </div>
              </div>

              {/* Right: Highlights */}
              <div className="space-y-6">
                {highlights.map((group) => (
                  <div key={group.category} className="space-y-2.5">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm font-medium text-foreground bg-secondary border border-border px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
