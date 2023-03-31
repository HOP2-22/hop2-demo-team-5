import { Box, Typography } from "@mui/material";

export const SideBar = () => {
  return (
    <Box
      sx={{
        width: {
          xl: "20vw",
          lg: "15vw",
          md: "50px",
          sm: "50px",
          xs: "50px",
        },
        height: "90vh",
        backgroundColor: "white",
      }}
    >
      <Typography>hello</Typography>
    </Box>
  );
};
