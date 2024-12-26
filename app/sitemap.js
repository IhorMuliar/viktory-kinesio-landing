import { fetchProducts } from '@/app/(landing)/products/page';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      priority: 0.9,
    },
    ...(await fetchProducts()).map((product) => ({
      url: `${baseUrl}/products/${product.slug.current}`,
      lastModified: product.updatedAt,
    })),
  ];
}
