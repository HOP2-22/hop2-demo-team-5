import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        username: "CosmoKramer",
        title: "Rapid Chess Championship!",
        game: "Chess",
        tag: "Chatting",
        pp: "https://i.pravatar.cc/",
        liveScreen: "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game-chees.jpg?alt=media&token=f0235860-cd7d-419c-89d8-e168e170cfd5",
        viewers: "17.1K",
      },
      {
        username: "Soprano",
        title: "Im back",
        game: "Dota 2",
        tag: "Turkish",
        pp: "https://i.pravatar.cc/",
        liveScreen: "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game-dota.jpg?alt=media&token=3e281b06-5c5b-4a4d-afbd-b5ff1a2ad85a",
        viewers: "395",
      },
      {
        username: "Seinfeld",
        title: "Reduce Ping & Avoid Lags",
        game: "PUBG",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game-pubg.jpg?alt=media&token=bf30273d-0049-421b-acd6-44e258a9bf12",
        viewers: "5.4K",
      },
      {
        username: "Darlene",
        title: "FPS soon? OMEGALUL",
        game: "Counter Strike",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game-cs.jpg?alt=media&token=e47366fc-f8de-4d40-a8b6-791b44d914b5",
        viewers: "117",
      },
      {
        username: "Cersei",
        title: "Live Bitcoin Trading Infos 24/7",
        game: "Crypto",
        tag: "Chatting",
        pp: "https://i.pravatar.cc/",
        liveScreen: "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game-crypto.jpg?alt=media&token=479e6e94-f36d-4982-a8ae-49735070ce5e",
        viewers: "88",
      },
      {
        username: "Jacob",
        title: "LVL 70 - Tracksuit Grind",
        game: "Escape From Tarkov",
        tag: "Turkish",
        pp: "https://i.pravatar.cc/",
        liveScreen: "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game-eft.jpg?alt=media&token=12c518d1-bc8a-4e85-a35f-1dfd43487bbb",
        viewers: "733",
      },
      {
        username: "Skyler",
        title: "Tourney Run Kollo",
        game: "Mortal Kombat",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game-mortal.jpg?alt=media&token=a6f5ef31-2fd5-4f27-8c79-bdff3c4b944f",
        viewers: "231",
      },
      {
        username: "Schillinger",
        title: "Day 12 of the Game of Year ?",
        game: "Elder Ring",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game-elder.jpg?alt=media&token=6066cb30-67a5-42d4-8f41-83ac10f12932",
        viewers: "3.7K",
      },
    ],
  },
});

export default user.reducer;
