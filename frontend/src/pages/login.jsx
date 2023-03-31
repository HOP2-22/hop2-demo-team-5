import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import { useNavigate } from "react-router-dom";

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

// const navigate = useNavigate();

export const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const LoginFunc = async () => {
    try {
      const res = await axios.post(`http://localhost:5555/user/login`, {
        username: user.username,
        password: user.password,
      });
      console.log(res);
      if (res.data.match === true) {
        Cookies.set("token", res.data.token);
        // setUser(res.data.email);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      alert("Password or Email is invalid");
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
          Welcome Back Streamer!
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
            LoginFunc();
          }}
          style={{
            width: "370px",
            height: "400px",
            backgroundColor: " #FFFFFF80",
            borderRadius: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <Box>
            <Typography sx={styles.family} variant="h4">
              Нэвтрэх
            </Typography>
            <Typography sx={styles.family}>Хэрэглэгчийн нэр</Typography>
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
            <Typography sx={styles.family}>Нууц үг</Typography>

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
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <input type="checkbox" name="" id="" className="checkbox" />
                <Typography style={{ fontFamily: "Mulish" }}>
                  Намайг сана
                </Typography>
              </Box>
              <Typography sx={styles.family}>
                <a href="/" style={{ color: "white" }}>
                  Нууц үг мартсан
                </a>
              </Typography>
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
              Нэвтрэх
            </button>
            <Typography sx={styles.family}>
              <a
                href="/signup"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Шинэ хэрэглэгч бол энд дарна уу
              </a>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
