export const portfolioData = {
  personal: {
    name: "Aman Srivastav",
    roles: [
      "Aspiring Data Analyst",
      "Data Enthusiast",
      "Visualization Specialist"
    ],
    aboutRoles: [
      "Data Analyst",
      "Problem Solver",
      "Tech Enthusiast"
    ],
    bio: `Aspiring Data Analyst with a strong foundation in data cleaning, exploratory data analysis (EDA), and data visualization. Proficient in SQL, Python (Pandas, NumPy), Excel, and Power BI for transforming raw datasets into meaningful business insights. Experienced in developing interactive dashboards and analytical projects involving sales analytics and customer segmentation. Passionate about leveraging data-driven insights to support business decision-making and performance optimization.`,
    avatar: "https://ui-avatars.com/api/?name=Aman+Srivastav&size=512&background=random",
    resumeUrl: "#",
    contact: {
      email: "aman21sriva@gmail.com",
      phone: "+91 7307577102",
      location: "Lucknow (UP), India",
      github: "https://github.com/sriva-Aman21",
      githubUsername: "@sriva-Aman21",
      linkedin: "https://www.linkedin.com/in/aman-srivastav-988b11336/"
    }
  },
  skillCategories: [
    {
      category: "Languages & Core",
      skills: ["Python", "SQL", "Java", "Object-Oriented Programming (OOP)", "Data Structures & Algorithms"]
    },
    {
      category: "Data Analytics & BI",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "Power BI", "Excel (Pivot Tables, Power Query, DAX)"]
    },
    {
      category: "Data Engineering & Tools",
      skills: ["ETL Pipelines", "Data Transformation", "Data Validation", "Feature Engineering", "MySQL", "Git & GitHub"]
    },
    {
      category: "Machine Learning & Analysis",
      skills: ["Exploratory Data Analysis (EDA)", "Regression", "Classification", "Clustering", "Statistical Analysis", "KPI Reporting"]
    }
  ],

  // Kept for backward compatibility if using bar charts
  skills: [
    { name: "Python & Data Science Stack", level: "92%" },
    { name: "SQL & Relational Databases", level: "88%" },
    { name: "Power BI & Business Analytics", level: "85%" },
    { name: "Streamlit Web App Development", level: "90%" },
    { name: "ETL Pipelines & Data Cleaning", level: "85%" },
    { name: "Machine Learning & Statistical Modeling", level: "80%" }
  ],
  projects: [
    {
      id: 1,
      title: "Nassau Candy Profitability Platform",
      description: "Commercial analytics engine featuring automated validation pipelines, margin diagnostic scoring, and Pareto 80/20 profitability breakdown across distribution channels.",
      icon: "TrendingUp",
      tags: ["Python", "Streamlit", "Pandas", "EDA", "Pareto Analysis"],
      liveUrl: "https://nassaucandyanalytics.streamlit.app/",
      githubUrl: "https://github.com/sriva-Aman21/Nassau-Candy-Analytics"
    },
    {
      id: 2,
      title: "APL Logistics Diagnostic Intelligence",
      description: "Enterprise supply chain diagnostic dashboard analyzing 180,000+ shipment transactions. Detects SLA transit bottlenecks, carrier delays, and route efficiency gaps.",
      icon: "Truck",
      tags: ["Python", "Streamlit", "Pandas", "Plotly", "Supply Chain"],
      liveUrl: "https://apl-logistics-dashboard-aman.streamlit.app/",
      githubUrl: "https://github.com/sriva-Aman21/APL-LOGISTICS-Dashboard"
    },
    {
      id: 3,
      title: "120-Year Olympic History Analysis",
      description: "Interactive analytics web application exploring 120+ years of Olympic records. Features dynamic medal tallies, country performance heatmaps, and athlete age distributions.",
      icon: "Medal",
      tags: ["Python", "Pandas", "Streamlit", "Plotly", "Seaborn"],
      liveUrl: "https://olympic-analysis-aman.streamlit.app/",
      githubUrl: "https://github.com/sriva-Aman21/Olympic_Data_Analysis"
    },
    {
      id: 4,
      title: "Restaurant Analytics & Insights",
      description: "End-to-end exploratory analysis on restaurant menu pricing, customer sentiment, and operational data to optimize menu performance.",
      icon: "Database",
      tags: ["Python", "EDA", "Pandas", "Data Cleaning"],
      liveUrl: null,
      githubUrl: "https://github.com/sriva-Aman21/restaurant-analytics-insights"
    },
    {
      id: 5,
      title: "Hostel Accommodation Management System",
      description: "A desktop software application designed to automate and digitalize hostel operations, handling room allocations, student records, and fee management without manual paperwork.",
      icon: "Code",
      tags: ["Java", "OOP", "Data Persistence", "Desktop UI"],
      liveUrl: null,
      githubUrl: "https://github.com/sriva-Aman21/HOSTEL-ACCOMMODATION-MANAGEMENT-SYSTEM"
    },
    {
      id: 6,
      title: "Student Management Dashboard",
      description: "Responsive administrative web dashboard designed for tracking academic progress, attendance metrics, and schedules with clean UI widgets and student profile cards.",
      icon: "Layout",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      liveUrl: null,
      githubUrl: "https://github.com/sriva-Aman21/STUDENT-MANAGEMENT-DASHBOARD"
    }
  ],
  experiences: [],
  education: [
    {
      id: 1,
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "Goel Institute of Technology & Management, Lucknow | AKTU",
      period: "2023 - 2027",
      score: "CGPA: 8.87 / 10",
      details: "Focusing on Artificial Intelligence, Machine Learning pipelines, Data Engineering, and Predictive Analytics."
    },
    {
      id: 2,
      degree: "Senior Secondary (Class XII - Science)",
      institution: "Cambridge International English School, Rudrapur, Deoria",
      period: "Completed",
      score: "76.0%",
      details: "Physics, Chemistry, and Mathematics focus."
    },
    {
      id: 3,
      degree: "Secondary School (Class X)",
      institution: "Cambridge International English School, Rudrapur, Deoria",
      period: "Completed",
      score: "79.6%",
      details: "Core science, mathematics, and foundational computer applications."
    }
  ],
  certifications: [
    {
      id: 1,
      name: "Advanced AI & ML: Deep Learning",
      issuer: "IIT Kanpur",
      badge: "IIT Kanpur"
    },
    {
      id: 2,
      name: "Google Cloud Data Analytics",
      issuer: "Google",
      badge: "Cloud Analytics"
    },
    {
      id: 3,
      name: "Master SQL for Data Science",
      issuer: "Data Science Academy",
      badge: "Database"
    },
    {
      id: 4,
      name: "Python (Basic)",
      issuer: "HackerRank",
      badge: "Verified Skill"
    },
    {
      id: 5,
      name: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      badge: "Analytics"
    },
    {
      id: 6,
      name: "Data Analytics Toolset (Excel, Python, Power BI)",
      issuer: "TCS iON",
      badge: "Industry Toolset"
    },
    {
      id: 7,
      name: "Power BI Training",
      issuer: "Simplilearn / Industry Credential",
      badge: "Business Intelligence"
    }
  ]
};