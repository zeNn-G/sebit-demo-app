import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="h-full w-full xl:w-[1200px] mx-auto px-10">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
