import React, { useState } from "react";
import Slider from "react-slick";
import food1 from "../../assets/Party/food1.png";
import food2 from "../../assets/Party/food2.png";
import food3 from "../../assets/Party/food3.png";
import food4 from "../../assets/Party/food4.png";
import food5 from "../../assets/Party/food5.png";
import food6 from "../../assets/Party/food6.png";
import food7 from "../../assets/Party/food7.png";
import food8 from "../../assets/Party/food8.png";
import food9 from "../../assets/Party/food9.png";
import food10 from "../../assets/Party/food10.png";
import food11 from "../../assets/Party/food11.png";
import food12 from "../../assets/Party/food12.png";
import food13 from "../../assets/Party/food13.png";
import food14 from "../../assets/Party/food14.png";
import food15 from "../../assets/Party/food15.png";

const GalleryWithState = () => {
  // State to manage the zoomed image
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(0);

  const images = [
   food1,food2,food3,food4,food5,food6,food7,food8,food9,food10,food11,food12,food13,food14,food15
  ];

  const settings = {
    slidesToShow: 3, // Show 3 images at once
    slidesToScroll: 1, // Scroll one image at a time
    draggable: true, // Enable mouse dragging
    centerMode: true, // Centers the active image
    focusOnSelect: true, // Makes image clickable to zoom
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2, // Show 2 images at once
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 image at a time
        },
      },
    ],
  };

  // Handle Zoom
  const handleZoom = (index) => {
    setZoomedIndex(index);
    setIsZoomed(true);
  };

  // Handle Zoom Navigation
  const handleNextZoom = () => {
    setZoomedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevZoom = () => {
    setZoomedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-[#f1f1f1] py-12 mt-10">
      <div className="container mx-auto max-w-7xl px-5">
        <h1 className="text-3xl font-bold mb-8 text-center"> Gallery</h1>

        {/* Image Slider */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="px-8" // Add padding to create spacing between slides
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-64 rounded-md object-cover cursor-pointer"
                onClick={() => handleZoom(index)}
              />
            </div>
          ))}
        </Slider>

        {/* Zoomed Image Modal */}
        {isZoomed && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded-lg"
              onClick={() => setIsZoomed(false)}
            >
              Close
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg"
              onClick={handlePrevZoom}
            >
              Prev
            </button>

            {/* Zoomed Image */}
            <div className="relative w-full sm:w-2/3 lg:w-1/2 max-h-1/2 flex justify-center items-center">
              <img
                src={images[zoomedIndex]}
                width="500px"
                alt={`Zoomed ${zoomedIndex}`}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Next Button */}
            <button
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg"
              onClick={handleNextZoom}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryWithState;