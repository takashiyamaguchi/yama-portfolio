const ITEMS = [
  {
    href: '/articles/what-is-tailwind-css',
    title: 'how to use this template',
    description: 'learn how to use this template',
  },
  {
    href: '/articles/what-is-tailwind-css',
    title: 'what is Tailwind CSS',
    description: 'learn what Tailwind CSS is',
  },
  {
    href: '/articles/what-is-react',
    title: 'タイトルのテスト',
    description: '説明のテスト',
  }
];

export function Main(props) {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      {ITEMS.map(item => {
        return (
          <a
            key={item.title}
            href={item.href}
            className="flex flex-col gap-[8px] items-center sm:items-start hover:underline"
          >
            <h2 className="text-2xl">{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </main>
  );
}
