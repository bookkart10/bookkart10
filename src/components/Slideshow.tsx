"use client"
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';


const slides = [
 
  {
    id: 1,
    image: "/banner1.png",
    caption: 'Slide 1',
  },
  {
    id: 2,
    image: "/banner3.png",
    caption: 'Slide 2',
  },
  {
    id: 3,
    image: "/banner2.png",
    caption: 'Slide 3',
  },
];

const Slideshow = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slideId: number) => {
    setActiveSlide(slideId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlideId = activeSlide === slides.length ? 1 : activeSlide + 1;
      setActiveSlide(nextSlideId);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="relative h-72">
      <div className="absolute inset-0 flex items-center justify-center">
        <img className="w-full h-full object-cover" src={slides[activeSlide-1].image} alt={slides[activeSlide-1].caption} />
      </div>
      <div className="absolute inset-x-0 bottom-0 mb-8 flex justify-center">
        {slides.map((slide) => (
          <button
            key={slide.id}
            className={classNames('mx-2 rounded-full h-4 w-4', {
              'bg-gray-800': slide.id === activeSlide,
              'bg-gray-400': slide.id !== activeSlide,
            })}
            onClick={() => handleSlideChange(slide.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;