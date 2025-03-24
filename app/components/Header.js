import Link from "next/link";

export function Header() {
  return (
    <header className="flex gap-10 items-center justify-between p-8 border-b">
      <h1 className="text-3xl font-bold">Yamaguchi Takashi</h1>

      <nav>
        <ul className="flex gap-4">
          <li><Link className="hover:underline" href="/">Home</Link></li>
          <li><Link className="hover:underline" href="/about">About</Link></li>
          <li><Link className="hover:underline" href="/works">Works</Link></li>
        </ul>
      </nav>
    </header>
  );
}
