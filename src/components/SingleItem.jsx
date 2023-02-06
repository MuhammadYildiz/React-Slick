import React from "react";
import Images from "./Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SingleItem() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {Images.map((image) => (
          <div
            key={image.id}
            className="bg-cyan-400 flex justify-center items-center mb-3 sm:mb-10 border-x-[10px] border-t-[10px] sm:border-x-[20px] sm:border-t-[20px]"
          >
            <h3 className="text-3xl text-center mt-3">Single Item</h3>
            <img
              src={image.src}
              alt=""
              className="w-[80%]  m-auto mt-5 h-[300px] sm:h-[400px]"
            />
            <div className="bg-white m-10 p-5">
              <h3 className="text-3xl text-center  p-5">{image.title}</h3>
              <p>{image.text} </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
