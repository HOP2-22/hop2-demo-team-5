import { Box } from "@mui/material";
import { Typography, TextField } from "@mui/material";
import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeProvider";
import { dota2 } from "../assets/images/dota.jpeg";
import { Header } from "@/layout/header";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SideBar } from "../components/SideBar";
import {Media} from "@mui/material";
const styles = {
  family: {
    fontFamily: "Mulish",
    marginBottom: "10px",
  },
  input: {
    width: "340px",
    height: "35px",
    borderRadius: "10px",
    fontFamily: "Mulish",
  },
};

export const Gameinfo = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <ThemeProvider>
      <Box sx={{ display: "flex" }}>
        <SideBar></SideBar>
        <Media
          src="https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/livestream.jpeg?alt=media&token=b263dcff-208c-48a7-bd48-edc549e5899b"
          alt="hahah"
          width={220}
          height={200}
        />
        <Typography sx={{ fontSize: "45px" }}>Dota 2</Typography>
        <Typography sx={{ marginTop: "20px", marginLeft: "45px" }}>
          31.4K Viewers • 17M Followers{" "}
          <span sx={{ color: "gray" }}>category</span>
        </Typography>
      </Box>
      <Typography sx={{ color: "gray", width: "500px" }}>
        Dota 2 is a multiplayer online battle arena video game and the
        stand-alone sequel to the Defense of the Ancients (DotA) mod. With
        regular updates that ensure a constant evolution of gameplay, features,
        and heroes, Dota 2 has taken on a life of its own.
      </Typography>
    </ThemeProvider>
  );
};
export default Gameinfo;
