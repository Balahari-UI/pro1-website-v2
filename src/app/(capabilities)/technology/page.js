import HeroSection from "@/app/components/ui/HeroSection";
import { techcards } from "@/app/data/home";
import Image from "next/image";

export default function TechnologyPage() {
  return (
    <>
      <div>
        <HeroSection
          title="Technology"
          description="Our technology is at the heart of what we do. By harnessing the power of advanced software, and cloud computing, we enhance the efficiency and accuracy of our HCC coding operations. Our commitment to technological excellence ensures that we remain at the forefront of the healthcare coding industry, delivering top-notch services to our clients."
          image="/images/technology/technology.svg"
        />
        {/* card section  */}
        <section className="mb-10">
          <div className="space-y-10">
            {techcards.map((card, index) => (
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
