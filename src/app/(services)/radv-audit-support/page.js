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
          buttonText="Connect With US"
          buttonLink="#Service-form6"
        />
        {/* card section */}
        <section className="mb-16">
          <div className="space-y-12">
            {radvCards.map((card, index) => (
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

                  <p className="text-lg leading-[1.8]">{card.description1}</p>
                </div>

                {/* IMAGE SIDE — 35% */}
                <div className="w-full lg:w-[35%] hidden lg:block">
                  <div className="relative w-full h-[350px]">
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
        {/* form */}
        <section className="bg-light py-12" id="Service-form6">
          <div className="mx-auto w-[90%]">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="lg:w-1/2 text-cetacean-blue flex flex-col justify-center h-full">
                <h1 className="lg:text-4xl text-3xl md:text-5xl font-extrabold mt-2 py-3">
                  Be audit-ready, Protect your revenue
                </h1>
                <p className="text-base mt-4 max-w-2xl ">
                  Ensure accuracy and compliance with expert support for RADV
                  audits and data validation.
                </p>
              </div>

              <div className="lg:w-1/2 w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <ContactForm formName="Service request from RADV Support" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
