"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "uz" | "ru";

interface Dictionary {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
  };
  portfolio: {
    title: string;
  };
  contact: {
    title: string;
  };
  nav: {
    services: string;
    portfolio: string;
    contact: string;
  };
  form: {
    name: string;
    phone: string;
    serviceType: string;
    comments: string;
    submit: string;
    success: string;
  };
}

const dictionaries: Record<Language, Dictionary> = {
  uz: {
    hero: {
      title: "Zamonaviy dizayn va sifatli poligrafiya",
      subtitle: "Namanganda ishonchli xizmatlar. O'z biznesingizni biz bilan porlating.",
      cta: "Buyurtma berish",
    },
    services: {
      title: "Bizning xizmatlar",
    },
    portfolio: {
      title: "Bajarilgan ishlar",
    },
    contact: {
      title: "Biz bilan aloqa",
    },
    nav: {
      services: "Xizmatlar",
      portfolio: "Portfolio",
      contact: "Aloqa",
    },
    form: {
      name: "Ismingiz",
      phone: "Telefon raqamingiz",
      serviceType: "Xizmat turi",
      comments: "Qo'shimcha izoh",
      submit: "So'rov yuborish",
      success: "So'rovingiz muvaffaqiyatli yuborildi!",
    },
  },
  ru: {
    hero: {
      title: "Современный дизайн и качественная полиграфия",
      subtitle: "Надежные услуги в Намангане. Сделайте ваш бизнес ярче с нами.",
      cta: "Заказать",
    },
    services: {
      title: "Наши услуги",
    },
    portfolio: {
      title: "Наши работы",
    },
    contact: {
      title: "Связаться с нами",
    },
    nav: {
      services: "Услуги",
      portfolio: "Портфолио",
      contact: "Контакты",
    },
    form: {
      name: "Ваше имя",
      phone: "Номер телефона",
      serviceType: "Тип услуги",
      comments: "Комментарий",
      submit: "Отправить запрос",
      success: "Ваш запрос успешно отправлен!",
    },
  },
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("uz");

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
