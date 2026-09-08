import Link from 'next/link';
import { Send, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-uz-surface border-t border-foreground/5 text-foreground/70 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="relative flex items-center justify-start w-48 h-12">
                <Logo className="w-full h-full text-foreground transition-colors duration-300" />
              </div>
            </Link>
            <p className="text-sm text-foreground/50 mb-6 leading-relaxed">
              Namangandagi ishonchli pechat va dizayn xizmati. Biz sizning g&apos;oyalaringizni yuqori sifatda qog&apos;ozga tushiramiz.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/uzprint" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-[var(--color-uz-magenta)] hover:text-foreground transition-all hover:glow-magenta text-foreground/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://t.me/uzprint_uz" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-[var(--color-uz-cyan)] hover:text-foreground transition-all hover:glow-cyan text-foreground/80">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4 text-lg">Xizmatlar</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/vizitkalar" className="hover:text-[var(--color-uz-cyan)] transition-colors">Vizitkalar</Link></li>
              <li><Link href="/services/bannerlar" className="hover:text-[var(--color-uz-magenta)] transition-colors">Bannerlar</Link></li>
              <li><Link href="/services/bukletlar" className="hover:text-[var(--color-uz-yellow)] transition-colors">Broshyura va bukletlar</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Barcha xizmatlar &rarr;</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4 text-lg">Kompaniya</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-[var(--color-uz-cyan)] transition-colors">Biz haqimizda</Link></li>
              <li><Link href="/portfolio" className="hover:text-[var(--color-uz-magenta)] transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-uz-yellow)] transition-colors">Aloqa</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4 text-lg">Bog&apos;lanish</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-[var(--color-uz-yellow)]" />
                <span className="text-foreground/60">Namangan shahri, UZPRINT markazi</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 shrink-0 text-[var(--color-uz-cyan)]" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+998972534400" className="hover:text-foreground transition-colors text-foreground/60">+998 97 253 44 00</a>
                  <a href="tel:+998692334400" className="hover:text-foreground transition-colors text-foreground/60">+998 69 233 44 00</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/40">
          <p>&copy; {new Date().getFullYear()} UZPRINT. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-uz-cyan)] opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-[var(--color-uz-magenta)] opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-[var(--color-uz-yellow)] opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-[var(--color-uz-orange)] opacity-50"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
