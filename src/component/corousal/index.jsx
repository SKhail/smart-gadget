import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import item1 from '../../component/images/whitelogo.png';
// import item2 from './component/images/whitelogo.png'; 
// import item3 from './component/images/whitelogo.png'; 
// import item4 from './component/images/whitelogo.png'; 
// import item1 from './component/images/whitelogo.png'; 


const MyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive}>
      <div>
        <img src={item1} alt="Item 1" />
      </div>
      <div>
        <img src={item1} alt="Item 2" />
      </div>
      <div>
        <img src={item1} alt="Item 3" />
      </div>
      <div>
        <img src={item1} alt="Item 4" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
