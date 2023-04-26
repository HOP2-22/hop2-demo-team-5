import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useTheme } from "@/context/ThemeProvider";
import { Box, Button } from "@mui/material";

export const ShareScreen = () => {
  const { theme } = useTheme();
  const videoRef = useRef(null);
  const [screenStream, setScreenStream] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);
  const [startCam, setStartCam] = useState(false);
  const [startScreen, setStartScreen] = useState(false);

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
        audio: true,
      });
      setScreenStream(stream);
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
        audio: true,
      });
      setCameraStream(stream);
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
        width: "80vw",
        backgroundColor: theme === "black" ? "white" : "black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <video
        ref={videoRef}
        controls
        style={{
          width: "100%",
          height: "auto",
          transform: startCam ? "scaleX(-1)" : "none",
        }}
      />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
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
