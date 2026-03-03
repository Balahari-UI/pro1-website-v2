import HeroSection from "@/app/components/ui/HeroSection";
import { processCards } from "@/app/data/home";
import Image from "next/image";

export default function ProcessPage() {
  return (
    <>
      <div>
        <HeroSection
          title="Process"
          description="Our process is the backbone of our service delivery. It reflects our commitment to quality, accuracy, and client satisfaction. By following this structured approach, we ensure that every client receives the highest level of service, tailored to their specific needs. Our goal is to be not just a service provider, but a trusted partner in the success of our clients' healthcare practices."
          image="/images/process/processbg.svg"
        />
        {/* card section  */}
        <section className="mb-10">
          <div className="space-y-10">
            {processCards.map((card, index) => (
              <section
                key={index}
                className={`w-[90%] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 border border-[#E5E5E5] rounded-xl p-5
                                ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* TEXT SIDE */}
                <div className="  flex-5">
                  <h2 className="text-3xl font-bold mb-5">{card.title}</h2>
                  <h3 className="text-2xl text-semibold">{card.subtitle1}</h3>
                  <p className="text-gray-600 mb-2">{card.description1}</p>
                  <h3 className="text-2xl text-semibold">{card.subtitle2}</h3>
                  <p className="text-gray-600 mb-2">{card.description2}</p>
                </div>

                {/* IMAGE SIDE */}
                <div className="flex-3 w-full hidden lg:block">
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
      </div>
    </>
  );
}
