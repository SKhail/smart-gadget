// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import "./style.css";
import image1 from "../../assets/images/example1.jpeg";
import image2 from "../../assets/images/example2.jpeg";
import image3 from "../../assets/images/example3.jpeg";
import image4 from "../../assets/images/example4.jpeg";
import image5 from "../../assets/images/example5.jpeg";




const firebaseConfig = {
  apiKey: "AIzaSyCL9xz44YkYgK53LC5cIKb6AHsQyJy9d3s",
  authDomain: "smartgadjet-e0ed3.firebaseapp.com",
  projectId: "smartgadjet-e0ed3",
  storageBucket: "smartgadjet-e0ed3.appspot.com",
  messagingSenderId: "243610321397",
  appId: "1:243610321397:web:aab8e94ff6a8a126bde0bc",
  measurementId: "G-RWYM8C1SKG"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export function CarouselDefault() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="slider-container">
    <Slider  {...settings}>
      <div >
        <img 
          src= {image1}
          alt="image 1"
          className="object-fill h- w-60 carousel-image"
          style={{ marginLeft:"10px" , margin : "10px 10px -40px" , borderRadius: "15px"}}
          />
           <a href=""><p style={{ borderRadius: "15px", marginTop: "-25px", marginLeft: "20px", marginBottom: "10px",width: "200px", position: "absolute"}} className="text-center text-primary font-bold text-md cursor-pointer bg-gray-200 p-1 ">View Details</p></a>
      <div>
          <a href=""> <p style={{marginBottom: "10px",height: "40px"}}></p></a>
          </div>
      </div>
      <div>
        <img
          src= {image2}
          alt="image 2"
          className="object-fill h-48 w-96 carousel-image"
          style={{ marginLeft:"10px" , margin : "10px 10px -40px" , borderRadius: "15px"}}
        />
        <a href=""><p style={{ borderRadius: "15px", marginLeft: "20px", marginBottom: "10px",width: "200px", position: "absolute"}} className="text-center text-primary font-bold text-md cursor-pointer bg-gray-200 p-1 ">View Details</p></a>
      </div>
      <div>
        <img
          src={image3}
          alt="image 3"
          className="h-48 w-96 object-cover carousel-image"
          style={{ marginLeft:"10px" , margin : "10px 10px -40px" , borderRadius: "15px"}}
          />
          <a href=""><p style={{ borderRadius: "15px", marginLeft: "20px", marginBottom: "10px",width: "200px", position: "absolute"}} className="text-center text-primary font-bold text-md cursor-pointer bg-gray-200 p-1 ">View Details</p></a>
      </div>
      <div>
        <img
          src={image4}
          className="h-48 w-96 object-cover carousel-image"
          style={{ marginLeft:"10px" , margin : "10px 10px -40px" , borderRadius: "15px"}}
          />
          <a href=""><p style={{ borderRadius: "15px", marginLeft: "20px", marginBottom: "10px",width: "200px", position: "absolute"}} className="text-center text-primary font-bold text-md cursor-pointer bg-gray-200 p-1 ">View Details</p></a>
      </div>
      <div>
        <img
          src={image5}
          alt="image 3"
          className="h-48 w-41 object-cover carousel-image"
          style={{ marginLeft:"10px" , margin : "10px 10px -40px" , borderRadius: "15px"}}
        />
        <a href=""><p style={{ borderRadius: "15px", marginLeft: "20px", marginBottom: "10px",width: "200px", position: "absolute"}} className="text-center text-primary font-bold text-md cursor-pointer bg-gray-200 p-1 ">View Details</p></a>
      </div>
    </Slider>
    </div>
  );
}

// Custom Next Arrow Component
const NextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "d-block",
        position: "absolute",
        top: "50%",
        right: "40px",
        transform: "translateY(-50%)",
        zIndex: "1",
        padding: "20px",
        borderRadius: "50%",
        cursor: "pointer",
       
       
      }}
      onClick={onClick}
    >
      Next
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        left: "40px",
        transform: "translateY(-50%)",
        zIndex: "1",
        padding: "10px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

export default CarouselDefault;
