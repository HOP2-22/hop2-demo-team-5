import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  Stack,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import styles from "../styles/stream.module.css";
export default function Categorylist() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  console.log(categories[0]);

  const customTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1625,
        xl: 1750,
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ p: 3 }}>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            {categories.map((category, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card sx={{ bgcolor: "black", width: { xs: 265, md: 285 } }}>
                  <div className={styles.stream}>
                    <img
                      src={category.image}
                      className={styles.stream__thumbnail}
                    />
                  </div>

                  <Typography sx={{ color: "white" }}>
                    {category.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
