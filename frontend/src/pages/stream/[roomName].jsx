import { Box, createTheme, ThemeProvider } from "@mui/material";
import UserCard from "@/components/userCard";
import { About } from "@/components/about";
import Chat from "@/chat/Chat";
import { SideBar } from "@/components/SideBar";
import { useState, useEffect, useRef } from "react";
import SimplePeer from "simple-peer";
import io from "socket.io-client";
import Cookies from "js-cookie";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1250,
      xl: 1750,
      customLg: 1400,
      customXl: 1980,
    },
  },
});

const socket = io("http://localhost:4000");

export const Stream = () => {
  const base64SDP = Buffer.from(String(sdp)).toString("base64");
  console.log(base64SDP);
  const videoSrc = `data:application/sdp;base64,${base64SDP}`;

  useEffect(() => {
    recieveVideo();
  }, []);

  const recieveVideo = () => {
    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
    });
    peer.on("signal", (data) => {
      socket.current.emit("recieveVideo", { signal: data });
    });
    peer.on("stream", (stream) => {
      console.log("stream received", stream);
      // videoRef.current.srcObject = stream;
    });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "column",
              s: "column",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "80vw",
            }}
          >
            <video src={videoSrc} autoPlay controls />
            <UserCard />
            <About />
          </Box>
          <Box>
            <Chat />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Stream;
