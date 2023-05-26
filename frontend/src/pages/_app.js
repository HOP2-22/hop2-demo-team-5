import { Header } from "@/layout/header";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { AuthProvider } from "@/context/AuthProvider";
import { Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store/index";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Provider store={store}>
        <Box>
          <Header />
          <Component {...pageProps} />
        </Box>
        <ToastContainer />
        </Provider>
      </AuthProvider>
    </ThemeProvider>
  );
}
