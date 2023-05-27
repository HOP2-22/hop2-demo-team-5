import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@/context/ThemeProvider";
import { SideBar } from "@/components/SideBar";
import Categorylist from "@/components/category";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Browse = () => {
  const { theme } = useTheme();
  const matches = useMediaQuery("(min-width:1250px)");

  return (
    <Box sx={{ backgroundColor: theme === "white" ? "black" : "white" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {matches ? <SideBar /> : <Box />}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",

            justifyContent: "center",
          }}
        >
          <Categorylist />
        </Box>
      </Box>
    </Box>
  );
};

export default Browse;
