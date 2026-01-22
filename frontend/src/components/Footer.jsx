import React from 'react';
import { resumeData } from '../data/resume';
import { Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: resumeData.personal.linkedin },
    { icon: Mail, href: `mailto:${resumeData.personal.email}` },
    { icon: Globe, href: resumeData.personal.googleDev },
  ];

  return (
    <footer className="relative py-8 border-t border-cyan-400/20 bg-[#0B1026]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} {resumeData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-full flex items-center justify-center hover:from-cyan-500/30 hover:to-violet-500/30 transition-all"
              >
                <link.icon className="w-5 h-5 text-cyan-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
