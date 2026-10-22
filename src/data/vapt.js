import {
  Shield, Search, Globe, Server, Cloud, Lock, FileText, Users,
  BarChart3, Scan, Bug, Key, Network, Settings, AlertTriangle,
  CheckCircle, Target, Zap, Eye, Layers,
} from 'lucide-react';

export const vaptModules = [
  {
    id: 'executive-dashboard',
    title: 'Executive Dashboard',
    description: 'Gain a real-time view of your security posture with risk scores, vulnerability trends, critical findings, and scan activity—all in one place.',
    icon: BarChart3,
  },
  {
    id: 'org-management',
    title: 'Organization Management',
    description: 'Manage multiple tenants, teams, projects, and users with granular role-based access control for enterprise-scale operations.',
    icon: Users,
  },
  {
    id: 'asset-discovery',
    title: 'Asset Discovery',
    description: 'Automatically discover and inventory your attack surface—IP addresses, domains, subdomains, servers, cloud assets, APIs, and web applications.',
    icon: Search,
  },
  {
    id: 'vuln-scanning',
    title: 'Vulnerability Scanning',
    description: 'Run comprehensive scans covering network services, CVE identification, misconfiguration checks, and service detection across your infrastructure.',
    icon: Scan,
  },
  {
    id: 'web-app-security',
    title: 'Web Application Security',
    description: 'Assess web applications against the OWASP Top 10, test authentication flows, validate security headers, and analyze TLS configurations.',
    icon: Globe,
  },
  {
    id: 'api-security',
    title: 'API Security Testing',
    description: 'Discover REST and GraphQL endpoints, test authentication mechanisms, and detect API misconfigurations before attackers do.',
    icon: Key,
  },
  {
    id: 'network-vapt',
    title: 'Network VAPT',
    description: 'Perform port scanning, protocol analysis, and exposed-service detection to thoroughly assess your network security posture.',
    icon: Network,
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security Assessment',
    description: 'Evaluate your AWS, Azure, and GCP environments for configuration weaknesses, IAM issues, and exposed resources.',
    icon: Cloud,
  },
  {
    id: 'vuln-management',
    title: 'Vulnerability Management',
    description: 'Correlate findings with CVSS scores and CVE data, classify severity, deduplicate results, and prioritize what to fix first.',
    icon: Bug,
  },
  {
    id: 'pentest-workspace',
    title: 'Penetration Testing Workspace',
    description: 'Conduct authorized testing with structured workflows, collect evidence, record manual findings, and validate exploitability.',
    icon: Target,
  },
  {
    id: 'scan-management',
    title: 'Scan Management',
    description: 'Schedule scans, create reusable templates, track scan progress and history, and configure retry controls for reliable coverage.',
    icon: Settings,
  },
  {
    id: 'remediation',
    title: 'Remediation Management',
    description: 'Assign findings to teams, track fixes through resolution, monitor SLAs, retest patches, and manage exceptions.',
    icon: CheckCircle,
  },
  {
    id: 'compliance',
    title: 'Compliance Assessment',
    description: 'Map your findings to OWASP, CIS Controls, ISO 27001, PCI DSS, and NIST frameworks to measure and improve compliance posture.',
    icon: FileText,
  },
  {
    id: 'reporting',
    title: 'Reporting Engine',
    description: 'Generate executive PDF reports, detailed technical reports with evidence, and export data in CSV and JSON formats.',
    icon: FileText,
  },
  {
    id: 'integrations',
    title: 'Integrations & API',
    description: 'Connect with Jira, ServiceNow, Slack, Microsoft Teams, and SIEM platforms, or build custom workflows with the REST API.',
    icon: Layers,
  },
  {
    id: 'audit-logs',
    title: 'Audit & Activity Logs',
    description: 'Maintain a complete trail of user actions, scan events, configuration changes, and export history for accountability.',
    icon: Eye,
  },
  {
    id: 'ai-assistant',
    title: 'AI Security Assistant',
    description: 'Get AI-powered finding explanations, remediation suggestions, report drafting assistance, and risk summaries.',
    icon: Zap,
  },
  {
    id: 'administration',
    title: 'Platform Administration',
    description: 'Manage licensing, subscriptions, scan quotas, worker health, and tenant-level settings from a central console.',
    icon: Shield,
  },
];

export const vaptHowItWorks = [
  { step: 1, title: 'Add Your Assets', description: 'Register the IP addresses, domains, web applications, APIs, and cloud environments you want to protect.' },
  { step: 2, title: 'Scan', description: 'Launch automated vulnerability scans across your entire attack surface with customizable scan templates.' },
  { step: 3, title: 'Review & Prioritize', description: 'Analyze findings with CVSS scores, CVE mappings, and AI-assisted explanations to focus on what matters most.' },
  { step: 4, title: 'Assign & Fix', description: 'Assign vulnerabilities to the right teams, track remediation progress, and monitor SLA compliance.' },
  { step: 5, title: 'Retest', description: 'Verify that fixes are effective by retesting remediated findings before closing them out.' },
  { step: 6, title: 'Report', description: 'Generate comprehensive reports for executives and technical teams, and export data for integration.' },
];

export const vaptBenefits = [
  { title: 'Continuous Visibility', description: 'Maintain an always-current view of your security posture with scheduled scans and real-time dashboards.' },
  { title: 'Faster Remediation', description: 'Reduce mean time to remediation by assigning, tracking, and retesting findings in a single workflow.' },
  { title: 'Enterprise Scale', description: 'Multi-tenant architecture, RBAC, and team-based project organization for large and complex environments.' },
  { title: 'Compliance Mapping', description: 'Map findings to major frameworks like OWASP, CIS, NIST, PCI DSS, and ISO 27001 for audit readiness.' },
  { title: 'AI-Assisted Analysis', description: 'Leverage AI to explain findings, suggest remediations, and draft reports—saving analyst time.' },
  { title: 'Full Integration', description: 'Push findings into Jira, Slack, Teams, ServiceNow, and SIEM tools to fit your existing workflows.' },
];

export const vaptUseCases = [
  { title: 'Security Teams', description: 'Manage vulnerabilities across the organization, run penetration tests, and demonstrate compliance posture to leadership.' },
  { title: 'DevSecOps', description: 'Integrate VAPT into your pipeline, catch vulnerabilities early, and validate fixes before production deployments.' },
  { title: 'Managed Security Providers', description: 'Use multi-tenant features to manage assessments across multiple client organizations from a single platform.' },
  { title: 'Compliance & Audit', description: 'Map findings to regulatory frameworks, track remediation timelines, and generate audit-ready reports.' },
];

export const vaptIntegrations = [
  'Jira', 'ServiceNow', 'Slack', 'Microsoft Teams', 'SIEM Platforms', 'REST API',
];

export const vaptFAQ = [
  { q: 'What types of assets can Anjavor VAPT scan?', a: 'Anjavor VAPT can scan IP addresses, domains, subdomains, web applications, REST and GraphQL APIs, network services, and cloud environments across AWS, Azure, and GCP.' },
  { q: 'Is Anjavor VAPT only for automated scanning?', a: 'No. In addition to automated scanning, Anjavor VAPT provides a dedicated Penetration Testing Workspace for authorized manual testing, evidence collection, and manual finding validation.' },
  { q: 'Can I map findings to compliance frameworks?', a: 'Yes. Anjavor VAPT maps findings to OWASP, CIS Controls, ISO 27001, PCI DSS, and NIST frameworks. Note that this is framework mapping, not a certification.' },
  { q: 'Does Anjavor VAPT support multi-tenant environments?', a: 'Yes. Organizations, teams, projects, and users can all be managed with role-based access control across multiple tenants.' },
];
