import ContactForm from "@/app/components/ContactForm";
import Carousel from "@/app/components/ui/Carousel";
import HeroSection from "@/app/components/ui/HeroSection";
import {
  features,
  riskCards,
  riskcodingCards,
  riskfeatures,
} from "@/app/data/home";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function riskadjustment() {
  return (
    <>
      <div className=" ">
        {/* hero */}

        <HeroSection
          title=" Risk Adjustment Coding"
          description=" Pro1Health specializes in providing top-tier risk adjustment
              coding solutions tailored to the unique needs of healthcare
              providers. Our services are designed to ensure accuracy,
              compliance, and optimized revenue for our clients."
          image="/images/risk/riskbg.svg"
          buttonText="Connect With US"
          buttonLink="#Service-form3"
        />
        {/* card section  */}
        <section className="mb-16">
          <div className="space-y-12">
            {riskCards.map((card, index) => (
              <section
                key={index}
                className={`w-[90%] mx-auto
        bg-white border border-[#E6E6E6]
        rounded-2xl
        p-6 md:p-10
        flex flex-col lg:flex-row
        items-center gap-12
        transition-all duration-300
        ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* TEXT SIDE — 65% */}
                <div className="w-full lg:w-[65%] text-cetacean-blue">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
                    {card.title}
                  </h2>

                  <p className="text-lg leading-[1.7] mb-8">
                    {card.description1}
                  </p>

                  {/* SERVICES */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      {card.subheading1}
                    </h3>

                    <ul className="space-y-4">
                      {card.services.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[16px] leading-[1.6]"
                        >
                          <Image
                            src="/images/rcm/services-tick.svg"
                            alt="tick"
                            width={30}
                            height={30}
                            className="h-10"
                          />
                          <span className="mt-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* OUTCOME SECTION */}
                  {card.description2 && (
                    <div className="mt-8 bg-[#F4F4F4] rounded-xl p-5">
                      <span className="text-lg font-semibold">Outcome :</span>
                      <span className="text-gray-600 ms-1">
                        {card.description2}
                      </span>
                    </div>
                  )}
                </div>

                {/* IMAGE SIDE — 35% */}
                <div className="w-full lg:w-[35%] hidden lg:block">
                  <div className="relative w-full h-[380px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="">
          <div className="bg-[#F8F9FA] pb-10 mb-10">
            <h1 className="text-lg md:text-4xl font-semibold text-center py-10">
              Deliver Excellence in Risk Adjustment Coding
            </h1>
            <div className="max-w-7xl mx-auto px-6 py-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-10">
                {riskcodingCards.map((card, index) => (
                  <div
                    key={index}
                    className={` border border-[#E5E5E5] rounded-xl p-6 lg:p-8 flex flex-col gap-4 hover:shadow-lg transition duration-300 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}  `}
                  >
                    <div className="w-14 h-14">
                      <img
                        src={card.logo}
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <h1 className="text-lg font-semibold">
                      {String(index + 1).padStart(2, "0")}. {card.title}
                    </h1>

                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-350 mx-auto ">
            <h1 className=" text-3xl md:text-4xl text-center py-5">Benefits</h1>
            <p className="text-lg text-center">
              Partnering with ProHealth for your risk adjustment coding brings
              numerous advantages
            </p>
            <div className="py-10">
              <Carousel
                items={riskfeatures}
                itemsPerSlideDesktop={3}
                itemsPerSlideMobile={1}
                autoPlay={true}
                interval={7000}
                showSideButtons={false}
              />
            </div>
          </div>
        </section>
        {/* form */}
        <section className="bg-light py-12" id="Service-form3">
          <div className="mx-auto w-[90%]">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="lg:w-1/2 text-cetacean-blue flex flex-col justify-center h-full">
                {/* <h6 className="text-base font-medium tracking-wide  ">
                  CONNECT WITH US
                </h6> */}
                <h1 className="lg:text-4xl text-3xl md:text-5xl font-extrabold  mt-2 py-3">
                  Drive accuracy, Improve risk scores
                </h1>
                <p className="text-base mt-4 max-w-2xl ">
                  Partner with us for precise, compliant coding that supports
                  better risk adjustment outcomes.
                </p>
              </div>

              <div className="lg:w-1/2 w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <ContactForm formName="Service Form" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
