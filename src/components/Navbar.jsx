import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Monitor, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import { useScrolledPast } from '../hooks/useScroll';
import useMobileDetect from '../hooks/useMobileDetect';
import logoMark from '../assets/logo-mark.png';

const mainNavItems = [
  { label: 'Products', to: '/products', hasDropdown: true },
  { label: 'Services', to: '/services' },
  { label: 'Security', to: '/security' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [hoveredNavIndex, setHoveredNavIndex] = useState(null);
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const scrolled = useScrolledPast(20);
  const isMobile = useMobileDetect();
  const location = useLocation();

  const isProductsActive = location.pathname.startsWith('/products');

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setProductsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 240);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.9 }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Floating Capsule Dock (Note: NO overflow-hidden so mega-dropdown can extend freely) */}
        <motion.nav
          animate={isMobile ? undefined : {
            y: scrolled ? 2 : 0,
            scale: scrolled ? 0.995 : 1,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`pointer-events-auto relative flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-2xl transition-all duration-300 ${
            isMobile
              ? 'bg-white border border-line/80 shadow-sm'
              : scrolled
                ? 'bg-white/95 backdrop-blur-2xl border border-white/95 shadow-[0_18px_42px_-10px_rgba(2,132,199,0.16),0_0_0_1px_rgba(2,132,199,0.1)]'
                : 'bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_10px_32px_-8px_rgba(15,23,42,0.06),0_0_0_1px_rgba(179,212,236,0.5)]'
          }`}
          aria-label="Main navigation"
          onMouseLeave={() => setHoveredNavIndex(null)}
        >
          {/* Inner Clipping Container for Top Crystal Beam & Edge Shimmer */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden z-20" aria-hidden="true">
            {/* Top Crystal Edge Catch-Light */}
            <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95" />

            {/* Continuous Ambient Crystal Shimmer Beam — desktop only */}
            {!isMobile && (
              <motion.div
                className="absolute top-0 left-0 h-[1.5px] w-56 bg-gradient-to-r from-transparent via-ice to-transparent opacity-70"
                animate={{ x: ['-100%', '600%'] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', repeatDelay: 2.5 }}
              />
            )}
          </div>

          {/* Left: Brand Identity with 3D Micro-Physics */}
          <Link
            to="/"
            className="flex items-center gap-3 group py-0.5 select-none flex-shrink-0"
            aria-label="Anjavor Technologies Home"
          >
            <motion.img
              src={logoMark}
              alt="Anjavor Technologies Logo"
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain drop-shadow-sm flex-shrink-0"
              whileHover={isMobile ? undefined : { rotate: [-2, 3, 0], scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
            />
            <div className="flex flex-col justify-center select-none">
              <span className="font-heading font-bold text-xl sm:text-2xl text-ink tracking-tight leading-none group-hover:text-ice-strong transition-colors">
                Anjavor
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.20em] text-ice-strong uppercase leading-none mt-1 sm:mt-1.5 font-sans">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links with Liquid Spotlight Pill */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown Item */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => {
                setHoveredNavIndex(0);
                handleDropdownEnter();
              }}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                onClick={() => setProductsDropdownOpen((prev) => !prev)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all flex items-center gap-1.5 focus:outline-none select-none cursor-pointer ${
                  isProductsActive || productsDropdownOpen
                    ? 'text-ice-strong font-semibold'
                    : 'text-muted hover:text-ink'
                }`}
                aria-expanded={productsDropdownOpen}
                aria-haspopup="true"
              >
                {/* Active Indicator Pill */}
                {isProductsActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-ice-soft border border-ice/30 shadow-sm"
                    transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                  />
                )}

                {/* Liquid Hover Spotlight Ghost Pill */}
                {hoveredNavIndex === 0 && !isProductsActive && (
                  <motion.div
                    layoutId="navbar-hover-ghost"
                    className="absolute inset-0 rounded-full bg-ice/10 border border-ice/15"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}

                <span className="relative z-10">Products</span>
                <motion.div
                  animate={{ rotate: productsDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  className="relative z-10"
                >
                  <ChevronDown
                    size={14}
                    className={`transition-colors ${
                      productsDropdownOpen ? 'text-ice-strong' : 'text-muted/70'
                    }`}
                  />
                </motion.div>
              </button>

              {/* Rich Products Mega Dropdown Card with Seamless Bridge */}
              <AnimatePresence>
                {productsDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[560px] z-50 pointer-events-auto"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: 8, scale: 0.97, filter: 'blur(4px)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      className="relative rounded-2xl p-4 bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_26px_56px_-12px_rgba(2,132,199,0.28),0_0_0_1px_rgba(179,212,236,0.6)] overflow-hidden"
                    >
                      {/* Top Crystal Accent */}
                      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ice to-transparent opacity-80" />

                      <div className="grid grid-cols-2 gap-3 mb-3">
                        {/* Product 1: VAPT */}
                        <Link
                          to="/products/anjavor-vapt"
                          onClick={() => setProductsDropdownOpen(false)}
                          className="group/item p-4 rounded-xl bg-card/50 hover:bg-white border border-line/50 hover:border-ice/45 hover:shadow-md transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <motion.div
                                className="jewel-badge w-10 h-10 text-ice"
                                whileHover={{ rotate: 5, scale: 1.1 }}
                              >
                                <Shield size={20} />
                              </motion.div>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                                OFFENSIVE
                              </span>
                            </div>
                            <h4 className="font-heading font-bold text-ink text-base mb-1 group-hover/item:text-ice-strong transition-colors">
                              Anjavor VAPT
                            </h4>
                            <p className="text-muted text-xs leading-relaxed mb-3">
                              Automated vulnerability scanning and authorized penetration testing workflows.
                            </p>
                          </div>
                          <div className="pt-2 border-t border-line/40 flex items-center justify-between text-[11px] font-mono text-ice-strong">
                            <span>CVSS v4.0 Scanner</span>
                            <ArrowRight size={12} className="group-hover/item:translate-x-1 transition-transform" />
                          </div>
                        </Link>

                        {/* Product 2: One */}
                        <Link
                          to="/products/anjavor-one"
                          onClick={() => setProductsDropdownOpen(false)}
                          className="group/item p-4 rounded-xl bg-card/50 hover:bg-white border border-line/50 hover:border-ice/45 hover:shadow-md transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <motion.div
                                className="jewel-badge w-10 h-10 text-ice-strong"
                                whileHover={{ rotate: 5, scale: 1.1 }}
                              >
                                <Monitor size={20} />
                              </motion.div>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                                DEFENSIVE
                              </span>
                            </div>
                            <h4 className="font-heading font-bold text-ink text-base mb-1 group-hover/item:text-ice-strong transition-colors">
                              Anjavor One
                            </h4>
                            <p className="text-muted text-xs leading-relaxed mb-3">
                              Unified IT asset inventory, cross-OS device management, and centralized log ingestion.
                            </p>
                          </div>
                          <div className="pt-2 border-t border-line/40 flex items-center justify-between text-[11px] font-mono text-ice-strong">
                            <span>Fleet Telemetry</span>
                            <ArrowRight size={12} className="group-hover/item:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      </div>

                      {/* Bottom All Products Strip */}
                      <Link
                        to="/products"
                        onClick={() => setProductsDropdownOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-bg/80 hover:bg-ice-soft border border-line/60 hover:border-ice/30 transition-all text-xs group/bottom"
                      >
                        <span className="text-ink font-semibold flex items-center gap-1.5">
                          <Sparkles size={14} className="text-ice" />
                          Explore Dual-Engine Architecture
                        </span>
                        <span className="text-ice-strong font-mono flex items-center gap-1 group-hover/bottom:translate-x-0.5 transition-transform">
                          Compare Platforms <ArrowRight size={12} />
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Nav Links with Liquid Hover Ghost Spotlight */}
            {mainNavItems.slice(1).map((item, idx) => {
              const navIndex = idx + 1;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onMouseEnter={() => setHoveredNavIndex(navIndex)}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      isActive
                        ? 'text-ice-strong font-semibold'
                        : 'text-muted hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active Indicator Pill */}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-full bg-ice-soft border border-ice/30 shadow-sm"
                          transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                        />
                      )}

                      {/* Liquid Hover Spotlight Ghost Pill */}
                      {hoveredNavIndex === navIndex && !isActive && (
                        <motion.div
                          layoutId="navbar-hover-ghost"
                          className="absolute inset-0 rounded-full bg-ice/10 border border-ice/15"
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                        />
                      )}

                      <span className="relative z-10">{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Right: Action Button with Shimmer Energy Pulse */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Link
                to="/contact"
                className="btn-primary text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 group relative overflow-hidden"
              >
                <span>Request Demo</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </Link>
            </motion.div>

            {/* Mobile Hamburger Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              className="lg:hidden p-2 text-muted hover:text-ink transition-colors rounded-xl bg-card border border-line focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <motion.div
                animate={{ rotate: mobileOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={20} className="text-ice" /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Glass Drawer with Spring Stagger */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="pointer-events-auto lg:hidden max-w-6xl mx-auto mt-2 rounded-2xl bg-white border border-line/80 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)] p-5 overflow-hidden"
          >
            <div className="space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
              {/* Products Section Card */}
              <div className="p-3.5 rounded-xl bg-card/50 border border-line/60">
                <div className="flex items-center justify-between mb-3 text-xs font-mono font-bold uppercase tracking-wider text-muted">
                  <span>Our Platforms</span>
                  <Link to="/products" className="text-ice-strong flex items-center gap-1 font-sans">
                    View All <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Link
                    to="/products/anjavor-vapt"
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-line/50 hover:border-ice/40 transition-all"
                  >
                    <div className="jewel-badge w-9 h-9 text-ice flex-shrink-0">
                      <Shield size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-ink">Anjavor VAPT</div>
                      <div className="text-[10px] text-muted font-mono">Offensive Pentest</div>
                    </div>
                  </Link>
                  <Link
                    to="/products/anjavor-one"
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-line/50 hover:border-ice/40 transition-all"
                  >
                    <div className="jewel-badge w-9 h-9 text-ice-strong flex-shrink-0">
                      <Monitor size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-ink">Anjavor One</div>
                      <div className="text-[10px] text-muted font-mono">IT Fleet & Logs</div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Main Navigation Links */}
              <div className="space-y-1">
                {[
                  { label: 'Services', to: '/services' },
                  { label: 'Security & Trust', to: '/security' },
                  { label: 'About Anjavor', to: '/about' },
                  { label: 'FAQ', to: '/faq' },
                  { label: 'Contact', to: '/contact' },
                ].map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                          isActive
                            ? 'bg-ice-soft text-ice-strong font-semibold border border-ice/25'
                            : 'text-ink hover:bg-card/70'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={14} className="text-muted/60" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold"
                >
                  <span>Launch Live Demo</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Mobile Telemetry Footer */}
              <div className="pt-3 border-t border-line/40 flex items-center justify-between text-[11px] font-mono text-muted/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-severity-low" />
                  Systems Operational
                </span>
                <span>v2.4 Enterprise</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


