import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Compass, Lightbulb, Target, Eye, Globe2, Activity, Server, Cpu, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import TiltCard from '../components/TiltCard';
import ParticleField from '../components/ParticleField';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import siteConfig from '../config/site';

/* ────── Interactive Global Operations Hub & Engineering Tenets ────── */
function InteractiveGlobalOperationsHub() {
  const [selectedNode, setSelectedNode] = useState('mumbai');
  const [activeTenet, setActiveTenet] = useState(0);

  const globalNodes = [
    { id: 'mumbai', name: 'AP-South (Mumbai)', ping: '4ms', status: 'Primary Hub', load: 38, ip: '103.21.244.12' },
    { id: 'frankfurt', name: 'EU-Central (Frankfurt)', ping: '8ms', status: 'Active Node', load: 44, ip: '185.190.140.8' },
    { id: 'london', name: 'EU-West (London)', ping: '9ms', status: 'Active Node', load: 31, ip: '194.150.168.4' },
    { id: 'virginia', name: 'US-East (N. Virginia)', ping: '12ms', status: 'Active Node', load: 52, ip: '198.51.100.22' },
    { id: 'oregon', name: 'US-West (Oregon)', ping: '18ms', status: 'Active Node', load: 29, ip: '198.51.100.89' },
    { id: 'singapore', name: 'AP-Southeast (Singapore)', ping: '14ms', status: 'Active Node', load: 41, ip: '103.28.250.6' },
  ];

  const tenets = [
    {
      title: 'Deterministic Proof Over Statistical Guesswork',
      summary: 'We believe vulnerability scanners should never report a bug unless they can safely confirm exploitability.',
      detail: 'False positives destroy engineer trust and cause alert fatigue. Our automated engines construct non-destructive proof-of-concept validations in sandboxed execution rings before filing an actionable finding.',
      badge: 'Zero False Positives',
    },
    {
      title: 'Symbiosis of Security and IT Operations',
      summary: 'Discovery without immediate remediation power is useless. Remediation without continuous assessment is blind.',
      detail: 'Anjavor VAPT and Anjavor One share unified telemetry models. When a vulnerability is surfaced on an endpoint, the IT administrator can push an osquery audit or remediation script with a single keystroke.',
      badge: 'Unified Fabric',
    },
    {
      title: 'Minimal Hardware Footprint & Zero Lag',
      summary: 'Enterprise software should be imperceptible until called upon.',
      detail: 'Our single-binary endpoint agent consumes less than 0.8% CPU and under 25MB RAM. We compile to native machine code with zero external runtime dependencies.',
      badge: '< 0.8% Overhead',
    },
    {
      title: 'Transparent Ethics & Authorization Safeguards',
      summary: 'Powerful offensive capabilities must be paired with bulletproof authorization controls.',
      detail: 'Every scan incorporates cryptographic target ownership verification, emergency kill-switches, and automated rate-limiting to prevent service interruption.',
      badge: 'Ethical Guardrails',
    },
  ];

  const currentNode = globalNodes.find((n) => n.id === selectedNode) || globalNodes[0];

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      <div className="relative rounded-3xl bg-card border border-line p-6 lg:p-8 shadow-card overflow-hidden">
        {/* Ambient Grid */}
        <div className="absolute inset-0 cyber-grid-perspective opacity-40 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-ice/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-ice-strong/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-line">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-ice animate-pulse" />
              <span className="text-xs font-mono font-semibold text-ice-strong uppercase tracking-wider">
                Global Security Fabric
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-ice-soft text-ice-strong border border-ice/20 font-mono font-medium">
                6 Global Regions Online
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink">
              Enterprise Infrastructure &amp; Engineering Principles
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-severity-low bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-severity-low" />
              99.999% Global Uptime SLA
            </span>
          </div>
        </div>

        {/* Global Nodes & Philosophy Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Left Column: Interactive Global Edge Nodes */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-mono uppercase text-muted tracking-wider block flex items-center gap-1.5">
              <Globe2 size={13} className="text-ice" />
              Interactive Edge POP Network Status:
            </span>

            <div className="grid grid-cols-2 gap-2.5">
              {globalNodes.map((n) => {
                const isSelected = selectedNode === n.id;
                return (
                  <button
                    key={n.id}
                    onClick={() => setSelectedNode(n.id)}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-ice-soft border-ice shadow-sm'
                        : 'bg-card border-line hover:border-ice/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono font-bold text-ink truncate">{n.name}</span>
                      <span className="text-[10px] font-mono text-severity-low font-semibold">{n.ping}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-muted font-mono">
                      <span>Load: {n.load}%</span>
                      <span className="text-ice-strong font-medium">{n.status.split(' ')[0]}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Telemetry Banner */}
            <div className="bg-bg/60 border border-line rounded-xl p-4 mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-semibold text-ink">{currentNode.name} Gateway</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-severity-low border border-emerald-500/20 font-semibold">
                  {currentNode.status}
                </span>
              </div>
              <p className="text-[11px] text-muted font-mono">
                IP: {currentNode.ip} • Cluster Load: {currentNode.load}% • eBPF Kernel Probe: Active
              </p>
            </div>
          </div>

          {/* Right Column: Engineering Tenet Switcher */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-mono uppercase text-muted tracking-wider block flex items-center gap-1.5">
              <Zap size={13} className="text-ice" />
              Core Engineering Tenets (Click to Explore):
            </span>

            {/* Tenet Selector Chips */}
            <div className="flex flex-wrap gap-2">
              {tenets.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTenet(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeTenet === idx
                      ? 'bg-primary text-white font-bold shadow-sm'
                      : 'bg-card border border-line text-muted hover:text-ink'
                  }`}
                >
                  {t.badge}
                </button>
              ))}
            </div>

            {/* Active Tenet Card with Smooth Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTenet}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="bg-card border border-line rounded-2xl p-6 relative overflow-hidden backdrop-blur-md shadow-card"
              >
                <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-ice-soft text-ice-strong border border-ice/20 mb-2 font-semibold">
                  Tenet #{activeTenet + 1}
                </div>
                <h4 className="text-lg font-heading font-bold text-ink mb-2">
                  {tenets[activeTenet].title}
                </h4>
                <p className="text-sm text-ice-strong font-medium mb-3 leading-relaxed">
                  &ldquo;{tenets[activeTenet].summary}&rdquo;
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  {tenets[activeTenet].detail}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Platform Impact Stats Bar */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="bg-bg/60 border border-line rounded-xl p-3 text-center">
                <div className="text-lg font-mono font-bold text-ice-strong">14.8M+</div>
                <div className="text-[10px] text-muted uppercase font-mono mt-0.5">Scans Run</div>
              </div>
              <div className="bg-bg/60 border border-line rounded-xl p-3 text-center">
                <div className="text-lg font-mono font-bold text-severity-low">68.4%</div>
                <div className="text-[10px] text-muted uppercase font-mono mt-0.5">MTTR Reduced</div>
              </div>
              <div className="bg-bg/60 border border-line rounded-xl p-3 text-center">
                <div className="text-lg font-mono font-bold text-ice">&lt; 0.8%</div>
                <div className="text-[10px] text-muted uppercase font-mono mt-0.5">Agent Overhead</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    icon: Compass,
    title: 'Engineering Integrity',
    description: 'We believe software must do exactly what it promises. We represent our capabilities transparently—without buzzwords, artificial metrics, or exaggerated claims.'
  },
  {
    icon: Target,
    title: 'Purposeful Simplicity',
    description: 'Enterprise tools do not need to be Byzantine. We craft intuitive interfaces and focused workflows that empower engineers and administrators to act swiftly.'
  },
  {
    icon: Shield,
    title: 'Proactive Defense',
    description: 'Waiting for incidents is unacceptable. We focus on discovery, vulnerability validation, and timely remediation to harden systems before risks materialize.'
  },
  {
    icon: Eye,
    title: 'Total Visibility',
    description: 'You cannot secure what you cannot see. Unifying asset discovery, endpoint compliance, and log telemetry is fundamental to every resilient organization.'
  }
];

const beliefs = [
  {
    title: 'Security and IT operations belong together',
    description: 'Vulnerability assessment and IT asset management are two sides of the same coin. When security teams identify an unpatched system and IT teams have the visibility to patch it immediately, organizational risk drops dramatically.'
  },
  {
    title: 'Actionable insight over noise',
    description: 'Piling up thousands of unranked alerts creates fatigue, not security. Software must deduplicate, score by actual exploitability, and deliver clear next steps for engineering teams.'
  },
  {
    title: 'Ethical testing with strict boundaries',
    description: 'Penetration testing and vulnerability scanning must always be conducted responsibly. We engineer safeguard mechanisms into our platform to ensure testing remains authorized and controlled.'
  },
  {
    title: 'Software built for real practitioners',
    description: 'We design software for the engineers, administrators, and analysts who use it every day. Reliable reporting, fast navigation, and clear data make all the difference in high-stakes environments.'
  }
];

export default function About() {
  const route = siteConfig.routes.find((r) => r.path === '/about');

  return (
    <>
      <SEO title="About Us" description={route.description} path="/about" />
      <main id="main-content" className="pt-24 relative overflow-hidden">
        {/* Parallax particles in hero */}
        <ParticleField count={22} variant="cyan" />

        {/* Hero */}
        <section className="section-padding relative z-10">
          <div className="container-default text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ice-soft border border-ice/20 text-ice-strong mb-6">
                About Anjavor Technologies
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold gradient-text-mixed mb-6">
                Discover. Assess. Remediate. Secure.
              </h1>
              <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
                Anjavor Technologies builds dedicated cybersecurity and IT management software designed to give organizations full visibility, proactive vulnerability reduction, and unified endpoint control.
              </p>
            </AnimatedSection>

            {/* Interactive Global Operations Hub */}
            <AnimatedSection delay={0.15}>
              <InteractiveGlobalOperationsHub />
            </AnimatedSection>
          </div>
        </section>

        {/* Mission and Vision with 3D Tilt Cards */}
        <section className="section-padding pt-0 relative z-10">
          <div className="container-default">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <TiltCard tiltAmount={6} glare={true} className="rounded-2xl h-full">
                  <GlassCard className="p-8 md:p-10 h-full border-line hover:border-ice/50 transition-all bg-card shadow-card">
                    <div className="w-12 h-12 rounded-xl bg-ice-soft border border-ice/20 text-ice flex items-center justify-center mb-6 shadow-sm">
                      <Target size={24} />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-ink mb-4">
                      Our Mission
                    </h2>
                    <p className="text-muted leading-relaxed text-base">
                      To equip organizations with unified, straightforward platforms that systematically eliminate blind spots, streamline vulnerability identification and remediation, and simplify modern IT infrastructure management.
                    </p>
                  </GlassCard>
                </TiltCard>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <TiltCard tiltAmount={6} glare={true} className="rounded-2xl h-full">
                  <GlassCard className="p-8 md:p-10 h-full border-line hover:border-ice/50 transition-all bg-card shadow-card">
                    <div className="w-12 h-12 rounded-xl bg-ice-soft border border-ice/20 text-ice-strong flex items-center justify-center mb-6 shadow-sm">
                      <Lightbulb size={24} />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-ink mb-4">
                      Our Vision
                    </h2>
                    <p className="text-muted leading-relaxed text-base">
                      An enterprise environment where IT and security workflows operate in total synergy—where vulnerabilities are surfaced and resolved rapidly, and every device and asset is accountable and protected.
                    </p>
                  </GlassCard>
                </TiltCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-bg/40 border-y border-line relative z-10">
          <div className="container-default">
            <SectionHeader
              badge="Our Principles"
              title="Values That Guide Us"
              description="The foundational standards that shape how we engineer software and engage with our partners."
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => {
                const IconComponent = val.icon;
                return (
                  <StaggerItem key={val.title}>
                    <TiltCard tiltAmount={5} glare={false} className="rounded-2xl h-full">
                      <div className="solid-card p-6 h-full flex flex-col justify-between hover:border-ice transition-all">
                        <div>
                          <div className="w-10 h-10 rounded-lg bg-ice-soft text-ice flex items-center justify-center mb-4">
                            <IconComponent size={20} />
                          </div>
                          <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                            {val.title}
                          </h3>
                          <p className="text-muted text-sm leading-relaxed">
                            {val.description}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Animated Timeline of Beliefs */}
        <section className="section-padding relative z-10">
          <div className="container-default">
            <SectionHeader
              badge="Perspective"
              title="What We Believe"
              description="Why we focus on building unified, practical tools rather than fragmented point solutions."
            />
            <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8">
              {/* Vertical Timeline Line */}
              <motion.div
                className="absolute left-3 sm:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-ice via-ice-strong to-ice rounded-full"
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />

              <div className="space-y-8">
                {beliefs.map((belief, idx) => (
                  <motion.div
                    key={belief.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative pl-6 sm:pl-8"
                  >
                    {/* Timeline Node Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 350, damping: 18, delay: idx * 0.15 }}
                      className="absolute -left-3 sm:-left-4 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-2 border-line text-white flex items-center justify-center font-bold text-xs shadow-sm z-10"
                    >
                      {idx + 1}
                    </motion.div>

                    <GlassCard className="p-6 border-line hover:border-ice/40 shadow-card transition-all">
                      <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                        {belief.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {belief.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Ready to Secure and Manage Your Infrastructure?"
          description="Schedule a conversation and product walkthrough with our team."
          primaryText="Request a Demo"
          primaryTo="/contact"
          secondaryText="Explore Our Products"
          secondaryTo="/products"
        />
      </main>
    </>
  );
}
