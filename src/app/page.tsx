import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-tertiary font-sans px-20">
      <Navbar />
      <Hero />
    </main>
  );
}
