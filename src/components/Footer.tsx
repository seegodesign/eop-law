import { Phone, MapPin } from 'lucide-react';
import logo from '../images/logo-white.webp';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Elliot Ostrander & Preston, PC" className="h-10 w-auto" />
            </div>
            <p className="text-white/70 mb-6">
              Founded in Portland, Oregon. Providing legal guidance to businesses and individuals since 1995.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div className="text-sm">
                  707 SW Washington St., Suite 1500<br />
                  Portland, OR 97205
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone size={16} className="flex-shrink-0" />
                <div className="text-sm">+1 503.224.7112</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">Corporate Law</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Family Law</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Criminal Defense</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70">
            © 2025 Elliot Ostrander & Preston, PC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/70 hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="text-white/70 hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="text-white/70 hover:text-accent transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}