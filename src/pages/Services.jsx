import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Wrench, Clock, FileCheck, Layers } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import ParticleField from '../components/ParticleField';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import siteConfig from '../config/site';

/* ────── Interactive Engagement Scope Calculator & War Room ────── */
function InteractiveEngagementScopeCalculator() {
  const [selectedTargets, setSelectedTargets] = useState(['web', 'cloud', 'api']);
  const [methodology, setMethodology] = useState('grey');
  const [showPoC, setShowPoC] = useState(false);

  const targets = [
    { id: 'web', name: 'Web Applications & SPAs', icon: Shield, endpoints: '45 Endpoints', desc: 'OWASP Top 10, Business Logic Flaws, Auth Bypass' },
    { id: 'cloud', name: 'Cloud Infrastructure (AWS/GCP)', icon: Layers, endpoints: '12 Accounts / 8 VPCs', desc: 'IAM Privilege Escalation, S3 Exposure, Security Groups' },
    { id: 'api', name: 'GraphQL & REST APIs', icon: FileCheck, endpoints: '120+ Methods', desc: 'BOLA/IDOR, Rate Limiting, JWT Cryptographic Flaws' },
    { id: 'ad', name: 'Active Directory & Internal LAN', icon: Wrench, endpoints: '1,200 Objects', desc: 'Kerberoasting, BloodHound Paths, Domain Escalation' },
    { id: 'mobile', name: 'Mobile Apps (iOS & Android)', icon: Clock, endpoints: '2 Native Apps', desc: 'Hardcoded Secrets, IPC Exploits, Jailbreak Bypass' },
  ];

  const toggleTarget = (id) => {
    setSelectedTargets((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((t) => t !== id) : prev) : [...prev, id]
    );
  };

  const getDuration = () => {
    const base = selectedTargets.length * 2.5;
    return methodology === 'red' ? Math.round(base * 1.5) : Math.round(base);
  };

  const getCoverage = () => {
    return Math.min(100, 72 + selectedTargets.length * 5.6).toFixed(1);
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      <div className="relative rounded-3xl bg-card border border-line p-6 lg:p-8 shadow-card overflow-hidden">
        {/* Ambient Grid */}
        <div className="absolute inset-0 cyber-grid-perspective opacity-40 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-ice/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-line">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-ice animate-pulse" />
              <span className="text-xs font-mono font-semibold text-ice-strong uppercase tracking-wider">
                Interactive Engagement Configurator
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-ice-soft text-ice-strong border border-ice/20 font-mono font-semibold">
                CREST &amp; OSCP Lead Verified
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink">
              Tailor Your Penetration Testing &amp; Engineering Scope
            </h3>
          </div>

          {/* Methodology Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-bg/80 border border-line rounded-xl">
            {[
              { id: 'black', label: 'Black Box' },
              { id: 'grey', label: 'Grey Box (Rec)' },
              { id: 'red', label: 'Red Teaming' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMethodology(m.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  methodology === m.id
                    ? 'bg-primary text-white font-bold shadow-sm'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Scope Matrix */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Target Selectors */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] font-mono uppercase text-muted tracking-wider block">
              1. Select Target Attack Surface Components:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {targets.map((tgt) => {
                const isSelected = selectedTargets.includes(tgt.id);
                const Icon = tgt.icon;
                return (
                  <button
                    key={tgt.id}
                    onClick={() => toggleTarget(tgt.id)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-ice-soft border-ice shadow-sm'
                        : 'bg-card border-line text-muted hover:border-ice/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-primary text-white' : 'bg-ice-soft text-ice'
                          }`}
                        >
                          <Icon size={14} />
                        </div>
                        <span className={`text-xs font-semibold ${isSelected ? 'text-ink' : 'text-ink/80'}`}>
                          {tgt.name}
                        </span>
                      </div>
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                          isSelected ? 'bg-ice border-ice text-white font-bold' : 'border-line'
                        }`}
                      >
                        {isSelected ? '✓' : ''}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted line-clamp-2 leading-relaxed">{tgt.desc}</p>
                    <span className="text-[10px] font-mono text-ice-strong font-medium block mt-2">{tgt.endpoints}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scope Telemetry & Live Advisory Preview */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-mono uppercase text-muted tracking-wider block">
              2. Real-Time Scope Projection &amp; Deliverables:
            </span>

            {/* Readout stats card */}
            <div className="bg-bg/60 border border-line rounded-2xl p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-card border border-line rounded-xl p-3 shadow-sm">
                  <span className="text-[10px] font-mono text-muted uppercase">Coverage Depth</span>
                  <div className="text-xl font-mono font-bold text-ice-strong mt-0.5">{getCoverage()}%</div>
                  <span className="text-[10px] text-severity-low font-mono font-semibold">OWASP ASVS Level 3</span>
                </div>
                <div className="bg-card border border-line rounded-xl p-3 shadow-sm">
                  <span className="text-[10px] font-mono text-muted uppercase">Estimated Cycle</span>
                  <div className="text-xl font-mono font-bold text-ink mt-0.5">
                    {getDuration()} Days
                  </div>
                  <span className="text-[10px] text-muted font-mono">Includes Retest Window</span>
                </div>
              </div>

              {/* Sample Advisory Preview */}
              <div className="bg-card border border-line rounded-xl p-3.5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-ink font-semibold flex items-center gap-1.5">
                    <Shield size={12} className="text-severity-critical" />
                    Sample Verified Deliverable
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-severity-critical/15 text-severity-critical border border-severity-critical/30 font-bold">
                    CRITICAL 9.8 CVSS
                  </span>
                </div>
                <p className="text-xs text-ink font-semibold mb-1">
                  SEC-ADV-2026: Remote Code Execution via JWT Algorithm Confusion
                </p>
                <p className="text-[11px] text-muted leading-relaxed mb-2.5">
                  Automated scanner missed logic flaw; verified by Anjavor lead auditor with zero downtime impact.
                </p>

                <button
                  onClick={() => setShowPoC(!showPoC)}
                  className="text-[11px] font-mono text-ice-strong hover:text-ice flex items-center gap-1 transition-colors cursor-pointer font-semibold"
                >
                  <span>{showPoC ? '▼ Hide Repro Exploit Evidence' : '▶ View Repro Exploit Evidence'}</span>
                </button>

                {showPoC && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-2 p-2.5 rounded bg-footer border border-footer text-[10px] font-mono text-emerald-300 overflow-x-auto"
                  >
                    <code>
                      curl -X POST https://api.target.corp/v2/auth/verify \<br />
                      &nbsp;&nbsp;-H &quot;Authorization: Bearer eyJhbGciOiJub25lIn0...&quot; \<br />
                      &nbsp;&nbsp;--data &apos;&#123;&quot;role&quot;: &quot;super_cluster_admin&quot;&#125;&apos;
                    </code>
                  </motion.div>
                )}
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="text-muted">Included: Full Retesting &amp; Exec PDF</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-ice-strong hover:text-ice font-semibold text-xs transition-colors"
                >
                  Book this scope <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const route = siteConfig.routes.find((r) => r.path === '/services');

  return (
    <>
      <SEO title="Services" description={route.description} path="/services" />
      <main id="main-content" className="pt-24 relative overflow-hidden">
        {/* Parallax particles in hero */}
        <ParticleField count={20} variant="emerald" />

        {/* Hero Section */}
        <section className="section-padding relative z-10">
          <div className="container-default text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ice-soft border border-ice/20 text-ice-strong mb-6">
                Expert Services &amp; Advisory
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold gradient-text-mixed mb-6">
                Cybersecurity &amp; IT Engineering Services
              </h1>
              <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
                Hands-on professional services delivered by experienced security and IT specialists. From targeted penetration testing to turnkey device and log management deployments.
              </p>
            </AnimatedSection>

            {/* Interactive Scope Calculator */}
            <AnimatedSection delay={0.15}>
              <InteractiveEngagementScopeCalculator />
            </AnimatedSection>
          </div>
        </section>

        {/* Services List Section */}
        <section className="section-padding pt-0 relative z-10">
          <div className="container-default">
            <div className="space-y-8">
              {services.map((service, index) => {
                const IconComponent = service.icon || Shield;

                return (
                  <AnimatedSection key={service.id} delay={0.05 * (index % 4)}>
                    <GlassCard className="p-8 md:p-10 transition-all border-line hover:border-ice/40 shadow-card">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Service Details */}
                        <div className="lg:col-span-7">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-ice-soft border border-ice/20 text-ice mb-5">
                            <IconComponent size={24} />
                          </div>
                          <h2 className="text-2xl font-heading font-bold text-ink mb-3">
                            {service.title}
                          </h2>
                          <p className="text-muted leading-relaxed mb-6 text-base">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-3">
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-ice-strong hover:text-ice transition-colors group"
                            >
                              Request this service
                              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>

                        {/* Process Flow */}
                        <div className="lg:col-span-5 bg-card border border-line rounded-xl p-6 relative overflow-hidden shadow-sm">
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-5 flex items-center gap-2">
                            <Layers size={14} className="text-ice" />
                            Engagement Process
                          </h3>
                          <div className="relative">
                            {/* Animated vertical connector line */}
                            <motion.div
                              className="absolute left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-ice via-ice-strong to-ice rounded-full"
                              initial={{ scaleY: 0, originY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: 'easeInOut' }}
                            />
                            <ol className="space-y-4 relative z-10">
                              {service.process.map((step, stepIdx) => (
                                <motion.li
                                  key={step}
                                  initial={{ opacity: 0, x: 12 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.35, delay: stepIdx * 0.12 }}
                                  className="flex items-start gap-3.5 group"
                                >
                                  <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      type: 'spring',
                                      stiffness: 400,
                                      damping: 18,
                                      delay: stepIdx * 0.12,
                                    }}
                                    className="flex-shrink-0 w-6 h-6 rounded-full bg-primary border border-line text-white text-xs font-bold flex items-center justify-center shadow-sm"
                                  >
                                    {stepIdx + 1}
                                  </motion.span>
                                  <span className="text-sm text-muted pt-0.5 leading-snug group-hover:text-ink transition-colors">
                                    {step}
                                  </span>
                                </motion.li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="section-padding bg-bg/40 border-y border-line">
          <div className="container-default">
            <SectionHeader
              badge="Our Approach"
              title="How We Deliver Value"
              description="A structured, transparent, and collaborative process built around your operational schedule."
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggerItem>
                <div className="solid-card p-6 h-full hover:border-ice">
                  <div className="w-10 h-10 rounded-lg bg-ice-soft text-ice flex items-center justify-center mb-4">
                    <FileCheck size={20} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                    Actionable Deliverables
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    No theoretical reports. Every finding contains step-by-step reproduction notes, validated proof-of-concept evidence, and explicit remediation instructions.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="solid-card p-6 h-full hover:border-ice">
                  <div className="w-10 h-10 rounded-lg bg-ice-soft text-ice-strong flex items-center justify-center mb-4">
                    <Clock size={20} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                    Minimal Operational Disruption
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    We coordinate testing schedules, rate-limit scans to production tolerances, and keep your engineering stakeholders updated throughout the engagement.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="solid-card p-6 h-full hover:border-ice">
                  <div className="w-10 h-10 rounded-lg bg-ice-soft text-ice flex items-center justify-center mb-4">
                    <Wrench size={20} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                    Post-Assessment Retesting
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Once your engineers push remediation fixes, we validate the patches through focused retesting to ensure the vulnerabilities are completely closed.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Discuss Your Next Security or IT Project"
          description="Speak with our engineering team to scope your penetration test, security audit, or management setup."
          primaryText="Request Service Consultation"
          primaryTo="/contact"
          secondaryText="Explore Our Products"
          secondaryTo="/products"
        />
      </main>
    </>
  );
}
