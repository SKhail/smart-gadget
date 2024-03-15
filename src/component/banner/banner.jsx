import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";

import "./banner.css";

function Banner() {
  return (
    <div className="carousel-container relative overflow-hidden">
      <Carousel>
        <img
          src="https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/5VYFQwxthpmehrmh4riGTC/1165bfb6dfc5bca0cf0eea6c145b2a86/GENERIC_HPBANNERS_iPhone13_Desktop_UK.jpeg"
          alt="image 1"
          className="h-250 w-full object-cover"
        />
        <img
          src="https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/3Xpl0rtrXbBRIZDONnbeNm/8b75543ce78171c6ea538b8804dc7195/GENERIC_HPBANNERS_iPad2021_Desktop_UK.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/7KNLXyQymHYYkmyLiDbbwN/b4a2d7a9ddb37e38b45d11fd9a070f0a/TRADEIN_HP_GENERICBANNERS_DESKTOP_1_UK.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/6ELnRuNVrOJPWU4LZmrQj2/b44ee518b578c85152d1d86eae8e85ac/SAMSUNG-S24-LAUNCH_HPBANNERS_DESKTOP_withCTA.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}

export default Banner;
