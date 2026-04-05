import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

const projectData: Record<string, {
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
}> = {
  "sales-dashboard": {
    slug: "sales-dashboard",
    title: "Retail Sales Performance Dashboard",
    category: "Data Visualization",
    year: "2024",
    duration: "6 weeks",
    problem: "A regional retail chain struggled to identify which stores and product categories were underperforming. Leadership was making decisions based on monthly PDF reports with no ability to drill down.",
    objective: "Build an interactive Tableau dashboard that lets regional managers slice sales data by store, category, and time period — and surface the top 10% and bottom 10% performers automatically.",
    dataset: {
      source: "Internal POS system exports",
      size: "2.4M transaction records",
      period: "Jan 2021 – Dec 2023",
      format: "CSV / SQL Database",
    },
    tools: ["Python", "SQL", "Tableau", "Pandas", "Excel"],
    process: [
      {
        step: "Data Cleaning",
        description: "Removed 12% of records with duplicate transaction IDs, standardized store codes across 3 naming conventions, and handled 8,000+ null values in the product category column using lookup tables.",
      },
      {
        step: "Analysis",
        description: "Aggregated sales by store/category/month using SQL window functions. Calculated YoY growth rates, identified seasonal patterns with Python time-series decomposition, and created a performance scoring model.",
      },
      {
        step: "Visualization",
        description: "Built a 5-page Tableau workbook: Executive Overview, Store Comparison, Category Drill-Down, Time Trends, and an Anomaly Detector. Published to Tableau Server with row-level security per region.",
      },
    ],
    insights: [
      "3 stores in the Midwest region were generating 40% less revenue per sqft than comparable stores — attributable to poor inventory forecasting.",
      "The home goods category saw a 67% spike in Q4 2022 that was never capitalized on — no seasonal stocking strategy existed.",
      "Identified $1.2M in potential revenue recovery by aligning bottom-tier store inventory with top-tier store patterns.",
      "Tuesday promotions outperformed Friday promotions by 23% in average basket size across all store segments.",
      "Online-to-in-store conversion (BOPIS) accounts for 34% of all transactions but was previously unmeasured.",
    ],
    impact: "The dashboard was adopted by all 8 regional managers within 2 weeks of launch. The first action taken — repositioning inventory in 3 underperforming stores — resulted in a projected $180K quarterly revenue uplift.",
    githubUrl: "https://github.com/alexchen/retail-sales-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  "customer-churn": {
    slug: "customer-churn",
    title: "Customer Churn Prediction Model",
    category: "Machine Learning",
    year: "2024",
    duration: "8 weeks",
    problem: "A B2B SaaS company was losing approximately 8% of customers per month with no visibility into which accounts were at risk until they had already churned.",
    objective: "Build a machine learning model to predict churn 30 days in advance with at least 80% accuracy, enabling the customer success team to proactively intervene.",
    dataset: {
      source: "CRM + product usage logs",
      size: "45,000 customer accounts",
      period: "2021 – 2023",
      format: "PostgreSQL + CSV exports",
    },
    tools: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "SQL"],
    process: [
      {
        step: "Data Cleaning",
        description: "Merged CRM data with product telemetry logs using account IDs. Handled class imbalance (8% churn rate) using SMOTE oversampling. Engineered 28 features from raw event logs.",
      },
      {
        step: "Analysis",
        description: "Compared Logistic Regression, Random Forest, and XGBoost. Used SHAP values to understand feature importance. Cross-validated with 5-fold stratified splits to prevent data leakage.",
      },
      {
        step: "Visualization",
        description: "Built a Streamlit app for CS team to input account IDs and get real-time churn probability scores with top contributing factors listed per account.",
      },
    ],
    insights: [
      "Top churn predictors: 14+ days of login inactivity, fewer than 3 active users, and no API integration within first 90 days.",
      "Accounts that completed onboarding training had 3.2x lower churn rate — suggesting onboarding ROI was underestimated.",
      "Small accounts (1–10 seats) churned at 2x the rate of mid-market — warranting a separate retention strategy.",
      "Price-sensitive churn spike seen at 12-month anniversary — a new renewal discount offer reduced this by 40% in pilot.",
      "Model achieved 87% accuracy and 0.91 AUC-ROC on holdout test set.",
    ],
    impact: "Deployed to production serving 45K accounts. CS team reduced monthly churn from 8% to 6.8% in the first 60 days — representing ~$340K in annual recurring revenue retained.",
    githubUrl: "https://github.com/alexchen/churn-prediction",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  "supply-chain": {
    slug: "supply-chain",
    title: "Supply Chain Bottleneck Analysis",
    category: "Operations Analytics",
    year: "2023",
    duration: "5 weeks",
    problem: "A global logistics company was seeing average delivery times increase by 18% YoY but couldn't pinpoint whether delays were originating at warehouses, customs, or last-mile carriers.",
    objective: "Identify the primary bottlenecks in the end-to-end delivery pipeline and quantify the delay impact at each stage.",
    dataset: {
      source: "Logistics management system",
      size: "890,000 shipment records",
      period: "Jan 2022 – Sep 2023",
      format: "SQL Server + Excel",
    },
    tools: ["SQL", "Power BI", "Excel", "Python", "Pandas"],
    process: [
      {
        step: "Data Cleaning",
        description: "Reconciled timestamp data across 12 time zones, removed 5% of records with impossible transit times (data entry errors), and standardized carrier codes across 3 legacy systems.",
      },
      {
        step: "Analysis",
        description: "Decomposed total transit time into 7 distinct stages. Applied statistical process control (SPC) to identify stages with abnormal variation. Built regression models to quantify delay drivers.",
      },
      {
        step: "Visualization",
        description: "Created a Power BI report with a flow diagram showing average time per stage, heat maps of delay hotspots by geography, and a predictive delay risk score for active shipments.",
      },
    ],
    insights: [
      "Customs clearance at 4 specific ports accounted for 61% of all delays — despite handling only 28% of shipment volume.",
      "Last-mile carrier D had a 34% higher delay rate than the average — concentrated in rural ZIP codes due to inadequate routing software.",
      "Warehouse dwell time spiked every Monday morning due to batch processing schedules — a simple scheduling fix reduced this by 80%.",
      "Temperature-sensitive shipments were 2.1x more likely to be delayed due to special handling requirements not flagged at booking.",
    ],
    impact: "Implementing 4 recommended changes (port diversification, carrier contract renegotiation, warehouse scheduling, and booking flags) reduced average delivery time by 22% within one quarter.",
    githubUrl: "https://github.com/alexchen/supply-chain-analysis",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  },
  "marketing-ab-test": {
    slug: "marketing-ab-test",
    title: "Marketing Campaign A/B Test Analysis",
    category: "Statistical Analysis",
    year: "2023",
    duration: "3 weeks",
    problem: "A digital marketing team ran 4 simultaneous A/B tests across email, display, and paid search channels but lacked the statistical expertise to interpret results and make confident budget decisions.",
    objective: "Analyze test results with proper statistical rigor, determine which variants to roll out, and build a reusable A/B testing framework for future campaigns.",
    dataset: {
      source: "Marketing analytics platform + email ESP",
      size: "52,000 user responses",
      period: "Q3 2023 (8-week test)",
      format: "CSV + API exports",
    },
    tools: ["Python", "Pandas", "SciPy", "Seaborn", "Statsmodels"],
    process: [
      {
        step: "Data Cleaning",
        description: "Filtered out bot traffic (6% of sessions), removed users who appeared in multiple test groups, and validated randomization quality using chi-square tests on pre-test user attributes.",
      },
      {
        step: "Analysis",
        description: "Applied two-sample z-tests for CTR metrics, Mann-Whitney U for non-normal revenue distributions, and Bonferroni correction for multiple comparisons. Calculated minimum detectable effect and actual power.",
      },
      {
        step: "Visualization",
        description: "Built a comprehensive Jupyter notebook report with effect size plots, confidence interval visualizations, and a decision matrix summarizing statistical and practical significance for each test.",
      },
    ],
    insights: [
      "Email subject line variant B achieved 31% higher CTR (p < 0.001, 95% CI: 26%–36%) — strong recommendation to roll out.",
      "Display ad creative variant A showed only 4% lift — statistically significant but below the 10% practical significance threshold. Do not roll out.",
      "Paid search ad copy test was underpowered — only 40% power, needs 3 more weeks to reach 80% power target.",
      "Personalized email send-time optimization lifted open rates by 18% with zero incremental cost — highest ROI finding.",
      "Identified a seasonal interaction effect: test ran during back-to-school peak, results may not generalize to Q4.",
    ],
    impact: "Recommendations informed a $500K campaign budget reallocation. The reusable A/B testing framework was adopted by the entire marketing team, reducing future analysis time from 2 weeks to 3 days.",
    githubUrl: "https://github.com/alexchen/ab-test-analysis",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
  },
};

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug];
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
