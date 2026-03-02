"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function StickyScrollSection({
  title,
  description,
  items,
  topOffset = "top-28",
}) {
  return (
    <section className="py-24">
      <div className="mx-auto w-[90%]">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7">
            <div className={`sticky ${topOffset}`}>
              <h2 className="text-4xl sm:text-5xl font-semibold text-cetacean-blue mb-6">
                {title}
              </h2>
              <p className="text-lg text-cetacean-blue max-w-5xl leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5">
            {items.map((item, index) => (
              <div
                key={index}
                className="sticky top-28 mb-6"
                style={{ zIndex: index + 1 }}
              >
                <div className="rounded-2xl bg-[#d9d9d9] pt-6 px-4 pb-4">
                  <h2 className="text-2xl font-medium text-cetacean-blue flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    {item.title}
                  </h2>

                  <div className="mt-4 rounded-xl bg-white p-5 shadow-sm">
                    <p className="text-gray-700 leading-relaxed text-[18px] mb-5">
                      {item.text}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 border border-gray-400 px-6 py-3 rounded-xl text-[#0B0E3F] hover:bg-[#272727] hover:text-white transition"
                      >
                        Know More <FaArrowRight size={18} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
