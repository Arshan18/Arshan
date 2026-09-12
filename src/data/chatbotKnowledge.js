import { personalInfo, experienceData, aiProjectsData, dataProjectsData, skillGroups, educationData, certificationsData } from './portfolioData';

export const knowledgeBase = {
  personal: personalInfo,
  experience: experienceData,
  aiProjects: aiProjectsData,
  dataProjects: dataProjectsData,
  skills: skillGroups,
  education: educationData,
  certifications: certificationsData,
  availability: {
    status: "Available for Opportunities",
    noticePeriod: "Immediate",
    lookingFor: "Data Analyst, BI & Data Engineering, AI/LLM, and Data Analytics roles"
  }
};

export function queryChatbot(userMessage, conversationHistory = []) {
  const q = userMessage.trim().toLowerCase();
  
  // Get last context from history if follow-up
  const lastBotMsg = conversationHistory.length > 0 
    ? [...conversationHistory].reverse().find(m => m.sender === 'bot')?.text || '' 
    : '';

  // 1. Follow-up handling for specific projects
  if (lastBotMsg.includes("LangChain Multi-Agent") || (q.includes("it") && (q.includes("agent") || q.includes("tavily") || q.includes("critic")))) {
    if (q.includes("agent") || q.includes("search") || q.includes("reader")) {
      return "The LangChain Multi-Agent Research System uses a Search & Reader agent workflow built with **Tavily API** and **BeautifulSoup4** for automated web research.";
    }
    if (q.includes("critic") || q.includes("qa") || q.includes("evaluation")) {
      return "It features a **Critic Chain** to evaluate the accuracy, quality, and formatting of generated research reports.";
    }
    if (q.includes("model") || q.includes("gpt") || q.includes("llm")) {
      return "The system leverages **OpenAI GPT-4o-mini** along with LangChain and LangGraph for agent orchestration.";
    }
  }

  if (lastBotMsg.includes("UIDAI") || (q.includes("it") && (q.includes("aadhaar") || q.includes("surge") || q.includes("hackathon")))) {
    if (q.includes("surge") || q.includes("biometric") || q.includes("july")) {
      return "The UIDAI project identified a significant **9.8 million transaction biometric surge in July** and enrollment peaks during September and December.";
    }
    if (q.includes("demographic") || q.includes("18+")) {
      return "The analysis revealed that the **18+ demographic segment accounted for approximately 90%** of demographic modifications.";
    }
  }

  if (lastBotMsg.includes("Databricks") || (q.includes("it") && (q.includes("attrition") || q.includes("spark")))) {
    return "The workforce project utilizes **Azure Databricks**, **PySpark**, and **Spark SQL** to perform exploratory data analysis, analyze employee retention drivers, and forecast workforce attrition.";
  }

  // 2. Direct Persona & Identity Questions
  if (q.includes("who is arshan") || q.includes("who is arshad") || q.includes("who are you") || q.includes("tell me about arshan") || q.includes("summary") || q.includes("about arshan") || q.includes("profile")) {
    return `**Arshan Attar** is a final-year IT Engineering student and aspiring **Data Analyst** with 6 months of internship experience in data analysis, SQL, Python, ETL, and dashboard development.\n\n` +
      `He specializes in data pipeline development, data cleaning & validation, ad-hoc analysis, and translating data into actionable business insights with hands-on expertise in **Azure Databricks**, **Power BI**, **advanced SQL**, **LangChain**, and **LangGraph**.\n\n` +
      `Current Status: **${personalInfo.status}**.`;
  }

  // 3. Availability / Contact
  if (q.includes("available") || q.includes("immediate") || q.includes("joiner") || q.includes("notice") || q.includes("hire") || q.includes("opportunity")) {
    return `Yes! Arshan is **available for opportunities** in Data Analytics, BI & Data Engineering, and AI/LLM roles.`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
    return `You can reach Arshan Attar through:\n` +
      `- 📧 **Email:** [${personalInfo.email}](mailto:${personalInfo.email})\n` +
      `- 💼 **LinkedIn:** [linkedin.com/in/arshanattar18](${personalInfo.linkedin})\n` +
      `- 💻 **GitHub:** [github.com/Arshan18](${personalInfo.github})`;
  }

  if (q.includes("github") || q.includes("repo")) {
    return `Arshan's GitHub profile is available at: [github.com/Arshan18](${personalInfo.github}). You can explore his repositories for the UIDAI Analytics Hackathon, Databricks Attrition Analysis, LangChain Multi-Agent System, and more!`;
  }

  if (q.includes("linkedin")) {
    return `Arshan's LinkedIn profile: [linkedin.com/in/arshanattar18](${personalInfo.linkedin}).`;
  }

  // 4. Experience & Work History
  if (q.includes("experience") || q.includes("internship") || q.includes("work") || q.includes("job") || q.includes("cloud counselage")) {
    return `**Cloud Counselage Pvt. Ltd.**\n` +
      `*Role:* Data Analyst Intern\n` +
      `*Duration:* June 2025 – October 2025 | Mumbai, India\n\n` +
      `*Key Highlights:*\n` +
      `• Analyzed and processed data for **4,900 students** using Python and Excel across CGPA, salary expectations, leadership skills, family income, and event participation.\n` +
      `• Performed data cleaning, validation, transformation, and statistical analysis using Excel and Python (Pandas).\n` +
      `• Conducted exploratory and ad-hoc analysis to identify trends and correlations.\n` +
      `• Developed interactive Power BI reports and dashboards to communicate KPIs and analytical insights.\n` +
      `• Collaborated on data processing, reporting, and presentation of insights.\n` +
      `• Project Repo: [Absence of Insights](https://github.com/Arshan18/Absence-of-Insights-for-the-Relationship-Between-Student-s-Economic-Background-Academic-Performance)\n` +
      `• [View Certificate](https://drive.google.com/file/d/1nNqvKGq472X_MkEAlNWmqHEN0JZ84z22/view?usp=sharing)`;
  }

  // 5. Projects
  if (q.includes("uidai") || q.includes("aadhaar") || q.includes("hackathon")) {
    return `**UIDAI Data Analytics Hackathon 2026: Unlocking Aadhaar Societal Trends**\n\n` +
      `• **Tech Stack:** Python, Pandas, NumPy, SPSS, Streamlit\n` +
      `• **Key Highlights:**\n` +
      `  - Processed and analyzed the 2025 Aadhaar operational dataset.\n` +
      `  - Identified regional & seasonal patterns (peaks in Sept & Dec, 9.8M biometric surge in July).\n` +
      `  - Discovered 18+ demographic segment accounted for ~90% of demographic modifications.\n` +
      `  - Developed an interactive Streamlit dashboard.\n` +
      `• **GitHub:** [UIDAI Project Repository](https://github.com/belikejishu/UIDAI-Data-Analytics-2026-Trends.git)`;
  }

  if (q.includes("attrition") || q.includes("workforce") || q.includes("databricks")) {
    return `**Workforce Analysis and Attrition Prediction Using Azure Databricks**\n\n` +
      `• **Tech Stack:** Azure Databricks, PySpark, Spark SQL, Big Data\n` +
      `• **Key Highlights:**\n` +
      `  - Processed and cleansed employee datasets using Azure Databricks and PySpark.\n` +
      `  - Used Spark SQL to identify critical drivers influencing employee attrition.\n` +
      `  - Built analytical visualizations and actionable recommendations for employee retention.\n` +
      `• **GitHub:** [Workforce Attrition Repo](https://github.com/Arshan18/Employee-Attrition-Insights-with-Azure-Databricks)`;
  }

  if (q.includes("langchain") || q.includes("research system") || q.includes("multi-agent") || q.includes("agentic")) {
    return `**LangChain Multi-Agent Research System**\n\n` +
      `• **Tech Stack:** Python, LangChain, LangGraph, OpenAI, Tavily, Streamlit\n` +
      `• **Key Highlights:**\n` +
      `  - Architected an autonomous Agentic AI pipeline using LangChain and OpenAI GPT-4o-mini.\n` +
      `  - Built Search & Reader agent workflows with Tavily API & BeautifulSoup4.\n` +
      `  - Implemented a Critic Chain to evaluate report accuracy and formatting.\n` +
      `  - Built an interactive Streamlit UI for report synthesis and downloads.\n` +
      `• **GitHub:** [LangChain Multi-Agent Repo](https://github.com/Arshan18/LangChain-Multi-Agent-Research-System.git)`;
  }

  if (q.includes("student") || q.includes("economic") || q.includes("academic performance")) {
    return `**Absence of Insights: Student Economic Background & Academic Performance**\n\n` +
      `• **Role:** Data Analyst Intern at Cloud Counselage Pvt. Ltd.\n` +
      `• **Tech Stack:** Python, Pandas, Power BI, Excel, Statistical Analysis\n` +
      `• **Overview:** Analyzed 4,900 student records to uncover relationships between family income, event participation, CGPA, and salary expectations.\n` +
      `• **GitHub:** [Student Insights Repo](https://github.com/Arshan18/Absence-of-Insights-for-the-Relationship-Between-Student-s-Economic-Background-Academic-Performance)\n` +
      `• **Certificate:** [View Certificate](https://drive.google.com/file/d/1nNqvKGq472X_MkEAlNWmqHEN0JZ84z22/view?usp=sharing)`;
  }

  if (q.includes("projects") || q.includes("portfolio projects")) {
    return `Arshan has developed key analytics and engineering projects:\n\n` +
      `📊 **Data & Analytics Projects:**\n` +
      `1. **UIDAI Data Analytics Hackathon 2026**: Aadhaar societal trends analysis & Streamlit dashboard.\n` +
      `2. **Workforce Analysis & Attrition Prediction**: Big data processing with Azure Databricks, PySpark & Spark SQL.\n` +
      `3. **Student Economic Background & Academic Performance**: Statistical analysis of 4,900 students with Power BI & Python.\n\n` +
      `🤖 **AI & Agentic Projects:**\n` +
      `4. **LangChain Multi-Agent Research System**: Autonomous research & synthesis agent with LangChain, LangGraph & Tavily.`;
  }

  // 6. Skills & Tech Stack Queries
  if (q.includes("sql") || q.includes("database") || q.includes("query")) {
    return `Arshan has strong expertise in **Advanced SQL**, including CTEs (Common Table Expressions), Window Functions, Query Optimization, Data Cleaning & Validation, and Data Modeling.`;
  }

  if (q.includes("python") || q.includes("pandas") || q.includes("numpy")) {
    return `Arshan uses **Python** along with **Pandas**, **NumPy**, **Matplotlib**, and **Seaborn** for data extraction, cleaning, statistical analysis, and automated ETL pipeline development.`;
  }

  if (q.includes("power bi") || q.includes("bi") || q.includes("tableau") || q.includes("superset") || q.includes("dashboard")) {
    return `Arshan is proficient in **Power BI**, **DAX**, **Apache Superset**, **Tableau**, Advanced Excel, and VBA for building interactive KPI dashboards and visual reports.`;
  }

  if (q.includes("databricks") || q.includes("azure") || q.includes("spark") || q.includes("cloud") || q.includes("aws")) {
    return `Arshan's Data Engineering & Cloud capabilities include:\n` +
      `- **Azure Databricks:** PySpark, Spark SQL, large-scale data processing.\n` +
      `- **AWS:** AWS S3, AWS RDS (Certified AWS Academy Cloud Foundation).\n` +
      `- **Data Engineering:** ETL pipeline development, Snowflake, data integration, and big data processing.`;
  }

  if (q.includes("langchain") || q.includes("langgraph") || q.includes("ai") || q.includes("llm") || q.includes("prompt")) {
    return `Arshan builds AI/LLM workflows using **LangChain** and **LangGraph**, focusing on LLM workflow orchestration, AI-assisted analytics, prompt engineering, and LLM API integrations.`;
  }

  if (q.includes("skills") || q.includes("tech stack") || q.includes("technologies")) {
    return `Arshan's technical stack spans:\n\n` +
      `• **Data & Analytics:** Advanced SQL (CTEs, Window Functions), Data Analysis, Ad-Hoc Analysis, Data Cleaning & Validation, Data Modeling.\n` +
      `• **Programming:** Python, Pandas, NumPy, Matplotlib, Seaborn, ETL Pipeline Development, Automated Reporting.\n` +
      `• **Data Engineering & Cloud:** Azure Databricks, PySpark, Spark SQL, AWS S3, AWS RDS, Snowflake.\n` +
      `• **BI & Visualization:** Power BI, DAX, Apache Superset, Tableau, Advanced Excel, VBA, Interactive Dashboards.\n` +
      `• **AI & LLM:** LangChain, LangGraph, LLM Workflow Orchestration, Prompt Engineering, LLM APIs.\n` +
      `• **ML Foundations:** Regression, Predictive Modeling, Clustering, Sentiment Analysis.`;
  }

  // 7. Education & Certifications
  if (q.includes("education") || q.includes("college") || q.includes("degree") || q.includes("university")) {
    return `**Education:**\n` +
      `🎓 **Bachelor of Engineering in Information Technology**\n` +
      `M.H. Saboo Siddik College of Engineering, Mumbai (Aug 2023 – May 2027) | **CGPI: 8**\n\n` +
      `🏫 **12th HSC (Science):** Mahatma Gandhi Vidyalay and Junior College, Dhasai — **71.83%**\n` +
      `🏫 **10th SSC:** Mahatma Gandhi Vidyalay and Junior College, Dhasai — **87.80%**`;
  }

  if (q.includes("certification") || q.includes("certificate") || q.includes("credentials")) {
    return `Arshan holds the following credentials:\n\n` +
      `1. **Cloud Foundation** — AWS Academy ([View Credly Badge](https://www.credly.com/go/TYdXvJtf8deTg59Mg0E3Sg))\n` +
      `2. **Data Analytics** — Cisco ([View Certificate](https://www.netacad.com/certificates?issuanceId=3100d1de-8c4a-4ede-841d-94d5422abf62))`;
  }

  // Fallback - Strictly adhere to non-hallucination rule
  return `I don't have that specific information in Arshan's portfolio. You can reach out directly via email at [${personalInfo.email}](mailto:${personalInfo.email}) or connect on [LinkedIn](${personalInfo.linkedin})!`;
}
