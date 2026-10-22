import {
  Shield, Search, Bug, FileText, ScrollText, Monitor, Settings, Headphones,
} from 'lucide-react';

export const services = [
  {
    id: 'penetration-testing',
    title: 'Penetration Testing',
    description: 'Our team conducts authorized penetration tests against your web applications, APIs, networks, and cloud infrastructure to identify exploitable vulnerabilities before malicious actors do. We provide detailed findings with severity ratings and actionable remediation guidance.',
    process: ['Scope definition & authorization', 'Reconnaissance & enumeration', 'Exploitation & validation', 'Reporting & remediation support'],
    icon: Shield,
  },
  {
    id: 'vulnerability-assessments',
    title: 'Vulnerability Assessments',
    description: 'We perform comprehensive vulnerability assessments across your digital assets to discover security weaknesses, misconfigurations, and outdated components. Each assessment delivers a prioritized list of findings mapped to industry standards.',
    process: ['Asset identification', 'Automated & manual scanning', 'Finding analysis & prioritization', 'Remediation roadmap delivery'],
    icon: Search,
  },
  {
    id: 'security-audits',
    title: 'Security Audits',
    description: 'Our security audits evaluate your organization\'s security controls, policies, and configurations against best practices and compliance frameworks. We identify gaps and provide practical recommendations to strengthen your security posture.',
    process: ['Control framework selection', 'Configuration & policy review', 'Gap analysis', 'Recommendations & report'],
    icon: Bug,
  },
  {
    id: 'log-monitoring',
    title: 'Log Monitoring Setup',
    description: 'We help you deploy and configure centralized log collection, set up meaningful alerts, and establish retention policies so your team gains visibility into what is happening across your infrastructure.',
    process: ['Source identification', 'Collection agent deployment', 'Alert rule configuration', 'Dashboard & runbook setup'],
    icon: ScrollText,
  },
  {
    id: 'asset-tracking',
    title: 'Asset Tracking Setup',
    description: 'We set up a complete IT asset inventory covering hardware, software, and cloud resources so you always know what you own, where it is, and what state it is in.',
    process: ['Discovery & enrollment', 'Asset categorization', 'Lifecycle tagging', 'Reporting configuration'],
    icon: Monitor,
  },
  {
    id: 'device-management',
    title: 'Device Management Setup',
    description: 'We configure unified endpoint management for your Windows, macOS, Linux, Android, and iOS devices, including enrollment workflows, compliance policies, and remote management capabilities.',
    process: ['Platform & policy design', 'Enrollment workflow setup', 'Compliance policy deployment', 'Remote action & script configuration'],
    icon: Settings,
  },
  {
    id: 'consulting',
    title: 'Consulting & Support',
    description: 'Our consultants work with your team to plan security programs, architect IT management workflows, and resolve complex technical challenges. We offer both project-based engagements and ongoing advisory support.',
    process: ['Needs assessment', 'Strategy & architecture planning', 'Implementation guidance', 'Ongoing advisory & support'],
    icon: Headphones,
  },
];
