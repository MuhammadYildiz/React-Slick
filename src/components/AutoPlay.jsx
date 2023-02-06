import React from "react";
import Images from "./Images";
import Slider from "react-slick";
export default function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        {Images.map((image) => (
          <div
            key={image.id}
            className="bg-cyan-400 flex justify-center items-center mt-14 mb-3 sm:mb-10 border-x-[5px] border-t-[5px] sm:border-x-[20px] sm:border-t-[20px]"
          >
            <h3 className="text-xl sm:text-3xl text-center mt-3">Responsive</h3>
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
