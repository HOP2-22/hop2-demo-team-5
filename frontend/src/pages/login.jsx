import { Box, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeProvider";
import { toast } from "react-toastify";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "@/context/AuthProvider";
import { styled, TextField } from "@mui/material";

const styles = {
  family: {
    fontFamily: "'Roboto', sans-serif",
    marginBottom: "10px",
  },
  input: {
    width: "340px",
    height: "35px",
    borderRadius: "10px",
    borderColor: "var(--color-border-input-focus)",
    fontFamily: "'Roboto', sans-serif",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
};

export const Login = () => {
  const { setUserData } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  function toggleShowPassword() {
    setIsPasswordShow(!isPasswordShow);
  }

  const successfulLogin = () => {
    toast("Амжилттай нэвтэрлээ", {
      hideProgressBar: true,
      autoClose: 1000,
      type: "success",
      theme: "colored",
    });
  };
  const failureLogin = () => {
    toast("Нууц үг эсвэл имэйл буруу байна", {
      hideProgressBar: true,
      autoClose: 1000,
      type: "warning",
      theme: "colored",
    });
  };

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
<<<<<<< HEAD
=======
      console.log(res);
>>>>>>> fa8f173 (not finished)
      if (res.data.match === true) {
        successfulLogin();
        Cookies.set("token", res.data.token);
        setUserData(res.data.user);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      failureLogin();
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/andre-benz-wkhyXI5hRbo-unsplash.jpg?alt=media&token=cbcbfc83-5023-44b0-84e1-50f1c1c2c2ba)`,
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
              Нэвтрэх
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
              onChange={(event) => {
                setUser({ ...user, username: event.target.value });
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
                type={isPasswordShow ? "text" : "password"}
                variant="outlined"
                style={styles.input}
                color="neutral"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
              <path onClick={toggleShowPassword}>
                {isPasswordShow ? <Visibility /> : <VisibilityOff />}
              </path>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <input type="checkbox" name="" id="" className="checkbox" />
                  <Typography
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      color: theme === "white" ? "white" : "black",
                    }}
                  >
                    Намайг сана
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    textDecoration: "underline",
                    fontFamily: "'Roboto', sans-serif",
                    color: theme === "white" ? "white" : "black",
                  }}
                >
                  <a
                    href="/"
                    style={{ color: theme === "white" ? "white" : "black" }}
                  >
                    Нууц үгээ мартсан
                  </a>
                </Typography>
              </Box>
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
                marginTop: "10px",
              }}
            >
              Нэвтрэх
            </button>
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                marginTop: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              <a
                href="/signup"
                style={{
                  color: theme === "white" ? "white" : "black",
                  textDecoration: "underline",
                }}
              >
                Шинэ хэрэглэгч бол энд дарна уу?
              </a>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
