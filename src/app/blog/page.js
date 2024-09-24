import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import dayjs from 'dayjs';

import { getAllArticles } from '../../../src/utils/mdx';
import { characterLimit } from '../../../src/utils';
import { jsonLdForBlogPage } from '../../utils/jsonLD';
import seoData from '../../data/seo.json';

export const metadata = {
  title: seoData.blogs.title,
  description: seoData.blogs.description,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  keywords: seoData.blogs.keywords,
  metadataBase: new URL('http://localhost:3000'),
  publisher: 'next-portfolio-blog',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: seoData.blogs.title,
    description: seoData.blogs.description,
    url: '/blog',
    siteName: 'next-portfolio-blog',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.blogs.title,
    description: seoData.blogs.description,
    site: '@next-portfolio-blog',
    images: [],
  },
};

export default async function Blog() {
  const { posts } = await getAllPosts();
  const jsonLd = jsonLdForBlogPage();

  return (
    <>
      <div>
        <section id='blog' className='py-6'>
          <h2 className='text-center text-4xl font-bold tracking-wide'>Blog</h2>
          <div className='divider'></div>

          <div className='mx-auto my-10 max-w-screen-2xl px-2 text-center md:px-4 lg:px-16 xl:px-32'>
            <p className='text-justify text-xl font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nisl augue, ornare ac pellentesque sit amet, mattis vitae lorem.
              Cras posuere turpis mauris, id posuere neque dictum id. Aenean
              magna arcu, vestibulum non ligula eget, viverra vehicula sem.
              Maecenas iaculis facilisis accumsan.
            </p>
            <div className='divider'></div>
            <div className='mt-8 grid grid-flow-row grid-cols-1 justify-between gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {posts.map((frontMatter) => {
                return (
                  <Link
                    key={frontMatter.slug}
                    href={`/blog/${frontMatter.slug}`}
                    passHref
                  >
                    <div className='card card-compact transform bg-base-100 shadow-xl transition duration-500 hover:scale-105'>
                      <figure>
                        <Image
                          className='aspect-auto h-48 w-full object-cover'
                          src={frontMatter.cover}
                          alt={frontMatter.title}
                          width={500}
                          height={300}
                        />
                      </figure>
                      <div className='card-body text-left'>
                        <header className='mb-2 h-16'>
                          <h2 className='card-title'>{frontMatter.title}</h2>
                        </header>

                        <p className='mb-2 h-12'>
                          {characterLimit(frontMatter.excerpt)}
                        </p>

                        <div className='card-actions my-4 justify-start gap-2'>
                          <div className='badge badge-outline'>
                            {frontMatter.category}
                          </div>
                          <div className='badge badge-outline'>
                            {frontMatter.readingTime}
                          </div>
                          <div className='badge badge-outline'>
                            <time dateTime='2020-03-16'>
                              {dayjs(frontMatter.publishedAt).format(
                                'MMM D, YYYY'
                              )}
                            </time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* <div className="mt-8 pt-8">
              <a role="button" className="btn btn-outline btn-primary btn-wide">
                View more articles
              </a>
            </div> */}
          </div>
        </section>
      </div>
      <Script
        id='jsonld-blogs'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}

async function getAllPosts() {
  const articles = await getAllArticles();

  articles.sort((a, b) => {
    if (a.publishedAt > b.publishedAt) return 1;
    if (a.publishedAt < b.publishedAt) return -1;

    return 0;
  });

  return {
    posts: articles.reverse(),
  };
}
