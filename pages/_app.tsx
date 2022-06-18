import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      <header>
        <nav>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
          <Link href={"/omega"}>
            <a>Omega</a>
          </Link>
          <Link
            href={router.asPath}
            locale={router.locale === "en" ? "de" : "en"}
          >
            <a>Switch language</a>
          </Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
