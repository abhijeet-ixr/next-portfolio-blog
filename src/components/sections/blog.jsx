import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

import { getAllArticles } from '../../../src/utils/mdx';

import SectionHeader from '../elements/sectionHeader';

export default async function Blog() {
  const { posts } = await getAllPosts();

  return (
    <section id="blog" className="py-6">
      <SectionHeader header="blog" />
      <div className="mx-auto my-10 max-w-screen-2xl place-content-center px-2 text-center md:px-4 lg:px-16">
        <div className="grid grid-flow-row grid-cols-1 justify-between gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((frontMatter) => {
            return (
              <Link
                key={frontMatter.slug}
                href={`/blog/${frontMatter.slug}`}
                passHref
              >
                <div className="card card-compact transform bg-base-100 shadow-xl transition duration-500 hover:scale-105">
                  <figure>
                    <Image
                      className="aspect-auto h-48 w-full object-cover"
                      src={frontMatter.cover}
                      alt={frontMatter.title}
                      width={500}
                      height={300}
                    />
                  </figure>
                  <div className="card-body text-left">
                    <header className="mb-2 h-16">
                      <h2 className="card-title">{frontMatter.title}</h2>
                    </header>

                    <div className="card-actions my-4 justify-start gap-2">
                      <div className="badge badge-outline">
                        {frontMatter.category}
                      </div>
                      <div className="badge badge-outline">
                        {frontMatter.readingTime}
                      </div>
                      <div className="badge badge-outline">
                        <time dateTime={frontMatter.publishedAt}>
                          {dayjs(frontMatter.publishedAt).format('MMM D, YYYY')}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 pt-8">
          <Link
            href="/blog"
            role="button"
            className="btn btn-outline btn-primary btn-wide"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

async function getAllPosts(limit = 3) {
  const articles = await getAllArticles();

  articles.sort((a, b) => {
    if (a.publishedAt > b.publishedAt) return 1;
    if (a.publishedAt < b.publishedAt) return -1;

    return 0;
  });

  return {
    posts: articles.reverse().slice(0, limit)
  };
}
