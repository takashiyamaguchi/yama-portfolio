import { BlogList } from './BlogList';

export function Main({ page }) {
  return (
    <main className="w-full max-w-4xl">
      {page === 'home' && (
        <div>
          <BlogList />
        </div>
      )}
      {page === 'about' && (
        <div>
          <h1 className="mb-8 text-4xl font-bold">About</h1>
          {/* Aboutページのコンテンツ */}
        </div>
      )}
    </main>
  );
}
