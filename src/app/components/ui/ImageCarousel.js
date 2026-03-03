"use client";
import { useState, useEffect } from "react";

export default function ImageCarousel({
  images = [],
  autoPlay = true,
  interval = 4000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images, autoPlay, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1,
              )
            }
            className={`absolute top-1/2 left-3 -translate-y-1/2       
                 text-white text-2xl font-bold 
                 w-10 h-10 rounded-full 
                 flex items-center justify-center
                 transition duration-300`}
          >
            &lt;
          </button>

          {/* Right Arrow */}
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1,
              )
            }
            className={`absolute top-1/2 right-3 -translate-y-1/2 
                 text-white text-2xl font-bold 
                 w-10 h-10 rounded-full 
                 flex items-center justify-center
                 transition duration-300`}
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
}
