import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ServiceData {
  title: string;
  description: string;
  content: string;
}

const servicesData: Record<string, ServiceData> = {
  'vizitka': {
    title: 'Vizitka Buyurtma Qilish',
    description: 'Namanganda eng sifatli va zamonaviy vizitka chop etish va dizayn xizmati. Biznesingiz uchun professional vizitkalar tayyorlaymiz.',
    content: 'Vizitka — bu sizning biznesingiz va shaxsiy brendingiz yuzi. Namanganda vizitka buyurtma qilish va sifatli chop etish bo\'yicha UzPrint sizga o\'zining professional xizmatlarini taklif qiladi. Biz vizitka dizaynini yaratishdan tortib, uni yuqori sifatli qog\'ozda, zamonaviy uskunalarda chop etishgacha bo\'lgan barcha jarayonlarni amalga oshiramiz. Har xil turdagi qog\'ozlar, laminatsiya va maxsus ishlov berish imkoniyatlari mavjud.'
  },
  'banner': {
    title: 'Banner Chop Etish va Dizayn',
    description: 'Namanganda sifatli banner chop etish va reklama dizayni. Har qanday o\'lchamdagi tashqi va ichki reklamalar.',
    content: 'Tashqi va ichki reklama uchun sifatli bannerlar biznesingiz ko\'rinishini ta\'minlaydi. Namanganda banner chop etish xizmati qidiryapsizmi? UzPrint markazida har qanday o\'lcham va turdagi bannerlarni yuqori aniqlikda (720, 1080, 1440 dpi) chop etamiz. Shuningdek, e\'tiborni tortadigan kreativ banner dizaynini ham professional mutaxassislarimiz yaratib berishadi.'
  },
  'flayer': {
    title: 'Flayer va Buklet Chop Etish',
    description: 'Namanganda arzon va sifatli flayer, buklet va lifletlar chop etish. Tezkor poligrafiya va kreativ dizayn.',
    content: 'Aksiya va chegirmalar, yangi mahsulotlar haqida xabar berishning eng tezkor va arzon usuli — bu flayerlar. Namanganda flayer va buklet chop etish xizmatlarini taqdim etamiz. Turli o\'lchamlarda (A4, A5, A6, yevroflayer) va qog\'oz qalinligida buyurtma berishingiz mumkin. Tezkorlik va sifat kafolatlangan.'
  },
  'brendbuk': {
    title: 'Brendbuk Yaratish',
    description: 'Kompaniyangiz uchun Namanganda to\'liq brendbuk va korporativ uslub yaratish xizmati. Professional yondashuv.',
    content: 'Brendingizni bozorda tanitish va o\'ziga xos imijga ega bo\'lish uchun brendbuk juda muhim. UzPrint dizaynerlari sizning biznesingiz uchun mukammal brendbuk va korporativ uslub (firma uslubi) ishlab chiqadi. Logotipdan tortib, xodimlar formasi va blankalargacha barcha elementlar yagona va zamonaviy uslubda yaratiladi.'
  },
  'logotip': {
    title: 'Logotip Yasash va Dizayn',
    description: 'Namanganda professional logotip yasash xizmatlari. Biznesingiz uchun unikal va zamonaviy logotiplar yaratamiz.',
    content: 'Logotip — kompaniyangizning birinchi taassuroti. Namanganda logotip yasash va dizayn xizmatini UzPrint orqali buyurtma qiling. Biz har bir mijozning biznes yo\'nalishini o\'rganib, unga mos, esda qolarli, sodda va zamonaviy logotip variantlarini taklif qilamiz. Biz bilan brendingiz yuzi mukammal bo\'ladi.'
  }
};

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: 'Xizmat topilmadi | UzPrint'
    };
  }

  return {
    title: `${service.title} Namanganda | UzPrint`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "UzPrint",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Namangan",
        "addressCountry": "UZ"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Namangan"
    },
    "description": service.description
  };

  return (
    <div className="flex flex-col min-h-screen bg-uz-bg text-foreground pt-24 pb-20 lg:pt-32 lg:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="text-[var(--color-uz-cyan)] hover:underline mb-8 inline-block">
            &larr; Barcha xizmatlarga qaytish
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-uz-cyan)] to-[var(--color-uz-magenta)]">
            Namanganda {service.title}
          </h1>
          <div className="bg-[var(--color-uz-surface)] border border-[var(--color-uz-surface-border)] rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Xizmat haqida</h2>
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              {service.content}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-uz-cyan)] to-[var(--color-uz-magenta)] text-white font-semibold hover:scale-105 transition-all text-center inline-block"
              >
                Buyurtma berish
              </Link>
              <a 
                href="tel:+998972534400" 
                className="px-8 py-4 rounded-full border border-[var(--color-uz-cyan)] text-[var(--color-uz-cyan)] font-semibold hover:bg-[var(--color-uz-cyan)]/10 transition-all text-center inline-block"
              >
                Qo'ng'iroq qilish: +998 97 253 44 00
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
