import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Input from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { useTheme } from "@/context/ThemeProvider";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const styles = {
  input: {
    width: "340px",
    height: "35px",
    borderRadius: "10px",
    fontFamily: "Mulish",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
};
const pic =
  "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/andre-benz-wkhyXI5hRbo-unsplash.jpg?alt=media&token=cbcbfc83-5023-44b0-84e1-50f1c1c2c2ba";

export const SignUp = () => {
  const { theme } = useTheme();
  const [isPasswordShow1, setIsPasswordShow1] = useState(false);
  const [isPasswordShow2, setIsPasswordShow2] = useState(false);
  function toggleShowPassword1() {
    setIsPasswordShow1(!isPasswordShow1);
  }
  function toggleShowPassword2() {
    setIsPasswordShow2(!isPasswordShow2);
  }
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
        const res = await axios.post(
          "https://live-stream-backend.onrender.com/user/create",
          {
            username: user.username,
            email: user.email,
            password: user.password,
          }
        );
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
        backgroundImage: `url(${pic})`,
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
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {`Welcome to Streamer's world!`}
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
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
              variant="h4"
            >
              Бүртгүүлэх
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Хэрэглэгчийн нэр
            </Typography>
            <input
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
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Цахим хаяг
            </Typography>
            <input
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
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Нууц үг
            </Typography>

            <Box style={{ display: "flex", alignItems: "center" }}>
              <input
                placeholder="password"
                required
                type={isPasswordShow1 ? "text" : "password"}
                variant="outlined"
                style={styles.input}
                color="neutral"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
              <path onClick={toggleShowPassword1}>
                {isPasswordShow1 ? <Visibility /> : <VisibilityOff />}
              </path>
            </Box>

            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Нууц үг давтах{" "}
            </Typography>

            <Box style={{ display: "flex", alignItems: "center" }}>
              <input
                placeholder="password"
                required
                type={isPasswordShow2 ? "text" : "password"}
                variant="outlined"
                style={styles.input}
                color="neutral"
                value={check}
                onChange={(e) => {
                  setCheck(e.target.value);
                }}
              />
              <path onClick={toggleShowPassword2}>
                {isPasswordShow2 ? <Visibility /> : <VisibilityOff />}
              </path>
            </Box>

            <button
              type="submit"
              style={{
                width: "150px",
                height: "40px",
                backgroundColor: "#9147ff",
                color: "white",
                fontFamily: "'Roboto', sans-serif",
                borderRadius: "10px",
                border: "none",
                marginTop: "20px",
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
