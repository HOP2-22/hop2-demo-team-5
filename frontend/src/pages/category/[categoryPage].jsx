import { Typography, Box, Card, Stack, Button } from "@mui/material";
import SideBar from "@/sidebar/SideBar";
import { useRouter } from "next/router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import axios from "axios";

export default function cr() {
  const router = useRouter();
  const { query } = router;
  const game = query.categoryPage;
  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const selectedGame = categories.find((category) => category.name === game);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <SideBar />

      <Box>
        <Box sx={{ ml: 7 }}>
          {selectedGame && (
            <Stack direction="row" spacing={4}>
              <img src={selectedGame.image} alt={selectedGame.name} />
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ mt: 4 }}>
                  {selectedGame.name}
                </Typography>
                <Card sx={{ width: 400, bgcolor: "black", color: "white" }}>
                  {selectedGame.description}
                </Card>

                <Box sx={style}>
                  <FavoriteIcon fontSize="small" />
                  <Typography
                    sx={{ ml: 1, fontSize: { xs: "13px", sm: "15px" } }}
                  >
                    Follow
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
}

const style = {
  bgcolor: "rgb(135,75,246)",
  width: { xs: "80px", sm: "90px" },
  height: "34px",
  borderRadius: "7px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
