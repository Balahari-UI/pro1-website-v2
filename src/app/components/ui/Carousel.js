"use client";
import { useState, useEffect, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({
  items = [],
  itemsPerSlideDesktop = 3,
  itemsPerSlideMobile = 1,
  autoPlay = true,
  interval = 5000,
  showSideButtons = true,
  showIndicators = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(itemsPerSlideDesktop);

  // ✅ Responsive items per slide
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(itemsPerSlideMobile);
      } else {
        setItemsPerSlide(itemsPerSlideDesktop);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, [itemsPerSlideDesktop, itemsPerSlideMobile]);

  // ✅ Generate slides (memoized)
  const slides = useMemo(() => {
    const result = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      result.push(items.slice(i, i + itemsPerSlide));
    }
    return result;
  }, [items, itemsPerSlide]);

  // ✅ Auto slide
  useEffect(() => {
    if (!autoPlay || slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlay, interval]);

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const goToNext = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full max-w-7xl mx-auto relative overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="min-w-full flex gap-6 justify-center px-4"
          >
            {slide.map((item, j) => (
              <div
                key={j}
                className={
                  item.parentClass ||
                  "flex-1 border border-[#E5E5E5] bg-white rounded-2xl p-8 text-center hover:shadow-md transition"
                }
              >
                {/* ✅ If nested structure */}
                {Array.isArray(item.items) ? (
                  item.items.map((sub, k) => (
                    <div key={k} className={sub.wrapperClass}>
                      <h3 className={sub.titleClass}>{sub.title}</h3>
                      <p className={sub.descClass}>{sub.description}</p>
                    </div>
                  ))
                ) : (
                  /* ✅ Flat structure */
                  <>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Controls */}
      {showSideButtons && slides.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className=" flex justify-center  space-x-2 mt-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === idx ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
