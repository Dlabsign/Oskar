import React, { useEffect, useState } from "react";
import { BtnComponent } from "./Button";

const images = [
  "https://cdn.dribbble.com/userupload/4447934/file/original-89318b888e43ee91c880dd27cefa3f23.jpg?resize=600x450",
  "https://cdn.dribbble.com/userupload/9181051/file/original-78fd2a0fcfa2fdc1f1405dbb402be511.png?resize=752x564",
];

const UpdateBanner = () => {
  
  return (
    <div className="updt-container  rounded-lg w-full flex justify-between p-8">
      <div className="updt-left w-2/5 brder flex flex-col justify-between items-end">
        <div className="updt-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png" />
        </div>
        <div className="title w-full text-white flex flex-col justify-between items-end">
          <h2 className="font-bold text-5xl text-end">
            2023 Best <br /> of the best
          </h2>
          <div className="slider-btn flex justify-between">
            <button className="line "></button>
            <button className="line "></button>
            <button className="line "></button>
          </div>
          <div className="paragraph flex justify-end items-center">
            <p className="text-white font-medium text-opacity-80 text-base text-end mr-3">
              Cluep - 3D Brand Illustration 2
            </p>
            <i className="fa-solid fa-trophy rounded-full" />
          </div>
          <BtnComponent btnP="LEARN MORE" />
        </div>
      </div>
      <div className="updt-right border-4">
        <AutoImageSlider images={images} />
      </div>
    </div>
  );
};

export default UpdateBanner;



const AutoImageSlider = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % props.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [props.images]);

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${counter * 33.333}%)` }}
      >
        {props.images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
