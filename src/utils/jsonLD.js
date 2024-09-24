import constants from '../data/constants.json';
import seoData from '../data/seo.json';

export const jsonLdForBlogPost = (
  slug,
  title,
  excerpt,
  coverImage,
  publishedDate,
  keywords,
  wordCount
) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${constants.BASE_URL_BLOG}/${slug}`,
  mainEntityOfPage: `${constants.BASE_URL_BLOG}/${slug}`,
  url: `${constants.BASE_URL_BLOG}/${slug}`,
  headline: `${title}`,
  name: title,
  abstract: excerpt,
  description: excerpt,
  image: `${constants.BASE_URL}/${coverImage}`,
  datePublished: publishedDate,
  dateModified: publishedDate,
  isPartOf: {
    '@type': 'Blog',
    '@id': constants.BASE_URL_BLOG,
    name: seoData.blogs.title,
    publisher: {
      '@type': 'Person',
      '@id': constants.BASE_URL,
      name: constants.SITE_NAME
    }
  },
  author: [
    {
      '@type': 'Person',
      name: constants.SITE_NAME,
      url: constants.BASE_URL,
      jobTitle: 'Software Engineer'
    }
  ],
  keywords: keywords,
  wordCount: wordCount
});

export const jsonLdForWebSite = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: new Date('2024-09-16').toUTCString(),
  dateModified: new Date().toUTCString(),
  mainEntity: {
    '@type': 'Person',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
      addressLocality: 'Ranchi',
      addressRegion: 'Jharkhand',
      postalCode: '835103',
      streetAddress: 'Ranchi, Jharkhand, India'
    },
    email: constants.CONTACT_EMAIL,
    image: `${constants.BASE_URL}/img/about-image.png`,
    jobTitle: 'Software Engineer',
    name: constants.SITE_NAME,
    url: constants.BASE_URL
  },
  keywords: seoData.home.keywords
});

export const jsonLdForBlogPage = () => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': constants.BASE_URL_BLOG,
  mainEntityOfPage: constants.BASE_URL_BLOG,
  name: seoData.blogs.title,
  description: seoData.blogs.description,
  publisher: {
    '@type': 'Person',
    '@id': constants.BASE_URL,
    name: constants.SITE_NAME
  },
  keywords: seoData.blogs.keywords
});
