# Arshan Attar - Data Analyst Portfolio & AI Assistant

High-impact, responsive, professional portfolio website and AI Assistant designed for **Recruiters**, **Hiring Managers**, and **Technical Interviewers**.

- **Name**: Arshan Attar
- **Role**: Data Analyst | BI & Data Engineering | AI/LLM Enthusiast
- **Email**: arshanattar17@gmail.com
- **LinkedIn Profile**: [https://www.linkedin.com/in/arshanattar18](https://www.linkedin.com/in/arshanattar18)
- **GitHub Profile**: [https://github.com/Arshan18](https://github.com/Arshan18)

---

## Key Features

1. **Modern Hero Section**: Highlights internship experience in data analysis, SQL, Python, ETL, and dashboard development with Azure Databricks, Power BI, and LangChain.
2. **Interactive "Arshan AI" Portfolio Chatbot**: Floating AI Assistant powered by a structured knowledge base (`src/data/chatbotKnowledge.js`) with zero hallucination and contextual question answering.
3. **Core Competencies & Skills Matrix**: Categorized technical stack across Data & Analytics (Advanced SQL, CTEs, Window Functions), Programming (Python, Pandas, NumPy), Data Engineering & Cloud (Azure Databricks, PySpark, Spark SQL, AWS S3, Snowflake), BI & Visualization (Power BI, DAX, Superset, Tableau), and AI/LLM (LangChain, LangGraph).
4. **Featured Projects**: Dedicated showcases for *UIDAI Data Analytics Hackathon 2026*, *Workforce Analysis and Attrition Prediction Using Azure Databricks*, *LangChain Multi-Agent Research System*, and *Student Economic Background & Academic Performance*.
5. **Work Experience**: Commercial internship track record at Cloud Counselage Pvt. Ltd.
6. **Education & Verified Certifications**: Degrees at M.H. Saboo Siddik College of Engineering, HSC/SSC credentials, and verified credentials for AWS Academy and Cisco.

---

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## Portfolio Architecture

- `src/data/portfolioData.js`: Central source of truth for portfolio profile, skills, experience, projects, education, and certifications.
- `src/data/chatbotKnowledge.js`: Structured knowledge base and smart query engine powering **Arshan AI**.
- `src/components/`: Modularized React components (`Navbar`, `Hero`, `About`, `Experience`, `SkillsMatrix`, `ProjectsShowcase`, `Education`, `Certifications`, `FooterContact`, `Chatbot`).
