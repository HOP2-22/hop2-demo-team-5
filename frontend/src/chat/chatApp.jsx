import { useState, useRef } from "react";
import { Auth } from "./comps/Auth";
import { Chat } from "./comps/Chat";
import Cookies from "universal-cookie";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

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

const cookies = new Cookies();

export const ChatApp = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <Box>
        <Auth setIsAuth={setIsAuth} />
      </Box>
    );
  }

  return (
    <Box>
      {room ? (
        <Chat room={room} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            height: "20%",
          }}
        >
          <Typography>Enter Room Name</Typography>
          <Input ref={roomInputRef} sx={{ color: "white" }} />
          <Button
            variant="primary"
            onClick={() => setRoom(roomInputRef.current.value)}
          >
            Enter Chat
          </Button>
        </Box>
      )}
      <Button variant="primary" onClick={signUserOut}>
        sign out
      </Button>
    </Box>
  );
};
