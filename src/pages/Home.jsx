import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Shield, Monitor, Scan, Lock, Users, BarChart3,
  Zap, Globe, Cloud, ChevronRight, Smartphone, ScrollText,
  CheckCircle, Target, ShieldCheck, FileText, Search,
  Sparkles, Layers, Cpu, ArrowUpRight
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { VAPTDashboard, OneDashboard } from '../components/DashboardPreview';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import ParticleField from '../components/ParticleField';
import MagneticButton from '../components/MagneticButton';
import TiltCard from '../components/TiltCard';
import AnimatedCounter from '../components/AnimatedCounter';
import siteConfig from '../config/site';
import useMobileDetect from '../hooks/useMobileDetect';

/* ────── Keyword Switcher ────── */
const heroHighlights = [
  { word: 'Vulnerabilities', tag: 'VAPT Scan', icon: Shield },
  { word: 'Attack Surfaces', tag: 'Full Mesh', icon: Globe },
  { word: 'Cloud Assets', tag: 'AWS / K8s', icon: Cloud },
  { word: 'Fleet Endpoints', tag: 'Cross-OS', icon: Monitor },
  { word: 'Zero-Day Risks', tag: 'eBPF Shield', icon: Zap },
];

function HolographicHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroHighlights.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const current = heroHighlights[index];
  const Icon = current.icon;

  return (
    <div className="relative inline-flex items-center justify-center min-h-[1.35em] mt-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={current.word}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 font-bold"
        >
          <span className="gradient-text-cyan">
            {current.word}.
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-ice-soft border border-ice/20 text-ice-strong align-middle">
            <Icon size={12} className="text-ice" />
            {current.tag}
          </span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/* ────── Hero ────── */
function Hero() {
  const isMobile = useMobileDetect();

  return (
    <section className="relative min-h-[96vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Subtle Grid — hidden on mobile via CSS */}
      <div className="absolute inset-0 cyber-grid-perspective opacity-40 pointer-events-none" />

      {/* Particle Field — already hidden below sm breakpoint, but skip rendering entirely on mobile */}
      {!isMobile && <ParticleField count={26} variant="cyan" />}

      {/* Ambient Glows — skip on mobile (two large floating motion.div with infinite animation) */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(125,211,252,0.15) 0%, transparent 68%)',
              top: '5%',
              left: '15%',
            }}
            animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
              bottom: '10%',
              right: '12%',
            }}
            animate={{ x: [0, -30, 20, 0], y: [0, 25, -40, 0], scale: [1, 0.94, 1.06, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Subtle Concentric Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-ice/10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full border border-ice/5 pointer-events-none" />
        </div>
      )}

      <div className="container-default px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Title */}
          <AnimatedSection variant="fadeUp" delay={0.08}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.1] mb-6">
              <span className="text-ink block">Discover. Assess.</span>
              <span className="bg-gradient-to-r from-ink via-muted to-line bg-clip-text text-transparent block">
                Neutralize
              </span>
              <HolographicHeadline />
            </h1>
          </AnimatedSection>

          {/* Value Proposition */}
          <AnimatedSection variant="fadeUp" delay={0.15}>
            <p className="text-base sm:text-lg lg:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Two synchronized enterprise platforms to continuously harden your digital attack surface.
              <span className="text-ice font-medium"> Anjavor VAPT</span> discovers and exploits vulnerabilities before adversaries can.
              <span className="text-ice-strong font-medium"> Anjavor One</span> unifies device compliance, asset telemetry, and central logs.
            </p>
          </AnimatedSection>

          {/* Call to Actions */}
          <AnimatedSection variant="fadeUp" delay={0.22}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton strength={0.22} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="btn-primary pulse-glow text-base px-8 py-3.5 w-full sm:w-auto flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Launch Live Console</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <Link
                to="/products"
                className="btn-secondary text-base px-8 py-3.5 w-full sm:w-auto flex items-center justify-center gap-2 transition-colors"
              >
                <ShieldCheck size={18} className="text-ice" />
                <span>Explore Dual Platforms</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Trust Row */}
          <AnimatedSection variant="fadeUp" delay={0.3}>
            <div className="mt-10 pt-6 border-t border-line/50 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-3xl mx-auto font-mono text-xs">
              <div className="flex items-center justify-center gap-1.5 text-muted">
                <CheckCircle size={14} className="text-severity-low flex-shrink-0" />
                <span>&lt;14ms Remediation</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-muted">
                <Zap size={14} className="text-ice flex-shrink-0" />
                <span>100% Zero-Day Defended</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-muted">
                <Lock size={14} className="text-severity-low flex-shrink-0" />
                <span>SOC 2 &amp; ISO 27001</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-muted">
                <Globe size={14} className="text-ice flex-shrink-0" />
                <span>100K+ Endpoints</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Dashboard Showcase — on mobile, no floating animation */}
        <div className="mt-14 lg:mt-18 relative">
          {isMobile ? (
            <div className="relative z-10">
              <VAPTDashboard />
            </div>
          ) : (
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <VAPTDashboard />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ────── Stats Section ────── */
function StatsSection() {
  const stats = [
    { end: 120000, suffix: '+', label: 'Vulnerabilities Identified', tag: 'SCAN RADAR', icon: Target },
    { end: 99, suffix: '.9%', label: 'Platform Availability', tag: 'SLA METRIC', icon: Zap },
    { end: 45000, suffix: '+', label: 'Assets & Endpoints Managed', tag: 'FLEET SCALE', icon: Monitor },
    { end: 10, suffix: 'x', label: 'Faster Remediation Turnaround', tag: 'TIME-TO-RESOLVE', icon: ShieldCheck },
  ];

  return (
    <section className="py-12 border-y border-line/60 bg-card/30 relative overflow-hidden">
      <div className="container-default px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <StaggerItem key={s.label}>
              <GlassCard
                className="p-6 text-center h-full hover:border-ice/50 transition-all"
                watermark={`0${idx + 1}`}
                showBrackets={true}
                showSheen={true}
                topBeam={true}
              >
                <div className="relative z-10 flex flex-col items-center justify-between h-full">
                  <div className="w-full flex items-center justify-between mb-3 text-[10px] font-mono text-muted/80">
                    <span className="flex items-center gap-1.5 text-ice-strong font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-ice animate-ping" />
                      {s.tag}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-bg/80 border border-line/60 text-muted/70 font-sans">
                      ACTIVE
                    </span>
                  </div>
                  <div className="my-2">
                    <AnimatedCounter end={s.end} suffix={s.suffix} label="" duration={2200} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-muted mt-1 leading-snug">{s.label}</p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────── Product Cards with 3D Tilt ────── */
function ProductCards() {
  const products = [
    {
      name: 'Anjavor VAPT',
      tagline: 'Vulnerability Assessment & Penetration Testing',
      description: 'Discover, scan, prioritize, and remediate security vulnerabilities across your entire attack surface—networks, web apps, APIs, and cloud.',
      to: '/products/anjavor-vapt',
      watermark: 'VAPT',
      badge: 'OFFENSIVE SECURITY',
      telemetry: 'CVSS v4.0 Engine // 0-Day Scanner',
      statBadge: '99.98% True-Positive Detection',
      gradient: 'from-ice/15 to-ice-strong/5',
      iconColor: 'text-ice',
      features: ['Automated Surface Discovery', 'Deep Web & API Vulnerability Scans', 'Guided Penetration Testing Workspace', 'Compliance Mapping (ISO 27001, SOC 2)'],
      icon: Shield,
    },
    {
      name: 'Anjavor One',
      tagline: 'Unified IT Asset, Device & Log Management',
      description: 'Manage every device, track every asset, and centralize every log from a single platform—Windows, macOS, Linux, Android, and iOS.',
      to: '/products/anjavor-one',
      watermark: 'ONE',
      badge: 'UNIFIED IT & FLEET',
      telemetry: 'Cross-OS MDM // Centralized Logs',
      statBadge: 'Real-Time Endpoint Telemetry',
      gradient: 'from-ice-strong/15 to-ice/5',
      iconColor: 'text-ice-strong',
      features: ['Unified Cross-Platform MDM/UEM', 'Hardware & Software Asset Inventory', 'High-Throughput Centralized Log Ingestion', 'Automated Remote Patch & Command Execution'],
      icon: Monitor,
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="container-default">
        <SectionHeader
          badge="Flagship Platforms"
          title="Two Platforms, One Mission"
          description="Comprehensive cybersecurity and IT management built to defend and orchestrate modern organizations."
        />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((p) => (
            <StaggerItem key={p.name}>
              <TiltCard tiltAmount={5} glare={true} className="rounded-2xl h-full">
                <Link to={p.to} className="block group h-full">
                  <GlassCard
                    className="p-8 sm:p-10 h-full border border-line/90 hover:border-ice/60 transition-all"
                    watermark={p.watermark}
                    showBrackets={true}
                    showSheen={true}
                    topBeam={true}
                  >
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        {/* Header Telemetry Row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                          <div className="jewel-badge w-14 h-14">
                            <p.icon size={28} className={p.iconColor} />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-ice-soft border border-ice/25 text-ice-strong font-mono flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-ice animate-pulse" />
                              {p.badge}
                            </span>
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <div className="mb-4">
                          <div className="text-[11px] font-mono text-muted/70 uppercase tracking-widest mb-1">
                            {p.telemetry}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-ink mb-1 group-hover:text-ice-strong transition-colors">
                            {p.name}
                          </h3>
                          <p className="text-sm font-semibold text-ice-strong font-sans">
                            {p.tagline}
                          </p>
                        </div>

                        <p className="text-muted leading-relaxed mb-6 text-sm sm:text-base">
                          {p.description}
                        </p>

                        {/* Interactive Feature Matrix */}
                        <div className="space-y-2.5 mb-8 bg-card/60 p-4 rounded-xl border border-line/60">
                          <div className="text-[11px] font-mono text-muted/80 uppercase tracking-wider mb-2 flex items-center justify-between">
                            <span>Key Platform Modules</span>
                            <span className="text-ice-strong font-semibold">{p.statBadge}</span>
                          </div>
                          {p.features.map((f) => (
                            <div key={f} className="flex items-center gap-2.5 text-sm text-ink font-medium">
                              <span className="w-5 h-5 rounded-full bg-ice-soft border border-ice/25 flex items-center justify-center flex-shrink-0">
                                <CheckCircle size={13} className={p.iconColor} />
                              </span>
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Callout */}
                      <div className="pt-4 border-t border-line/60 flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${p.iconColor} group-hover:gap-3 transition-all font-sans`}>
                          Explore Platform <ChevronRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-bg/80 border border-line/60 text-muted">
                          SOC 2 TYPE II READY
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────── What We Do ────── */
function WhatWeDo() {
  const items = [
    { icon: Scan, num: '01', code: 'VULN-SCAN', title: 'Identify Vulnerabilities', description: 'Scan your networks, applications, APIs, and cloud infrastructure to find security weaknesses before they are exploited.' },
    { icon: Target, num: '02', code: 'PEN-TEST', title: 'Test Defenses', description: 'Conduct authorized penetration tests and validate that your security controls work under real-world adversary conditions.' },
    { icon: CheckCircle, num: '03', code: 'REMEDIATE', title: 'Remediate & Verify', description: 'Assign findings to the right teams, track SLA fixes, and retest to confirm that vulnerabilities are properly closed.' },
    { icon: Monitor, num: '04', code: 'ASSET-INV', title: 'Manage IT Assets', description: 'Track every device, software license, and hardware component across your organization with a complete single inventory.' },
    { icon: Smartphone, num: '05', code: 'MDM-CTRL', title: 'Control Endpoints', description: 'Enroll and manage devices across Windows, macOS, Linux, Android, and iOS from one high-security console.' },
    { icon: ScrollText, num: '06', code: 'LOG-INGEST', title: 'Centralize Logs', description: 'Collect and search logs from every source with configurable retention and real-time alerting to eliminate blind spots.' },
  ];

  return (
    <section className="section-padding relative">
      <div className="glow-blob w-80 h-80 -left-40 top-1/2" style={{ background: 'radial-gradient(circle, rgba(125,211,252,0.1), transparent)' }} aria-hidden="true" />
      <div className="container-default relative z-10">
        <SectionHeader
          badge="What We Do"
          title="Security and IT Management, Simplified"
          description="From vulnerability scanning to device management, we give you the tools to protect and manage your digital environment."
          gradient="mixed"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <GlassCard
                className="p-7 h-full hover:border-ice/50 transition-all"
                watermark={item.num}
                showBrackets={true}
                showSheen={true}
                topBeam={true}
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="jewel-badge w-12 h-12 text-ice">
                        <item.icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                        {item.code}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-ink mb-2 group-hover:text-ice-strong transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-line/50 flex items-center justify-between text-[11px] text-muted font-sans">
                    <span className="text-ice-strong font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-ice" />
                      Continuous Telemetry
                    </span>
                    <span className="font-mono text-muted/60">LIVE</span>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────── Problems We Solve ────── */
function ProblemsWeSolve() {
  const problems = [
    { problem: 'Blind spots in your attack surface', solution: 'Anjavor VAPT discovers all your assets—domains, IPs, APIs, cloud—so nothing goes unscanned.', tag: 'ATTACK SURFACE' },
    { problem: 'Vulnerabilities found but never fixed', solution: 'Built-in remediation management with SLA tracking, assignment, and retesting closes the loop.', tag: 'SLA WORKFLOW' },
    { problem: 'Scattered IT asset data across silos', solution: 'Anjavor One centralizes every device, license, and hardware record in a single inventory.', tag: 'SINGLE TRUTH' },
    { problem: 'No visibility into endpoint compliance', solution: 'Real-time monitoring of encryption, antivirus, and patch status across your entire fleet.', tag: 'FLEET COMPLIANCE' },
    { problem: 'Logs spread across dozens of systems', solution: 'Centralized log management with search, retention, and alerts gives you one place to look.', tag: 'LOG INGESTION' },
    { problem: 'Compliance evidence is manual and painful', solution: 'Map vulnerabilities to frameworks and generate audit-ready reports with one click.', tag: 'AUTOMATED AUDIT' },
  ];

  return (
    <section className="section-padding bg-card/35 relative">
      <div className="container-default">
        <SectionHeader
          badge="Diagnostic & Resolution"
          title="Challenges We Help You Overcome"
          description="Real problems that security teams, IT teams, and leadership face every day—and how our dual platforms solve them."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <StaggerItem key={i}>
              <GlassCard
                className="p-6 h-full hover:border-ice/50 transition-all"
                watermark={`0${i + 1}`}
                showBrackets={true}
                showSheen={true}
                topBeam={true}
              >
                <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted/70 pb-2 border-b border-line/40">
                    <span className="text-ice-strong font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-ice" />
                      {item.tag}
                    </span>
                    <span className="text-[10px] bg-bg/80 px-2 py-0.5 rounded border border-line/50">DIAGNOSTIC MATRIX</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-severity-critical/[0.08] border border-severity-critical/20">
                      <span className="w-5 h-5 rounded-full bg-severity-critical/20 text-severity-critical font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                      <div>
                        <div className="text-[10px] font-mono text-severity-critical font-bold uppercase tracking-wider mb-0.5">The Challenge</div>
                        <p className="text-ink text-sm font-semibold">{item.problem}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-severity-low/[0.09] border border-severity-low/25">
                      <span className="w-5 h-5 rounded-full bg-severity-low/20 text-severity-low font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <div className="text-[10px] font-mono text-severity-low font-bold uppercase tracking-wider mb-0.5">Anjavor Resolution</div>
                        <p className="text-ink text-sm font-medium">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────── Headline Features ────── */
function HeadlineFeatures() {
  const vaptFeatures = [
    { icon: Search, tag: 'SURFACE SCAN', title: 'Full-Spectrum Scanning', description: 'Network, web app, API, and cloud scanning in one unified surface discovery engine.' },
    { icon: Target, tag: 'PENTEST WORKSPACE', title: 'Adversary Validation', description: 'Authorized manual testing with evidence collection, proof of concept, and verification.' },
    { icon: Zap, tag: 'AI ASSIST', title: 'AI Security Assistant', description: 'AI-powered threat explanations, remediation guidance, and automated report drafting.' },
    { icon: BarChart3, tag: 'RISK DASHBOARD', title: 'Executive Dashboards', description: 'Real-time CVSS risk scores, vulnerability velocity, and real-time posture indicators.' },
    { icon: FileText, tag: 'COMPLIANCE', title: 'Compliance Mapping', description: 'One-click cross-mapping to OWASP Top 10, CIS Benchmarks, NIST CSF, and ISO 27001.' },
    { icon: CheckCircle, tag: 'SLA TRACKER', title: 'Remediation Workflow', description: 'Assign, track, retest, and verify findings with SLA monitoring and auto-alerts.' },
  ];

  const oneFeatures = [
    { icon: Monitor, tag: 'SINGLE INVENTORY', title: 'Complete Asset Inventory', description: 'Track every laptop, cloud server, software license, and hardware component in real time.' },
    { icon: Smartphone, tag: 'CROSS-PLATFORM', title: 'Fleet MDM & UEM', description: 'Zero-touch enrollment and remote management for Windows, macOS, Linux, Android, and iOS.' },
    { icon: ScrollText, tag: 'LOG PIPELINE', title: 'High-Throughput Logs', description: 'Centralized log collection, elastic search, long-term retention, and alerting.' },
    { icon: ShieldCheck, tag: 'COMPLIANCE AGENT', title: 'Endpoint Security Health', description: 'Monitor disk encryption, antivirus health, firewall, and patch levels continuously.' },
    { icon: Users, tag: 'IDENTITY SYNC', title: 'Identity & Directory Sync', description: 'Seamless native integration with Microsoft Entra ID, Google Workspace, and Okta.' },
    { icon: Globe, tag: 'REMOTE TERMINAL', title: 'Remote Management & Shell', description: 'Execute zero-latency scripts, lock stolen devices, and deploy patches remotely.' },
  ];

  return (
    <section className="section-padding">
      <div className="container-default">
        <SectionHeader
          badge="Key Capabilities"
          title="What Makes Our Products Powerful"
          description="Engineered with depth, speed, and precision for both offensive security and defensive operations."
          gradient="mixed"
        />

        <div className="space-y-16">
          {/* VAPT features */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-ice shadow-[0_0_8px_rgba(2,132,199,0.8)]" />
                <h3 className="text-xl font-heading font-bold text-ink">Anjavor VAPT Capabilities</h3>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                  OFFENSIVE MODULE
                </span>
              </div>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {vaptFeatures.map((f, idx) => (
                <StaggerItem key={f.title}>
                  <GlassCard
                    className="p-6 h-full hover:border-ice/50 transition-all"
                    watermark={`0${idx + 1}`}
                    showBrackets={true}
                    showSheen={true}
                  >
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="jewel-badge w-11 h-11 text-ice">
                            <f.icon size={20} />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg/80 border border-line/60 text-muted/80">
                            {f.tag}
                          </span>
                        </div>
                        <h4 className="font-heading font-bold text-ink text-base mb-1.5 group-hover:text-ice-strong transition-colors">
                          {f.title}
                        </h4>
                        <p className="text-muted text-xs leading-relaxed">{f.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* One features */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-ice-strong shadow-[0_0_8px_rgba(3,105,161,0.8)]" />
                <h3 className="text-xl font-heading font-bold text-ink">Anjavor One Capabilities</h3>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                  FLEET & LOG MODULE
                </span>
              </div>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {oneFeatures.map((f, idx) => (
                <StaggerItem key={f.title}>
                  <GlassCard
                    className="p-6 h-full hover:border-ice-strong/50 transition-all"
                    watermark={`0${idx + 1}`}
                    showBrackets={true}
                    showSheen={true}
                  >
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="jewel-badge w-11 h-11 text-ice-strong">
                            <f.icon size={20} />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg/80 border border-line/60 text-muted/80">
                            {f.tag}
                          </span>
                        </div>
                        <h4 className="font-heading font-bold text-ink text-base mb-1.5 group-hover:text-ice-strong transition-colors">
                          {f.title}
                        </h4>
                        <p className="text-muted text-xs leading-relaxed">{f.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────── Better Together (Interactive Dual-Cockpit Card) ────── */
function BetterTogether() {
  return (
    <section className="section-padding bg-card/35 relative overflow-hidden">
      <div className="container-default">
        <SectionHeader
          badge="Better Together"
          title="Continuous SecOps & ITOps Synchronization"
          description="When you discover vulnerabilities with VAPT and manage endpoints with One, remediation loops drop from weeks to minutes."
          gradient="mixed"
        />
        <AnimatedSection>
          <GlassCard
            className="p-8 sm:p-12 max-w-4xl mx-auto hover:border-ice/60 transition-all"
            showBrackets={true}
            showSheen={true}
            topBeam={true}
          >
            <div className="relative z-10">
              {/* Telemetry Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-line/60 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-severity-low animate-ping" />
                  <span className="text-ink font-bold">SYNCHRONIZED THREAT REMEDIATION PIPELINE</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                  LATENCY: &lt;14MS
                </span>
              </div>

              {/* Dual Engine Interactive Display */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Left: VAPT */}
                <div className="p-6 rounded-2xl bg-card/70 border border-line/70 text-center hover:border-ice/50 transition-all group/vapt">
                  <div className="jewel-badge w-16 h-16 mx-auto mb-4 text-ice">
                    <Shield size={32} />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-ice-soft text-ice-strong font-bold uppercase">
                    Offensive
                  </span>
                  <h4 className="font-heading font-bold text-lg text-ink mt-2 mb-1">Anjavor VAPT</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Identifies attack surfaces, validates exploits, and measures real CVSS impact.
                  </p>
                </div>

                {/* Center: Real-time Telemetry Bridge */}
                <div className="flex flex-col items-center justify-center text-center py-4">
                  <div className="text-[10px] font-mono text-ice-strong font-semibold uppercase tracking-wider mb-2">
                    Bidirectional Sync
                  </div>
                  <motion.div
                    className="flex items-center gap-1.5 text-ice p-3 rounded-full bg-ice-soft border border-ice/25"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight size={22} className="text-ice animate-pulse" />
                  </motion.div>
                  <div className="text-[10px] font-mono text-muted/70 mt-2">
                    Zero-Friction Handshake
                  </div>
                </div>

                {/* Right: One */}
                <div className="p-6 rounded-2xl bg-card/70 border border-line/70 text-center hover:border-ice-strong/50 transition-all group/one">
                  <div className="jewel-badge w-16 h-16 mx-auto mb-4 text-ice-strong">
                    <Monitor size={32} />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-ice-soft text-ice-strong font-bold uppercase">
                    Defensive
                  </span>
                  <h4 className="font-heading font-bold text-lg text-ink mt-2 mb-1">Anjavor One</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Deploys remote patches, isolates compromised assets, and retains immutable logs.
                  </p>
                </div>
              </div>

              {/* 4-Step Synchronized Loop Row */}
              <div className="mt-8 pt-6 border-t border-line/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {[
                  { step: '01', title: 'Continuous Scan' },
                  { step: '02', title: 'Adversary Proof' },
                  { step: '03', title: 'Automated Patch' },
                  { step: '04', title: 'Audit Retest' },
                ].map((s) => (
                  <div key={s.step} className="p-2.5 rounded-xl bg-bg/70 border border-line/50">
                    <div className="text-[10px] font-mono text-ice-strong font-bold">{s.step}</div>
                    <div className="text-xs font-semibold text-ink">{s.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ────── Benefits by Audience ────── */
function BenefitsByAudience() {
  const audiences = [
    {
      title: 'Security Teams',
      watermark: 'SECOPS',
      badge: 'Red & Blue Teams',
      icon: Shield,
      kpi: '<15s Time-to-Detect',
      benefits: [
        'Comprehensive vulnerability scanning across your entire attack surface',
        'Structured penetration testing workflows with evidence management',
        'AI-assisted analysis to explain findings and suggest remediations',
        'Automated compliance mapping to OWASP, NIST, CIS, and ISO 27001',
      ],
    },
    {
      title: 'IT Teams',
      watermark: 'ITOPS',
      badge: 'SysAdmin & Helpdesk',
      icon: Monitor,
      kpi: '99.98% Fleet Health',
      benefits: [
        'Complete inventory of every device, software license, and hardware asset',
        'Cross-platform device management for Windows, macOS, Linux, Android, iOS',
        'Centralized log management with search, retention, and real-time alerts',
        'Remote terminal script execution and automated patch enforcement',
      ],
    },
    {
      title: 'Management & CISOs',
      watermark: 'EXEC',
      badge: 'Leadership & Board',
      icon: BarChart3,
      kpi: '1-Click Audit Reports',
      benefits: [
        'Executive dashboards with real-time risk scores and threat trends',
        'Compliance posture visibility across security and regulatory frameworks',
        'Audit-ready reports formatted for executive leadership and auditors',
        'SLA monitoring to track engineering remediation performance',
      ],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-default">
        <SectionHeader
          badge="Built For You"
          title="Tailored Value for Every Role"
          description="Designed to eliminate friction between cybersecurity specialists, IT engineers, and executive leaders."
          gradient="mixed"
        />
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((a) => (
            <StaggerItem key={a.title}>
              <GlassCard
                className="p-8 h-full hover:border-ice/50 transition-all"
                watermark={a.watermark}
                showBrackets={true}
                showSheen={true}
                topBeam={true}
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="jewel-badge w-12 h-12 text-ice">
                        <a.icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                        {a.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-ink mb-2">{a.title}</h3>
                    <div className="text-[11px] font-mono text-muted/70 mb-4 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-severity-low" />
                      Key Benchmark: <span className="text-ice-strong font-bold">{a.kpi}</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {a.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-ink font-medium">
                          <span className="w-4 h-4 rounded-full bg-ice-soft border border-ice/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle size={11} className="text-ice" />
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-line/50 flex items-center justify-between text-xs font-semibold text-ice-strong font-sans">
                    <span>Role Optimization</span>
                    <span className="text-muted/60 font-mono text-[10px]">ENGAGED</span>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────── Use Cases ────── */
function UseCases() {
  const cases = [
    {
      title: 'Enterprise Security Programs',
      watermark: '01',
      badge: 'Global Scale',
      icon: ShieldCheck,
      description: 'Manage vulnerability assessments, penetration tests, and compliance reporting across large, complex distributed environments.',
    },
    {
      title: 'IT Operations & Fleet Management',
      watermark: '02',
      badge: 'Hybrid Workforce',
      icon: Monitor,
      description: 'Track assets, manage devices, troubleshoot remotely, and maintain unified compliance across hybrid and remote workforces.',
    },
    {
      title: 'Managed Security Providers (MSSPs)',
      watermark: '03',
      badge: 'Multi-Tenant',
      icon: Users,
      description: 'Use multi-tenant architecture and strict RBAC to orchestrate security and IT infrastructure for multiple client organizations.',
    },
    {
      title: 'DevSecOps & CI/CD Workflows',
      watermark: '04',
      badge: 'Pipeline Native',
      icon: Zap,
      description: 'Integrate automated vulnerability scanning directly into deployment pipelines and validate code fixes before public release.',
    },
  ];

  return (
    <section className="section-padding bg-card/35 relative">
      <div className="container-default">
        <SectionHeader badge="Use Cases" title="Who Uses Anjavor" />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <StaggerItem key={c.title}>
              <GlassCard
                className="p-7 h-full hover:border-ice/50 transition-all"
                watermark={c.watermark}
                showBrackets={true}
                showSheen={true}
                topBeam={true}
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="jewel-badge w-11 h-11 text-ice">
                        <c.icon size={20} />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-ice-soft border border-ice/20 text-ice-strong">
                        {c.badge}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-ink group-hover:text-ice-strong transition-colors mb-2">
                      {c.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{c.description}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-line/40 flex items-center justify-between text-xs text-muted/70 font-mono">
                    <span>DEPLOYMENT READY</span>
                    <span className="text-ice-strong font-semibold">100% COMPATIBLE</span>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────── Why Anjavor (Transformed into 4 High-End Cards) ────── */
function WhyAnjavor() {
  const reasons = [
    {
      title: 'Two Products, One Ecosystem',
      icon: Layers,
      watermark: '01',
      badge: 'UNIFIED SYNC',
      description: 'Security testing and IT device management designed to natively synchronize data—not two separate tools bolted together.',
    },
    {
      title: 'Enterprise Architecture',
      icon: Cpu,
      watermark: '02',
      badge: 'HIGH SCALE',
      description: 'Multi-tenant architecture, role-based access control (RBAC), immutable audit logging, and SOC 2 compliance built in.',
    },
    {
      title: 'Full-Spectrum Attack Surface',
      icon: Globe,
      watermark: '03',
      badge: 'ZERO BLINDSPOTS',
      description: 'Complete defensive coverage: networks, web apps, cloud APIs, laptops, servers, endpoints, and centralized logs.',
    },
    {
      title: 'AI-Accelerated Workflows',
      icon: Sparkles,
      watermark: '04',
      badge: 'NEXT-GEN AI',
      description: 'Intelligent security assistant clarifies findings, calculates priority scores, and drafts fixes so teams execute faster.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-default">
        <SectionHeader
          badge="Why Anjavor"
          title="Why Leading Organizations Choose Us"
          description="Built from the ground up to solve modern SecOps and ITOps complexity with speed and elegance."
          gradient="mixed"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <GlassCard
                className="p-7 h-full hover:border-ice/50 transition-all"
                watermark={r.watermark}
                showBrackets={true}
                showSheen={true}
                topBeam={true}
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="jewel-badge w-12 h-12 text-ice">
                        <r.icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                        {r.badge}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-ink mb-2 group-hover:text-ice-strong transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{r.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-line/40 flex items-center justify-between text-[11px] text-muted font-sans">
                    <span className="text-ice-strong font-medium">Anjavor Advantage</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-ice shadow-[0_0_6px_rgba(2,132,199,0.8)]" />
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────── Short FAQ ────── */
function ShortFAQ() {
  const faqs = [
    { q: 'What does Anjavor Technologies do?', a: 'We build two products: Anjavor VAPT for vulnerability assessment and penetration testing, and Anjavor One for IT asset, device, and log management.' },
    { q: 'Can I use both products together?', a: 'Absolutely. They are designed to complement each other—VAPT secures your assets, One manages them.' },
    { q: 'How much does it cost?', a: 'Contact us for pricing. We offer flexible plans tailored to your organization\'s size and requirements.' },
    { q: 'Can I get a demo?', a: 'Yes. Fill out the form on our Contact page and we\'ll schedule a personalized walkthrough.' },
  ];

  return (
    <section className="section-padding bg-card/40">
      <div className="container-default max-w-3xl">
        <SectionHeader badge="FAQ" title="Common Questions" />
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}

/* ────── Page ────── */
export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    description: 'Cybersecurity and IT software company offering vulnerability assessment, penetration testing, IT asset management, device management, and log management solutions.',
  };

  const route = siteConfig.routes.find((r) => r.path === '/');

  return (
    <>
      <SEO title="Home" description={route.description} path="/" jsonLd={jsonLd} />
      <main id="main-content">
        <Hero />
        <StatsSection />
        <ProductCards />
        <WhatWeDo />
        <ProblemsWeSolve />
        <HeadlineFeatures />
        <BetterTogether />
        <BenefitsByAudience />
        <UseCases />
        <WhyAnjavor />
        <ShortFAQ />
        <CTASection
          title="Ready to Secure and Manage Your IT?"
          description="See how Anjavor VAPT and Anjavor One can work for your organization."
          primaryText="Request a Demo"
          primaryTo="/contact"
          secondaryText="Explore Products"
          secondaryTo="/products"
        />
      </main>
    </>
  );
}
