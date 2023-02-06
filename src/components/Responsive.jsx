import React from "react";
import Images from "./Images";
import Slider from "react-slick";
export default function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {Images.map((image) => (
          <div
            key={image.id}
            className="bg-cyan-400 flex justify-center items-center mt-14 mb-3 sm:mb-10 border-x-[5px] border-t-[5px] sm:border-x-[20px] sm:border-t-[20px]"
          >
            <h3 className="text-xl sm:text-3xl text-center mt-3">
              Responsive
            </h3>
            <img
              src={image.src}
              alt=""
              className="w-[80%]  m-auto mt-5 h-[200px] sm:h-[300px]"
            />
            <div className="bg-white m-1 sm:m-5 p-3">
              <h3 className="text-sm sm:text-xl text-center  p-3">
                {image.title}
              </h3>
              <p>{image.text} </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
