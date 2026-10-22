import SEO from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import siteConfig from '../config/site';

export default function Privacy() {
  const route = siteConfig.routes.find((r) => r.path === '/privacy');

  return (
    <>
      <SEO title="Privacy Policy" description={route.description} path="/privacy" />
      <main id="main-content" className="pt-24">
        <section className="section-padding">
          <div className="container-default max-w-4xl">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ice-soft border border-ice/20 text-ice-strong mb-6">
                Legal
              </span>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-mixed mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm text-muted mb-12">
                Last updated: October 2026
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="solid-card p-8 sm:p-12 space-y-8 text-muted text-sm sm:text-base leading-relaxed">
                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">1. Introduction</h2>
                  <p>
                    {siteConfig.companyName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is dedicated to protecting the information you share with us. This Privacy Policy outlines how we collect, process, disclose, and safeguard personal and organizational information when you visit our website, submit demonstration requests, or use our software platforms, including Anjavor VAPT and Anjavor One.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">2. Information We Collect</h2>
                  <p className="mb-3">
                    We only collect information necessary to provide, manage, and improve our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>
                      <strong className="text-ink">Contact &amp; Inquiry Information:</strong> Full name, professional work email address, company name, and details you provide when submitting a demo request or reaching out for support.
                    </li>
                    <li>
                      <strong className="text-ink">Platform Operational Telemetry:</strong> When authorized users interact with our platforms, system access logs, administrative audit trails, and diagnostic metadata are generated to maintain system integrity and security.
                    </li>
                    <li>
                      <strong className="text-ink">Website Usage Data:</strong> Standard server access logs, browser type, referring URLs, and general usage metrics collected automatically to optimize website performance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">3. How We Use Your Information</h2>
                  <p className="mb-3">We use collected information solely for legitimate business purposes:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>To respond to your demo inquiries, product requests, and support communications.</li>
                    <li>To provide, administer, and maintain platform security, RBAC access controls, and multi-tenant isolation.</li>
                    <li>To deliver security audit logs and reporting features requested by authorized tenant administrators.</li>
                    <li>To fulfill legal, regulatory, and contractual compliance obligations.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">4. Customer Data &amp; Security Findings</h2>
                  <p>
                    We treat all customer security scan results, vulnerability findings, network topologies, asset inventories, and system logs as strictly confidential Customer Data. Customer Data is isolated logically within your designated tenant partition, encrypted in transit using TLS 1.3 and at rest using AES-256, and never shared, sold, or used for advertising.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">5. Data Retention &amp; Deletion</h2>
                  <p>
                    We retain personal information for the period required to fulfill the objectives described in this policy, unless a longer retention duration is required by law or contractual mandate. Customer organizations have the administrative authority to configure data retention timelines for scan history and telemetry logs.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">6. Cookies and Tracking</h2>
                  <p>
                    Our public website does not employ third-party advertising trackers or behavioral targeting pixels. Minimal functional session tokens may be used to deliver responsive interface capabilities and prevent spam submissions.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">7. Your Privacy Rights</h2>
                  <p>
                    Depending on your location, you may have rights under applicable data protection laws, including the right to request access to, correction of, or deletion of your personal contact information held by us.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">8. Contact Information</h2>
                  <p>
                    For questions, comments, or data protection inquiries regarding this Privacy Policy, please contact our privacy and security team directly at:
                  </p>
                  <p className="mt-3 font-semibold text-ice-strong">
                    <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  );
}
