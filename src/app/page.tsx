import Link from 'next/link';
import { ArrowRight, Zap, Award, Paintbrush, Truck, Printer, Image as ImageIcon, MapPin, Phone } from 'lucide-react';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import HeroIcon from '@/components/HeroIcon';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-uz-bg text-foreground">
      
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32">
        {/* Glowing Background Orbs */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-uz-cyan)] to-transparent opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[var(--color-uz-cyan)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 dark:opacity-20 opacity-40"></div>
        <div className="absolute top-20 -left-40 w-[400px] h-[400px] bg-[var(--color-uz-magenta)] rounded-full mix-blend-screen filter blur-[100px] opacity-15 dark:opacity-15 opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            
            {/* Left side: Text content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[var(--color-uz-cyan)] animate-pulse"></span>
                <span className="text-sm font-medium text-foreground/80 tracking-wide">PREMIUM PRINT PARTNER</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                VIZUAL MUKAMMALIK <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-uz-cyan)] via-[var(--color-uz-magenta)] to-[var(--color-uz-yellow)] drop-shadow-[0_0_15px_rgba(236,0,140,0.3)]">
                  YARATAMIZ
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Biz sizning biznesingiz va shaxsiy ehtiyojlaringiz uchun yuqori sifatli poligrafiya mahsulotlarini tayyorlaymiz. Sifat va nafosat uyg&apos;unligi.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-uz-cyan)] to-[var(--color-uz-magenta)] text-white font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(236,0,140,0.4)]"
                >
                  Buyurtma berish
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/services" 
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground/5 text-foreground font-medium border border-foreground/10 hover:bg-foreground/10 transition-all flex items-center justify-center backdrop-blur-md hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  Barcha xizmatlar
                </Link>
              </div>
            </div>

            {/* Right side: 3D Animation */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative">
              <HeroIcon />
            </div>

          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Why Us Section */}
      <section className="py-24 relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Nega UZPRINT?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Tezkorlik", desc: "Buyurtmalar o'z vaqtida, kechikishlarsiz yetkaziladi.", icon: Zap, color: "var(--color-uz-yellow)" },
              { title: "Yuqori Sifat", desc: "Zamonaviy uskunalar yordamida tiniq rangli chop etish.", icon: Award, color: "var(--color-uz-magenta)" },
              { title: "Dizayn", desc: "Sizning g'oyalaringizni hayotga tatbiq etamiz.", icon: Paintbrush, color: "var(--color-uz-cyan)" },
              { title: "Yetkazib Berish", desc: "Namangan bo'ylab ofis yoki uyingizgacha. O'rnatib berish xizmati ham mavjud!", icon: Truck, color: "var(--color-uz-orange)" },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[var(--color-uz-surface)] border border-[var(--color-uz-surface-border)] hover:-translate-y-2 transition-transform duration-300">
                <div 
                  className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-foreground/5"
                  style={{ color: feature.color, boxShadow: `0 0 15px ${feature.color}33` }}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection />

      {/* Contact & Map Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-[var(--color-uz-surface)] rounded-[2.5rem] overflow-hidden border border-[var(--color-uz-surface-border)] flex flex-col lg:flex-row shadow-2xl">
            <div className="p-12 lg:w-1/2 flex flex-col justify-center relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-uz-cyan)]/5 to-transparent pointer-events-none"></div>
              
              <h2 className="text-3xl font-bold text-foreground mb-8 relative z-10">Biz bilan bog&apos;lanish</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-uz-cyan)]/10 flex items-center justify-center shrink-0 text-[var(--color-uz-cyan)] border border-[var(--color-uz-cyan)]/20 glow-cyan">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground/80 mb-2">Telefon</h3>
                    <div className="flex flex-col gap-2">
                      <a href="tel:+998972534400" className="text-foreground text-lg hover:text-[var(--color-uz-cyan)] transition-colors">+998 97 253 44 00</a>
                      <a href="tel:+998692334400" className="text-foreground text-lg hover:text-[var(--color-uz-cyan)] transition-colors">+998 69 233 44 00</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-uz-magenta)]/10 flex items-center justify-center shrink-0 text-[var(--color-uz-magenta)] border border-[var(--color-uz-magenta)]/20 glow-magenta">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground/80 mb-2">Manzil</h3>
                    <p className="text-foreground text-lg leading-relaxed">
                      Namangan shahri, UZPRINT markazi.<br/>
                      <span className="text-foreground/50 text-base">Mo&apos;ljal: Markaziy ko&apos;cha.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 h-96 lg:h-auto relative bg-[#121214]">
              <iframe 
                src="https://yandex.uz/map-widget/v1/-/CTd7UEnd" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen={true}
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
