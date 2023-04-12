import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import {
  Box,
  Typography,
  Button,
  Container,
  createTheme,
  ThemeProvider,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Paper,
  Input,
} from "@mui/material";
import Cookies from "js-cookie";

export const Auth = (props) => {
  const { setIsAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      Cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box>
      <Button onClick={signInWithGoogle}>Sign in With Google</Button>
    </Box>
  );
};

export default Auth;
