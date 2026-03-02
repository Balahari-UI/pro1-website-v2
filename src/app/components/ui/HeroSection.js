"use client";

import Image from "next/image";

import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

export default function HeroSection({
  title,
  description,
  image,
  buttonText,
  buttonLink,
}) {
  return (
    <section className="py-[100px] min-h-[90vh] lg:py-[100px] max-lg:py-[80px] max-lg:pb-[40px] max-lg:min-h-auto max-lg:mt-5 ">
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.15] bg-[linear-gradient(94deg,#3e3df3,#ff007c)] bg-clip-text text-transparent ">
              {title}
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-[1.7] ">
              {description}
            </p>
            {buttonText && (
              <Link
                href={buttonLink || "#"}
                className="inline-flex items-center gap-2 mt-10 border border-gray-400 px-6 py-3 rounded-xl text-[#0B0E3F] hover:bg-[#272727] hover:text-white transition"
              >
                {buttonText} <FaArrowRight size={18} />
              </Link>
            )}
          </div>

          {/* RIGHT IMAGE */}

          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="relative">
              <Image
                src={image}
                alt="Get Started"
                width={600}
                height={700}
                className=" w-[520px] xl:w-[600px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
