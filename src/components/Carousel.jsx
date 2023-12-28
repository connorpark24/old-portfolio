import React, { useState } from 'react';

const Slide = ({ content }) => (
  <div className="w-[600px] h-[400px] rounded-3xl border-primary border-4 flex flex-col" style={{ animation: 'slideIn 0.5s ease' }}>
    <div className="h-2/3 bg-red-400">
      <p>Hello</p>
    </div>
    <div className="h-1/3 p-4">
      <p className="text-4xl">{content}</p>
      <p className="text-lg">Project Description</p>
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
