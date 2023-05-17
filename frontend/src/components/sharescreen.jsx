import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeProvider";
import { Box, Button } from "@mui/material";
import { io } from "socket.io-client";
import SimplePeer from "simple-peer";


const socket = io.connect("http://localhost:4000")

export const ShareScreen = (id) => {
  const { theme } = useTheme();
  const videoRef = useRef(null);
  const [screenStream, setScreenStream] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);
  const [startCam, setStartCam] = useState(false);
  const [startScreen, setStartScreen] = useState(false);
  const connectionRef = useRef(null);

  useEffect(() => {
    if (screenStream || cameraStream) {
      videoRef.current.srcObject = screenStream || cameraStream;
      videoRef.current.play();
    } else {
      videoRef.current.srcObject = null;
    }
  }, [screenStream, cameraStream]);


  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      setScreenStream(stream);
      console.log(stream)

      const peer = new SimplePeer({
        initiator: true,
        trickle: false,
        stream: stream,
      })
      peer.on("signal",(data) => {
        console.log(data);
        socket.emit("startStream", {
          signalData: data,
          id: id,
        })
      })
      connectionRef.current = peer;


      
    } catch (error) {
      console.error(error);
    }
  };

  const stopScreenShare = () => {
    screenStream.getTracks().forEach((track) => {
      track.stop();
    });
    setScreenStream(null);

    
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setCameraStream(stream);
      const peer = new SimplePeer({
        initiator: true,
        trickle: false,
        stream: stream,
      })
      peer.on("signal",(data) => {
        socket.emit("startStream", {
          signalData: data
        })
      })
      connectionRef.current = peer;

    } catch (error) {
      console.error(error);
    }
  };

  const stopCamera = () => {
    cameraStream.getTracks().forEach((track) => {
      track.stop();
    });
    setCameraStream(null);

    
  };

  return (
    <Box
      sx={{
        width: "70vw",
        backgroundColor: theme === "black" ? "white" : "black",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <video
        ref={videoRef}
        style={{
          width: "1000px",
          height: "524px",
          transform: startCam ? "scaleX(-1)" : "none",
        }}
      />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {startScreen ? (
          <Button
            sx={{
              width: "200px",
              height: "50px",
              backgroundColor: "blue",
              color: "white",
            }}
            onClick={() => {
              stopScreenShare();
              setStartScreen(false);
            }}
          >
            Stop Screen Share
          </Button>
        ) : (
          <Button
            sx={{
              width: "200px",
              height: "50px",
              backgroundColor: "blue",
              color: "white",
            }}
            onClick={() => {
              startScreenShare();
              setStartScreen(true);
            }}
          >
            Start Screen Share
          </Button>
        )}
        {startCam ? (
          <Button
            sx={{
              width: "200px",
              height: "50px",
              backgroundColor: "blue",
              color: "white",
            }}
            onClick={() => {
              stopCamera();
              setStartCam(false);
            }}
          >
            Stop Camera
          </Button>
        ) : (
          <Button
            sx={{
              width: "200px",
              height: "50px",
              backgroundColor: "blue",
              color: "white",
            }}
            onClick={() => {
              startCamera();
              setStartCam(true);
            }}
          >
            Start Camera
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ShareScreen;
