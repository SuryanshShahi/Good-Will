const usehappening = () => {
  var settings = {
    slidesToShow: 3,
    swipeToSlide: true,
    infinite: false,
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
