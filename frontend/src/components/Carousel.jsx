import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Box } from "@mui/material";
import Live from "../assets/images/Live.png";

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
        style={{ width: "60vw", height: "35vh", backgroundColor: "aqua" }}
      >
        <SwiperSlide>
          <img
            src="/_next/static/media/Pinecone.2a901883.jpeg"
            alt="pine"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/_next/static/media/Stream.994a7063.png"
            alt="st"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/_next/static/media/Live.ec2de115.png"
            alt="st"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;