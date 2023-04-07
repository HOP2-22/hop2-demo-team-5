import { useState, useEffect, useContext, useRef } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import Picker from "emoji-picker-react";
import {
  Box,
  Typography,
  Button,
  Input,
  TextField,
  Stack,
  Paper,
  Card,
} from "@mui/material";
import StartIcon from "@mui/icons-material/Start";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const rm = {
  width: "150px",
  height: "100px",
  bgcolor: "blue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ch = {
  maxHeight: 700,
  height: 700,
  overflowY: "scroll",
  px: 2,
  mb: 1,
  borderRadius: 1,
  color: "white",
  bgcolor: "rgb(24,24,27)",
};

export const Chat = (props) => {
  const { room } = props;
  const [exist, setExist] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");
  const containerRef = useRef(null);
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
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
    e.preventDefault();
    if (newMessage === "") {
      return;
    }

    addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Typography sx={rm}>{room}</Typography>

      {exist ? (
        <Box sx={{ maxWidth: 350 }}>
          <Paper
            elevation={3}
            sx={{ bgcolor: "rgb(24,24,27)", color: "white" }}
          >
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
            <Box
              sx={{ width: "100%", height: "2px", bgcolor: "rgb(38,38,43)" }}
            />
            <Box ref={containerRef} sx={ch}>
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
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      {message.user}:
                    </Typography>
                    <Typography variant="body2">{message.text}</Typography>
                  </Stack>
                </Card>
              ))}
            </Box>

            <form onSubmit={handleSubmit}>
              <Stack>
                <TextField
                  placeholder="Send a message"
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                  inputProps={{
                    style: { color: "white", height: "10px", width: 322 },
                  }}
                />
                <img
                  className="emoji-icon"
                  src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                  onClick={() => setShowPicker((val) => !val)}
                  style={{ width: "20px", height: "20px" }}
                />
                {showPicker && (
                  <Picker
                    pickerStyle={{ width: "100%" }}
                    onEmojiClick={onEmojiClick}
                  />
                )}

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ size: "small" }}
                >
                  Send
                </Button>
              </Stack>
            </form>
          </Paper>
        </Box>
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
    </Box>
  );
};
