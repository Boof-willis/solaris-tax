import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Header = ({ isDark = false }: { isDark?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Strategy', href: '#' },
    { name: 'Structure', href: '#' },
    { name: 'Compliance', href: '#' },
    { name: 'Insights', href: '#' },
  ];

  return (
    <header className={`relative z-50 w-full px-6 py-6 md:px-12 md:py-8 flex items-center justify-between border-b ${isDark ? 'border-white/10' : 'border-gold-light/20'} backdrop-blur-sm`}>
      <div className="cursor-pointer group flex items-center gap-2">
        <img 
          src="https://pub-64edb6116bd24b449825f3e27e1efe4c.r2.dev/logos/Asset%208%404x-8.png" 
          alt="Solaris Tax" 
          className="h-[27px] w-auto transition-all duration-500" 
        />
      </div>

      <nav className={`hidden md:flex items-center gap-8 text-xs font-normal ${isDark ? 'text-white/60' : 'text-charcoal/60'} tracking-wide`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`relative overflow-hidden group ${isDark ? 'hover:text-white' : 'hover:text-charcoal'} transition-colors`}
          >
            <span className="relative z-10">{link.name}</span>
            <span className={`absolute bottom-0 left-0 w-0 h-[1px] ${isDark ? 'bg-gold-medium' : 'bg-gold-rich'} transition-all duration-300 group-hover:w-full`}></span>
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className={`group relative text-xs md:text-sm font-medium px-6 py-2.5 rounded-sm overflow-hidden ${isDark ? 'bg-white text-charcoal hover:bg-gold-light' : 'bg-gold-rich text-charcoal hover:bg-gold-rich/90'} transition-all duration-300 border border-transparent`}
        >
          <span className="relative z-10">Schedule Call</span>
        </a>
        <button
          className={`md:hidden ${isDark ? 'text-white' : 'text-charcoal'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`absolute top-full left-0 w-full ${isDark ? 'bg-charcoal border-white/10' : 'bg-cream border-gold-light/20'} border-b p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300 shadow-xl`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-medium ${isDark ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-charcoal'} transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <hr className={isDark ? 'border-white/10' : 'border-gold-light/20'} />
          <a
            href="#contact"
            className={`flex items-center justify-between ${isDark ? 'text-gold-medium' : 'text-gold-rich'} font-medium`}
            onClick={() => setIsMenuOpen(false)}
          >
            Schedule a Strategy Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

