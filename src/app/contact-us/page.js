import HeroSection from "../components/ui/HeroSection";
import ImageCarousel from "../components/ui/ImageCarousel";
import { globalPresence, globalPresence1 } from "../data/home";
import ContactForm from "../components/ContactForm";

export default function ContactUspage() {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        description="Healthcare is evolving rapidly, and precision matters more than ever. Our team of experienced medical coding professionals is here to help you stay compliant, efficient, and ahead of the curve. Reach out today to discuss how we can support your organization’s success."
        image="/images/contact-us/whomwebg.svg"
      />

      {/* Global Presence Section */}
      <section className="w-[90%] mx-auto px-6 pb-10">
        <h2 className="text-4xl font-semibold text-center mb-14">
          Global Presence
        </h2>

        {/* First Grid */}
        {/* <div className="row gap-10"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {globalPresence.map((location, index) => (
            <div
              key={location.id}
              className={`bg-white rounded-md shadow-lg overflow-hidden
        ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
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

              <div className="p-6">
                <h3 className="font-semibold text-cetacean-blue text-lg mb-2">
                  {location.country}
                </h3>

                <p className="mb-2 text-sm text-gray-400">
                  {location.company}
                </p>

                {location.address.map((line, i) => (
                  <p key={i} className="text-cetacean-blue">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Second Grid */}
        {/* <div className="my-16 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
            {globalPresence1.map((location) => (
              <div
                key={location.id}
                className="col-12 col-md-6 col-lg-3 bg-white rounded-md shadow-lg overflow-hidden"
              >
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

                <div className="p-6">
                  <h3 className="font-semibold text-cetacean-blue text-lg mb-2">
                    {location.country}
                  </h3>

                  <p className="mb-2 font-[14px] text-gray-400">
                    {location.company}
                  </p>

                  {location.address.map((line, index) => (
                    <p key={index} className="text-cetacean-blue ">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* Get in Touch Section */}
      <section className="bg-light py-20">
        <div className="mx-auto px-6 lg:px-20 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="lg:w-1/2 text-cetacean-blue flex flex-col justify-center">
              <h1 className="lg:text-4xl text-3xl md:text-5xl font-extrabold mb-4">
                Get in Touch
              </h1>
              <p className="text-base mb-2">
                Whether you’re interested in easing your administrative burdens,
                or looking for innovative analytics solutions to improve your
                bottom line, PRO1 Health can help.
              </p>
            </div>

            <div className="rounded-[28px] lg:w-1/2 w-full border border-white/40 bg-white p-5 shadow-[0_24px_80px_rgba(41,23,84,0.18)] sm:p-8">
              <ContactForm formName="Service request from Contact Us" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


