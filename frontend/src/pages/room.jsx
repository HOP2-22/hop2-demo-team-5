import { LiveStream } from "../components/LiveStream";
import { Chat } from "../chat/comps/Chat";
import { Box } from "@mui/material";

export const Room = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "90vh",
        flexDirection: "row",
      }}
    >
      <LiveStream />
      <Chat />
      hiiii
    </Box>
  );
};

export default Room;
