import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from '@/components/RevealOnScroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Nrusingha77', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nrusingha-prasada-khadanga-810620325/', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    }
  ];

  const contactInfo = [
    {
      id: 'location',
      text: 'Bhubaneswar, Odisha, India',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    },
    {
      id: 'email',
      text: 'khadanganrusingha@gmail.com',
      href: 'mailto:khadanganrusingha@gmail.com',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    },
    {
      id: 'phone',
      text: '+91 7008254667',
      href: 'tel:+917008254667',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    }
  ];

  return (
    <footer className="bg-transparent border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
     <RevealOnScroll>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          
          {/* Brand & Social Section */}
          <div className="space-y-6 md:w-1/3">
            <div>
              <motion.h2 
                className="text-3xl font-bold text-amber-100 mb-2 font-[navbar]"
                whileHover={{ scale: 1.05 }}
              >
                NPK
              </motion.h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building digital solutions with creativity and code. Let's turn ideas into reality.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 bg-white/5 p-3 rounded-full border border-white/10 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col gap-4 md:items-end">
            {contactInfo.map((item) => (
              <motion.div 
                key={item.id}
                className="flex items-center gap-3 text-gray-400 group"
                whileHover={{ x: 5 }}
              >
                <span className="text-amber-400 bg-amber-400/10 p-2 rounded-full group-hover:bg-amber-400/20 transition-colors">
                  {item.icon}
                </span>
                {item.href ? (
                  <a 
                    href={item.href} 
                    className="text-sm hover:text-amber-100 transition-colors font-medium tracking-wide"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-sm font-medium tracking-wide">{item.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
          <p>&copy; {currentYear} Nrusingha Prasada Khadanga. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-amber-200 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-amber-200 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
     </RevealOnScroll>
    </footer>
  );
};

export default Footer;