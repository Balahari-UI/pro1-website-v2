// components/Carousel.js
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({
  items,
  itemsPerSlideDesktop = 3,
  itemsPerSlideMobile = 1,
  autoPlay = true,
  interval = 5000,
  showSideButtons = true,
  showIndicators = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(itemsPerSlideDesktop);

  // Generate slides dynamically
  const slides = [];
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    slides.push(items.slice(i, i + itemsPerSlide));
  }

  // Auto slide
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, autoPlay, interval]);

  // Responsive items per slide
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

  // Controls
  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full max-w-8xl mx-auto relative overflow-hidden rounded-lg">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="min-w-full flex justify-between gap-4 xl:p-28 "
          >
            {slide.map((item, j) => (
              <div
                key={j}
                className={item.parentClass} // ✅ parent card className
              >
                {item.items.map((sub, k) => (
                  <div
                    key={k}
                    className={sub.wrapperClass} // ✅ wrapper div className
                  >
                    <h3 className={sub.titleClass}>{sub.title}</h3>
                    <p className={sub.descClass}>{sub.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Controls */}
      {showSideButtons && (
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 cursor-pointer"
          aria-label="Previous Slide"
        >
          <span className="text-xl font-bold">
            <FaChevronLeft className="text-lg me-1" />
          </span>
        </button>
      )}

      {showSideButtons && (
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 cursor-pointer"
          aria-label="Next Slide"
        >
          <span className="text-xl font-bold">
            {" "}
            <FaChevronRight className="text-lg ms-1" />
          </span>
        </button>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2 ">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === idx ? "bg-light" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
