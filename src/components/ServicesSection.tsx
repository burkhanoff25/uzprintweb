"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { Printer, Image as ImageIcon, Award, Paintbrush, Box, BookOpen } from 'lucide-react';
import TiltCard from './TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(cardsRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Bizning Xizmatlar</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Barcha turdagi poligrafiya xizmatlari bitta joyda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Item 1 */}
          <TiltCard className="group col-span-1 md:col-span-2">
            <Link 
              href="/services/banner" 
              ref={(el) => { if (el) cardsRef.current[0] = el; }}
              className="relative overflow-hidden rounded-3xl bg-[var(--color-uz-surface)] border border-[var(--color-uz-surface-border)] hover:border-[var(--color-uz-cyan)] transition-colors p-8 flex flex-col justify-end min-h-[300px] h-full block"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-uz-cyan)]/20 rounded-full mix-blend-screen filter blur-[60px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[var(--color-uz-cyan)]/30 transition-all"></div>
              <div className="relative z-10 translate-z-[50px]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-uz-cyan)]/20 flex items-center justify-center text-[var(--color-uz-cyan)] mb-6 glow-cyan">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Katta formatli pechat</h3>
                <p className="text-foreground/60 mb-6 max-w-sm">Bannerlar, stikerlar va tashqi reklama materiallari.</p>
                <span className="inline-flex px-4 py-2 rounded-full bg-[var(--color-uz-cyan)] text-[var(--color-uz-bg)] font-semibold text-sm">Batafsil</span>
              </div>
            </Link>
          </TiltCard>

          {/* Item 2 */}
          <TiltCard className="group col-span-1">
            <Link 
              href="/services" 
              ref={(el) => { if (el) cardsRef.current[1] = el; }}
              className="relative overflow-hidden rounded-3xl bg-[var(--color-uz-surface)] border border-[var(--color-uz-surface-border)] hover:border-[var(--color-uz-yellow)] transition-colors p-8 flex flex-col justify-end min-h-[300px] h-full block"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-uz-yellow)]/20 rounded-full mix-blend-screen filter blur-[60px] transform translate-x-1/4 translate-y-1/4 group-hover:bg-[var(--color-uz-yellow)]/30 transition-all"></div>
              <div className="relative z-10 translate-z-[50px]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-uz-yellow)]/20 flex items-center justify-center text-[var(--color-uz-yellow)] mb-6 glow-yellow">
                  <Box className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Qadoqlash va Paketlar</h3>
                <p className="text-foreground/60 mb-6">Maxsus korobkalar va qog'oz paketlari.</p>
                <span className="inline-flex px-4 py-2 rounded-full bg-[var(--color-uz-yellow)] text-[var(--color-uz-bg)] font-semibold text-sm">Batafsil</span>
              </div>
            </Link>
          </TiltCard>

          {/* Item 3 */}
          <TiltCard className="group col-span-1">
            <Link 
              href="/services/vizitka" 
              ref={(el) => { if (el) cardsRef.current[2] = el; }}
              className="relative overflow-hidden rounded-3xl bg-[var(--color-uz-surface)] border border-[var(--color-uz-surface-border)] hover:border-[var(--color-uz-magenta)] transition-colors p-8 flex flex-col justify-end min-h-[300px] h-full block"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-uz-magenta)]/20 rounded-full mix-blend-screen filter blur-[60px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[var(--color-uz-magenta)]/30 transition-all"></div>
              <div className="relative z-10 translate-z-[50px]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-uz-magenta)]/20 flex items-center justify-center text-[var(--color-uz-magenta)] mb-6 glow-magenta">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Vizitkalar va Birkalar</h3>
                <p className="text-foreground/60 mb-6">Premium qog'oz va dizaynlar.</p>
                <span className="inline-flex px-4 py-2 rounded-full bg-[var(--color-uz-magenta)] text-[var(--color-uz-bg)] font-semibold text-sm">Batafsil</span>
              </div>
            </Link>
          </TiltCard>

          {/* Item 4 */}
          <TiltCard className="group col-span-1 md:col-span-2">
            <Link 
              href="/services/flayer" 
              ref={(el) => { if (el) cardsRef.current[3] = el; }}
              className="relative overflow-hidden rounded-3xl bg-[var(--color-uz-surface)] border border-[var(--color-uz-surface-border)] hover:border-[var(--color-uz-orange)] transition-colors p-8 flex flex-col justify-end min-h-[300px] h-full block"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-uz-orange)]/10 rounded-full mix-blend-screen filter blur-[60px] transform -translate-x-1/4 translate-y-1/4 group-hover:bg-[var(--color-uz-orange)]/20 transition-all"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 translate-z-[50px]">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-uz-orange)]/20 flex items-center justify-center text-[var(--color-uz-orange)] mb-6 glow-orange">
                    <Paintbrush className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Broshyura va Bukletlar</h3>
                  <p className="text-foreground/60 mb-6 max-w-sm">Biznesingizni yorqin tanishtirish uchun mukammal sifat.</p>
                  <span className="inline-flex px-4 py-2 rounded-full bg-[var(--color-uz-orange)] text-[var(--color-uz-bg)] font-semibold text-sm">Batafsil</span>
                </div>
                <div className="hidden md:block w-32 h-32 rounded-full border-4 border-dashed border-[var(--color-uz-orange)]/30 animate-[spin_10s_linear_infinite]"></div>
              </div>
            </Link>
          </TiltCard>

          {/* Item 5 */}
          <TiltCard className="group col-span-1 md:col-span-2">
            <Link 
              href="/services" 
              ref={(el) => { if (el) cardsRef.current[4] = el; }}
              className="relative overflow-hidden rounded-3xl bg-[var(--color-uz-surface)] border border-[var(--color-uz-surface-border)] hover:border-[var(--color-uz-cyan)] transition-colors p-8 flex flex-col justify-end min-h-[300px] h-full block"
            >
              <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[var(--color-uz-cyan)]/20 rounded-full mix-blend-screen filter blur-[60px] transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-[var(--color-uz-cyan)]/30 transition-all"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 translate-z-[50px]">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-uz-cyan)]/20 flex items-center justify-center text-[var(--color-uz-cyan)] mb-6 glow-cyan">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Yorliqlar va Stikerlar</h3>
                  <p className="text-foreground/60 mb-6 max-w-sm">Istagan shakl va o'lchamdagi yopishqoq yorliqlar (orakal).</p>
                  <span className="inline-flex px-4 py-2 rounded-full bg-[var(--color-uz-cyan)] text-[var(--color-uz-bg)] font-semibold text-sm">Batafsil</span>
                </div>
              </div>
            </Link>
          </TiltCard>

          {/* Item 6 */}
          <TiltCard className="group col-span-1">
            <Link 
              href="/services" 
              ref={(el) => { if (el) cardsRef.current[5] = el; }}
              className="relative overflow-hidden rounded-3xl bg-[var(--color-uz-surface)] border border-[var(--color-uz-surface-border)] hover:border-[var(--color-uz-magenta)] transition-colors p-8 flex flex-col justify-end min-h-[300px] h-full block"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-uz-magenta)]/20 rounded-full mix-blend-screen filter blur-[60px] transform translate-x-1/4 translate-y-1/4 group-hover:bg-[var(--color-uz-magenta)]/30 transition-all"></div>
              <div className="relative z-10 translate-z-[50px]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-uz-magenta)]/20 flex items-center justify-center text-[var(--color-uz-magenta)] mb-6 glow-magenta">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Kitob va Jurnallar</h3>
                <p className="text-foreground/60 mb-6">Ko'p sahifali bosma nashrlar, sifatli qog'oz.</p>
                <span className="inline-flex px-4 py-2 rounded-full bg-[var(--color-uz-magenta)] text-[var(--color-uz-bg)] font-semibold text-sm">Batafsil</span>
              </div>
            </Link>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
