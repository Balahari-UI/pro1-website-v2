"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Tabs({ tabs, onChange, initialIndex = 0 }) {
  const [activeTab, setActiveTab] = useState(initialIndex);

  useEffect(() => {
    setActiveTab(initialIndex);
  }, [initialIndex]);

  const handleClick = (index) => {
    setActiveTab(index);
    if (onChange) onChange(index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm md:text-base mt-10">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => handleClick(index)}
          className={clsx(
            "text-left cursor-pointer group",
            activeTab === index ? "text-secondary font-semibold" : "text-gray",
          )}
        >
          <div className="relative pb-2 w-fit">
            <p
              className={clsx(
                "text-lg leading-snug pt-2 transition-colors duration-300",
                activeTab === index
                  ? "text-secondary font-semibold"
                  : "text-gray",
              )}
            >
              {tab.title.split(" ").slice(0, 2).join(" ")} <br />
              {tab.title.split(" ").slice(2).join(" ")}
            </p>

            <span
              className={clsx(
                "absolute left-0 bottom-0 h-[3px] w-full bg-secondary transform transition-transform duration-500 origin-left rounded-3xl",
                activeTab === index
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100",
              )}
            ></span>
          </div>
        </button>
      ))}
    </div>
  );
}
