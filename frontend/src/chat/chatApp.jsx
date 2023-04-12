import { useState, useRef, useContext, useEffect } from "react";
import { Auth } from "./comps/Auth";
import { Chat } from "./comps/Chat";
import Cookies from "js-cookie";
// import { signOut } from "firebase/auth";
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

export const ChatApp = () => {
  const [isAuth, setIsAuth] = useState(null);
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  // const signUserOut = async () => {
  //   await signOut(auth);
  //   Cookies.remove("auth-token");
  //   setIsAuth(false);
  //   setRoom(null);
  // };
  useEffect(() => {
    setIsAuth(Cookies.get("auth-token"));
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
          <Typography>Enter Stream Name</Typography>
          <input ref={roomInputRef} sx={{ color: "white" }} />
          <Button
            variant="primary"
            onClick={() => {
              setRoom(roomInputRef.current.value);
              console.log(room);
            }}
          >
            Enter Stream
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ChatApp;
