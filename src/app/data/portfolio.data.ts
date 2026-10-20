export const portfolio = {
  year: "2026",
  initials: "IA",
  fullName: "Isaac Pongelli Ambrozevicius",
  displayName: "Isaac Ambrozevicius",
  firstName: "ISAAC",
  lastName: "AMBROZEVICIUS",
  role: "SERVICENOW DEVELOPER",
  location: "SÃO PAULO, BRAZIL",
  edition: "PLATFORM DEVELOPMENT / ITSM / CSM / AUTOMATION",
  intro: "Platform development. From investigation to implementation.",
  heroSignature: ["UNDERSTAND THE SYSTEM.", "THEN MAKE THE CHANGE."],
  statement: ["INVESTIGATE.", "BUILD.", "REFINE."],
  profile: "Understand how it works. Decide what comes next.",
  bio: "I’m a ServiceNow Developer focused on platform development, ITSM, CSM and automation. I work across enterprise environments, building and troubleshooting workflows, catalog experiences, integrations and business logic.",
  profileNote:
    "My work combines development and investigation: understanding how the platform behaves before deciding how to change it.",
  opportunities: "Open to international opportunities",
  opportunityRoles: [
    "ServiceNow Developer",
    "ServiceNow Engineer",
    "Technical Consultant",
    "Platform Developer",
  ],
  projects: [
    {
      id: "01",
      name: "Dynamic Service Catalog Hierarchy",
      category: "SERVICE CATALOG / PLATFORM DEVELOPMENT",
      year: "2026",
      word: "CATALOG",
      type: "flow",
      description:
        "Context-aware System, Service and Functionality selections for ServiceNow requests.",
      challenge:
        "The interface exposed options outside the selected catalog or request context, creating inconsistencies between the service matrix and the data shown on the RITM.",
      approach:
        "Created and adjusted the logic that queries available options and updates fields according to the request context. The implementation combined data filtering, asynchronous loading and dynamic option management through GlideAjax, Script Includes and Client Scripts.",
      outcome:
        "Aligned the hierarchy with the operational service matrix, preserving valid existing values and removing inconsistent options from the interface.",
      technologies: [
        "ServiceNow",
        "JavaScript",
        "GlideAjax",
        "Script Includes",
        "Client Scripts",
        "Service Catalog",
        "RITM",
        "sys_choice",
      ],
      url: null as string | null,
    },
    {
      id: "02",
      name: "SLA Lifecycle Investigation",
      category: "ITSM / TECHNICAL INVESTIGATION",
      year: "2026",
      word: "LIFECYCLE",
      type: "sync",
      description:
        "An investigation into a P2 Task SLA that kept running after task resolution.",
      challenge:
        "A Task SLA remained active beyond its expected stop point, despite conditions intended to end its execution.",
      approach:
        "Compared behavior across instances and reviewed historical records, SLA Definitions, Task SLAs, stop and pause conditions, the Default SLA Flow, scheduled jobs and sys_trigger records to trace the timer’s execution lifecycle.",
      outcome:
        "Identified the need to adjust the SLA stop condition to prevent inconsistent behavior during the task lifecycle.",
      technologies: [
        "ServiceNow",
        "ITSM",
        "SLA Engine",
        "Flow Designer",
        "Scheduled Jobs",
        "JavaScript",
        "Platform Investigation",
      ],
      url: null as string | null,
    },
    {
      id: "03",
      name: "Special Sales Request Experience",
      category: "SERVICE CATALOG / WORKFLOW AUTOMATION",
      year: "2026",
      word: "REQUEST",
      type: "request",
      description:
        "A catalog request experience for a commercial process inside ServiceNow.",
      challenge:
        "The process needed a structured request experience with consistent input validation, service mapping and task routing for different user types.",
      approach:
        "Built a catalog item with Brazilian CPF/CNPJ and phone validation, company information, automatic email handling and dynamic variables. Configured UI Policies, visibility rules, service mapping and Flow Designer automation for task generation and the request lifecycle.",
      outcome:
        "Centralized the commercial process in the platform, using validation and automation to reduce inconsistent entries and route subsequent activities correctly.",
      technologies: [
        "ServiceNow",
        "Service Catalog",
        "JavaScript",
        "Client Scripts",
        "UI Policies",
        "Flow Designer",
        "Catalog Variables",
      ],
      url: null as string | null,
    },
    {
      id: "04",
      name: "Secure Customer Document Experience",
      category: "CSM / ACCESS CONTROL",
      year: "2026",
      word: "ACCESS",
      type: "access",
      description:
        "Controlled document viewing and downloads within a CSM portal.",
      challenge:
        "Organization documents needed to be available in the portal without exposing private attachments to contacts outside the permitted access scope.",
      approach:
        "Implemented and investigated CSM portal widgets, attachments, company relationships, contact permissions and ACLs. Used the contact and company context to determine which documents could be displayed.",
      outcome:
        "Enabled controlled access to documents within the CSM experience while preserving the operation’s access rules.",
      technologies: [
        "ServiceNow CSM",
        "Service Portal",
        "JavaScript",
        "ACLs",
        "Widgets",
        "Attachments",
        "Access Control",
      ],
      url: null as string | null,
    },
  ],
  work: {
    title: ["Inside the", "platform."],
    note: "CORPORATE PROJECTS",
    footnote: "CONTEXT. IMPLEMENTATION. OUTCOME.",
    confidentiality:
      "Corporate work. Source code and production assets are not public. The visual compositions are illustrative.",
  },
  platform: "ServiceNow",
  expertiseTitle: ["Platform first.", "Across the stack."],
  expertise: [
    {
      label: "01 / DEVELOPMENT",
      title: "Business logic.",
      items: [
        "JavaScript / TypeScript",
        "Business Rules",
        "Script Includes",
        "Client Scripts / GlideAjax",
        "UI Actions / REST APIs",
      ],
    },
    {
      label: "02 / SERVICE MANAGEMENT",
      title: "Service delivery.",
      items: [
        "ITSM / CSM",
        "Service Catalog",
        "Incident Management",
        "Request Management",
        "SLAs / Approvals",
      ],
    },
    {
      label: "03 / AUTOMATION",
      title: "Connected flows.",
      items: [
        "Flow Designer",
        "Workflow Automation",
        "Scheduled Jobs",
        "Integrations",
      ],
    },
    {
      label: "04 / PLATFORM & DATA",
      title: "The foundations.",
      items: ["CMDB", "Discovery", "App Engine", "ACLs", "Data Foundations"],
    },
    {
      label: "05 / FRONT-END & SOFTWARE",
      title: "Beyond the platform.",
      items: [
        "HTML / CSS",
        "React",
        "Angular — used & studied",
        "Git / GitHub",
      ],
    },
    {
      label: "06 / CURRENTLY EXPLORING",
      title: "Next questions.",
      items: [
        "ServiceNow Discovery",
        "ITOM",
        "ServiceNow Architecture",
        "Angular",
      ],
    },
  ],
  experienceTitle: ["Implementation.", "Investigation."],
  experience: [
    {
      period: "AUG 2026 — PRESENT",
      company: "Artycs",
      role: "ServiceNow Junior Analyst / Developer",
      location: "São Paulo, Brazil / Remote",
      description:
        "ServiceNow development and platform support across multiple enterprise environments. Working with ITSM, CSM, Service Catalog, Flow Designer, SLAs, CMDB, REST APIs and custom platform development.",
      detail:
        "Implementation and technical investigation with Business Rules, Script Includes, Client Scripts, UI Actions, access controls and platform automation.",
    },
  ],
  education: [
    {
      title: "Bachelor’s Degree in Software Engineering",
      institution: "FIAP",
      period: "2026 — 2029",
      note: "São Paulo, Brazil",
    },
    {
      title: "Technical Program",
      institution: "FIAP",
      period: "COMPLETED 2025",
      note: "Technical education",
    },
  ],
  certifications: [
    {
      code: "CSA",
      title: "Certified System Administrator",
      issuer: "ServiceNow",
      year: "2026",
    },
    {
      code: "CAD",
      title: "Certified Application Developer",
      issuer: "ServiceNow",
      year: "2026",
    },
    {
      code: "CIS–ITSM",
      title: "Certified Implementation Specialist — IT Service Management",
      issuer: "ServiceNow",
      year: "2026",
    },
    {
      code: "CIS–DF",
      title: "Certified Implementation Specialist — Data Foundations",
      issuer: "ServiceNow",
      year: "2026",
    },
    {
      code: "PSM I",
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2026",
    },
    {
      code: "PSPO I",
      title: "Professional Scrum Product Owner I",
      issuer: "Scrum.org",
      year: "2026",
    },
  ],
  pursuing: ["CIS — Customer Service Management", "CIS — Discovery"],
  contactTitle: ["LET’S", "TALK."],
  contactNote:
    "ServiceNow development. Technical questions. New opportunities.",
  
  resumePath: "/public/assets/ISAAC-AMBROZEVICIUS_CV.pdf",
  contacts: [
    {
      label: "EMAIL",
      value: "ipambrozevicius@gmail.com",
      url: "mailto:ipambrozevicius@gmail.com",
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/isaac-ambrozevicius",
      url: "https://www.linkedin.com/in/isaac-ambrozevicius/",
    },
    {
      label: "GITHUB",
      value: "github.com/Ambrozevicius",
      url: "https://github.com/Ambrozevicius",
    },
    {
      label: "RESUME",
      value: "Download CV (PDF)",
      url: "/assets/ISAAC-AMBROZEVICIUS_CV.pdf",
    },
  ],
};
