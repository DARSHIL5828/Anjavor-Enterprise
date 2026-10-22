import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, Server, Smartphone, Shield, Terminal, Activity, 
  Cpu, HardDrive, CheckCircle2, AlertTriangle, Play, RefreshCw, 
  Lock, Zap, Eye, ChevronRight, Layers, Database
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import FeatureGrid from '../components/FeatureGrid';
import HowItWorks from '../components/HowItWorks';
import GlassCard from '../components/GlassCard';
import TiltCard from '../components/TiltCard';
import ParticleField from '../components/ParticleField';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { OneDashboard } from '../components/DashboardPreview';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { oneModules, oneHowItWorks, oneBenefits, oneUseCases, oneFAQ } from '../data/one';
import siteConfig from '../config/site';

/* ────── Interactive Fleet Command Deck Component ────── */
function InteractiveFleetCommandDeck() {
  const [selectedDevice, setSelectedDevice] = useState('win');
  const [terminalLogs, setTerminalLogs] = useState([
    { ts: '17:34:02.102', level: 'OK', msg: 'Anjavor Agent v3.4.1 heartbeat received via mTLS' },
    { ts: '17:34:03.441', level: 'INFO', msg: 'Kernel security telemetry verified: Secure Boot & TPM 2.0 active' },
    { ts: '17:34:05.819', level: 'OK', msg: 'Encrypted partition state: AES-XTS 256-bit BitLocker healthy' },
  ]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [activeAction, setActiveAction] = useState(null);

  const devices = [
    {
      id: 'win',
      name: 'CORP-WIN11-ENG04',
      os: 'Windows 11 Pro Enterprise',
      icon: Laptop,
      badge: 'Workstation',
      ip: '10.240.12.84',
      cpu: 18,
      ram: 42,
      disk: '320 / 1024 GB',
      compliance: 99.4,
      status: 'Protected',
      agent: 'Active (v3.4.1)',
      specs: 'Intel Core i9-14900H • 64GB DDR5 • BitLocker Active',
    },
    {
      id: 'mac',
      name: 'EXEC-MAC-M3MAX',
      os: 'macOS Sequoia 15.1 (ARM64)',
      icon: Laptop,
      badge: 'Executive',
      ip: '10.240.14.19',
      cpu: 12,
      ram: 34,
      disk: '512 / 2048 GB',
      compliance: 100,
      status: 'Protected',
      agent: 'Active (v3.4.1)',
      specs: 'Apple M3 Max • 128GB Unified • FileVault 2 Enforced',
    },
    {
      id: 'linux',
      name: 'PROD-K8S-NODE-08',
      os: 'Ubuntu 24.04 LTS (Kernel 6.8)',
      icon: Server,
      badge: 'Cloud Host',
      ip: '10.100.4.52',
      cpu: 46,
      ram: 68,
      disk: '1.4 / 4.0 TB',
      compliance: 98.7,
      status: 'Hardened',
      agent: 'eBPF Daemon v3.4',
      specs: 'AMD EPYC 9654 (96 Cores) • 384GB ECC • AppArmor Enforced',
    },
    {
      id: 'mobile',
      name: 'SEC-PHONE-PIXEL8',
      os: 'Android 14 (Titan M2)',
      icon: Smartphone,
      badge: 'Mobile Fleet',
      ip: '10.240.88.104',
      cpu: 8,
      ram: 28,
      disk: '48 / 256 GB',
      compliance: 100,
      status: 'Sandboxed',
      agent: 'Anjavor MDM v2.8',
      specs: 'Google Tensor G3 • Biometric Auth • Knox/Work Profile Active',
    },
  ];

  const currentDev = devices.find((d) => d.id === selectedDevice) || devices[0];

  const actions = [
    {
      id: 'audit',
      label: 'Run Osquery Fleet Audit',
      color: 'text-ice-strong border-line hover:border-ice',
      run: (dev) => [
        `Executing osquery against host [${dev.name}]...`,
        `SELECT name, pid, path, total_size FROM processes WHERE on_disk = 0;`,
        `Analyzing 412 active system processes in kernel ring 0...`,
        `[PASS] 0 memory-only injected threads detected. Host signature verified.`,
      ],
    },
    {
      id: 'encrypt',
      label: 'Validate Hardware Crypto Engine',
      color: 'text-ice-strong border-line hover:border-ice',
      run: (dev) => [
        `Querying TPM 2.0 / Apple Secure Enclave for device [${dev.name}]...`,
        `PCR-7 boot integrity measurement matches golden cloud baseline.`,
        `XTS-AES-256 disk encryption volume unlocked via trusted hardware attestation.`,
        `[VERIFIED] Cryptographic posture compliant with ISO 27001 & NIST 800-53.`,
      ],
    },
    {
      id: 'quarantine',
      label: 'Simulate Network Isolation',
      color: 'text-severity-high border-line hover:border-severity-high',
      run: (dev) => [
        `Triggering emergency micro-isolation killswitch on [${dev.ip}]...`,
        `Pushing dynamic eBPF / Windows Filtering Platform egress block rules.`,
        `All inbound/outbound TCP/UDP severed except encrypted Anjavor telemetry tunnel.`,
        `[ISOLATED] Target device isolated in 42ms. Zero lateral spread pathway.`,
      ],
    },
  ];

  const handleAction = (act) => {
    if (isExecuting) return;
    setIsExecuting(true);
    setActiveAction(act.id);

    const now = () => new Date().toISOString().substring(11, 23);
    const steps = act.run(currentDev);

    steps.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [
          ...prev.slice(-7),
          {
            ts: now(),
            level: index === steps.length - 1 ? 'SUCCESS' : 'EXEC',
            msg: line,
          },
        ]);
        if (index === steps.length - 1) {
          setIsExecuting(false);
          setActiveAction(null);
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      {/* Outer Glow Card with Border Beam */}
      <div className="relative rounded-3xl bg-card border border-line p-6 lg:p-8 shadow-card overflow-hidden">
        {/* Ambient background grid and glow */}
        <div className="absolute inset-0 cyber-grid-perspective opacity-40 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-ice/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-ice-strong/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Control Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-line">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-severity-low animate-pulse" />
              <span className="text-xs font-mono font-semibold text-ice-strong uppercase tracking-wider">
                Live Fleet Command Center
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-ice-soft text-ice-strong border border-ice/20 font-mono font-semibold">
                12,480 Active Nodes Synced
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink">
              Cross-Platform Real-Time Agent Telemetry
            </h3>
          </div>

          {/* Device Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {devices.map((dev) => {
              const Icon = dev.icon;
              const isSelected = selectedDevice === dev.id;
              return (
                <button
                  key={dev.id}
                  onClick={() => setSelectedDevice(dev.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-primary border-primary text-white shadow-sm border'
                      : 'bg-card border border-line text-muted hover:text-ink hover:border-ice/40'
                  }`}
                >
                  <Icon size={14} className={isSelected ? 'text-white' : 'text-muted'} />
                  <span>{dev.name.split('-')[1]}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-bg text-muted border border-line hidden sm:inline">
                    {dev.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Command Workspace */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Left Column: Device Profile & Telemetry Meters */}
          <div className="lg:col-span-5 space-y-4">
            {/* Device Info Card */}
            <div className="bg-bg/60 border border-line rounded-2xl p-5 relative overflow-hidden shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[11px] font-mono text-ice-strong uppercase tracking-wide font-semibold">
                    {currentDev.badge} Endpoint
                  </span>
                  <h4 className="text-lg font-mono font-bold text-ink mt-0.5">{currentDev.name}</h4>
                  <p className="text-xs text-muted mt-0.5">{currentDev.os}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-severity-low border border-emerald-500/30 flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 size={12} />
                  {currentDev.status}
                </span>
              </div>

              {/* Hardware Spec string */}
              <div className="text-[11px] font-mono text-muted bg-card border border-line rounded-lg p-2.5 mb-4 shadow-sm">
                <span className="text-ice-strong font-semibold">HOST_SPEC:</span> {currentDev.specs}
              </div>

              {/* Gauges Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* CPU Gauge */}
                <div className="bg-card border border-line rounded-xl p-3 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-muted mb-2">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Cpu size={13} className="text-ice" />
                      CPU Load
                    </span>
                    <span className="font-mono text-ink font-bold">{currentDev.cpu}%</span>
                  </div>
                  <div className="w-full h-2 bg-bg rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-ice to-ice-strong rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${currentDev.cpu}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* RAM Gauge */}
                <div className="bg-card border border-line rounded-xl p-3 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-muted mb-2">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Activity size={13} className="text-ice" />
                      Memory
                    </span>
                    <span className="font-mono text-ink font-bold">{currentDev.ram}%</span>
                  </div>
                  <div className="w-full h-2 bg-bg rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-ice-strong to-ice rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${currentDev.ram}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Storage */}
                <div className="bg-card border border-line rounded-xl p-3 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-muted mb-1">
                    <span className="flex items-center gap-1.5 font-mono">
                      <HardDrive size={13} className="text-ice-strong" />
                      NVMe
                    </span>
                    <span className="font-mono text-[11px] text-ink font-medium">{currentDev.disk}</span>
                  </div>
                  <div className="w-full h-1.5 bg-bg rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-ice rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>

                {/* Compliance Score */}
                <div className="bg-card border border-line rounded-xl p-3 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-muted mb-1">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Shield size={13} className="text-severity-low" />
                      Compliance
                    </span>
                    <span className="font-mono text-severity-low font-bold">{currentDev.compliance}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-bg rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-severity-low rounded-full" style={{ width: `${currentDev.compliance}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Trigger Buttons */}
            <div className="bg-bg/60 border border-line rounded-2xl p-4">
              <span className="text-[11px] font-mono uppercase text-ink font-semibold tracking-wider block mb-3 flex items-center gap-1.5">
                <Play size={11} className="text-ice" />
                Trigger Live Remote Agent Operations
              </span>
              <div className="space-y-2">
                {actions.map((act) => {
                  const isCurrent = activeAction === act.id;
                  return (
                    <button
                      key={act.id}
                      onClick={() => handleAction(act)}
                      disabled={isExecuting}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-ice-soft border-ice text-ice-strong font-semibold shadow-sm'
                          : `bg-card ${act.color} text-ink hover:border-ice`
                      } ${isExecuting && !isCurrent ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span className="flex items-center gap-2">
                        {isCurrent ? (
                          <RefreshCw size={13} className="animate-spin text-ice" />
                        ) : (
                          <Terminal size={13} className="text-muted" />
                        )}
                        {act.label}
                      </span>
                      <ChevronRight size={14} className="text-muted" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Streaming Terminal Console */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-footer rounded-2xl border border-footer flex-1 flex flex-col overflow-hidden shadow-card min-h-[360px]">
              {/* Terminal Title Bar */}
              <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 ml-2">
                    anjavor-agent@tunnel://{currentDev.ip}:8443 (eBPF Stream)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">
                  TLS 1.3 / mTLS
                </span>
              </div>

              {/* Terminal Logs Output */}
              <div className="p-4 sm:p-5 flex-1 font-mono text-xs overflow-y-auto space-y-2 bg-[#0f172a] scrollbar-none">
                <div className="text-gray-500 text-[11px] pb-2 border-b border-slate-800">
                  # Anjavor One Unified Endpoint Kernel Telemetry Stream — Live Session
                  <br /># Connected to {currentDev.name} [{currentDev.ip}] via secure gRPC
                </div>

                <AnimatePresence>
                  {terminalLogs.map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="text-gray-500 text-[11px] select-none flex-shrink-0">
                        {log.ts}
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded font-bold flex-shrink-0 ${
                          log.level === 'SUCCESS'
                            ? 'bg-severity-low/20 text-emerald-300 border border-severity-low/30'
                            : log.level === 'EXEC'
                            ? 'bg-ice/20 text-sky-300 border border-ice/30'
                            : log.level === 'OK'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-blue-500/10 text-blue-400'
                        }`}
                      >
                        {log.level}
                      </span>
                      <span className="text-gray-200 break-all">{log.msg}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isExecuting && (
                  <div className="flex items-center gap-2 text-sky-400 pt-2 animate-pulse">
                    <RefreshCw size={12} className="animate-spin" />
                    <span className="text-xs">Processing kernel query across host subsystems...</span>
                  </div>
                )}

                <div className="pt-2 flex items-center text-emerald-400 font-mono text-xs">
                  <span className="mr-2">root@{currentDev.id}-agent:~#</span>
                  <span className="typing-cursor" />
                </div>
              </div>

              {/* Terminal Footer Info Bar */}
              <div className="bg-slate-900/60 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-severity-low" />
                  Agent Heartbeat: 12ms latency
                </span>
                <span>Zero System Overhead: &lt; 0.8% CPU / 22MB RAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OneProduct() {
  const route = siteConfig.routes.find((r) => r.path === '/products/anjavor-one');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Anjavor One',
    applicationCategory: 'BusinessApplication',
    description: route.description,
    url: `${siteConfig.siteUrl}/products/anjavor-one`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Contact us for pricing' },
    provider: { '@type': 'Organization', name: siteConfig.companyName },
  };

  return (
    <>
      <SEO title="Anjavor One" description={route.description} path="/products/anjavor-one" jsonLd={jsonLd} />
      <main id="main-content" className="pt-24 relative overflow-hidden">
        {/* Floating cyber particles */}
        <ParticleField count={22} variant="emerald" />

        {/* Hero */}
        <section className="section-padding relative z-10">
          <div className="container-default">
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ice-soft border border-ice/20 text-ice-strong mb-6">
                  <Shield size={14} className="text-ice" />
                  Unified Platform Architecture
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold gradient-text-emerald mb-4">
                  Anjavor One
                </h1>
                <p className="text-xl text-ink mb-3 font-medium">
                  Unified IT Asset, Device &amp; Log Management Platform
                </p>
                <p className="text-muted max-w-2xl mx-auto leading-relaxed">
                  Manage every device, track every asset, and centralize every log from a single pane of glass. Cross-platform support for Windows, macOS, Linux, Android, and iOS.
                </p>
              </AnimatedSection>
            </div>

            {/* Interactive Fleet Command Center Component */}
            <AnimatedSection delay={0.15}>
              <InteractiveFleetCommandDeck />
            </AnimatedSection>
          </div>
        </section>

        {/* Module Grid */}
        <section className="section-padding bg-bg/40 border-y border-line relative z-10">
          <div className="container-default">
            <SectionHeader
              badge="8 Core Modules"
              title="Complete IT Management Ecosystem"
              description="Everything your IT engineering team needs to inventory, manage, enforce compliance, and audit."
              gradient="emerald"
            />
            <FeatureGrid features={oneModules} columns={2} variant="emerald" />
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding relative z-10">
          <div className="container-default">
            <SectionHeader
              badge="Workflow Pipeline"
              title="From Agent Enrollment to Audit-Ready Reports"
              description="A deterministic 6-phase lifecycle powering complete organizational visibility."
              gradient="emerald"
            />
            <HowItWorks steps={oneHowItWorks} variant="emerald" />
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="section-padding bg-bg/40 border-y border-line relative z-10">
          <div className="container-default">
            <SectionHeader
              badge="Real-time Visualization"
              title="IT Visibility at a Glance"
              description="Track devices, compliance drift, and log events in real time with high-velocity dashboard metrics."
              gradient="emerald"
            />
            <OneDashboard />
          </div>
        </section>

        {/* Benefits with Tilt Cards */}
        <section className="section-padding relative z-10">
          <div className="container-default">
            <SectionHeader badge="Strategic Benefits" title="Why Modern Enterprises Choose Anjavor One" gradient="emerald" />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oneBenefits.map((b) => (
                <StaggerItem key={b.title}>
                  <TiltCard tiltAmount={5} glare={true} className="rounded-2xl h-full">
                    <div className="solid-card p-6 h-full border border-line hover:border-ice transition-all flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-ice-soft border border-ice/20 text-ice flex items-center justify-center mb-4 shadow-sm">
                          <CheckCircle2 size={20} />
                        </div>
                        <h3 className="font-heading font-semibold text-ink mb-2 text-lg">{b.title}</h3>
                        <p className="text-muted text-sm leading-relaxed">{b.description}</p>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding bg-bg/40 border-y border-line relative z-10">
          <div className="container-default">
            <SectionHeader badge="Operational Scenarios" title="Tailored for Modern High-Growth Teams" gradient="emerald" />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {oneUseCases.map((c) => (
                <StaggerItem key={c.title}>
                  <GlassCard className="p-7 h-full border-line hover:border-ice/40 shadow-card transition-all">
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-ice-soft text-ice-strong border border-ice/20 mb-3 font-semibold">
                        Production Use Case
                      </span>
                      <h3 className="font-heading font-semibold text-ink mb-2 text-xl">{c.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{c.description}</p>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding relative z-10">
          <div className="container-default max-w-3xl">
            <SectionHeader badge="Knowledge Base" title="Frequently Asked Questions" gradient="emerald" />
            <FAQAccordion items={oneFAQ} />
          </div>
        </section>

        <CTASection
          title="Take Full Control of Your IT & Endpoint Fleet"
          description="Schedule a personalized, real-time live demonstration tailored to your organization."
          primaryText="Request a Demo"
          primaryTo="/contact"
          secondaryText="Explore All Products"
          secondaryTo="/products"
        />
      </main>
    </>
  );
}
