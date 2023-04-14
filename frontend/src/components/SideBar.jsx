import { Box, Typography, Stack } from "@mui/material";
import StartIcon from "@mui/icons-material/Start";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { Card } from "./card";
export const SideBar = () => {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "rgb(31,31,35)",
        color: "white",
        padding: 2,
        width: "240px",
      }}
    >
      <Stack spacing={1}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "18px" }}>For You</Typography>
          <KeyboardReturnIcon sx={{ fontSize: "21px" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
            FOLLOWED CHANNELS
          </Typography>
          <ImportExportIcon sx={{ fontSize: "21px" }} />
        </Box>
        <Stack spacing={1}>
          <Card />
          <Card />
        </Stack>
      </Stack>

      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
          RECOMMENDED CHANNELS
        </Typography>
      </Box>

      <Stack sx={{ mt: 1 }}>
        <Card />
        <Card />
        <Card />
      </Stack>
    </Box>
  );
};
