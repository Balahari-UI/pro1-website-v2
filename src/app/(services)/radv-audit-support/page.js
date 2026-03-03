import ContactForm from "@/app/components/ContactForm";
import HeroSection from "@/app/components/ui/HeroSection";
import { radvCards } from "@/app/data/home";
import Image from "next/image";

export default function RadvAuditSupportPage() {
  return (
    <>
      <div>
        <HeroSection
          title="RADV Audit Support"
          description="Reduce your audit exposure with our Risk Adjustment Data Validation support. We help health plans prepare for and respond to RADV audits . Our RADV-trained coders ensure accurate abstraction and faster turnaround, helping clients remain compliant and confident."
          image="/images/cdi/cdibg.svg"
        />
        {/* card section  */}
        <section className="mt-20 mb-10">
          <div className="space-y-10">
            {radvCards.map((card, index) => (
              <section
                key={index}
                className={`max-w-350 mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 border border-[#E5E5E5] rounded-xl p-5
                                        ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* TEXT SIDE */}
                <div className="  flex-4">
                  <h2 className="text-4xl font-semibold mb-5">{card.title}</h2>

                  <p className="text-gray-600 text-lg mb-2">
                    {card.description1}
                  </p>

                  {/* <div className="grid grid-cols-1 gap-8">

                    <div>
                      <h3 className="font-semibold  mb-3">
                        {card.subheading1}
                      </h3>

                      <ul className="space-y-2">
                        {card.services.map((item, i) =>
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

                    <p className="text-gray-600 mb-2">{card.description2}</p>
                  </div> */}
                </div>

                {/* IMAGE SIDE */}
                <div className="flex-2 w-full hidden lg:block">
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
                  Be audit-ready, Protect your revenue
                </h1>
                <p className="text-base mt-4 max-w-2xl ">
                  Ensure accuracy and compliance with expert support for RADV
                  audits and data validation.
                </p>
              </div>

              <div className="rounded-[28px] lg:w-1/2  w-full border border-white/40 bg-white p-5 shadow-[0_24px_80px_rgba(41,23,84,0.18)] sm:p-8">
                <ContactForm formName="Service request from RADV Support" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
