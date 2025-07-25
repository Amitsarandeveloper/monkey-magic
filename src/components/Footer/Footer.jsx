import React, { useState, useEffect } from 'react';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

// Social media links
const socialLinks = {
  youtube: 'https://www.youtube.com/@monkeyxmagic',
  instagram: 'https://www.instagram.com/monkeyxmagic',
  twitter: 'https://twitter.com/monkeyxmagic',
};

// Navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Vlogs', href: '#vlogs' },
  { name: 'Book', href: '#book' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Contact', href: '#contact' },
];

const FooterSection = () => {
  const [email, setEmail] = useState('');

  // Smooth scroll for navigation links
  useEffect(() => {
    const links = document.querySelectorAll('.footer-nav-link');
    links.forEach(link => {
      link.onclick = (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      };
    });
  }, []);

  // Newsletter subscribe handler
  const handleSubscribe = () => {
    if (email.trim()) {
      console.log('Newsletter email:', email);
      setEmail('');
      alert('Thank you for subscribing!');
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-gray-800 pt-12 pb-6 px-4 animate-footerFadeIn relative">
      {/* Decorative travel-inspired background (optional, e.g., compass/map motif) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 gap-10 md:gap-0">
        {/* Left: Brand & Social */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          {/* Brand */}
          <span className="font-montserrat font-bold text-2xl bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
            Monkey Magic
          </span>
          <span className="font-poppins text-sm md:text-base text-gray-300 mb-4">
            Adventure Awaits
          </span>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-2xl text-orange-500 hover:scale-125 transition-transform duration-200 animate-footerBounce" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl text-orange-500 hover:scale-125 transition-transform duration-200 animate-footerBounce delay-100" />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
              <FaTwitter className="text-2xl text-orange-500 hover:scale-125 transition-transform duration-200 animate-footerBounce delay-200" />
            </a>
          </div>
        </div>
        {/* Center: Navigation */}
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className="footer-nav-link font-poppins text-white text-sm md:text-base hover:text-orange-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Right: Newsletter */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          <span className="font-montserrat text-base text-white mb-2">Stay in the Loop</span>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              className="bg-gray-800 text-white font-poppins px-4 py-2 rounded-l-full focus:outline-none w-40 md:w-52"
            />
            <button
              onClick={handleSubscribe}
              className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-r-full hover:bg-orange-600 hover:scale-110 transition-all duration-200"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-10 text-center font-poppins text-sm text-gray-400">
        © 2025 Monkey Magic. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;