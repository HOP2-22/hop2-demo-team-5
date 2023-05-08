import { Box, createTheme, ThemeProvider } from "@mui/material";
import UserCard from "@/components/userCard";
import { About } from "@/components/about";
import Chat from "@/chat/Chat";
import ShareScreen from "@/components/sharescreen";
import { useState } from "react";
import { SideBar } from "@/components/SideBar";
import { Share } from "@mui/icons-material";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      ls: 450,
      sm: 600,
      md: 960,
      lg: 1250,
      xl: 1750,
      customLg: 1400,
      customXl: 1980,
    },
  },
});

export const VideoPage = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          paddingTop: "60px",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        > */}
        <Box>
          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                ls: "column",
                xs: "column",
              },
              width: "100vw",
            }}
          >
            <SideBar /> 
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                widht: "100%",
                justifyContent: "center",
              }}
            >
              <ShareScreen />
              <UserCard />
            </Box>
            <Box>
              <Chat />
            </Box>
          </Box>
        </Box>
        {/* </Box> */}
      </Box>
    </ThemeProvider>
  );
};
export default VideoPage;
