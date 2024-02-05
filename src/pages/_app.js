import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="flex flex-col md:w-[1152px] sm:w-full m-auto">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
