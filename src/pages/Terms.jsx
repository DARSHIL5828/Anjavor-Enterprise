import SEO from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import siteConfig from '../config/site';

export default function Terms() {
  const route = siteConfig.routes.find((r) => r.path === '/terms');

  return (
    <>
      <SEO title="Terms of Service" description={route.description} path="/terms" />
      <main id="main-content" className="pt-24">
        <section className="section-padding">
          <div className="container-default max-w-4xl">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ice-soft border border-ice/20 text-ice-strong mb-6">
                Legal
              </span>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-mixed mb-4">
                Terms of Service
              </h1>
              <p className="text-sm text-muted mb-12">
                Last updated: October 2026
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="solid-card p-8 sm:p-12 space-y-8 text-muted text-sm sm:text-base leading-relaxed">
                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">1. Agreement to Terms</h2>
                  <p>
                    By accessing our website, evaluating our solutions, or subscribing to software products provided by {siteConfig.companyName} (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), including Anjavor VAPT and Anjavor One, you agree to be bound by these Terms of Service. If you do not agree with these terms, do not access our services.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-ice-soft border border-ice/20">
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">
                    2. Authorized Security Testing Mandate
                  </h2>
                  <p className="text-ice-strong mb-3 font-medium">
                    <strong>Critical Requirement:</strong> Anjavor VAPT is engineered and licensed exclusively for authorized security testing, vulnerability assessment, and defensive validation.
                  </p>
                  <p className="text-muted">
                    You represent and warrant that you own or have obtained explicit, binding written permission from the legal owner of any host, network, IP range, domain, cloud subscription, or application targeted during scans or penetration testing activities. Running unauthorized scans against third-party systems is strictly prohibited, constitutes a material breach of these terms, and may violate applicable computer misuse and cybercrime legislation.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">3. Use of Software &amp; Platform Access</h2>
                  <p className="mb-3">
                    We grant customer organizations a limited, non-exclusive, non-transferable right to access and use our software platforms in accordance with the subscribed plan:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Users are responsible for safeguarding their authentication credentials and API keys.</li>
                    <li>Role-Based Access Control (RBAC) configurations must be maintained to reflect least-privilege principles.</li>
                    <li>You agree not to reverse engineer, decompile, or attempt to extract source code from the platforms.</li>
                    <li>You agree not to circumvent scan quotas, multi-tenant boundaries, or administrative licensing constraints.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">4. Commercial Engagements &amp; Pricing</h2>
                  <p>
                    Access to our platforms and professional engineering services is provided on a commercial subscription or project basis. Please contact us for pricing tailored to your organization&rsquo;s asset counts, managed devices, and functional requirements.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">5. Intellectual Property Rights</h2>
                  <p>
                    All intellectual property rights in and to Anjavor Enterprise platforms, code, documentation, graphics, logos, and features remain our exclusive property. Customers retain all rights, ownership, and interest in and to their proprietary systems, configurations, logs, and generated vulnerability assessment data.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">6. Disclaimer of Warranties &amp; Limitation of Liability</h2>
                  <p className="mb-3">
                    Our software and services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. While Anjavor VAPT and Anjavor One provide comprehensive vulnerability scanning, asset tracking, and log monitoring capabilities, cybersecurity threats continuously evolve.
                  </p>
                  <p>
                    We do not guarantee that software testing will detect every vulnerability or that systems will be entirely invulnerable to security breaches. To the maximum extent permitted by law, the Company shall not be liable for indirect, incidental, punitive, or consequential damages resulting from your use of the platforms.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">7. Modifications to Terms</h2>
                  <p>
                    We reserve the right to amend these Terms of Service at any time. Material updates will be reflected with a revised &ldquo;Last updated&rdquo; timestamp on this page.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-heading font-bold text-ink mb-3">8. Contact Information</h2>
                  <p>
                    For inquiries concerning these Terms of Service or commercial agreements, please contact us at:
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
