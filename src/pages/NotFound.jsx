import { Link } from 'react-router-dom';
import { ShieldAlert, Home, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import GlassCard from '../components/GlassCard';
import GlitchText from '../components/GlitchText';
import ParticleField from '../components/ParticleField';
import { AnimatedSection } from '../components/AnimatedSection';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 Page Not Found"
        description="The page you are looking for does not exist or has been moved."
        path="/404"
      />
      <main id="main-content" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
        {/* Floating error particles */}
        <ParticleField count={24} variant="cyan" />

        <div className="container-default max-w-2xl text-center relative z-10">
          <AnimatedSection>
            <GlassCard className="p-10 sm:p-14 border-line shadow-card">
              <div className="w-20 h-20 rounded-2xl bg-ice-soft border border-ice/20 text-ice flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ShieldAlert size={40} className="animate-pulse" />
              </div>

              {/* Cyberpunk Glitch 404 */}
              <div className="mb-4">
                <GlitchText text="404" className="text-6xl sm:text-7xl font-heading font-black tracking-widest text-ink" />
              </div>

              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-ink mb-4">
                Page Not Found
              </h1>

              <p className="text-muted text-base max-w-md mx-auto mb-8 leading-relaxed">
                The requested URL was not found on our server. The page may have been moved, renamed, or temporarily unavailable.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link to="/" className="btn-primary w-full sm:w-auto px-6 py-3">
                  <Home size={18} />
                  <span>Return to Home</span>
                </Link>
                <Link to="/products" className="btn-secondary w-full sm:w-auto px-6 py-3">
                  <span>Explore Products</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="border-t border-line pt-6 mt-6">
                <p className="text-xs text-muted uppercase tracking-wider mb-3">Popular Pages</p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <Link to="/products/anjavor-vapt" className="text-muted hover:text-ice-strong transition-colors">
                    Anjavor VAPT
                  </Link>
                  <span className="text-line">•</span>
                  <Link to="/products/anjavor-one" className="text-muted hover:text-ice-strong transition-colors">
                    Anjavor One
                  </Link>
                  <span className="text-line">•</span>
                  <Link to="/services" className="text-muted hover:text-ice-strong transition-colors">
                    Services
                  </Link>
                  <span className="text-line">•</span>
                  <Link to="/contact" className="text-muted hover:text-ice-strong transition-colors">
                    Contact &amp; Demo
                  </Link>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </main>
    </>
  );
}
