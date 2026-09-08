"use client";

import Link from 'next/link';
import { Target, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-uz-bg text-foreground">
      {/* Decorative background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-uz-magenta)] to-transparent opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-uz-magenta)] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 mb-6">
            <span className="text-sm font-medium text-foreground/80">Kompaniya Haqida</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Biz shunchaki bosmaxona emasmiz, <br className="hidden md:block" /> 
            biz sizning biznes <span className="text-[var(--color-uz-magenta)]">hamkoringizmiz</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
            UZPRINT — Namangan shahridagi eng ilg'or dizayn va poligrafiya markazlaridan biri. Biz yuqori sifatli mahsulotlar va o'z vaqtida yetkazib berish xizmati bilan ajralib turamiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-uz-surface border border-foreground/5 p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-uz-cyan)]/10 text-[var(--color-uz-cyan)] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Bizning Missiyamiz</h3>
            <p className="text-foreground/60">
              Mijozlarimizning brendi va imijini eng yuqori darajaga olib chiqadigan professional bosma va vizual yechimlarni taqdim etish.
            </p>
          </div>
          <div className="bg-uz-surface border border-foreground/5 p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-uz-yellow)]/10 text-[var(--color-uz-yellow)] flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Kreativ Yondashuv</h3>
            <p className="text-foreground/60">
              Har bir buyurtmaga individual yondashib, eng so'nggi dizayn trendlari va sifatli materiallardan foydalanamiz.
            </p>
          </div>
          <div className="bg-uz-surface border border-foreground/5 p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-uz-orange)]/10 text-[var(--color-uz-orange)] flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Tajribali Jamoa</h3>
            <p className="text-foreground/60">
              Bizning mutaxassislar o'z sohasining ustasi. Dizaynerlarimiz va operatorlarimiz har qanday murakkablikdagi ishlarni uddalaydi.
            </p>
          </div>
        </div>

        <div className="bg-foreground/5 rounded-[3rem] p-8 md:p-16 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-uz-cyan)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nima uchun aynan UZPRINT?</h2>
            
            <div className="space-y-6">
              {[
                "Eng so'nggi zamonaviy uskunalar (Roland, Konica Minolta va boshqalar)",
                "Ekologik toza va xavfsiz bo'yoqlardan foydalanish",
                "Katta hajmdagi buyurtmalarni ham qisqa muddatda yetkazish",
                "O'rnatib berish va o'lchash kabi bepul qo'shimcha xizmatlar",
                "Doimiy mijozlar uchun maxsus chegirmalar va bonuslar"
              ].map((reason, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-uz-magenta)] shrink-0 mt-1" />
                  <p className="text-lg text-foreground/80">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
