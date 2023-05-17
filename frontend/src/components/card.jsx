import { Box, Typography, Stack } from "@mui/material";
export const Card = (props) => {
  const { al, game, viewers } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            bgcolor: "white",
            height: "35px",
            width: "35px",
          }}
        />

        <Stack spacing={-0.3}>
          <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
            {al}
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "rgb(163,163,183)" }}>
            {game}
          </Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={0.4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "8px",
            height: "8px",
            bgcolor: "red",
            borderRadius: "50%",
          }}
        />
        <Typography sx={{ fontSize: "13px" }}>{viewers}</Typography>
      </Stack>
    </Box>
  );
};
