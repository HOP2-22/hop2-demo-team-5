import { useState, useRef, useContext, useEffect } from "react";
import { Auth } from "./comps/Auth";
import { Chat } from "./comps/Chat";
import Cookies from "universal-cookie";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
// import { Context } from "@/context/context";

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
  const [isAuth, setIsAuth] = useState(null);
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };
  useEffect(() => {
    setIsAuth(cookies.get("auth-token"));
  }, []);

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
          <input ref={roomInputRef} sx={{ color: "white" }} />
          <Button
            variant="primary"
            onClick={() => {
              setRoom(roomInputRef.current.value);
              console.log(room);
            }}
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
