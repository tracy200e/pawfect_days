import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-tertiary container font-sans">
      <header className="flex justify-between items-center min-h-2 px-8 py-5">
        <Navbar />
      </header>
      <Hero />
    </main>
  );
}
