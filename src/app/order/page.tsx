"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(3, "Ismingiz kamida 3 ta harfdan iborat bo'lishi kerak"),
  phone: z.string().min(9, "Telefon raqam noto'g'ri kiritildi"),
  service: z.string().min(1, "Xizmat turini tanlang"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function OrderPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden bg-uz-bg">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-uz-cyan)] to-transparent opacity-50"></div>
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-[var(--color-uz-magenta)] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-uz-yellow)] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-[var(--color-uz-cyan)] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Bosh sahifaga qaytish
        </Link>

        <div className="bg-uz-surface border border-foreground/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-10 text-center">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Buyurtma berish</h1>
                  <p className="text-foreground/60">
                    Ma'lumotlaringizni qoldiring, biz siz bilan tez orada bog'lanamiz.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Ism va familiya</label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Abdulla Oripov"
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[var(--color-uz-cyan)] focus:ring-1 focus:ring-[var(--color-uz-cyan)] transition-all"
                    />
                    {errors.name && <p className="text-[var(--color-uz-magenta)] text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Telefon raqam</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[var(--color-uz-cyan)] focus:ring-1 focus:ring-[var(--color-uz-cyan)] transition-all"
                    />
                    {errors.phone && <p className="text-[var(--color-uz-magenta)] text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Xizmat turi</label>
                    <select
                      {...register("service")}
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[var(--color-uz-cyan)] focus:ring-1 focus:ring-[var(--color-uz-cyan)] transition-all appearance-none"
                    >
                      <option value="" className="bg-uz-surface">Xizmatni tanlang</option>
                      <option value="katta-format" className="bg-uz-surface">Katta formatli pechat</option>
                      <option value="vizitka" className="bg-uz-surface">Vizitkalar</option>
                      <option value="korporativ" className="bg-uz-surface">Korporativ bosma</option>
                      <option value="boshqa" className="bg-uz-surface">Boshqa xizmat</option>
                    </select>
                    {errors.service && <p className="text-[var(--color-uz-magenta)] text-sm mt-1">{errors.service.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Qo'shimcha izoh (ixtiyoriy)</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Qanday dizayn yoki material kerakligini yozishingiz mumkin..."
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[var(--color-uz-cyan)] focus:ring-1 focus:ring-[var(--color-uz-cyan)] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--color-uz-cyan)] to-[var(--color-uz-magenta)] text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-uz-cyan)]/20 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Yuborilmoqda...
                      </>
                    ) : (
                      "So'rovni yuborish"
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-24 h-24 mb-6 rounded-full bg-[var(--color-uz-cyan)]/10 flex items-center justify-center relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="w-12 h-12 text-[var(--color-uz-cyan)]" />
                  </motion.div>
                  
                  {/* Decorative rotating dashed ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--color-uz-cyan)]/40 animate-[spin_10s_linear_infinite]"></div>
                </div>
                
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-foreground mb-4"
                >
                  Muvaffaqiyatli!
                </motion.h2>
                
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-foreground/60 max-w-md mx-auto mb-8"
                >
                  Sizning buyurtma so'rovingiz qabul qilindi. Tez orada menejerlarimiz siz bilan bog'lanishadi.
                </motion.p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link 
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground/10 text-foreground font-medium hover:bg-foreground/20 transition-colors"
                  >
                    Bosh sahifaga qaytish
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
