import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";

import "./banner.css";

function Banner() {
  return (
    <div className="carousel-container relative overflow-hidden">
      <Carousel autoplay={true} interval={1000}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2F1.png?alt=media&token=9fa16606-13b1-4a88-a630-dab31c66e3f5"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2F2.png?alt=media&token=e894fb21-e5b5-4ceb-bb41-3cfd4ca41e5f"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2F3.png?alt=media&token=f1cf4324-55c8-4224-9ac8-7ab721f04fbc"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2F4.png?alt=media&token=6a7ec9bb-b8e6-4ba2-b81c-6a7112b5aee5"
          alt="image 4"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}

export default Banner;
