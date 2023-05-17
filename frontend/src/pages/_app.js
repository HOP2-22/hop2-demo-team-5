import { Header } from "@/layout/header";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { AuthProvider } from "@/context/AuthProvider";
import { Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Box>
          <Header />
          <Component {...pageProps} />
        </Box>
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  );
}
