"use client";

import { Printer, Image as ImageIcon, BookOpen, CreditCard, Box, Shirt } from 'lucide-react';
import Link from 'next/link';

const allServices = [
  { 
    id: "katta-format", 
    title: "Katta formatli pechat", 
    desc: "Bannerlar, orakal (samokleyka), setka va reklama peshlavhalarini yuqori aniqlikda chop etish. Tashqi reklamalar uchun mustahkam materiallar.", 
    icon: ImageIcon, 
    color: "var(--color-uz-cyan)" 
  },
  { 
    id: "vizitka", 
    title: "Vizitkalar", 
    desc: "Klassik, teksturali (tash), laklangan va plastik vizitkalar. Biznesingiz uchun professional birinchi taassurot.", 
    icon: CreditCard, 
    color: "var(--color-uz-magenta)" 
  },
  { 
    id: "buklet", 
    title: "Buklet va Flayerlar", 
    desc: "A4, A5, A6 formatdagi barcha turdagi tarqatma materiallar, kataloglar va menyular tayyorlash.", 
    icon: BookOpen, 
    color: "var(--color-uz-yellow)" 
  },
  { 
    id: "qadoqlash", 
    title: "Qadoqlash va Paketlar", 
    desc: "Mahsulotlar uchun maxsus korobkalar, qog'oz paketlari va qadoq dizaynlari.", 
    icon: Box, 
    color: "var(--color-uz-orange)" 
  },
  { 
    id: "yorliqlar", 
    title: "Yorliqlar va Stikerlar", 
    desc: "Yopishqoq yorliqlar, mahsulot stikerlari va etiketkalar tayyorlash.", 
    icon: Printer, 
    color: "var(--color-uz-cyan)" 
  },
  { 
    id: "birkalar", 
    title: "Birkalar", 
    desc: "Karton birkalar, kiyim va maxsus mahsulotlar uchun sifatli yorliq (birka) lar.", 
    icon: CreditCard, 
    color: "var(--color-uz-magenta)" 
  },
  { 
    id: "katalog", 
    title: "Katalog va Kalendarlar", 
    desc: "Kompaniya kataloglari, devor va stol kalendarlari chop etish.", 
    icon: BookOpen, 
    color: "var(--color-uz-yellow)" 
  },
  { 
    id: "kitob", 
    title: "Kitob va Jurnallar", 
    desc: "Katta va kichik tirajdagi kitob va jurnallarni sifatli qog'ozda chop etish.", 
    icon: BookOpen, 
    color: "var(--color-uz-orange)" 
  },
  { 
    id: "kiyim-pechat", 
    title: "Futbolka va formalar", 
    desc: "DTF va sublimatsiya usulida kiyimlarga logotip tushirish, kaskalar va korporativ formalar uchun bosma.", 
    icon: Shirt, 
    color: "var(--color-uz-cyan)" 
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-uz-bg text-foreground">
      {/* Decorative background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-uz-cyan)] to-transparent opacity-50"></div>
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-[var(--color-uz-cyan)] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bizning Xizmatlar</h1>
          <p className="text-foreground/60 text-lg">
            Poligrafiya sohasidagi barcha ehtiyojlaringizni bitta joyda qondiramiz. Kichik vizitkadan tortib, katta o'lchamdagi bannerlargacha — sifat kafolati bilan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allServices.map((service, i) => (
            <div 
              key={service.id} 
              className="bg-uz-surface border border-foreground/5 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-foreground/5 group"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/60 leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link 
                href="/order" 
                className="inline-flex items-center gap-2 font-medium transition-colors"
                style={{ color: service.color }}
              >
                Buyurtma berish
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O'z g'oyangiz bormi?</h2>
          <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
            Yuqoridagi ro'yxatda sizga kerakli xizmatni topa olmadingizmi? Bizning dizayner va mutaxassislarimiz bilan bog'laning, har qanday murakkablikdagi ishlarni ham bajaramiz.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex px-8 py-4 rounded-full bg-foreground text-uz-bg font-semibold hover:opacity-90 transition-opacity"
          >
            Biz bilan bog'lanish
          </Link>
        </div>
      </div>
    </div>
  );
}
