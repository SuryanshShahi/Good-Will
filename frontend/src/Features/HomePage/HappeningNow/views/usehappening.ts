const usehappening = () => {
  var settings = {
    slidesToShow: 3,
    // infinite: true,
    // autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 1000, //start delay in  milleSecs
    // cssEase: "linear",
    // pauseOnHover: false,
    arrows: true,
    swipeToSlide: true,
    infinite: false,
    dots: true,
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
          slidesToShow: 2.45,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return { settings };
};

export default usehappening;
