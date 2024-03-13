import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import image1 from "../../assets/images/example1.jpeg";
import image2 from "../../assets/images/example2.jpeg";
import image3 from "../../assets/images/example3.jpeg";
import image4 from "../../assets/images/example4.jpeg";
import image5 from "../../assets/images/example5.jpeg";

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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
          className="object-fill h-48 w-60 carousel-image"
          style={{ margin : "10px", borderRadius: "15px",marginLeft:"10px"  }}
        />
      </div>
      <div>
        <img
          src= {image2}
          alt="image 2"
          className="object-fill h-48 w-96 carousel-image"
          style={{marginLeft:"10px" , margin : "10px",borderRadius: "15px"}}
        />
      </div>
      <div>
        <img
          src={image3}
          alt="image 3"
          className="h-48 w-96 object-cover carousel-image"
          style={{  marginLeft:"10px" , margin : "10px",borderRadius: "15px"}}
        />
      </div>
      <div>
        <img
          src={image4}
          className="h-48 w-96 object-cover carousel-image"
          style={{marginLeft:"10px" , margin : "10px",borderRadius: "15px"  }}
        />
      </div>
      <div>
        <img
          src={image5}
          alt="image 3"
          className="h-48 w-41 object-cover carousel-image"
          style={{ marginLeft:"10px" , margin : "10px",borderRadius: "15px"}}
        />
      </div>
    </Slider>
    </div>
  );
}

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
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
