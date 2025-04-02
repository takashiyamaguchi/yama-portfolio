import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

export default function About() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
