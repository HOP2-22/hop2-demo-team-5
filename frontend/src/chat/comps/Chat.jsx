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
// import { Context } from "@/context/context";

export const Chat = (props) => {
  // const { room } = useContext(Context);
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

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

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [messages]);

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
    <Box>
      <Typography
        sx={{
          width: "150px",
          height: "100px",
          bgcolor: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {room}
      </Typography>

      {/* <Box>
        {messages.map((message) => (
          <Box key={message.id} sx={{ display: "flex" }}>
            <Stack spacing={3} direction="row">
              <Typography>{message.user}: </Typography>
              <Typography> {message.text}</Typography>
            </Stack>
          </Box>
        ))}
      </Box> */}

      <Box sx={{ maxWidth: 350 }}>
        <Paper
          elevation={3}
          sx={{ p: 1, bgcolor: "rgb(24,24,27)", color: "white" }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "white", textAlign: "center" }}
          >
            Live Chat
          </Typography>
          <Box
            ref={containerRef}
            sx={{
              maxHeight: 700,
              height: 700,
              overflowY: "scroll",
              p: 1,
              mb: 1,
              borderRadius: 1,
              color: "white",
              bgcolor: "rgb(24,24,27)",
            }}
          >
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
        </Paper>

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
      </Box>
    </Box>
  );
};
