import React from "react";

const usehappening = () => {
  var settings = {
    slidesToShow: 3,
    swipeToSlide: true,
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return { settings };
};

export default usehappening;
