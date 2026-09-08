"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Globe, Sun, Moon } from 'lucide-react';
import { useI18n } from '@/context/i18n';
import { useTheme } from 'next-themes';
import Logo from '@/components/Logo';

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleLanguage = () => {
    setLang(lang === 'uz' ? 'ru' : 'uz');
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-uz-bg/80 backdrop-blur-xl border-b border-foreground/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-start w-48 h-12">
            <Logo className="w-full h-full text-foreground transition-colors duration-300" />
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/services" className="text-foreground/70 hover:text-[var(--color-uz-cyan)] transition-colors dark:text-glow-cyan">{t.nav.services}</Link>
          <Link href="/portfolio" className="text-foreground/70 hover:text-[var(--color-uz-magenta)] transition-colors dark:text-glow-magenta">{t.nav.portfolio}</Link>
          <Link href="/contact" className="text-foreground/70 hover:text-[var(--color-uz-orange)] transition-colors">{t.nav.contact}</Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors p-2"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{lang.toUpperCase()}</span>
          </button>

          {mounted && (
            <button 
              onClick={toggleTheme}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
            >
              {resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          
          <Link 
            href="/contact" 
            className="hidden md:flex bg-gradient-to-r from-[var(--color-uz-cyan)] to-[var(--color-uz-magenta)] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(236,0,140,0.4)]"
          >
            {t.hero.cta}
          </Link>
          
          <button className="md:hidden p-2 text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
