import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Card, Stack, Grid } from "@mui/material";

export default function Categorylist() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  console.log(categories[0]);

  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2.3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card sx={{ bgcolor: "black", width: { xs: 250, md: 280 } }}>
              <img
                src={category.image}
                style={{
                  backgroundColor: "red",
                }}
              />
              <Typography sx={{ color: "white" }}>{category.name}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
