import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebaseApp from '../corousal/firebase'; // Adjust the path as per your file structure
import './style.css';

function CarouselDefault() {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const carouselRef = ref(database, 'carousel');

    const fetchData = () => {
      onValue(carouselRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setCarouselData(Object.values(data)); // Convert object to array
        } else {
          setCarouselData([]);
        }
      });
    };

    fetchData();

    return () => {
      // Clean up the event listener when component unmounts
      off(carouselRef);
    };
  }, []);

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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={`image ${index + 1}`} className='object-fill h- w-60 carousel-image' style={{ marginLeft: '10px', margin: '10px 10px -40px', borderRadius: '15px' }} />
            <a href=''>
              <p style={{ borderRadius: '15px', marginTop: '-25px', marginLeft: '20px', marginBottom: '10px', width: '200px', position: 'absolute' }} className='text-center text-primary font-bold text-md cursor-pointer bg-gray-200 p-1 '>
                {item.model}
              </p>
            </a>
          </div>
        ))}
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
        display: 'd-block',
        position: 'absolute',
        top: '50%',
        right: '40px',
        transform: 'translateY(-50%)',
        zIndex: '1',
        padding: '20px',
        borderRadius: '50%',
        cursor: 'pointer',
        color: 'black', // Set button color to black
        backgroundColor: 'transparent', // Make the background transparent
        // border: '2px solid black', // Add border for better visibility
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
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '40px',
        transform: 'translateY(-50%)',
        zIndex: '1',
        padding: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        color: 'black', // Set button color to black
        backgroundColor: 'transparent', // Make the background transparent
        // border: '2px solid black', // Add border for better visibility
      }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

export default CarouselDefault;
