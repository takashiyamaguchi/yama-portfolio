import { getAllPostIds } from '../../../lib/posts';
import { getPostData } from '../../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  const processedContent = await remark()
    .use(html)
    .process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
