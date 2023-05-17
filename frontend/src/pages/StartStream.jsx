import { useState, useRef, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  Stack,
  styled,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9147ff",
    },
    "&:hover fieldset": {
      borderColor: "#9147ff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9147ff",
    },
  },
}));

export const CreateRoom = () => {
  const router = useRouter();
  const [roomName, setRoomName] = useState("");

  const CreateStream = async () => {
    try {
      const res = await axios.post("http://localhost:5555/stream/createRoom", {
        roomName: roomName,
      });
      console.log(res);
      Cookies.set("room", res?.data?.data?._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onClick={handleOpen}
        sx={{
          color: "white",
          backgroundColor: "#9147ff",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#f5f5f5",
            color: "black",
          },
        }}
      >
        Create or Join Room
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 500,
            color: "black",
            border: "none",
            bgcolor: "rgb(38,38,37)",
            p: 0,
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              bgcolor: "blue",
              width: "100%",
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "rgb(54, 55, 57)",
              borderRadius: "5px",
            }}
          >
            <Typography sx={{ color: "white" }}>Create room</Typography>
          </Box>
          <Box sx={{ p: 3 }}>
            <Typography sx={{ color: "white", mb: 2 }}>Room Name</Typography>

            <CustomTextField
              label="Enter room name...."
              variant="outlined"
              fullWidth
              defaultValue="Small"
              size="small"
              sx={{ input: { color: "#9147ff" } }}
              InputLabelProps={{ style: { color: "#9147ff" } }}
              value={roomName}
              onChange={(e) => {
                setRoomName(e.target.value);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                bgcolor: "#9147ff",
                "&:hover": { bgcolor: "#9147ff" },
                mt: 3,
                mb: 2,
              }}
              onClick={() => {
                router.push("/room");
                CreateStream();
              }}
            >
              Go to Room
              <ArrowForwardIcon fontSize="small" />
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default CreateRoom;
