import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
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
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

export default function Categorylist() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    axios.get("http://localhost:5555/category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const customTheme = createTheme({
    breakpoints: {
      values: {
        lw: 0,
        xs: 578,
        sm: 880,
        md: 1115,
        lg: 1625,
        xl: 1750,
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#9147ff",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Categories
          </Typography>
        </Box>
        <Box sx={{ mt: 5, width: "90vw", height: "100vh" }}>
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid
                item
                lw={12}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                key={category.id}
              >
                <Card
                  sx={{
                    backgroundColor: theme === "white" ? "black" : "white",
                    border: "none",
                    boxShadow: "none",
                  }}
                  onClick={() => {
                    router.push(`/category/${category.name}`);
                  }}
                >
                  <div className={styles.stream}>
                    <img
                      src={category.image}
                      className={styles.stream__thumbnail}
                    />
                  </div>

                  <Typography
                    sx={{ color: theme === "white" ? "white" : "black" }}
                  >
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
