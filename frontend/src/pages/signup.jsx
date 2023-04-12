import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Space from "../assets//images/Space.jpg";
import Input from "@mui/joy/Input";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ColorModeContext } from "@/context/context";

const styles = {
  input: {
    width: "340px",
    height: "35px",
    borderRadius: "10px",
    fontFamily: "Mulish",
  },
};

export const SignUp = () => {
  const { theme } = useContext(ColorModeContext);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [check, setCheck] = useState("");
  const CreateUser = async () => {
    if (check === user.password) {
      console.log(user.username);
      try {
        const res = await axios.post("http://localhost:5555/user/create", {
          username: user.username,
          email: user.email,
          password: user.password,
        });
        console.log(res);
        navigate(`/login`);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
    }
  };
  //   const navigate = useNavigate();

  //   const { user, setUser, LoginFunc } = useContext(User);
  return (
    <Box
      sx={{
        backgroundImage: `url(/_next/static/media/Space.d992ea78.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        },
        height: "90vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: { xl: "100%", lg: "100%", md: "100%", sm: "30%", xs: "30%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xl: "0", lg: "0", md: "0", sm: "50px", xl: "50px" },
        }}
      >
        <Box
          sx={{
            fontSize: {
              xl: "50px",
              lg: "45px",
              md: "40px",
              sm: "30px",
              xs: "25px",
            },
            fontFamily: "Mulish",
          }}
        >
          Welcome to Streamer's world!
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            CreateUser();
          }}
          style={{
            width: "370px",
            height: "480px",
            backgroundColor: theme === "black" ? " #FFFFFF80" : "#00000080",
            borderRadius: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
              variant="h4"
            >
              Бүртгүүлэх
            </Typography>
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Хэрэглэгчийн нэр
            </Typography>
            <Input
              placeholder="username"
              required
              style={styles.input}
              variant="outlined"
              color="neutral"
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Цахим хаяг
            </Typography>
            <Input
              placeholder="name@mail.domain"
              type="email"
              required
              style={styles.input}
              variant="outlined"
              color="neutral"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Нууц үг
            </Typography>

            <Input
              placeholder="••••••••••"
              required
              type="password"
              variant="outlined"
              style={styles.input}
              color="neutral"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Нууц үг давтах{" "}
            </Typography>
            <Input
              placeholder="••••••••••"
              required
              type="password"
              variant="outlined"
              style={styles.input}
              color="neutral"
              value={check}
              onChange={(e) => {
                setCheck(e.target.value);
              }}
            />
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <input type="checkbox" name="" id="" className="checkbox" />
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    marginBottom: "10px",
                    color: theme === "white" ? "white" : "black",
                  }}
                >
                  Намайг сана
                </Typography>
              </Box>
            </Box>
            <button
              type="submit"
              style={{
                width: "150px",
                height: "40px",
                backgroundColor: "blue",
                color: "white",
                fontFamily: "Mulish",
                borderRadius: "10px",
                border: "none",
                marginBottom: "10px",
              }}
            >
              Бүртгүүлэх
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
