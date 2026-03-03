import HeroSection from "../components/ui/HeroSection";
import ImageCarousel from "../components/ui/ImageCarousel";
import { globalPresence, globalPresence1 } from "../data/home";

export default function ContactUspage() {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        description="Healthcare is evolving rapidly, and precision matters more than ever. Our team of experienced medical coding professionals is here to help you stay compliant, efficient, and ahead of the curve. Reach out today to discuss how we can support your organization’s success."
        image="/images/contact-us/whomwebg.svg"
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold text-center mb-14">
          Global Presence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {globalPresence.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Image Section */}

              <div className="h-56 relative flex justify-center items-center">
                {location.images.length > 1 ? (
                  <ImageCarousel images={location.images} />
                ) : (
                  <img
                    src={location.images[0]}
                    alt={location.country}
                    className="w-60 mx-auto h-30 "
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  {location.country}
                </h3>

                <p className="mb-2">{location.company}</p>

                {location.address.map((line, index) => (
                  <p key={index} className="text-sm text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="my-10 flex justify-center items-center px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
            {globalPresence1.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                {/* Image Section */}

                <div className="h-56 relative flex justify-center items-center">
                  {location.images.length > 1 ? (
                    <ImageCarousel images={location.images} />
                  ) : (
                    <img
                      src={location.images[0]}
                      alt={location.country}
                      className="w-60 mx-auto h-30"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {location.country}
                  </h3>

                  <p className="mb-2">{location.company}</p>

                  {location.address.map((line, index) => (
                    <p key={index} className="text-sm text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
