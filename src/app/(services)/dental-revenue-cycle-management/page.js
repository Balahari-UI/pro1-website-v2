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
        />
        {/* card section  */}
        <section className="mt-20 mb-10">
          <div className="space-y-10">
            {drcmCards.map((card, index) => (
              <section
                key={index}
                className={`max-w-350 mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 border border-[#E5E5E5] rounded-xl p-5
                ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* TEXT SIDE */}
                <div className="  flex-3">
                  <h2 className="text-4xl font-bold mb-5">{card.title}</h2>

                  <p className="text-gray-600 text-lg mb-2">
                    {card.description1}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* SERVICES */}
                    <div>
                      <h3 className="font-semibold text-lg  mb-3">
                        {card.subheading1}
                      </h3>
                      <ul className="space-y-2">
                        {card.services.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start ">
                            <Image
                              src="/images/rcm/services-tick.svg"
                              alt="rcm"
                              width={30}
                              height={0}
                            />{" "}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* BENEFITS */}
                    <div>
                      <h3 className="font-semibold text-lg  mb-3">
                        {card.subheading2}
                      </h3>
                      <ul className="space-y-2">
                        {card.benefits.map((item, i) =>
                          item ? (
                            <li key={i} className="flex gap-2 items-start ">
                              <Image
                                src="/images/rcm/services-tick.svg"
                                alt="rcm"
                                width={30}
                                height={0}
                              />{" "}
                              {item}
                            </li>
                          ) : null,
                        )}
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-600 my-2">{card.description2}</p>
                </div>

                {/* IMAGE SIDE */}
                <div className="flex-1 w-full hidden lg:block">
                  <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[300px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>
        {/* form */}
        <section className="bg-light py-12">
          <div className="mx-auto px-20 lg:px-40">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="lg:w-1/2 text-cetacean-blue flex flex-col justify-center h-full">
                <h6 className="text-base font-medium tracking-wide ">
                  CONNECT WITH US
                </h6>
                <h1 className="lg:text-4xl text-3xl md:text-5xl font-extrabold mt-2 py-3">
                  Simplify collections, Maximize dental revenue
                </h1>
                <p className="text-base mt-4 max-w-2xl">
                  End-to-end dental RCM support to streamline billing, reduce
                  denials, and accelerate payments.
                </p>
              </div>

              <div className="rounded-[28px] lg:w-1/2  w-full border border-white/40 bg-white p-5 shadow-[0_24px_80px_rgba(41,23,84,0.18)] sm:p-8">
                <ContactForm formName="Service request from Dental RCM" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
