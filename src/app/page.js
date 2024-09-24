import Script from 'next/script';

import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Blog from '../components/sections/blog';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

import seoData from '../data/seo.json';
import { jsonLdForWebSite } from '../utils/jsonLD';

export const metadata = {
  title: seoData.home.title,
  description: seoData.home.description,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  keywords: seoData.home.keywords,
  metadataBase: new URL('http://localhost:3000'),
  publisher: 'next-portfolio-blog',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: seoData.home.title,
    description: seoData.home.description,
    url: '/',
    siteName: 'next-portfolio-blog',
    images: ['/img/about-image.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.home.title,
    description: seoData.home.description,
    site: '@next-portfolio-blog',
    images: ['/img/about-image.png'],
  },
};

export default function Page() {
  const jsonLd = jsonLdForWebSite();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Blog />
      <Projects />
      <Contact />
      <Script
        id="jsonld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
    </>
  );
}
