import { Header } from "@/layout/header";
import "@/styles/globals.css";
import ThemeContext from "@/context/Context";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContext>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeContext>
  );
}
