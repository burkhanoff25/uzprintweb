import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface BlogPost {
  title: string;
  description: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  'vizitka-dizayni-qanday-bolishi-kerak': {
    title: 'Namanganda vizitka dizayni qanday bo\'lishi kerak?',
    description: 'Biznesingiz uchun eng yaxshi vizitka dizayni sirlari va maslahatlar. UzPrint orqali sifatli vizitka buyurtma qiling.',
    content: 'Vizitka — bu shunchaki qog\'oz parchasi emas, u biznesingizning ilk taassurotidir. Namanganda vizitka dizayni qanday bo\'lishi kerak? Birinchidan, aniq va o\'qilishi oson bo\'lgan shriftlardan foydalaning. Ikkinchidan, ortiqcha ma\'lumotlar bilan to\'ldirib tashlamang: logotip, ism-sharif, lavozim, telefon raqami, va manzil yetarli bo\'ladi. Uchinchidan, qog\'oz sifati — bu sizning darajangizni bildiradi. UzPrint sizga eng yuqori sifatli qog\'ozlarda vizitka chop etish va kreativ dizayn xizmatini taklif etadi.'
  },
  '2026-yilda-eng-ommabop-banner-olchamlari': {
    title: '2026-yilda eng ommabop banner o\'lchamlari',
    description: 'Tashqi reklama uchun eng ko\'p ishlatiladigan banner o\'lchamlari va ularning afzalliklari haqida bilib oling.',
    content: 'Tashqi reklama uchun to\'g\'ri banner o\'lchamini tanlash judayam muhim. 2026-yilda eng ko\'p ishlatiladigan standart banner o\'lchamlari: 3x6 metr (Katta bilbordlar uchun), 2x3 metr (Kichik ko\'cha reklamasi) va 1x2 metr (Do\'konlar yonidagi bannerlar). Namanganda banner chop etish bo\'yicha UzPrint sizga istalgan o\'lchamdagi va yuqori sifatli (1440 dpi) pechat xizmatlarini taqdim etadi.'
  }
};

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Maqola topilmadi | UzPrint'
    };
  }

  return {
    title: `${post.title} | UzPrint Blog`,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  // Article Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": "UzPrint"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UzPrint",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uz-print.uz/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://uz-print.uz/blog/${slug}`
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-uz-bg text-foreground pt-24 pb-20 lg:pt-32 lg:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-[var(--color-uz-cyan)] hover:underline mb-8 inline-block">
            &larr; Blogga qaytish
          </Link>
          
          <div className="bg-[var(--color-uz-surface)] border border-[var(--color-uz-surface-border)] rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {post.title}
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80">
              <p className="leading-relaxed whitespace-pre-wrap">{post.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
