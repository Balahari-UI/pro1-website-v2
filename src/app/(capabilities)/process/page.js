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
                className={` w-[90%] mx-auto bg-white border border-[#E6E6E6] rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center gap-12  transition-all duration-300 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} `}
              >
                {/* TEXT SIDE */}
                <div className="w-full lg:w-[65%] text-cetacean-blue">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
                    {card.title}
                  </h2>
                  <h3 className="text-2xl  font-medium mb-4">
                    {card.subtitle1}
                  </h3>
                  <p className="text-lg font-normal leading-[1.7] mb-2">
                    {card.description1}
                  </p>
                  <h3 className="text-2xl  font-medium mb-4">
                    {card.subtitle2}
                  </h3>
                  <p className="text-lg font-normal leading-[1.7] mb-2">
                    {card.description2}
                  </p>
                </div>

                {/* IMAGE SIDE */}
                <div className="w-full lg:w-[35%] hidden lg:block">
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
