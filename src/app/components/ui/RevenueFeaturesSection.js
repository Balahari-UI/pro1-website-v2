"use client";

export default function RevenueFeaturesSection({
  title,
  description,
  features,
}) {
  return (
    <section className="py-6">
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* LEFT SIDE (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <h2 className="text-3xl lg:text-4xl font-semibold text-cetacean-blue mb-4">
                {title}
              </h2>

              <p className="text-base lg:text-lg text-cetacean-blue leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (Cards) */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <h6 className="text-[24px] font-medium text-cetacean-blue mb-2">
                  {item.title}
                </h6>
                <p className="text-base text-cetacean-blue">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
