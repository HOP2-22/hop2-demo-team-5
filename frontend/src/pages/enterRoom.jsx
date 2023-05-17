import { useState, useRef, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { Box, Typography, Button } from "@mui/material";

export const EnterRoom = () => {
  const router = useRouter();
  const [roomName, setRoomName] = useState("");
  const enterRoom = async () => {
    console.log(roomName);
    try {
      const res = await axios.put("http://localhost:5555/stream/enterRoom", {
        roomName: roomName,
      });
      console.log(res);
      Cookies.set("room", res.data.room[0]._id);
      router.push(`/stream/${roomName}`);
    } catch (err) {
      console.log(err);
      alert("Songoson uruu buruu baina");
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
        <Typography>Enter Room</Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            enterRoom();
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
              router.push(`/stream/${roomName}`);
            }}
          >
            enter room
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default EnterRoom;
