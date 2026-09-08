"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { 
          y: 100, 
          opacity: 0,
          rotationY: 15
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    { 
      id: 1, 
      title: "Vizitkalar va Birkalar", 
      color: "var(--color-uz-cyan)", 
      img: "/portfolio/tg-img-1.jpg" 
    },
    { 
      id: 2, 
      title: "Qadoq va Paketlar", 
      color: "var(--color-uz-magenta)", 
      img: "/portfolio/tg-img-2.jpg" 
    },
    { 
      id: 3, 
      title: "Kitob va Jurnallar", 
      color: "var(--color-uz-yellow)", 
      img: "/portfolio/tg-img-5.jpg" 
    }
  ];

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-uz-bg relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">So'nggi Loyihalar</h2>
          <p className="text-foreground/60 text-lg">Bizning premium ishlarimiz bilan tanishing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, i) => (
            <div 
              key={project.id}
              ref={(el) => setCardRef(el, i)}
              className="group relative h-[400px] rounded-3xl overflow-hidden bg-uz-surface border border-foreground/5 cursor-pointer perspective-1000"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div 
                className="absolute inset-0 opacity-40 mix-blend-multiply group-hover:opacity-20 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(to bottom, transparent 0%, ${project.color} 100%)` 
                }}
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0 hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/portfolio" 
            className="inline-flex px-8 py-4 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-all text-sm font-medium"
          >
            Barcha ishlarni ko'rish
          </Link>
        </div>
      </div>
    </section>
  );
}
