import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export function BlogList() {
  const posts = getSortedPostsData();

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article key={post.id} className="border-b pb-4">
          <Link href={`/posts/${post.id}`} className="text-xl font-semibold hover:text-blue-600">
            {post.title}
          </Link>
          <div className="text-sm text-gray-500 mt-1">
            {new Date(post.date).toLocaleDateString('ja-JP')}
          </div>
        </article>
      ))}
    </div>
  );
}
