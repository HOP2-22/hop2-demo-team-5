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
} from "@mui/material";
import { UserCard } from "@/layout/userCard";
import { About } from "@/layout/about";

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
  return (
    <ThemeProvider theme={customTheme}>
      <Box>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <video
              width="100%"
              height="870"
              controls
              style={{ backgroundColor: "black" }}
            >
              <source src="https://youtu.be/LzojZO-gSuw" type="video/mp4" />
              Your browser does not support the video taxg.
            </video>
          </Box>

          <UserCard />

          <About />
        </Container>
      </Box>
    </ThemeProvider>
  );
};
