import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import siteConfig from '../config/site';
import logoMark from '../assets/logo-mark.png';

const footerSections = [
  {
    title: 'Products',
    links: [
      { label: 'Anjavor VAPT', to: '/products/anjavor-vapt' },
      { label: 'Anjavor One', to: '/products/anjavor-one' },
      { label: 'All Products', to: '/products' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Penetration Testing', to: '/services' },
      { label: 'Vulnerability Assessments', to: '/services' },
      { label: 'Security Audits', to: '/services' },
      { label: 'Consulting & Support', to: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Trust & Security', to: '/security' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-footer" role="contentinfo">
      <div className="container-default px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group" aria-label="Anjavor Enterprise home">
              <img src={logoMark} alt="" className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-lg tracking-tight leading-none">Anjavor</span>
                <span className="text-[10px] tracking-[0.24em] font-bold text-ice uppercase leading-none mt-1 font-sans">ENTERPRISE</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4 max-w-xs">{siteConfig.tagline}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-sky-400 transition-colors"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading font-semibold text-white text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
