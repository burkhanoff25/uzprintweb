"use client";

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = ["Barchasi", "Birkalar va Yorliqlar", "Qadoq va Paketlar", "Kitob va Katalog", "Boshqa"];

const portfolioItems = [
  { id: 1, title: "Telegram Ish Namunasi", category: "Birkalar va Yorliqlar", img: "/portfolio/tg-img-1.jpg", color: "var(--color-uz-cyan)" },
  { id: 2, title: "Telegram Ish Namunasi", category: "Qadoq va Paketlar", img: "/portfolio/tg-img-2.jpg", color: "var(--color-uz-magenta)" },
  { id: 3, title: "Telegram Ish Namunasi", category: "Birkalar va Yorliqlar", img: "/portfolio/tg-img-3.jpg", color: "var(--color-uz-yellow)" },
  { id: 4, title: "Telegram Ish Namunasi", category: "Birkalar va Yorliqlar", img: "/portfolio/tg-img-4.jpg", color: "var(--color-uz-orange)" },
  { id: 5, title: "Telegram Ish Namunasi", category: "Kitob va Katalog", img: "/portfolio/tg-img-5.jpg", color: "var(--color-uz-cyan)" },
  { id: 6, title: "Telegram Ish Namunasi", category: "Qadoq va Paketlar", img: "/portfolio/tg-img-6.jpg", color: "var(--color-uz-magenta)" },
  { id: 7, title: "Telegram Ish Namunasi", category: "Boshqa", img: "/portfolio/tg-img-7.jpg", color: "var(--color-uz-yellow)" },
  { id: 8, title: "Telegram Ish Namunasi", category: "Birkalar va Yorliqlar", img: "/portfolio/tg-img-8.jpg", color: "var(--color-uz-orange)" },
  { id: 9, title: "Telegram Ish Namunasi", category: "Kitob va Katalog", img: "/portfolio/tg-img-9.jpg", color: "var(--color-uz-cyan)" },
  { id: 10, title: "Telegram Ish Namunasi", category: "Boshqa", img: "/portfolio/tg-img-10.jpg", color: "var(--color-uz-magenta)" },
  { id: 11, title: "Telegram Ish Namunasi", category: "Kitob va Katalog", img: "/portfolio/tg-img-11.jpg", color: "var(--color-uz-yellow)" },
  { id: 12, title: "Telegram Ish Namunasi", category: "Birkalar va Yorliqlar", img: "/portfolio/tg-img-12.jpg", color: "var(--color-uz-orange)" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const filteredItems = activeCategory === "Barchasi" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-uz-bg text-foreground">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-uz-yellow)] to-transparent opacity-50"></div>
      
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-foreground/60 text-lg">
            Biz bajargan eng sara ishlardan namunalar. Sifat va dizayn borasida nimalarga qodirligimizni o'zingiz ko'ring. (Telegram kanaldan olingan rasmlar)
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-foreground text-uz-bg' 
                  : 'bg-foreground/5 hover:bg-foreground/10 text-foreground/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, i) => (
            <div 
              key={item.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-uz-surface border border-foreground/5"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div 
                className="absolute inset-0 opacity-40 mix-blend-multiply group-hover:opacity-20 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(to bottom, transparent 0%, ${item.color} 100%)` 
                }}
              />
              
              {/* Hover Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold tracking-wider mb-2 block text-white/80" style={{ color: item.color }}>
                      {item.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0 hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-foreground/50">
            Ushbu toifada hozircha namunalar yo'q.
          </div>
        )}
      </div>
    </div>
  );
}
