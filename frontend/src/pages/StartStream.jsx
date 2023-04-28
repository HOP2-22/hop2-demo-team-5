import { useState, useRef, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

import { Box, Typography, Button } from "@mui/material";

export const StartStream = () => {
  const router = useRouter();
  const [roomName, setRoomName] = useState("");

  const CreateStream = async () => {
    try {
      const res = await axios.post(
        "https://live-stream-backend.onrender.com/stream/createRoom",
        {
          roomName: roomName,
        }
      );
      console.log(res);
      Cookies.set("room", res?.data?.data?.roomName);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          height: "20%",
        }}
      >
        <Typography>Create Stream</Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            CreateStream();
            router.push("/room");
          }}
        >
          <input
            sx={{ color: "white" }}
            value={roomName}
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
          />
          <Button
            variant="primary"
            onClick={() => {
              router.push("/room");
              CreateStream();
            }}
          >
            Start Stream
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default StartStream;
