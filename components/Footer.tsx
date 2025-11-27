import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">D</div>
              <span className="font-bold text-xl">DRMC Ltd</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-primary pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary text-sm">Our Services</Link></li>
              <li><Link to="/apply/job-application" className="text-gray-400 hover:text-primary text-sm">Submit CV</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary text-sm">Customer Care</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-primary pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <span>{COMPANY_INFO.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-primary shrink-0" />
                <span>{COMPANY_INFO.contact.phones[0]}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-primary shrink-0" />
                <span>{COMPANY_INFO.contact.emails[0]}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (Visual only) */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-primary pl-3">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for the latest job openings and HR insights.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-primary text-sm"
              />
              <button className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} DRMC Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;