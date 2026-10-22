import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Target, Scan, Zap, CheckCircle2, AlertTriangle, ArrowRight, Terminal, Lock, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import FeatureGrid from '../components/FeatureGrid';
import HowItWorks from '../components/HowItWorks';
import GlassCard from '../components/GlassCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { VAPTDashboard } from '../components/DashboardPreview';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { vaptModules, vaptHowItWorks, vaptBenefits, vaptUseCases, vaptIntegrations, vaptFAQ } from '../data/vapt';
import siteConfig from '../config/site';

/* ────── Interactive VAPT Lifecycle Pipeline ────── */
const vaptPhases = [
  { id: 'recon', name: '1. Reconnaissance', desc: 'OSINT discovery of domains, subdomains, DNS records, and cloud buckets.', time: '0.4s', icon: Scan },
  { id: 'scan', name: '2. Deep Full-Spectrum Scan', desc: 'Automated vulnerability scanning across OWASP Top 10, API flaws, and CVEs.', time: '1.2s', icon: Target },
  { id: 'exploit', name: '3. Proof-of-Exploit Validation', desc: 'Authorized payload injection to eliminate false positives and verify impact.', time: '0.8s', icon: Zap },
  { id: 'remediate', name: '4. Autonomous Remediation', desc: 'One-click SLA assignment, code fix recommendations, and patch verification.', time: 'Instant', icon: Shield },
];

function VAPTLifecyclePipeline() {
  const [activePhase, setActivePhase] = useState('recon');

  return (
    <div className="relative max-w-4xl mx-auto my-10 p-6 sm:p-8 rounded-2xl border-beam-container bg-card border border-line shadow-card backdrop-blur-2xl overflow-hidden">
      <div className="absolute inset-0 cyber-grid-perspective opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-line gap-2 text-xs font-mono">
        <span className="flex items-center gap-1.5 text-ice-strong font-bold">
          <Terminal size={14} className="text-ice" /> AUTONOMOUS VAPT PIPELINE
        </span>
        <span className="text-muted">Zero False Positives // Continuous eBPF Verification</span>
      </div>

      {/* Interactive Phase Selector */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {vaptPhases.map((phase) => {
          const Icon = phase.icon;
          const isActive = activePhase === phase.id;
          return (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-ice-soft border-ice shadow-sm text-ink'
                  : 'bg-card border-line text-muted hover:text-ink hover:border-ice/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <Icon size={16} className={isActive ? 'text-ice-strong' : 'text-muted'} />
                <span className="text-[10px] font-mono text-ice-strong font-semibold">{phase.time}</span>
              </div>
              <div className="text-xs font-heading font-semibold">{phase.name}</div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive */}
      <div className="relative z-10 p-4 rounded-xl bg-bg/60 border border-line">
        <AnimatePresence mode="wait">
          {vaptPhases.map((phase) => {
            if (phase.id !== activePhase) return null;
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3 font-mono text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-ice-strong font-bold uppercase tracking-wider">{phase.name} Execution State</span>
                  <span className="text-severity-low flex items-center gap-1 font-semibold">
                    <CheckCircle2 size={13} /> Active &amp; Verified
                  </span>
                </div>
                <p className="text-muted font-sans text-sm leading-relaxed">{phase.desc}</p>
                <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-muted border-t border-line">
                  <span className="text-severity-low font-semibold">● 100% Target Integrity Safeguarded</span>
                  <span>● OWASP Top 10 + API Security v2.0</span>
                  <span>● Non-Destructive Exploits</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function VAPTProduct() {
  const route = siteConfig.routes.find((r) => r.path === '/products/anjavor-vapt');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Anjavor VAPT',
    applicationCategory: 'SecurityApplication',
    description: route.description,
    url: `${siteConfig.siteUrl}/products/anjavor-vapt`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Contact us for pricing' },
    provider: { '@type': 'Organization', name: siteConfig.companyName },
  };

  return (
    <>
      <SEO title="Anjavor VAPT" description={route.description} path="/products/anjavor-vapt" jsonLd={jsonLd} />
      <main id="main-content" className="pt-24 relative overflow-hidden">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-default">
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase cyber-badge-shimmer border border-ice/20 text-ice-strong mb-6">
                  <Zap size={14} className="text-ice" />
                  <span>Continuous Threat Exposure Management</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold gradient-text-cyan mb-4">
                  Anjavor VAPT
                </h1>
                <p className="text-xl text-ink mb-3 font-medium">
                  Vulnerability Assessment &amp; Penetration Testing Platform
                </p>
                <p className="text-muted max-w-2xl mx-auto leading-relaxed">
                  Discover, scan, assess, prioritize, validate, and remediate security vulnerabilities across your entire attack surface—networks, web applications, APIs, and cloud infrastructure.
                </p>
              </AnimatedSection>
            </div>

            {/* Interactive VAPT Lifecycle Pipeline Widget */}
            <AnimatedSection delay={0.1}>
              <VAPTLifecyclePipeline />
            </AnimatedSection>
          </div>
        </section>

        {/* Module Grid */}
        <section className="section-padding bg-bg/40 border-y border-line">
          <div className="container-default">
            <SectionHeader
              badge="18 Modules"
              title="Everything You Need for VAPT"
              description="A complete platform covering every stage of vulnerability assessment and penetration testing."
            />
            <FeatureGrid features={vaptModules} columns={3} variant="cyan" />
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="container-default">
            <SectionHeader
              badge="Workflow"
              title="How It Works"
              description="Six steps from asset registration to audit-ready reports."
            />
            <HowItWorks steps={vaptHowItWorks} variant="cyan" />
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="section-padding bg-bg/40 border-y border-line">
          <div className="container-default">
            <SectionHeader
              badge="Dashboard"
              title="Real-Time Security Visibility"
              description="Monitor your security posture with live dashboards, risk scores, and vulnerability trends."
            />
            <VAPTDashboard />
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container-default">
            <SectionHeader badge="Benefits" title="Why Anjavor VAPT" />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vaptBenefits.map((b) => (
                <StaggerItem key={b.title}>
                  <div className="solid-card p-6 h-full hover:border-ice">
                    <h3 className="font-heading font-semibold text-ink mb-2">{b.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{b.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding bg-bg/40 border-y border-line">
          <div className="container-default">
            <SectionHeader badge="Use Cases" title="Who Uses Anjavor VAPT" />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vaptUseCases.map((c) => (
                <StaggerItem key={c.title}>
                  <GlassCard className="p-6 h-full border-line hover:border-ice/40 shadow-card">
                    <div className="relative z-10">
                      <h3 className="font-heading font-semibold text-ink mb-2">{c.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{c.description}</p>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Integrations */}
        <section className="section-padding">
          <div className="container-default">
            <SectionHeader badge="Integrations" title="Connects to Your Workflow" />
            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                {vaptIntegrations.map((name) => (
                  <span key={name} className="px-5 py-2.5 glass-card text-sm text-ink font-medium shadow-sm hover:border-ice/40">
                    {name}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Authorized Testing Notice */}
        <section className="section-padding bg-bg/40 border-y border-line">
          <div className="container-default max-w-3xl">
            <AnimatedSection>
              <div className="solid-card p-6 border-l-4 border-severity-high shadow-card">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={24} className="text-severity-high flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-semibold text-ink mb-2">Authorized Testing Only</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      Anjavor VAPT is designed exclusively for authorized security testing. You may only use it to test assets that you own or for which you have explicit written permission to test. Unauthorized testing against systems you do not own or have permission to test is prohibited and may be unlawful.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-default max-w-3xl">
            <SectionHeader badge="FAQ" title="Frequently Asked Questions" />
            <FAQAccordion items={vaptFAQ} />
          </div>
        </section>

        <CTASection
          title="Start Securing Your Assets"
          description="See Anjavor VAPT in action with a personalized demo."
          primaryText="Request a Demo"
          primaryTo="/contact"
          secondaryText="View All Products"
          secondaryTo="/products"
        />
      </main>
    </>
  );
}
