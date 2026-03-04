import ContactForm from "@/app/components/ContactForm";
import HeroSection from "@/app/components/ui/HeroSection";
import { drcmCards } from "@/app/data/home";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function dentalrevenue() {
  return (
    <>
      <div className=" px-2 lg:px-0">
        {/* hero */}

        <HeroSection
          title="Dental Revenue Cycle Management"
          description="At Pro1 Health, we specialize in end-to-end Dental RCM services
              that enable dental practices to maximize collections, streamline
              operations, and reduce write-offs. From verifying eligibility to
              denial management and reporting, we ensure every claim is
              accurate, compliant, and paid faster, Here’s a breakdown of our
              core Dental RCM services."
          image="/images/drcm/drcmbg.svg"
          buttonText="Connect With US"
          buttonLink="#Service-form2"
        />
        {/* card section  */}
        <section className="mb-10">
          <div className="space-y-10">
            {drcmCards.map((card, index) => (
              <section
                key={index}
                className={` w-[90%] mx-auto bg-white border border-[#E6E6E6] rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center gap-12  transition-all duration-300 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} `}
              >
                {/* TEXT SIDE */}
                <div className="w-full lg:w-[65%] text-cetacean-blue">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
                    {card.title}
                  </h2>

                  <p className="text-lg font-normal leading-[1.7]  mb-4">
                    {card.description1}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* SERVICES */}
                    <div>
                      <h3 className="text-2xl  font-semibold mb-4">
                        {card.subheading1}
                      </h3>
                      <ul className="space-y-3">
                        {card.services.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-[16px] font-normal"
                          >
                            <Image
                              src="/images/rcm/services-tick.svg"
                              alt="rcm"
                              width={30}
                              height={30}
                              className="h-10"
                            />
                            <span className="mt-2">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* BENEFITS */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">
                        {card.subheading2}
                      </h3>

                      <ul className="space-y-3">
                        {card.benefits.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-[16px] font-normal leading-[1.6]"
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
                  </div>
                  <p className="text-gray-600 my-2">{card.description2}</p>
                </div>

                {/* IMAGE SIDE */}
                <div className="w-full lg:w-[35%] hidden lg:block">
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>
        {/* form */}
        <section className="bg-light py-12" id="Service-form2">
          <div className="mx-auto w-[90%]">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="lg:w-1/2 text-cetacean-blue flex flex-col justify-center h-full">
                <h1 className="lg:text-4xl text-3xl md:text-5xl font-extrabold mt-2 py-3">
                  Simplify collections, Maximize dental revenue
                </h1>
                <p className="text-base mt-4 max-w-2xl">
                  End-to-end dental RCM support to streamline billing, reduce
                  denials, and accelerate payments.
                </p>
              </div>

              <div className="lg:w-1/2 w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <ContactForm formName="Service request from Dental RCM" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
