import HeroSection from "@/app/components/ui/HeroSection";
import { PeopleCards } from "@/app/data/home";
import Image from "next/image";

export default function PeoplePage() {
  return (
    <div>
      <HeroSection
        title="People"
        description="At Pro1Health, our people are our greatest asset. We are committed to providing an environment that nurtures talent, fosters professional growth, and upholds the highest standards of the industry. Through rigorous training, focused recruitment, and continuous support for certifications, we ensure that our team is equipped to deliver excellence in every aspect of their work."
        image="/images/people/radvbg.svg"
      />

      {/* card section  */}
      <section className="mb-10">
        <div className="space-y-10">
          {PeopleCards.map((card, index) => (
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

                <div className="grid grid-cols-1 gap-8">
                  {/* SERVICES */}
                  <div>
                    <ul className="space-y-2">
                      {card.services.map((item, i) =>
                        item ? (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-[16px] font-normal leading-[1.6]"
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
                        ) : null,
                      )}
                    </ul>
                  </div>
                </div>
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
  );
}
