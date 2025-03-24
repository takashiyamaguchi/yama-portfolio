import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // /posts ディレクトリからファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // ファイル名から ".md" を削除してidとして使用
    const id = fileName.replace(/\.md$/, '');

    // Markdownファイルをテキストとして読み込む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter でフロントマターを解析
    const matterResult = matter(fileContents);

    // idとメタデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });

  // 日付で投稿をソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => ({
    slug: fileName.replace(/\.md$/, '')
  }));
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data
  };
}
