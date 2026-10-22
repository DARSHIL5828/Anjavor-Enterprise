import { lazy, Suspense, Component } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CursorGlow from './components/CursorGlow';
import BackToTop from './components/BackToTop';
import SplashScreen from './components/SplashScreen';
import PageTransition from './components/PageTransition';
import ScrollProgressBar from './components/ScrollProgressBar';
import GlobalBackground from './components/GlobalBackground';
import useSmoothScroll from './hooks/useSmoothScroll';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false, error: null });
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold text-ink mb-2">Something went wrong</h2>
          <p className="text-muted mb-6 max-w-md font-mono text-xs">{this.state.error?.message || 'Unknown runtime error'}</p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            className="btn-primary text-sm px-6 py-2.5 cursor-pointer"
          >
            Reload Application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy loaded pages for performance (Phase 6.2)
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const VAPTProduct = lazy(() => import('./pages/VAPTProduct'));
const OneProduct = lazy(() => import('./pages/OneProduct'));
const Services = lazy(() => import('./pages/Services'));
const Security = lazy(() => import('./pages/Security'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center" aria-label="Loading page content">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-ice/20 border-t-ice animate-spin" />
        <div className="w-6 h-6 rounded-full bg-ice/15 animate-pulse absolute" />
      </div>
    </div>
  );
}

export default function App() {
  // Initialize buttery smooth momentum scrolling (Lenis)
  useSmoothScroll();
  const location = useLocation();

  return (
    <SplashScreen>
      <div className="min-h-screen flex flex-col bg-bg text-ink relative">
        {/* GPU-Accelerated Zero-Rerender Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Persistent Floating Subtle Dots across ALL pages */}
        <GlobalBackground />

        <CursorGlow />
        <ScrollToTop />
        <Navbar />

        <div className="flex-grow">
          <ErrorBoundary resetKey={location.pathname}>
            <Suspense fallback={<PageFallback />}>
              <PageTransition key={location.pathname}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/anjavor-vapt" element={<VAPTProduct />} />
                  <Route path="/products/anjavor-one" element={<OneProduct />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/security" element={<Security />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            </Suspense>
          </ErrorBoundary>
        </div>

        <Footer />
        <BackToTop />
      </div>
    </SplashScreen>
  );
}
