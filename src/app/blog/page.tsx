import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog va Yangiliklar Namanganda | UzPrint',
  description: 'Poligrafiya, dizayn va reklama sohasidagi so\'nggi yangiliklar, foydali maslahatlar. UzPrint blogi orqali xabardor bo\'ling.',
  alternates: {
    canonical: '/blog'
  }
};

const dummyPosts = [
  {
    slug: 'vizitka-dizayni-qanday-bolishi-kerak',
    title: 'Namanganda vizitka dizayni qanday bo\'lishi kerak?',
    excerpt: 'Biznesingiz uchun eng yaxshi vizitka dizayni sirlari va maslahatlar. Vizitka orqali qanday qilib mijozlarni jalb qilish mumkin?',
    date: '2026-09-01'
  },
  {
    slug: '2026-yilda-eng-ommabop-banner-olchamlari',
    title: '2026-yilda eng ommabop banner o\'lchamlari',
    excerpt: 'Tashqi reklama uchun eng ko\'p ishlatiladigan banner o\'lchamlari va ularning afzalliklari.',
    date: '2026-09-05'
  }
];

export default function BlogIndex() {
  return (
    <div className="flex flex-col min-h-screen bg-uz-bg text-foreground pt-24 pb-20 lg:pt-32 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-uz-cyan)] to-[var(--color-uz-magenta)]">
            Foydali Maqolalar va Yangiliklar
          </h1>
          <p className="text-lg text-foreground/70 mb-12">
            Poligrafiya va dizayn olamidagi qiziqarli maqolalar bilan tanishing.
          </p>

          <div className="grid gap-8">
            {dummyPosts.map(post => (
              <div key={post.slug} className="bg-[var(--color-uz-surface)] border border-[var(--color-uz-surface-border)] rounded-2xl p-6 shadow-lg hover:border-[var(--color-uz-cyan)] transition-all">
                <div className="text-sm text-foreground/50 mb-2">{post.date}</div>
                <h2 className="text-2xl font-bold mb-4">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[var(--color-uz-cyan)] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-foreground/80 mb-6">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-[var(--color-uz-cyan)] font-semibold hover:underline inline-flex items-center gap-1">
                  Batafsil o'qish &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
