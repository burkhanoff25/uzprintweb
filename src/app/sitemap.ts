import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uz-print.uz';

  // Core pages
  const routes = ['', '/about', '/contact', '/services', '/portfolio', '/order'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Dynamic service pages
  const services = ['vizitka', 'banner', 'flayer', 'brendbuk', 'logotip'].map(
    (service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })
  );

  return [...routes, ...services];
}
