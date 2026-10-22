import {
  Monitor, Smartphone, ScrollText, Users, ShieldCheck, Terminal,
  KeyRound, FileBarChart,
} from 'lucide-react';

export const oneModules = [
  {
    id: 'asset-inventory',
    title: 'Asset Inventory',
    description: 'Maintain a centralized inventory of all IT assets—laptops, desktops, servers, software licenses, and hardware components.',
    icon: Monitor,
  },
  {
    id: 'mdm-uem',
    title: 'MDM / UEM',
    description: 'Manage Windows, macOS, Linux, Android, and iOS devices from a single unified endpoint management console.',
    icon: Smartphone,
  },
  {
    id: 'log-management',
    title: 'Log Management',
    description: 'Collect, centralize, search, and retain logs from across your infrastructure with configurable alerts and retention policies.',
    icon: ScrollText,
  },
  {
    id: 'org-management',
    title: 'Organization Management',
    description: 'Support multiple companies and departments with user management and role-based access control.',
    icon: Users,
  },
  {
    id: 'endpoint-security',
    title: 'Endpoint Security',
    description: 'Monitor device compliance, encryption status, antivirus coverage, and patch visibility across your fleet.',
    icon: ShieldCheck,
  },
  {
    id: 'remote-management',
    title: 'Remote Management',
    description: 'Execute device commands, run scripts, and perform remote actions on managed endpoints from anywhere.',
    icon: Terminal,
  },
  {
    id: 'identity-management',
    title: 'Identity Management',
    description: 'Integrate with Microsoft Entra ID and Google Workspace for seamless user identity synchronization and access control.',
    icon: KeyRound,
  },
  {
    id: 'reporting',
    title: 'Reporting',
    description: 'Generate IT inventory reports, compliance summaries, and audit-ready documentation across your managed environment.',
    icon: FileBarChart,
  },
];

export const oneHowItWorks = [
  { step: 1, title: 'Enroll Devices', description: 'Onboard Windows, macOS, Linux, Android, and iOS devices into Anjavor One with simple enrollment workflows.' },
  { step: 2, title: 'Inventory', description: 'Automatically discover and catalog all hardware, software, and configuration details for every managed device.' },
  { step: 3, title: 'Collect Logs', description: 'Centralize logs from endpoints, servers, and cloud services into a single searchable repository.' },
  { step: 4, title: 'Monitor Compliance', description: 'Track device compliance, encryption status, antivirus coverage, and security posture in real time.' },
  { step: 5, title: 'Alert', description: 'Set up alerts for compliance drift, security events, and anomalous log patterns to respond quickly.' },
  { step: 6, title: 'Report', description: 'Generate reports for IT leadership, auditors, and compliance teams with comprehensive asset and security data.' },
];

export const oneBenefits = [
  { title: 'Unified Management', description: 'Manage assets, devices, and logs from a single platform instead of juggling multiple tools.' },
  { title: 'Cross-Platform Support', description: 'Full support for Windows, macOS, Linux, Android, and iOS gives you visibility across every endpoint.' },
  { title: 'Operational Efficiency', description: 'Automate inventory, compliance checks, and remote actions to free your IT team for strategic work.' },
  { title: 'Identity Integration', description: 'Sync with Microsoft Entra ID and Google Workspace so user and device data stays consistent.' },
  { title: 'Centralized Logging', description: 'Aggregate logs from every source with search, retention, and alerts—reducing blind spots.' },
  { title: 'Audit Readiness', description: 'Comprehensive reporting on assets, compliance, and device posture helps you stay audit-ready.' },
];

export const oneUseCases = [
  { title: 'IT Operations', description: 'Track every asset, manage devices remotely, and maintain a complete IT inventory across the organization.' },
  { title: 'Security & Compliance', description: 'Monitor endpoint security posture, enforce compliance policies, and generate audit-ready reports.' },
  { title: 'Helpdesk & Support', description: 'Remotely manage and troubleshoot devices, run scripts, and resolve issues without physical access.' },
  { title: 'Multi-Office Enterprises', description: 'Manage devices and assets across multiple offices, departments, and geographic locations from one console.' },
];

export const oneFAQ = [
  { q: 'What operating systems does Anjavor One support?', a: 'Anjavor One supports Windows, macOS, Linux, Android, and iOS for device management, and collects logs from any source that can forward them.' },
  { q: 'Can Anjavor One manage devices across multiple offices?', a: 'Yes. Anjavor One is built for multi-location, multi-department environments with centralized management and organization-based access control.' },
  { q: 'Does Anjavor One replace my SIEM?', a: 'Anjavor One provides log management capabilities including centralized collection, search, retention, and alerts. For advanced SIEM use cases like correlation and threat hunting, it can complement your existing SIEM.' },
  { q: 'How does identity integration work?', a: 'Anjavor One integrates with Microsoft Entra ID and Google Workspace to sync user identities, enabling consistent access control and device-user mapping.' },
];
