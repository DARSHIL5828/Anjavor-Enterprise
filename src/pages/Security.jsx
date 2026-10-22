import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, KeyRound, Database, FileText, Lock, ShieldCheck, Server, AlertCircle, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import TiltCard from '../components/TiltCard';
import ParticleField from '../components/ParticleField';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import siteConfig from '../config/site';

const securityPillars = [
  {
    icon: KeyRound,
    title: 'Role-Based Access Control (RBAC)',
    description: 'Enforce granular permissions across organizations, teams, and projects. Assign strict roles such as Super Admin, Security Lead, Penetration Tester, Auditor, and Read-Only Viewer so team members only access what they need.',
    highlights: [
      'Granular permission assignment per team and project',
      'Least-privilege default access policies',
      'Read-only auditor views for compliance review',
      'Session revocation and access expiration controls'
    ]
  },
  {
    icon: Database,
    title: 'Multi-Tenant Data Isolation',
    description: 'Every tenant organization operates in strict logical and cryptographic isolation. Workspace configurations, scan targets, asset inventories, logs, and vulnerability findings are strictly segmented at the data and API layers.',
    highlights: [
      'Strict tenant-scoped query execution and partition keys',
      'Zero cross-tenant data exposure or leakage pathways',
      'Isolated secret vaults and API credentials per tenant',
      'Independent organizational boundary administration'
    ]
  },
  {
    icon: FileText,
    title: 'Comprehensive Audit Logging',
    description: 'Every action taken within the platform is recorded in an immutable audit trail. Review scan configurations, role adjustments, report exports, credential alterations, and device commands with exact actor, timestamp, and IP context.',
    highlights: [
      'Append-only immutable event logs',
      'Timestamped user and service account activity',
      'Exportable audit records for regulatory and internal review',
      'Alerting on anomalous administrative changes'
    ]
  },
  {
    icon: Lock,
    title: 'Data Handling & Encryption',
    description: 'Data is protected using modern cryptographic standards both in transit and at rest. Communications between clients, agents, scanners, and backend services use encrypted TLS channels, while sensitive records are secured with AES-256 encryption.',
    highlights: [
      'TLS 1.3 enforced for all web and API traffic',
      'Industry-standard AES-256 encryption at rest',
      'Masking and redaction of sensitive scan evidence in reports',
      'Customizable data retention and secure deletion policies'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Authorized Testing Safeguards',
    description: 'Anjavor VAPT incorporates strict platform guardrails designed specifically to uphold authorized security testing boundaries and prevent accidental or non-permitted target scanning.',
    highlights: [
      'Pre-scan ownership validation and authorization confirmation',
      'Granular target scoping (IP ranges, domains, specific endpoints)',
      'Immediate scan abort and kill-switch controls',
      'Rate-limiting controls to prevent service disruption'
    ]
  },
  {
    icon: Server,
    title: 'Secure Architecture & Operations',
    description: 'We follow defense-in-depth principles throughout the software design lifecycle, from static code analysis and dependency auditing to container sandboxing and continuous vulnerability management.',
    highlights: [
      'Secure software development lifecycle (SSDLC)',
      'Automated dependency analysis and vulnerability patching',
      'Sandboxed execution for scan agents and remote scripts',
      'Zero default administrative credentials'
    ]
  }
];

/* ────── Interactive Enclave Defense Blueprint & Zero-Trust Probe Simulator ────── */
function InteractiveEnclaveDefenseBlueprint() {
  const [activeTier, setActiveTier] = useState(1);
  const [simulating, setSimulating] = useState(false);
  const [simulationLog, setSimulationLog] = useState(null);

  const tiers = [
    {
      id: 1,
      name: 'Layer 1: Global Edge & Anycast DDoS Shield',
      badge: 'Edge Ingress',
      icon: Shield,
      latency: '1.2ms',
      tech: 'Anycast CDN • TLS 1.3 • Web Application Firewall (WAF) • Geo-Fencing',
      desc: 'Absorbs volumetrics up to 320 Tbps, terminates malicious automated botnets, and validates client SSL certificates before entering private cloud VPCs.',
    },
    {
      id: 2,
      name: 'Layer 2: Zero-Trust Gateway & Mutual TLS',
      badge: 'Identity & Auth',
      icon: KeyRound,
      latency: '0.8ms',
      tech: 'Envoy Service Mesh • mTLS Identity Handshake • Strict RBAC Claims • SPIFFE IDs',
      desc: 'Every incoming packet requires cryptographic service-to-service attestation. No implicit trust inside the perimeter; expired tokens revoked instantaneously.',
    },
    {
      id: 3,
      name: 'Layer 3: Kernel eBPF Sandbox & Multi-Tenant Partitioning',
      badge: 'Core Isolation',
      icon: Database,
      latency: '0.3ms',
      tech: 'Linux eBPF • Seccomp-BPF Syscall Filter • Hard Partition Keys • Ephemeral Pods',
      desc: 'Strict logical, query-level, and cryptographic boundaries. Tenant records are strictly segmented; zero cross-tenant memory or storage leakage pathways.',
    },
    {
      id: 4,
      name: 'Layer 4: Hardware Security Module (HSM) Vault',
      badge: 'Data at Rest',
      icon: Lock,
      latency: '0.4ms',
      tech: 'FIPS 140-2 Level 3 HSM • AES-256-GCM Envelope Encryption • Auto-Rotating DEK',
      desc: 'All tenant credentials, scan telemetry, and vulnerability findings are encrypted at rest with unique customer-managed or system-isolated master keys.',
    },
  ];

  const probes = [
    {
      name: 'Simulate Cross-Tenant Data Leak Probe',
      targetTier: 3,
      log: '[DEFENSE LAYER 3 TRIGGERED] Host eBPF filter intercepted query with foreign partition key: SELECT * FROM vulnerabilities WHERE org_id != context_id. Query aborted in 0.12ms. Zero data leakage.',
    },
    {
      name: 'Simulate Automated Volumetric DDoS Attack',
      targetTier: 1,
      log: '[DEFENSE LAYER 1 TRIGGERED] Anycast edge detected 840,000 SYN packets/sec from untrusted ASN. Autonomous rate limiter dropped 100% of malicious ingress. Legitimate traffic unaffected.',
    },
    {
      name: 'Simulate Forged JWT Token Tamper Attempt',
      targetTier: 2,
      log: '[DEFENSE LAYER 2 TRIGGERED] Gateway rejected forged HMAC signature on claim: role=superadmin. Cryptographic handshake terminated. IP added to temporary quarantine.',
    },
  ];

  const runProbe = (probe) => {
    if (simulating) return;
    setSimulating(true);
    setActiveTier(probe.targetTier);
    setSimulationLog({ status: 'INTERCEPTING', text: `Injecting probe against Zero-Trust architecture...` });

    setTimeout(() => {
      setSimulationLog({ status: 'MITIGATED', text: probe.log });
      setSimulating(false);
    }, 1100);
  };

  const activeTierObj = tiers.find((t) => t.id === activeTier) || tiers[0];
  const Icon = activeTierObj.icon;

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      <div className="relative rounded-3xl bg-card border border-line p-6 lg:p-8 shadow-card overflow-hidden">
        {/* Ambient Grid */}
        <div className="absolute inset-0 cyber-grid-perspective opacity-40 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-ice/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-ice-strong/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-line">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-ice animate-pulse" />
              <span className="text-xs font-mono font-semibold text-ice-strong uppercase tracking-wider">
                Defense-in-Depth Interactive Enclave
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-ice-soft text-ice-strong border border-ice/20 font-mono font-semibold">
                Zero Implicit Trust Verified
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink">
              4-Tier Architectural Safeguards &amp; Real-Time Simulation
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-severity-low bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-severity-low" />
              All Security Layers Active
            </span>
          </div>
        </div>

        {/* Blueprint Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Left Column: Interactive Tier Nodes */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[11px] font-mono uppercase text-muted tracking-wider block">
              Click a defense tier to inspect cryptographic isolation:
            </span>
            {tiers.map((t) => {
              const isSelected = activeTier === t.id;
              const TIcon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTier(t.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden flex items-center justify-between ${
                    isSelected
                      ? 'bg-ice-soft border-ice shadow-sm scale-[1.01]'
                      : 'bg-card border-line text-muted hover:border-ice/40'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                        isSelected ? 'bg-primary text-white shadow-sm' : 'bg-ice-soft text-ice'
                      }`}
                    >
                      <TIcon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${isSelected ? 'text-ink' : 'text-ink/80'}`}>
                          {t.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-bg text-muted border border-line">
                          {t.badge}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-muted block mt-0.5">
                        Latency Penalty: &lt; {t.latency}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`w-3 h-3 rounded-full ${
                      isSelected ? 'bg-ice shadow-sm' : 'bg-line'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Tier Deep Dive & Ingress Attack Simulator */}
          <div className="lg:col-span-6 space-y-4">
            {/* Active Tier Inspector Card */}
            <div className="bg-card border border-line rounded-2xl p-5 relative overflow-hidden backdrop-blur-md shadow-card">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-ice-soft text-ice flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-ink">{activeTierObj.name}</h4>
                    <span className="text-[10px] font-mono text-ice-strong font-medium">{activeTierObj.tech}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted leading-relaxed mb-4">
                {activeTierObj.desc}
              </p>

              {/* Ingress Attack Simulator */}
              <div className="bg-bg/60 border border-line rounded-xl p-3.5">
                <span className="text-[11px] font-mono uppercase text-ink font-semibold block mb-2 flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-severity-low" />
                  Live Ingress Probe Simulator
                </span>
                <p className="text-[11px] text-muted mb-3">
                  Click a test vector below to observe real-time automated mitigation:
                </p>

                <div className="space-y-1.5 mb-3">
                  {probes.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => runProbe(p)}
                      disabled={simulating}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-mono bg-card border border-line hover:border-ice text-ink hover:text-ice-strong transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span>⚡ {p.name}</span>
                      <span className="text-[10px] text-ice-strong font-semibold">Simulate →</span>
                    </button>
                  ))}
                </div>

                {/* Simulation Output Log */}
                {simulationLog && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg border font-mono text-[11px] leading-relaxed ${
                      simulationLog.status === 'MITIGATED'
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800'
                        : 'bg-ice-soft border-ice/30 text-ice-strong animate-pulse'
                    }`}
                  >
                    <div className="font-bold mb-0.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-severity-low" />
                      STATUS: {simulationLog.status}
                    </div>
                    <div>{simulationLog.text}</div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Compliance Certification Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              {[
                { name: 'SOC 2 Type II', status: 'Audited' },
                { name: 'ISO/IEC 27001', status: 'Certified' },
                { name: 'GDPR & HIPAA', status: 'Compliant' },
                { name: 'PCI-DSS 4.0', status: 'Validated' },
              ].map((c) => (
                <div key={c.name} className="bg-card border border-line rounded-xl p-2.5 shadow-sm">
                  <div className="text-xs font-semibold text-ink">{c.name}</div>
                  <div className="text-[10px] text-severity-low font-mono mt-0.5 font-semibold">✓ {c.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Security() {
  const route = siteConfig.routes.find((r) => r.path === '/security');

  return (
    <>
      <SEO title="Trust & Security" description={route.description} path="/security" />
      <main id="main-content" className="pt-24 relative overflow-hidden">
        {/* Parallax particles in hero */}
        <ParticleField count={20} variant="cyan" />

        {/* Hero */}
        <section className="section-padding relative z-10">
          <div className="container-default text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ice-soft border border-ice/20 text-ice-strong mb-6">
                Security Architecture
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold gradient-text-mixed mb-6">
                Built on Trust &amp; Engineering Principles
              </h1>
              <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
                Security is not an add-on feature—it is the foundation of our software architecture. Explore the design principles, isolation models, and safeguards built into every Anjavor platform.
              </p>

              {/* Interactive Enclave Defense Blueprint & Probe Simulator */}
              <InteractiveEnclaveDefenseBlueprint />
            </AnimatedSection>
          </div>
        </section>

        {/* Design Principles Grid with 3D Tilt */}
        <section className="section-padding pt-0 relative z-10">
          <div className="container-default">
            <SectionHeader
              badge="Core Pillars"
              title="Architectural Safeguards"
              description="How we protect your organizations, infrastructure telemetry, and vulnerability intelligence."
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <StaggerItem key={pillar.title}>
                    <TiltCard tiltAmount={5} glare={true} className="rounded-2xl h-full">
                      <GlassCard className="p-8 h-full flex flex-col justify-between border-line hover:border-ice/30 transition-all shadow-card">
                        <div>
                          <div className="w-12 h-12 rounded-xl bg-ice-soft border border-ice/20 text-ice flex items-center justify-center mb-5 shadow-sm">
                            <IconComponent size={24} />
                          </div>
                          <h2 className="text-xl font-heading font-semibold text-ink mb-3">
                            {pillar.title}
                          </h2>
                          <p className="text-muted text-sm leading-relaxed mb-6">
                            {pillar.description}
                          </p>
                        </div>
                        <div className="border-t border-line pt-5">
                          <ul className="space-y-2">
                            {pillar.highlights.map((item) => (
                              <li key={item} className="text-xs text-muted flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-ice mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </GlassCard>
                    </TiltCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Commitment to Truthful Security Statement */}
        <section className="section-padding bg-bg/40 border-y border-line relative z-10">
          <div className="container-default max-w-4xl">
            <AnimatedSection>
              <div className="solid-card p-8 md:p-10 border-l-4 border-ice shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ice-soft border border-ice/20 text-ice flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ink mb-3">
                      Responsible Engineering Pledge
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      We develop our scanning agents and management tools strictly for authorized, defensive cybersecurity and IT administration operations. We adhere to rigorous verification procedures and audit protections to ensure software integrity across all customer deployments.
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-ice-strong font-medium">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-severity-low" /> Zero unauthorized targeting
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-severity-low" /> Tamper-evident logging
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-severity-low" /> Cryptographic isolation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <CTASection
          title="Questions About Our Security Architecture?"
          description="Speak directly with our security architects for deep-dive technical evaluations and architecture documentation."
          primaryText="Contact Security Team"
          primaryTo="/contact"
        />
      </main>
    </>
  );
}
