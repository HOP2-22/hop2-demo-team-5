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

  return appear && matches ? (
    <Box
      sx={{
        height: "80vh",
        backgroundColor: theme === "white" ? "rgb(31,31,35)" : "white",
        color: theme === "white" ? "white" : "rgb(31,31,35)",
        padding: 2,
        width: "245px",
      }}
    >
      <Stack spacing={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            For You
          </Typography>

          <Box
            sx={{
              "&:hover": {
                bgcolor: "rgb(47,47,53)",
              },
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 35,
              height: 35,
            }}
          >
            <KeyboardReturnIcon
              sx={{ fontSize: "21px" }}
              onClick={() => {
                setAppear(false);
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ mt: 5 }}>
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              RECOMMENDED CHANNELS
            </Typography>
          </Box>
        </Box>
        <Stack spacing={1}>
          <Card al={al} game="Valorant" viewers="12" />
          <Card al={rl} game="Dota 2" viewers="1002" />
          <Card al={sd} game="PUBG" viewers="15" />
          <Card al={rd} game="Fortnite" viewers="1232" />
          <Card al={bl} game="GTA V" viewers="32" />
        </Stack>
      </Stack>
    </Box>
  ) : (
    <Box
      sx={{
        backgroundColor:
          theme === "white" ? "rgb(31,31,35)" : "rgb(239,239,231)",
        height: "80vh",
        width: "50px",
        display: "flex",
        display: "none",
        alignItems: "center",
        flexDirection: "column  ",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{
          "&:hover": {
            bgcolor: "rgb(47,47,53)",
          },
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 35,
          height: 35,
          my: 1,
        }}
      >
        {matches ? (
          <StartIcon
            sx={{ color: theme === "white" ? "white" : "black" }}
            fontSize="small"
            onClick={() => {
              setAppear(true);
            }}
          />
        ) : (
          <Box />
        )}
      </Box>

      <FavoriteBorderIcon
        sx={{ color: theme === "white" ? "white" : "black", mb: 1 }}
      />
      <Stack direction="column" spacing={1}>
        <Box
          sx={{
            borderRadius: "50%",
            bgcolor: "red",
            height: "27px",
            width: "27px",
          }}
        />
        <Box
          sx={{
            borderRadius: "50%",
            bgcolor: "white",
            height: "27px",
            width: "27px",
          }}
        />
        <Box
          sx={{
            borderRadius: "50%",
            bgcolor: "blue",
            height: "27px",
            width: "27px",
          }}
        />
      </Stack>
    </Box>
  );
};
