import { useState, useMemo } from 'react';
import { Search, HelpCircle, Shield, Monitor, DollarSign, Lock, Layers } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import FAQAccordion from '../components/FAQAccordion';
import ParticleField from '../components/ParticleField';
import { AnimatedSection } from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import { faqData } from '../data/faq';
import siteConfig from '../config/site';

const categoryIcons = {
  'General': Layers,
  'Anjavor VAPT': Shield,
  'Anjavor One': Monitor,
  'Pricing & Demo': DollarSign,
  'Security': Lock,
};

export default function FAQ() {
  const route = siteConfig.routes.find((r) => r.path === '/faq');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all questions for JSON-LD schema
  const allQuestions = useMemo(() => {
    return faqData.flatMap((cat) => cat.questions);
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  // Filtered categories
  const filteredCategories = useMemo(() => {
    return faqData
      .map((cat) => {
        if (activeCategory !== 'All' && cat.category !== activeCategory) {
          return null;
        }

        const filteredQuestions = cat.questions.filter((item) => {
          if (!searchQuery.trim()) return true;
          const query = searchQuery.toLowerCase();
          return item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query);
        });

        if (filteredQuestions.length === 0) return null;

        return {
          ...cat,
          questions: filteredQuestions,
        };
      })
      .filter(Boolean);
  }, [activeCategory, searchQuery]);

  const quickQueries = [
    'Continuous Scanning',
    'Agent Overhead < 1% CPU',
    'Multi-Tenant Isolation',
    'REST & GraphQL APIs',
    'Air-Gapped Deployment',
    'Pricing & Scoping',
  ];

  const conciergeQuestions = [
    {
      q: 'Does Anjavor agent cause any production CPU spikes?',
      a: 'No. The agent compiles to a single native binary (Go + CGO) and hooks into Linux eBPF / Windows ETW without kernel drivers. CPU utilization stays strictly below 0.8% and memory under 25MB.',
    },
    {
      q: 'Can Anjavor VAPT run safely against live production environments?',
      a: 'Yes. Every vulnerability probe runs through non-destructive validation algorithms. The engine adapts scan rates based on target server HTTP response codes and response latency.',
    },
    {
      q: 'How does multi-tenant data isolation prevent cross-tenant data leaks?',
      a: 'Tenants are partitioned at the database layer with customer-specific partition keys, and sensitive scan telemetry is envelope-encrypted with dedicated AES-256-GCM keys managed by HSM.',
    },
  ];

  const [activeConcierge, setActiveConcierge] = useState(0);

  return (
    <>
      <SEO title="FAQ" description={route.description} path="/faq" jsonLd={jsonLd} />
      <main id="main-content" className="pt-24 relative overflow-hidden">
        {/* Parallax particles */}
        <ParticleField count={18} variant="cyan" />

        {/* Hero */}
        <section className="section-padding relative z-10">
          <div className="container-default text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ice-soft border border-ice/20 text-ice-strong mb-6">
                Knowledge Base &amp; Technical FAQ
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold gradient-text-mixed mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-8">
                Find clear answers about Anjavor VAPT, Anjavor One, platform architecture, deployment workflows, and scheduling an engineer walkthrough.
              </p>

              {/* Search Bar with Active Filter Indicator */}
              <div className="max-w-xl mx-auto relative mb-4">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions, keywords, or topics..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-card border border-line text-ink placeholder-muted focus:outline-none focus:border-ice transition-colors shadow-sm"
                  aria-label="Search frequently asked questions"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-muted hover:text-ink bg-bg px-2 py-0.5 rounded border border-line cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Quick Query Topic Chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
                <span className="text-xs font-mono text-muted mr-1">Trending:</span>
                {quickQueries.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => {
                      setSearchQuery(chip.split(' ')[0]);
                      setActiveCategory('All');
                    }}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-card border border-line text-muted hover:text-ice-strong hover:border-ice/40 shadow-sm transition-all cursor-pointer"
                  >
                    #{chip}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Interactive Architecture Q&A Terminal */}
            <AnimatedSection delay={0.15}>
              <div className="max-w-4xl mx-auto mt-10 p-5 rounded-2xl bg-card border border-line text-left shadow-card relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-line mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-ice animate-pulse" />
                    <span className="text-xs font-mono font-bold text-ice-strong uppercase tracking-wider">
                      Technical Concierge Terminal
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-muted">Response Latency: &lt; 4ms</span>
                </div>

                {/* Question Tabs */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {conciergeQuestions.map((cq, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveConcierge(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        activeConcierge === idx
                          ? 'bg-primary text-white font-bold'
                          : 'bg-bg text-muted hover:text-ink border border-line'
                      }`}
                    >
                      Query #{idx + 1}
                    </button>
                  ))}
                </div>

                <div className="bg-bg/60 border border-line rounded-xl p-4 font-mono text-xs">
                  <div className="text-ice-strong font-bold mb-1">
                    Q: {conciergeQuestions[activeConcierge].q}
                  </div>
                  <p className="text-muted leading-relaxed font-sans text-sm">
                    {conciergeQuestions[activeConcierge].a}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="pb-8 relative z-10">
          <div className="container-default">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === 'All'
                    ? 'bg-primary text-white font-semibold shadow-sm'
                    : 'bg-card text-muted hover:text-ink border border-line shadow-sm'
                }`}
              >
                All Categories ({allQuestions.length})
              </button>
              {faqData.map((cat) => {
                const Icon = categoryIcons[cat.category] || HelpCircle;
                return (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      activeCategory === cat.category
                        ? 'bg-primary text-white font-semibold shadow-sm'
                        : 'bg-card text-muted hover:text-ink border border-line shadow-sm'
                    }`}
                  >
                    <Icon size={15} />
                    {cat.category} ({cat.questions.length})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Accordions with search term highlighting */}
        <section className="section-padding pt-6 relative z-10">
          <div className="container-default max-w-3xl">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-16 solid-card">
                <p className="text-muted text-base mb-4">No questions found matching &ldquo;{searchQuery}&rdquo;</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="btn-secondary text-sm"
                >
                  Clear search and filters
                </button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((categoryGroup) => (
                  <div key={categoryGroup.category}>
                    <div className="flex items-center gap-2 mb-6 border-b border-line pb-3">
                      <h2 className="text-xl font-heading font-bold text-ink">
                        {categoryGroup.category}
                      </h2>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                        {categoryGroup.questions.length}
                      </span>
                    </div>
                    <FAQAccordion items={categoryGroup.questions} searchQuery={searchQuery} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Still Have Questions?"
          description="Our technical team is ready to answer specific questions about your enterprise environment."
          primaryText="Contact Us"
          primaryTo="/contact"
        />
      </main>
    </>
  );
}
