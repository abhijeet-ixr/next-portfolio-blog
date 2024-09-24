import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { sync } from 'glob';
import count from 'word-count';

const FILE_PATH = path.join(process.cwd(), 'posts');

export async function getSlug() {
  const paths = sync(`${FILE_PATH}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split('.');

    return slug;
  });
}

export function getArticleFromSlug(slug) {
  const source = fs.readFileSync(path.join(FILE_PATH, `${slug}.mdx`), 'utf-8');
  const { content, data } = matter(source);

  return {
    content,
    frontMatter: {
      slug,
      readingTime: readingTime(source).text,
      wordCount: count(source),
      ...data
    }
  };
}

export async function getAllArticles() {
  const articles = fs
    .readdirSync(FILE_PATH)
    .filter((file) => file.includes('.mdx') || file.includes('.md'));

  return articles.reduce((allArticles, articleSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'posts', articleSlug),
      'utf-8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace('.mdx', ''),
        readingTime: readingTime(source).text
        
      },
      ...allArticles
    ];
  }, []);
}
