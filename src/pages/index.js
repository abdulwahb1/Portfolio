import { Navbar, Hero, Footer } from "@/components";
import Feature from "@/sections/Feature";
import Recent from "@/sections/Recent";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-[100dvh]">
      <Navbar />
      <Hero />
      <Recent />
      <Feature />
      <Footer />
    </main>
  );
}
