import Image from "next/image";
import {Main} from "../components/Main";
import {Footer} from "../components/Footer";

export function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Main title="About" page="about"/>
      <Footer />
    </div>
  );
}
