"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function Carouselrun({
  items = [],
  type = "image",
  speed = 60,
  gap = "gap-16",
  className = "",
  autoplay = true,
  interval = 4500,
  imageHeight = "",
  showDots = true,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (type !== "slide" || !autoplay || items.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, items.length, type]);

  if (type === "slide") {
    return (
      <div className={`relative mx-auto w-full max-w-5xl ${className}`}>
        <div className="relative overflow-hidden rounded-3xl md:rounded-[40px]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-full shrink-0">
                {typeof item === "string" ? (
                  <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[470px] w-full">
                    <Image
                      src={item}
                      alt={`Slide ${index + 1}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <>
                    <div className="relative h-[220px] w-full">
                      <Image
                        src={item.image}
                        alt={item.title || `Slide ${index + 1}`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="px-5 py-5">
                      <h3 className="text-[30px] font-semibold leading-[1.05] tracking-tight text-[#121218]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.45] text-[#66666d]">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Side Arrows (Hidden on Mobile) */}
          {items.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveIndex(
                    (prev) => (prev - 1 + items.length) % items.length,
                  )
                }
                className={`hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2
          w-9 h-9 lg:w-12 lg:h-12 items-center justify-center
          rounded-full bg-[#CCCCCC] shadow-sm hover:bg-[#DADADA] transition`}
              >
                <IoIosArrowBack size={18} color="#fff" />
              </button>

              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % items.length)
                }
                className={`hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2
          w-9 h-9 lg:w-12 lg:h-12 items-center justify-center
          rounded-full bg-[#CCCCCC] shadow-sm hover:bg-[#DADADA] transition`}
              >
                <IoIosArrowForward size={18} color="#fff" />
              </button>
            </>
          )}

          {/* Dots */}
          {showDots && items.length > 1 && (
            <div
              className={`absolute bottom-4 md:bottom-16 left-1/2 -translate-x-1/2
        flex items-center gap-2 md:gap-3
        px-3 py-2 md:px-4 md:py-3
        rounded-full bg-[#CCCCCC] shadow-sm`}
            >
              {items.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setActiveIndex(dotIndex)}
                  className="h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      activeIndex === dotIndex ? "#FFFFFF" : "#E6E6E6",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Repeat 3 times for safe infinite loop
  // const repeated = Array(8)
  //   .fill(0)
  //   .flatMap((_, repeatIndex) =>
  //     items.map((item, index) => (
  //       <div key={`${repeatIndex}-${index}`} className="shrink-0">
  //         {renderItem(item, type, imageHeight)}
  //       </div>
  //     )),
  //   );
  const repeated = [...items, ...items].map((item, index) => (
    <div key={index} className="shrink-0">
      {renderItem(item, type, imageHeight)}
    </div>
  ));

  return (
    <div className={`relative w-full overflow-hidden group ${className}`}>
      <div
        className={`flex ${gap} w-max animate-marquee`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeated}
      </div>
    </div>
  );
}

function renderItem(item, type, imageHeight) {
  switch (type) {
    // case "icon":
    // return (
    //   <Image
    //     src={item}
    //     alt=""
    //     className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition"
    //   />
    //   );

    // case "image":
    //   return (
    //     <Image
    //       src={item}
    //       alt=""
    //       width={240}
    //       height={80}
    //       className={`${imageHeight} w-auto object-contain transition`}
    //     />
    //   );
case "image":
  return (
    <div
      className="
        w-[190px] h-[80px]
        flex items-center justify-center
        flex-shrink-0
        rounded-[15px]
        bg-[#f8f9fa]
        p-[10px]
      "
    >
      <Image
        src={item}
        alt=""
        width={160}
        height={60}
        className="w-full h-full object-contain"
      />
    </div>
  );

    case "media":
      return (
        <div className={`  ${imageHeight}  flex items-center justify-center`}>
          {item.type === "video" ? (
            <video
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-[40px]"
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={item.src}
                alt=""
                fill
                sizes="320px"
                className="object-cover rounded-[40px]"
              />
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
}
