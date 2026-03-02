"use client";

export default function ApproachTimelineSection({
  titleLine1,
  titleLine2,
  items,
}) {
  return (
    <section className="py-10">
      <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-cetacean-blue text-left md:text-center">
          <span className="inline lg:block lg:mb-2">{titleLine1} </span>
          <span className="inline lg:block">{titleLine2}</span>
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative w-full max-w-[600px] px-5">
          {items.map((item, index) => (
            <div key={index} className="relative my-7">
              {/* Connector Line */}
              {index !== items.length - 1 && (
                <span className="absolute left-1/2 -translate-x-1/2 top-full w-[4px] h-8 bg-[#d9d9d9]"></span>
              )}

              {/* Card */}
              <div className="border border-[#b3b3ff] rounded-xl p-6 text-left md:text-center bg-white">
                <h6 className="text-xl lg:text-2xl font-medium text-cetacean-blue mb-2">
                  {item.title}
                </h6>
                <p className="text-lg text-cetacean-blue">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
