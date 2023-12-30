import React, { useState } from 'react';
import Carrent from "../assets/carrent.png"

const Slide = ({ content }) => (
  <div className="w-[600px] h-[400px] rounded-3xl border-primary border-4 flex flex-col" style={{ animation: 'slideIn 0.5s ease' }}>
    <div className="h-3/5 mx-auto my-auto">
      <img className="p-4 w-[360px] h-[260px]" src={Carrent}/>
    </div>
    <div className="h-2/5 p-4">
      <p className="text-3xl">{content}</p>
      <p className="text-md">React, Typescript, Node, Express, MongoDB, Redux, Spotify Web API</p>
    </div>
  </div>
);

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getNextSlideIndex = () => {
    return currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div className="flex flex-row gap-x-8 items-center space-around">
      <button className="text-8xl" onClick={goToPrevious}>{"<"}</button>
      <div className="flex overflow-x-auto lg:overflow-hidden  gap-x-8">
        <Slide content={slides[currentIndex]} />
        <Slide content={slides[getNextSlideIndex()]} />
      </div>
      <button className="text-8xl" onClick={goToNext}>{">"}</button>
    </div>
  );
};

export default Carousel
