import { Box, Typography, Stack, Popover } from "@mui/material";
import StartIcon from "@mui/icons-material/Start";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { Card } from "./card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";
import { useTheme } from "@/context/ThemeProvider";
import axios from "axios";

export const SideBar = () => {
  const [appear, setAppear] = useState(true);
  const { theme, changeTheme } = useTheme();

  const matches = useMediaQuery("(min-width:1750px)");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5555/user");
        setUsers(response.data.data);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  let al = "",
    rl = "",
    sd = "",
    rd = "",
    bl = "";
  if (users.length > 0) {
    al = users[0].username;
    rl = users[1].username;
    sd = users[5].username;
    rd = users[12].username;
    bl = users[26].username;
  }

  return <Box>hi</Box>;
};
