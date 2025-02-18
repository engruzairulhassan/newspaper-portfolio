"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { recommendedData } from "../utils/const";

const RecommendedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    startAutoMove();
    return () => stopAutoMove();
  }, []);

  const startAutoMove = () => {
    stopAutoMove();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoMove = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recommendedData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recommendedData.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const diff = e.clientX - startXRef.current;
    if (diff > 50) {
      stopAutoMove();
      prevSlide();
      isDraggingRef.current = false;
    } else if (diff < -50) {
      stopAutoMove();
      nextSlide();
      isDraggingRef.current = false;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="relative  mx-auto mt-8 text-black border-t border-gray-400">
      <h2 className="font-bold uppercase flex justify-between items-center text-[13px] pt-8">
        <span>Recommended</span>
        <div>
          <button
            onClick={prevSlide}
            className="text-[14px] text-lg font-bold cursor-pointer hover:text-gray-600 mx-2"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="text-[14px] text-lg font-bold cursor-pointer hover:text-gray-600"
          >
            &gt;
          </button>
        </div>
      </h2>
      <div className="flex items-center justify-between mt-2">
        <div
          className="w-full overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {recommendedData.map((item, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center"
              >
                <Image
                  src={item.image}
                  alt="Classroom Scene"
                  objectFit="cover"
                  width={300} 
                  height={200}
                  className="w-[200px] md:w-[900px] sm:w-[900px] sm:w-[900px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-grab"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                />

                <div className="flex justify-end">
                  <p className="text-sm font-medium mt-2 text-left w-full">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCarousel;

