export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return [{
    url: baseUrl, lastModified: new Date(), priority: 1,
  }];
}