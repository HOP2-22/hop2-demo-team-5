import { useState, useEffect, React, useRef } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "./firebaseConfig";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Card,
  InputAdornment,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import StartIcon from "@mui/icons-material/Start";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useOutsideClick } from "@/hook/useOutsideClick";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Cookies from "js-cookie";

export const Chat = () => {
  const [exist, setExist] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");
  const [room, setRoom] = useState("");
  const containerRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const outsideClick = () => {
    setShowEmojis(false);
  };
  const emojiRef = useOutsideClick(() => outsideClick);

  useEffect(() => {
    const roomName = Cookies.get("room");
    setRoom(roomName);
    if (!roomName) return;
    const queryMessages = query(
      messagesRef,
      where("room", "==", roomName),
      orderBy("createdAt")
    );
    const unscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(messages);
    });
    return () => unscribe();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container !== null) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, exist]);

  const handleSubmit = (e) => {
    const username = Cookies.get("username");

    e.preventDefault();
    if (newMessage === "") {
      return;
    }
    addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: username,
      room: room,
    });

    setNewMessage("");
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setNewMessage(newMessage + emoji);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // position: "fixed",
        position: {
          xl: "fixed",
          lg: "fixed",
          md: "none",
          xs: "none",
          sm: "none",
        },
        width: {
          xl: "400px",
          lg: "400px",
          md: "100vw",
          xs: "100vw",
          sm: "100vw",
        },
        height: {
          xl: "95vh",
          lg: "95vh",
          md: "30vh",
          xs: "52vh",
          sm: "50vh",
        },

        right: 0,
      }}
    >
      {exist ? (
        <Card
          sx={{
            // width: {
            //   xl: "500px",
            //   lg: "400px",
            //   md: "100vw",
            //   xs: "100vw",
            //   sm: "100vw",
            // },
            marginBottom: "50px",
            bgcolor: "rgb(24,24,27s)",
          }}
        >
          <Paper
            elevation={3}
            sx={{ color: "white", bgcolor: "rgb(24,24,27)" }}
          >
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  p: 2,
                  justifyContent: "space-between",
                }}
              >
                <StartIcon
                  onClick={() => {
                    setExist(false);
                  }}
                  sx={{
                    "&:hover": { bgcolor: "rgb(47,47,53)" },
                    borderRadius: "5px",
                  }}
                />
                <Typography sx={{ fontWeight: "bold", color: "white" }}>
                  Live Chat
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ width: "100%", height: "2px", bgcolor: "rgb(38,38,43)" }}
            />

            <Box ref={containerRef} sx={ChatMessage}>
              {showEmojis && (
                <Box>
                  <Box sx={{ position: "absolute", mt: 32 }}>
                    <Picker
                      data={data}
                      emojiSize={22}
                      emojiButtonSize={25}
                      onEmojiSelect={addEmoji}
                      maxFrequentRows={0}
                      noCountryFlags={true}
                    />
                  </Box>
                </Box>
              )}
              {messages.map((message) => (
                <Card
                  key={message.id}
                  sx={{
                    mb: 1,
                    bgcolor: "rgb(24,24,27)",
                    color: "white",
                    boxShadow: "none",
                  }}
                >
                  <Stack spacing={1} direction="row">
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: {
                          xl: "15px",
                        },
                      }}
                    >
                      {message.user}:
                    </Typography>
                    <Typography sx={{ fontSize: { xl: "15px" } }}>
                      {message.text}
                    </Typography>
                  </Stack>
                </Card>
              ))}
            </Box>
          </Paper>
        </Card>
      ) : (
        <KeyboardReturnIcon
          onClick={() => {
            setExist(true);
          }}
          sx={{
            "&:hover": { bgcolor: "rgb(47,47,53)" },
            borderRadius: "5px",
          }}
        />
      )}
      <form
        onSubmit={handleSubmit}
        ref={emojiRef}
        style={{ position: "fixed", bottom: "0", width: { xl: "200px" } }}
      >
        <Stack>
          <TextField
            color="secondary"
            placeholder="Send a message"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
            InputProps={{
              style: {
                color: "white",
                height: "44px",
                // width: "100%",
                border: "1px grey solid",
                backgroundColor: "black",
              },
              backgroundColor: "rgb(50,50,52)",

              endAdornment: (
                <InputAdornment disableTypography position="end">
                  <Box
                    sx={{
                      "&:hover": {
                        bgcolor: "rgb(24,24,27)",
                      },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // width: "100%",
                      width: 34,
                      height: 32,
                      borderRadius: 1,
                    }}
                  >
                    <InsertEmoticonIcon
                      sx={{
                        color: "white",
                        mr: 1,
                      }}
                      onClick={() => setShowEmojis(!showEmojis)}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                      sx={{ size: "small", mr: 6 }}
                    >
                      Send
                    </Button>
                  </Box>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </form>
    </Box>
  );
};

const ChatMessage = {
  height: "100%",
  maxHeight: "85vh",
  overflow: "scroll",
  px: 2,
  borderRadius: 1,
  color: "white",
  bgcolor: "rgb(24,24,27)",
};

export default Chat;

//git rebase main
// git push -f
