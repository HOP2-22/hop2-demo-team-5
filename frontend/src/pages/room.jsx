import { Box, createTheme, ThemeProvider } from "@mui/material";
import UserCard from "@/components/userCard";
import { About } from "@/components/about";
import Chat from "@/chat/Chat";
import ShareScreen from "@/components/sharescreen";
import { SideBar } from "@/components/SideBar";
import Cookies from "js-cookie";
import { NoMeetingRoomOutlined } from "@mui/icons-material";

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

export const VideoPage = () => {
  const roomId = Cookies.get("roomId");
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
            <ShareScreen id={roomId}/>
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

export default VideoPage;
