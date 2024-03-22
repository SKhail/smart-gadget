import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDatabase, ref, onValue, off } from "firebase/database";
import firebaseApp from "../corousal/firebase"; // Adjust the path as per your file structure
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

function CarouselDefault({ darkMode }) {
  const [carouselData, setCarouselData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // To store the selected product for quick view
  const sliderRef = useRef(null);

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const carouselRef = ref(database, "carousel");

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

  // Add to Cart function
  const handleAddToCart = (productId) => {
    const selectedItem = carouselData.find((item) => item.key === productId);
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    localStorage.setItem(
      "cartItems",
      JSON.stringify([...cartItems, selectedItem])
    );
    console.log(`Added product with ID ${productId} to cart`);

    // Show toast notification when item is added to cart
    toast.success("Added to the cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Quick view functionality
  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className={` py-6 bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}>
    <div className={`slider-container w-10/12 mx-auto my-6 relative bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}>
      <ToastContainer />
      <Slider ref={sliderRef} {...settings}>
        {carouselData.map((item, index) => (
          <div key={index} className="carousel-item">
            <img
              src={item.image}
              alt={`image ${index + 1}`}
              className="object-cover h-40 w-40 carousel-image" 
              style={{ cursor: "pointer"   }} 
              onClick={() => openQuickView(item)} 
            />

            <p className="text-center text-white font-bold text-base bg-black py-1 px-2 rounded-lg shadow-lg border-2 border-primary inline-block">
              {item.model}
            </p>
          </div>
        ))}
      </Slider>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeQuickView}
          ></div>
          {/* Quick View Dialog */}
          <div className="relative w-full max-w-3xl p-4 mx-auto my-12">
            {/* Content */}
            <div className="relative bg-white rounded-lg shadow-xl flex flex-col lg:flex-row">
              {/* Close Button */}
              <button
                className="absolute top-0 right-0 m-4 text-gray-500  
                
                transition duration-300 hover:text-gray-700"
                onClick={closeQuickView}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="flex-none w-full lg:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.model}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* Product Details */}
              <div className="p-8 w-full lg:w-1/2">
                <h2 className="text-xl font-semibold mb-4">
                  {selectedProduct.model}
                </h2>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Description:</h3>
                  <ul className="list-disc list-inside">
                    {Object.entries(selectedProduct.description).map(
                      ([key, value]) => (
                        <li key={key} className="text-gray-700 text-baloo">
                          <span className="font-semibold">{key}:</span> {value}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <p className="text-gray-700 font-baloo font-semibold">
                  ${selectedProduct.price}
                </p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(selectedProduct.key)}
                  className="block w-full py-2 text-center bg-gradient-to-r from-blue-800 to-blue-500 text-white font-semibold rounded-md hover:bg-gray-700 mt-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Previous and Next Buttons */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-800 to-blue-500 text-white px-3 py-2 rounded-full z-10"
        onClick={goToPrevSlide}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-800 to-blue-500 text-white px-3 py-2 rounded-full z-10"
        onClick={goToNextSlide}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
    </div>
  );
}

export default CarouselDefault;
