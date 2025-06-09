import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Script from 'next/script';

import BlogImage from '../../../components/elements/blogImage';

import { getSlug, getArticleFromSlug } from '../../../../src/utils/mdx';
import { jsonLdForBlogPost } from '../../../../src/utils/jsonLD';

const options = {
  mdxOptions: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
};

const components = { a: Link, img: BlogImage };

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const { content, frontMatter } = getArticleFromSlug(slug);

  const jsonLd = jsonLdForBlogPost(
    slug,
    frontMatter.title,
    frontMatter.excerpt,
    frontMatter.cover,
    new Date(frontMatter.publishedAt).toUTCString(),
    frontMatter.keywords,
    frontMatter.wordCount
  );

  return (
    <>
      <section>
        <article className='prose-figure:align-center prose mx-auto my-8 max-w-screen-lg px-2 md:prose-lg lg:prose-xl dark:prose-invert'>
          <h2>{frontMatter.title}</h2>
          <figure>
            <Image
              width={700}
              height={500}
              src={frontMatter.cover}
              alt={`cover image for - ${frontMatter.title}`}
              className='aspect-auto h-96 w-full object-cover'
            />
            <figcaption>
              <div className='flex justify-start gap-2'>
                <time dateTime={frontMatter.publishedAt}>
                  {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')}
                </time>
              </div>
            </figcaption>
          </figure>
          <p>{frontMatter.excerpt}</p>

          <div className='divider'></div>
          <MDXRemote
            source={content}
            components={components}
            options={options}
          />
        </article>
      </section>
      <Script
        id='jsonld-blog'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}

export async function generateStaticParams() {
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));
  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { frontMatter } = getArticleFromSlug(slug);

  return {
    title: frontMatter.title,
    description: frontMatter.excerpt,
    metadataBase: new URL('http://localhost:3000'),
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.excerpt,
      type: 'article',
      publishedTime: frontMatter.publishedAt,
      authors: [{ name: 'next-portfolio-blog', url: 'http://localhost:3000' }],
      images: [frontMatter.cover],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${frontMatter.title} | next-portfolio-blog`,
      description: frontMatter.excerpt,
      site: '@next-portfolio-blog',
      images: [frontMatter.cover],
    },
  };
}
