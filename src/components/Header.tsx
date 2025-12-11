import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../images/logo.webp';

const navLinks = [
  { href: '#practice', label: 'Practice Areas' },
  { href: '#about', label: 'About The Firm' },
  { href: '#team', label: 'Our Team' },
  // { href: '#resources', label: 'Resources' },
  { href: '#contact', label: 'Schedule Consultation', class: 'px-8 py-3 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <img src={logo} alt="EOP | Elliot Ostrander & Preston, PC" className="h-6" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
                <a
                key={link.href}
                href={link.href}
                className={`text-foreground hover:text-accent transition-colors ${link.class || ''}`}
                >
                {link.label}
                </a>
            ))}
            {/* <button className="px-8 py-3 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              Schedule Consultation
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-border space-y-4">
            <a href="#practice" className="block text-foreground hover:text-accent transition-colors py-2">
              Practice Areas
            </a>
            <a href="#about" className="block text-foreground hover:text-accent transition-colors py-2">
              About
            </a>
            <a href="#team" className="block text-foreground hover:text-accent transition-colors py-2">
              Our Team
            </a>
            <a href="#contact" className="block text-foreground hover:text-accent transition-colors py-2">
              Contact
            </a>
            <button className="w-full px-8 py-3 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              Schedule Consultation
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}