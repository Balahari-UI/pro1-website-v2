"use client";
import Image from "next/image";

export default function CapabilitiesSection({
  images,
  servicesTitle,
  services,
}) {
  return (
    <section className="py-10">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT IMAGE GRID */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`${index % 2 !== 0 ? "mt-10" : ""}`}
                >
                  <Image
                    src={img}
                    alt="Capability Image"
                    width={600}
                    height={600}
                    className="w-full h-[250px] lg:h-[450px] object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-cetacean-blue mb-6">
              {servicesTitle}
            </h1>

            <div className="space-y-6">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-5 rounded-xl "
                >
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image src={item.icon} alt="icon" width={50} height={50} />
                  </div>

                  <div>
                    <h6 className="text-lg lg:text-2xl font-medium text-cetacean-blue mb-1">
                      {item.title}
                    </h6>
                    <p className="text-lg text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
