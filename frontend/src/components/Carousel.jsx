import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Box } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Carousel = () => {
  return (
    <Box>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        style={{ width: "65vw", height: "auto", backgroundColor: "black" }}
      >
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/livestream.jpeg?alt=media&token=b263dcff-208c-48a7-bd48-edc549e5899b"
            alt="pine"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/Pinecone.jpeg?alt=media&token=a9f93a2b-3add-4188-a8f9-4e4e29a280de"
            alt="st"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/gaming.jpeg?alt=media&token=6f37c49e-8e69-4d3a-aa50-4d16338711f3"
            alt="st"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
