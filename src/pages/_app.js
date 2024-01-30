import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="flex flex-col md:w-[1152px] sm:w-[400px] m-auto">
      <Component {...pageProps} />
    </main>
  );
}
