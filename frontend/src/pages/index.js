import Head from "next/head";
import { Inter } from "next/font/google";
import { Box, Typography } from "@mui/material";
import { SideBar } from "@/components/SideBar";
import Carousel from "@/components/Carousel";
import { ChatApp } from "@/chat/chatApp";
import { Auth } from "@/chat/comps/Auth";
import { useState } from "react";
import { Provider } from "@/context/context";
import { Chat } from "@/chat/comps/Chat";
const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "90vh",
          width: "100vw",
        }}
      >
        <SideBar />
        <Box
          sx={{
            width: {
              xl: "85vw",
              lg: "88vw",
              md: "95vw",
              sm: "95vw",
              xs: "95vw",
            },
          }}
        >
          <Carousel />
        </Box>
      </Box> */}

      {/* <Provider>
        <ChatApp />
        <Chat />
      </Provider> */}

      <ChatApp />
    </>
  );
}
