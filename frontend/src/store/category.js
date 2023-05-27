import { createSlice } from "@reduxjs/toolkit";

export const category = createSlice({
  name: "category",
  initialState: {
    games: [
      {
        name: "Dota 2",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game1.jpg?alt=media&token=68bbe265-3f06-40aa-ba7f-ae41afc1d221",
        viewer: "63.3k",
      },
      {
        name: "Chess",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game2.jpg?alt=media&token=6f333cd7-0e32-4413-bca8-302d785d8c32",
        viewer: "23.7k",
      },
      {
        name: "PUBG: BATTLEGROUNDS",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game3.jpg?alt=media&token=71465cc2-e6ac-4663-b8bf-367c88ce8bee",
        viewer: "34.3k",
      },
      {
        name: "Just Chatting",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game4.jpg?alt=media&token=8cc3eb10-38e7-4e05-9d46-5c355fff5064",
        viewer: "580k",
      },
      {
        name: "Grand Theft Auto V",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game5.jpg?alt=media&token=3854ba3a-fec2-407a-a17d-a038df6e2d04",
        viewer: "144k",
      },
      {
        name: "Elder Ring",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game6.jpg?alt=media&token=81422fa6-702f-4a0d-95ea-e960584c72ac",
        viewer: "88k",
      },
      {
        name: "Apex Legends",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game7.jpg?alt=media&token=be54ad68-9d83-4b8b-bd6b-2ecb20c9d124",
        viewer: "112.6k",
      },
      {
        name: "Call of Duty: Wardzone",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game8.jpg?alt=media&token=6639df5c-8e23-4a72-98be-8c3c121f70dd",
        viewer: "39k",
      },
      {
        name: "Escape from Tarkov",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game9.jpg?alt=media&token=b8f58ae0-f55f-4d48-809c-fe72bc8f86e2",
        viewer: "20k",
      },
      {
        name: "FIFA 22",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game10.jpg?alt=media&token=7f267eaa-2a40-49ba-a4f5-9d5e30938e45",
        viewer: "42.2k",
      },
      {
        name: "Fortnite",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game11.jpg?alt=media&token=11b6f5d1-8636-45ad-8579-9c9b6eb0e612",
        viewer: "102k",
      },
      {
        name: "Age of Empires",
        image:
          "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/game12.jpg?alt=media&token=1aa597a3-3f5b-44bb-b363-2cff64439eaf",
        viewer: "5.4k",
      },
    ],
  },
});

export default category.reducer;
