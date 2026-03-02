import HeroSection from "@/app/components/ui/HeroSection";

export default function PeoplePage() {
  return (
    <>
      <div>
        <HeroSection
          title="People"
          description="At Pro1Health, our people are our greatest asset. We are committed to providing an environment that nurtures talent, fosters professional growth, and upholds the highest standards of the industry. Through rigorous training, focused recruitment, and continuous support for certifications, we ensure that our team is equipped to deliver excellence in every aspect of their work."
          image="/images/people/radvbg.svg"
        />
      </div>
      {/* card section  */}
      <section className="mt-20 mb-10">
        <div className="space-y-10">
          {hedisCards.map((card, index) => (
            <section
              key={index}
              className={`max-w-350 mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 border border-[#E5E5E5] rounded-xl p-5
                                      ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* TEXT SIDE */}
              <div className="  flex-3">
                <h2 className="text-3xl font-bold mb-5">{card.title}</h2>

                <p className="text-gray-600 mb-2">{card.description1}</p>

                <div className="grid grid-cols-1 gap-8">
                  {/* SERVICES */}
                  <div>
                    <h3 className="font-semibold  mb-3">{card.subheading1}</h3>

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
                </div>
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
    </>
  );
}
