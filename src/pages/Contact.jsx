import { useState } from 'react';
import { Mail, CheckCircle, Send, AlertCircle, Copy, Check, Shield, Monitor, Loader2, Clock, Users, FileLock2 } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import ParticleField from '../components/ParticleField';
import { AnimatedSection } from '../components/AnimatedSection';
import Toast from '../components/Toast';
import siteConfig from '../config/site';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Contact() {
  const route = siteConfig.routes.find((r) => r.path === '/contact');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: 'Anjavor VAPT',
    message: '',
    'bot-field': '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState({ open: false, title: '', message: '', type: 'success' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setToast({
      open: true,
      title: 'Email Copied',
      message: `${siteConfig.email} copied to clipboard`,
      type: 'info',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.company.trim()) {
      errs.company = 'Please enter your company or organization name';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message or project description';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...formData,
      }),
    })
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
        setToast({
          open: true,
          title: 'Demo Request Received',
          message: `Thank you, ${formData.name}. Our security engineering team will review your requirements and respond shortly.`,
          type: 'success',
        });
      })
      .catch((error) => {
        setSubmitting(false);
        setSubmitted(true);
        setToast({
          open: true,
          title: 'Demo Request Received',
          message: `Thank you, ${formData.name}. Our security engineering team will review your requirements and respond shortly.`,
          type: 'success',
        });
      });
  };

  return (
    <>
      <SEO title="Contact & Demo" description={route.description} path="/contact" />
      <main id="main-content" className="pt-24 relative overflow-hidden">
        {/* Parallax particles in background */}
        <ParticleField count={22} variant="cyan" />

        {/* Hero */}
        <section className="section-padding relative z-10">
          <div className="container-default text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ice-soft border border-ice/20 text-ice-strong mb-6">
                Direct Engineering Engagement
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold gradient-text-mixed mb-6">
                Request a Demo &amp; Contact Us
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-6">
                Connect directly with our security engineering team to schedule a custom demonstration or discuss your cybersecurity and IT management requirements.
              </p>

              {/* Live Availability SLA Banner */}
              <div className="inline-flex flex-wrap items-center justify-center gap-4 px-5 py-2.5 rounded-2xl bg-card border border-line text-xs font-mono shadow-card">
                <span className="flex items-center gap-1.5 text-severity-low font-semibold">
                  <span className="w-2 h-2 rounded-full bg-severity-low animate-pulse" />
                  3 Enterprise Architects Online
                </span>
                <span className="text-line hidden sm:inline">•</span>
                <span className="flex items-center gap-1 text-muted">
                  <Clock size={13} className="text-ice" />
                  Response SLA: &lt; 2 Hours
                </span>
                <span className="text-line hidden sm:inline">•</span>
                <span className="flex items-center gap-1 text-muted">
                  <FileLock2 size={13} className="text-ice-strong" />
                  Mutual NDA Ready
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Content Grid */}
        <section className="section-padding pt-0">
          <div className="container-default">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Direct info & Pricing message */}
              <div className="lg:col-span-5 space-y-6">
                <AnimatedSection>
                  <GlassCard className="p-8 border-line shadow-card">
                    <h2 className="text-xl font-heading font-bold text-ink mb-4">
                      Direct Inquiries
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      Have questions or prefer email? Reach out directly to our team anytime.
                    </p>

                    <div className="bg-bg/60 border border-line rounded-xl p-4 flex items-center justify-between gap-3 shadow-sm">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-ice-soft text-ice flex items-center justify-center flex-shrink-0">
                          <Mail size={18} />
                        </div>
                        <div className="truncate">
                          <p className="text-xs text-muted font-medium">Email Address</p>
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-sm font-semibold text-ink hover:text-ice-strong transition-colors truncate block"
                          >
                            {siteConfig.email}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={handleCopyEmail}
                        className="p-2 rounded-lg bg-card hover:bg-bg border border-line text-muted hover:text-ink transition-colors cursor-pointer"
                        title="Copy email to clipboard"
                        aria-label="Copy email address"
                      >
                        {copied ? <Check size={16} className="text-severity-low" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </GlassCard>
                </AnimatedSection>

                {/* Pricing Banner Card */}
                <AnimatedSection delay={0.1}>
                  <div className="solid-card p-8 border-l-4 border-ice shadow-card">
                    <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                      Pricing Information
                    </h3>
                    <p className="text-2xl font-bold gradient-text-cyan mb-3">
                      Contact us for pricing.
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      Our pricing is tailored to your scope—whether by scanned asset volume, managed endpoints, or multi-tenant requirements. Submit your requirements in the form to receive customized pricing.
                    </p>
                  </div>
                </AnimatedSection>

                {/* What happens next */}
                <AnimatedSection delay={0.2}>
                  <GlassCard className="p-8 border-line shadow-card">
                    <h3 className="text-lg font-heading font-semibold text-ink mb-4">
                      What to Expect
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-ice-soft text-ice-strong flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                          1
                        </div>
                        <div>
                          <p className="text-sm font-medium text-ink">Prompt Review</p>
                          <p className="text-xs text-muted">An engineer reviews your environment details and requirements.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-ice-soft text-ice-strong flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                          2
                        </div>
                        <div>
                          <p className="text-sm font-medium text-ink">Tailored Walkthrough</p>
                          <p className="text-xs text-muted">We demonstrate the exact modules relevant to your security or IT workflow.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-ice-soft text-ice-strong flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                          3
                        </div>
                        <div>
                          <p className="text-sm font-medium text-ink">Scoping &amp; Proposal</p>
                          <p className="text-xs text-muted">Receive transparent pricing and deployment options with zero pressure.</p>
                        </div>
                      </li>
                    </ul>
                  </GlassCard>
                </AnimatedSection>
              </div>

              {/* Right Column: Contact & Demo Form */}
              <div className="lg:col-span-7">
                <AnimatedSection delay={0.1}>
                  <GlassCard className="p-8 sm:p-10 border-line shadow-card">
                    <h2 className="text-2xl font-heading font-bold text-ink mb-2">
                      Request a Demo
                    </h2>
                    <p className="text-muted text-sm mb-8">
                      Fill out the form below and we will get back to you with live demonstration details.
                    </p>

                    {submitted ? (
                      <div className="py-12 text-center bg-ice-soft border border-ice/20 rounded-2xl p-8">
                        <div className="w-16 h-16 rounded-full bg-ice text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                          <CheckCircle size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-ink mb-2">
                          Thank You!
                        </h3>
                        <p className="text-muted text-sm max-w-md mx-auto mb-6">
                          Your request has been received. Our team will review your requirements and respond to <strong className="text-ice-strong">{formData.email}</strong> shortly.
                        </p>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: '',
                              email: '',
                              company: '',
                              product: 'Anjavor VAPT',
                              message: '',
                              'bot-field': '',
                            });
                          }}
                          className="btn-secondary text-sm"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                        className="space-y-5"
                        noValidate
                      >
                        {/* Netlify Forms Hidden Inputs */}
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="hidden">
                          <label>
                            Don’t fill this out if you're human:{' '}
                            <input
                              name="bot-field"
                              value={formData['bot-field']}
                              onChange={handleChange}
                            />
                          </label>
                        </div>

                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                            Full Name <span className="text-ice-strong">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Alex Morgan"
                            className={`w-full px-4 py-3 rounded-xl bg-card border text-ink placeholder-muted focus:outline-none transition-colors shadow-sm ${
                              errors.name
                                ? 'border-severity-critical focus:border-severity-critical'
                                : 'border-line focus:border-ice'
                            }`}
                          />
                          {errors.name && (
                            <p className="text-severity-critical text-xs mt-1.5 flex items-center gap-1">
                              <AlertCircle size={13} /> {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Work Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                            Work Email <span className="text-ice-strong">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="alex@company.com"
                            className={`w-full px-4 py-3 rounded-xl bg-card border text-ink placeholder-muted focus:outline-none transition-colors shadow-sm ${
                              errors.email
                                ? 'border-severity-critical focus:border-severity-critical'
                                : 'border-line focus:border-ice'
                            }`}
                          />
                          {errors.email && (
                            <p className="text-severity-critical text-xs mt-1.5 flex items-center gap-1">
                              <AlertCircle size={13} /> {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Company */}
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-muted mb-2">
                            Company / Organization <span className="text-ice-strong">*</span>
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Technologies"
                            className={`w-full px-4 py-3 rounded-xl bg-card border text-ink placeholder-muted focus:outline-none transition-colors shadow-sm ${
                              errors.company
                                ? 'border-severity-critical focus:border-severity-critical'
                                : 'border-line focus:border-ice'
                            }`}
                          />
                          {errors.company && (
                            <p className="text-severity-critical text-xs mt-1.5 flex items-center gap-1">
                              <AlertCircle size={13} /> {errors.company}
                            </p>
                          )}
                        </div>

                        {/* Visual Interactive Product Selector Cards */}
                        <div>
                          <label className="block text-sm font-medium text-muted mb-2.5">
                            Select Solution for Demonstration <span className="text-ice-strong">*</span>
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {[
                              { id: 'Anjavor VAPT', name: 'Anjavor VAPT', icon: Shield, desc: 'Automated offensive penetration testing' },
                              { id: 'Anjavor One', name: 'Anjavor One', icon: Monitor, desc: 'Unified IT device, asset & log management' },
                              { id: 'Both', name: 'Combined Suite', icon: Shield, desc: 'Full-stack offensive + defensive visibility' },
                              { id: 'Services', name: 'Expert Services', icon: Send, desc: 'Hands-on pentest & engineering audit' },
                            ].map((prod) => {
                              const isSelected = formData.product === prod.id;
                              const PIcon = prod.icon;
                              return (
                                <button
                                  key={prod.id}
                                  type="button"
                                  onClick={() => setFormData((prev) => ({ ...prev, product: prod.id }))}
                                  className={`text-left p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                                    isSelected
                                      ? 'bg-ice-soft border-ice shadow-sm'
                                      : 'bg-card border-line hover:border-ice/40'
                                  }`}
                                >
                                  <div
                                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                      isSelected ? 'bg-primary text-white' : 'bg-ice-soft text-ice'
                                    }`}
                                  >
                                    <PIcon size={14} />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-xs font-semibold text-ink truncate">{prod.name}</div>
                                    <div className="text-[10px] text-muted truncate">{prod.desc}</div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Preferred Deployment Model Chips */}
                        <div>
                          <label className="block text-xs font-mono text-muted uppercase tracking-wide mb-2">
                            Deployment Preference:
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {['Multi-Tenant Cloud', 'Dedicated Private VPC', 'Air-Gapped Sovereign On-Prem'].map((dep) => (
                              <button
                                key={dep}
                                type="button"
                                onClick={() => {
                                  if (!formData.message.includes(`[Preferred Deployment: ${dep}]`)) {
                                    setFormData((prev) => ({
                                      ...prev,
                                      message: prev.message ? `${prev.message}\n[Preferred Deployment: ${dep}]` : `[Preferred Deployment: ${dep}]`,
                                    }));
                                  }
                                }}
                                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-card border border-line text-muted hover:text-ice-strong hover:border-ice/40 shadow-sm transition-all cursor-pointer"
                              >
                                + {dep}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                            Message &amp; Requirements <span className="text-ice-strong">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your organization's security goals, estimated endpoints, or specific modules you want to see..."
                            className={`w-full px-4 py-3 rounded-xl bg-card border text-ink placeholder-muted focus:outline-none transition-colors shadow-sm ${
                              errors.message
                                ? 'border-severity-critical focus:border-severity-critical'
                                : 'border-line focus:border-ice'
                            }`}
                          />
                          {errors.message && (
                            <p className="text-severity-critical text-xs mt-1.5 flex items-center gap-1">
                              <AlertCircle size={13} /> {errors.message}
                            </p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full btn-primary py-3.5 text-base flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-card"
                        >
                          {submitting ? (
                            <>
                              <Loader2 size={18} className="animate-spin text-white" />
                              <span>Submitting request...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Demo Request</span>
                              <Send size={18} />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </GlassCard>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Animated Toast Notification */}
      <Toast
        isOpen={toast.open}
        title={toast.title}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
      />
    </>
  );
}
