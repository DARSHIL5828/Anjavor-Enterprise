import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Monitor, CheckCircle, X, Sparkles, Filter } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import TiltCard from '../components/TiltCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import siteConfig from '../config/site';

const comparisonRows = [
  { feature: 'Vulnerability Scanning', vapt: true, one: false, category: 'Security' },
  { feature: 'Penetration Testing Workflows', vapt: true, one: false, category: 'Security' },
  { feature: 'Web Application Security', vapt: true, one: false, category: 'Security' },
  { feature: 'API Security Testing', vapt: true, one: false, category: 'Security' },
  { feature: 'Cloud Security Assessment', vapt: true, one: false, category: 'Security' },
  { feature: 'Compliance Mapping (OWASP, CIS, NIST)', vapt: true, one: false, category: 'Compliance' },
  { feature: 'AI Security Assistant', vapt: true, one: false, category: 'AI' },
  { feature: 'Asset Inventory & Tracking', vapt: false, one: true, category: 'IT Ops' },
  { feature: 'Device Management (MDM/UEM)', vapt: false, one: true, category: 'IT Ops' },
  { feature: 'Centralized Log Management', vapt: false, one: true, category: 'IT Ops' },
  { feature: 'Endpoint Security Monitoring', vapt: false, one: true, category: 'IT Ops' },
  { feature: 'Remote Device Commands & Scripts', vapt: false, one: true, category: 'IT Ops' },
  { feature: 'Identity Integration (Entra ID, Google)', vapt: false, one: true, category: 'IT Ops' },
  { feature: 'Multi-Tenant Architecture & RBAC', vapt: true, one: true, category: 'Platform' },
  { feature: 'Executive Reporting & PDF Exports', vapt: true, one: true, category: 'Platform' },
  { feature: 'Immutable Audit Logs', vapt: true, one: true, category: 'Platform' },
];

/* ────── Interactive Dual-Core Holographic Reactor ────── */
function DualEngineReactor({ activeTab, onSelectTab }) {
  return (
    <div className="relative max-w-4xl mx-auto my-10 p-6 sm:p-8 rounded-2xl border-beam-container bg-card border border-line shadow-card backdrop-blur-xl overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 cyber-grid-perspective opacity-30 pointer-events-none" />

      {/* Top Engine Telemetry Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-line gap-4 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-severity-low animate-ping" />
          <span className="text-ink font-bold">DUAL-CORE ARCHITECTURE</span>
          <span className="text-ice-strong bg-ice-soft px-2 py-0.5 rounded border border-ice/20 font-semibold">
            SYNC STATUS: ACTIVE
          </span>
        </div>
        <div className="text-muted">
          Zero-Friction SecOps &amp; ITOps Convergence
        </div>
      </div>

      {/* Visual Interconnected Reactors */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Core: VAPT */}
        <motion.div
          onClick={() => onSelectTab('vapt')}
          className={`p-5 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
            activeTab === 'vapt' || activeTab === 'all'
              ? 'bg-card border-ice shadow-card'
              : 'bg-bg/60 border-line opacity-70 hover:opacity-100'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-ice-soft border border-ice/20 text-ice flex items-center justify-center shadow-sm">
              <Shield size={20} />
            </div>
            <span className="text-[11px] font-mono text-ice-strong bg-ice-soft px-2 py-0.5 rounded border border-ice/20 font-semibold">
              84.2K Scans/Sec
            </span>
          </div>

          <h3 className="text-xl font-heading font-bold text-ink mb-1">
            Anjavor VAPT Core
          </h3>
          <p className="text-xs text-muted leading-relaxed mb-4">
            Deep surface vulnerability discovery, automated exploitation validation, and CVSS priority routing.
          </p>

          <div className="flex items-center justify-between text-[11px] font-mono text-muted pt-3 border-t border-line">
            <span>Threat Exposure: 0-Day Shield</span>
            <span className="text-ice-strong font-bold">● ONLINE</span>
          </div>
        </motion.div>

        {/* Right Core: One */}
        <motion.div
          onClick={() => onSelectTab('one')}
          className={`p-5 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
            activeTab === 'one' || activeTab === 'all'
              ? 'bg-card border-ice-strong shadow-card'
              : 'bg-bg/60 border-line opacity-70 hover:opacity-100'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-ice-soft border border-ice/20 text-ice-strong flex items-center justify-center shadow-sm">
              <Monitor size={20} />
            </div>
            <span className="text-[11px] font-mono text-ice-strong bg-ice-soft px-2 py-0.5 rounded border border-ice/20 font-semibold">
              120K Events/Sec
            </span>
          </div>

          <h3 className="text-xl font-heading font-bold text-ink mb-1">
            Anjavor One Core
          </h3>
          <p className="text-xs text-muted leading-relaxed mb-4">
            Unified cross-platform endpoint management, real-time hardware tracking, and centralized log intelligence.
          </p>

          <div className="flex items-center justify-between text-[11px] font-mono text-muted pt-3 border-t border-line">
            <span>Fleet Hardening: 99.8% Compliant</span>
            <span className="text-severity-low font-bold">● SYNCED</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Synergy Stream */}
      <div className="relative z-10 mt-6 pt-4 border-t border-line flex items-center justify-center gap-3 text-xs font-mono text-muted">
        <Sparkles size={14} className="text-ice animate-pulse" />
        <span>VAPT detects vulnerabilities ➔ ONE executes 1-click remediation across 100K+ devices</span>
      </div>
    </div>
  );
}

export default function Products() {
  const route = siteConfig.routes.find((r) => r.path === '/products');
  const [activeTab, setActiveTab] = useState('all');
  const [tableFilter, setTableFilter] = useState('all');

  const filteredComparisonRows = comparisonRows.filter((row) => {
    if (tableFilter === 'vapt') return row.vapt;
    if (tableFilter === 'one') return row.one;
    return true;
  });

  return (
    <>
      <SEO title="Products" description={route.description} path="/products" />
      <main id="main-content" className="pt-24 relative overflow-hidden">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-default text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase cyber-badge-shimmer border border-ice/20 text-ice-strong mb-6">
                <Sparkles size={14} className="text-ice" />
                <span>Unified Enterprise Architecture</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold gradient-text-mixed mb-6">
                Two Cores. One Complete Defense.
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
                Anjavor VAPT and Anjavor One operate in total synergy—eliminating blind spots, closing the remediation loop, and automating IT compliance across your entire organization.
              </p>

              {/* Animated Product Toggle */}
              <div className="inline-flex items-center p-1.5 rounded-xl bg-card border border-line shadow-sm">
                {[
                  { id: 'all', label: 'All Products' },
                  { id: 'vapt', label: 'Anjavor VAPT' },
                  { id: 'one', label: 'Anjavor One' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative px-5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer"
                  >
                    <span className={`relative z-10 ${activeTab === tab.id ? 'text-white font-semibold' : 'text-muted hover:text-ink'}`}>
                      {tab.label}
                    </span>
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="product-toggle-indicator"
                        className="absolute inset-0 rounded-lg bg-primary shadow-sm"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Interactive Dual-Core Holographic Reactor Widget */}
            <AnimatedSection delay={0.1}>
              <DualEngineReactor activeTab={activeTab} onSelectTab={setActiveTab} />
            </AnimatedSection>
          </div>
        </section>

        {/* Product cards */}
        <section className="section-padding pt-0">
          <div className="container-default">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`grid gap-8 ${
                  activeTab === 'all' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'
                }`}
              >
                {/* VAPT */}
                {(activeTab === 'all' || activeTab === 'vapt') && (
                  <TiltCard tiltAmount={6} glare={true} className="rounded-2xl h-full">
                    <Link to="/products/anjavor-vapt" className="block group h-full">
                      <GlassCard className="p-8 sm:p-10 h-full border-line hover:border-ice/50 transition-all shadow-card">
                        <div className="relative z-10">
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-ice-soft border border-ice/20 text-ice mb-5 shadow-sm group-hover:scale-105 transition-transform">
                            <Shield size={28} />
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <h2 className="text-2xl font-heading font-bold text-ink">Anjavor VAPT</h2>
                            <span className="text-xs px-2.5 py-1 rounded-full bg-ice-soft text-ice-strong font-semibold border border-ice/20">
                              Cybersecurity
                            </span>
                          </div>
                          <p className="text-ice text-sm font-medium mb-4">Vulnerability Assessment &amp; Penetration Testing</p>
                          <p className="text-muted leading-relaxed mb-6">
                            A comprehensive platform to discover, scan, assess, prioritize, validate, and remediate security vulnerabilities across your networks, web applications, APIs, and cloud infrastructure.
                          </p>
                          <ul className="space-y-2 mb-6">
                            {['Network & Web App Scans', 'Manual Pentest Workspace', 'AI Remediation Guidance', 'Compliance Reporting'].map((feat) => (
                              <li key={feat} className="flex items-center gap-2 text-sm text-muted">
                                <CheckCircle size={16} className="text-ice flex-shrink-0" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                          <span className="inline-flex items-center gap-1.5 text-ice-strong font-semibold text-sm group-hover:gap-2.5 transition-all">
                            <span>Explore VAPT Platform</span>
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </GlassCard>
                    </Link>
                  </TiltCard>
                )}

                {/* One */}
                {(activeTab === 'all' || activeTab === 'one') && (
                  <TiltCard tiltAmount={6} glare={true} className="rounded-2xl h-full">
                    <Link to="/products/anjavor-one" className="block group h-full">
                      <GlassCard className="p-8 sm:p-10 h-full border-line hover:border-ice-strong/50 transition-all shadow-card">
                        <div className="relative z-10">
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-ice-soft border border-ice/20 text-ice-strong mb-5 shadow-sm group-hover:scale-105 transition-transform">
                            <Monitor size={28} />
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <h2 className="text-2xl font-heading font-bold text-ink">Anjavor One</h2>
                            <span className="text-xs px-2.5 py-1 rounded-full bg-ice-soft text-ice-strong font-semibold border border-ice/20">
                              IT Management
                            </span>
                          </div>
                          <p className="text-ice-strong text-sm font-medium mb-4">Unified IT Asset, Device &amp; Log Management</p>
                          <p className="text-muted leading-relaxed mb-6">
                            A unified platform to manage IT assets, enroll and control devices across every operating system, and centralize logs with search, retention, and alerting.
                          </p>
                          <ul className="space-y-2 mb-6">
                            {['Cross-Platform MDM (Win/Mac/Linux/Mobile)', 'Automated Asset Inventory', 'Centralized Log Aggregation', 'Real-Time Endpoint Auditing'].map((feat) => (
                              <li key={feat} className="flex items-center gap-2 text-sm text-muted">
                                <CheckCircle size={16} className="text-ice-strong flex-shrink-0" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                          <span className="inline-flex items-center gap-1.5 text-ice-strong font-semibold text-sm group-hover:gap-2.5 transition-all">
                            <span>Explore One Platform</span>
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </GlassCard>
                    </Link>
                  </TiltCard>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding bg-bg/40 border-y border-line">
          <div className="container-default">
            <SectionHeader
              badge="Side-by-Side"
              title="Feature Comparison Matrix"
              description="See how capabilities map between Anjavor VAPT and Anjavor One."
              gradient="mixed"
            />

            {/* Filter buttons */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-xs text-muted flex items-center gap-1 mr-2">
                <Filter size={14} /> Filter:
              </span>
              {[
                { id: 'all', label: 'All Features' },
                { id: 'vapt', label: 'VAPT Features' },
                { id: 'one', label: 'One Features' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setTableFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    tableFilter === f.id
                      ? 'bg-primary text-white font-semibold shadow-sm'
                      : 'bg-card text-muted hover:text-ink border border-line shadow-sm'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <AnimatedSection>
              <div className="overflow-x-auto rounded-2xl border border-line bg-card shadow-card max-w-4xl mx-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-16 z-20 bg-card/95 backdrop-blur-xl border-b border-line shadow-sm">
                    <tr>
                      <th className="py-4 px-6 text-sm font-heading font-semibold text-ink">Capability</th>
                      <th className="py-4 px-6 text-center text-sm font-heading font-semibold text-ice-strong w-36">
                        Anjavor VAPT
                      </th>
                      <th className="py-4 px-6 text-center text-sm font-heading font-semibold text-ice-strong w-36">
                        Anjavor One
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line/40">
                    {filteredComparisonRows.map((row, idx) => (
                      <motion.tr
                        key={row.feature}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: idx * 0.02 }}
                        className="hover:bg-bg/60 transition-colors group"
                      >
                        <td className="py-3.5 px-6 text-sm text-muted group-hover:text-ink transition-colors flex items-center justify-between">
                          <span>{row.feature}</span>
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                            {row.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-6 text-center">
                          {row.vapt ? (
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                              className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ice-soft text-ice"
                            >
                              <CheckCircle size={16} />
                            </motion.span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-bg text-muted/50 border border-line">
                              <X size={14} />
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-6 text-center">
                          {row.one ? (
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                              className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ice-soft text-ice-strong"
                            >
                              <CheckCircle size={16} />
                            </motion.span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-bg text-muted/50 border border-line">
                              <X size={14} />
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <CTASection
          title="See Both Products in Action"
          description="Schedule a demo and we'll walk you through the features that matter most to your team."
          primaryText="Request a Demo"
          primaryTo="/contact"
        />
      </main>
    </>
  );
}
