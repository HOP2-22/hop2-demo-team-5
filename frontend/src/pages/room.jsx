import { Box, createTheme, ThemeProvider } from "@mui/material";
import UserCard from "@/components/userCard";
import { About } from "@/components/about";
import Chat from "@/chat/Chat";
import ShareScreen from "@/components/sharescreen";
import { SideBar } from "@/components/SideBar";

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
        }}
      >
        {/* <SideBar /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
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
              width: "70vw",
            }}
          >
            <ShareScreen />
            <UserCard />
            <About />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Chat />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default VideoPage;
