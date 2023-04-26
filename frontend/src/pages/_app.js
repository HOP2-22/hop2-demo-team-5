import { Header } from "@/layout/header";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Box } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Box>
        <Header />
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
