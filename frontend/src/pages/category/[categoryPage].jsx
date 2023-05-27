import { Typography, Box } from "@mui/material";
import axios from "axios";
import {useState, useEffect} from "react"
import { ThemeProvider } from "@/context/ThemeProvider";
import {useRouter} from 'next/router';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  let data = [];
  const router = useRouter();
  // const { name } = router.query;

  useEffect(() => {
    axios.get("http://localhost:5555/category").then((response) => {
      setCategories(response.data);
    });
    
    data = categories.filter((category) =>{
      category.name === router.pathname
      setCategories(data)
    })
  }, []);
  console.log(router.pathname)
  return (
    <ThemeProvider>
    <Box>
      {
        <Box>
          <Box>
            <img
              src={categories.image}
              width={180}
              height={150}
              alt={categories.name}
            ></img>{" "}
            {/* <Link to={categories.name}>{categories.name}</Link> */}
            <Typography sx={{color: "white"}}>{categories.description}</Typography>
            <Typography>{categories.rules}</Typography>
          </Box>
        </Box>
      }
    </Box>
    </ThemeProvider>
  );
}

export default CategoryList
