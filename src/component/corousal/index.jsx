import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import item1 from '../../component/images/whitelogo.png'; 

const MyCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding--px"
    >
      <div>
        <img src={item1} alt="Item 1" /> {/* Use item1 as the image source */}
      </div>
      <div>
        <img src={item1} alt="Item 2" /> {/* Use item1 as the image source */}
      </div>
      <div>
        <img src={item1} alt="Item 3" /> {/* Use item1 as the image source */}
      </div>
      <div>
        <img src={item1} alt="Item 4" /> {/* Use item1 as the image source */}
      </div>
    </Carousel>
  );
};

export default MyCarousel;
