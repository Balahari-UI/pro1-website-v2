"use client";

export default function StickyScrollSection({
  title,
  description,
  items,
  topOffset = "top-28",
}) {
  return (
    <section className="py-24">
      <div className="mx-auto w-[90%] max-w-[1500px]">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7">
            <div className={`sticky ${topOffset}`}>
              <h2 className="text-4xl sm:text-5xl font-semibold text-cetacean-blue mb-6">
                {title}
              </h2>
              <p className="text-lg text-cetacean-blue/80 max-w-xl leading-relaxed">
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
                <div className="rounded-2xl bg-gray-100 p-6 shadow-md">
                  <h5 className="text-xl font-semibold text-cetacean-blue flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    {item.title}
                  </h5>

                  <div className="mt-4 rounded-xl bg-white p-5 shadow-sm">
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
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
