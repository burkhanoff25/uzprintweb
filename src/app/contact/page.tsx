"use client";

import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-uz-bg text-foreground relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-uz-orange)] to-transparent opacity-50"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Aloqa</h1>
          <p className="text-foreground/60 text-lg">
            Savollaringiz bormi yoki buyurtma bo'yicha maslahat kerakmi? Biz bilan istalgan qulay usulda bog'laning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-uz-surface border border-foreground/5 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Bizning manzil va kontaktlar</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-uz-cyan)]/10 text-[var(--color-uz-cyan)] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Manzil</h4>
                    <p className="text-foreground/60">Namangan shahri, UZPRINT markazi, Mo'ljal: Eski shahar.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-uz-magenta)]/10 text-[var(--color-uz-magenta)] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefon</h4>
                    <p className="text-foreground/60 flex flex-col gap-1">
                      <a href="tel:+998972534400" className="hover:text-foreground">+998 97 253 44 00</a>
                      <a href="tel:+998692334400" className="hover:text-foreground">+998 69 233 44 00</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-uz-yellow)]/10 text-[var(--color-uz-yellow)] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ish vaqti</h4>
                    <p className="text-foreground/60">
                      Dushanba - Shanba: 09:00 - 18:00<br/>Yakshanba: Dam olish kuni
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="h-64 rounded-3xl bg-foreground/5 border border-foreground/10 flex items-center justify-center relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96570.15394206585!2d71.57962650000002!3d40.998305099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c1f930e4431%3A0xc36769e96bcbb813!2zTmFtYW5nYW4!5e0!3m2!1suz!2s!4v1700000000000!5m2!1suz!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 filter dark:invert-[90%] dark:hue-rotate-180 transition-all duration-300"
              ></iframe>
            </div>
          </div>

          {/* Telegram CTA */}
          <div className="bg-uz-surface border border-foreground/5 rounded-3xl p-8 md:p-12 shadow-xl shadow-foreground/5 relative overflow-hidden flex flex-col justify-center items-center text-center h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-uz-cyan)]/10 rounded-full mix-blend-screen filter blur-[60px] transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="w-24 h-24 rounded-full bg-[var(--color-uz-cyan)]/10 text-[var(--color-uz-cyan)] flex items-center justify-center mb-8 relative z-10">
              <Send className="w-10 h-10 ml-1" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4 relative z-10">Telegram orqali bog'lanish</h3>
            <p className="text-foreground/60 mb-8 max-w-sm relative z-10 text-lg">
              Buyurtma berish, narxlarni bilish yoki savollaringizga javob olish uchun telegram orqali yozing.
            </p>

            <a 
              href="https://t.me/uzprint_uz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-uz-cyan)] to-[var(--color-uz-magenta)] text-white font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-lg shadow-[var(--color-uz-cyan)]/20"
            >
              <Send className="w-5 h-5" /> @uzprint_uz ga yozish
            </a>
            
            <div className="mt-12 pt-8 border-t border-foreground/10 w-full flex flex-col items-center relative z-10">
              <p className="text-sm font-medium text-foreground/50 mb-4">Yoki tezkor qo'ng'iroq:</p>
              <div className="flex flex-col gap-3 font-bold text-xl">
                <a href="tel:+998972534400" className="flex items-center justify-center gap-3 hover:text-[var(--color-uz-cyan)] transition-colors"><Phone className="w-5 h-5 text-[var(--color-uz-cyan)]"/> +998 97 253 44 00</a>
                <a href="tel:+998692334400" className="flex items-center justify-center gap-3 hover:text-[var(--color-uz-magenta)] transition-colors"><Phone className="w-5 h-5 text-[var(--color-uz-magenta)]"/> +998 69 233 44 00</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
