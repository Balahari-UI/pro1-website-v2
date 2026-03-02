import HeroSection from "@/app/components/ui/HeroSection";
import { hedisCards, hedisServices } from "@/app/data/home";
import Image from "next/image";

export default function HedisAbstractionPage() {
  return (
    <>
      <div>
        {/* hero section */}
        <HeroSection
          title="HEDIS Abstraction"
          description="Pro1Health commitment to quality healthcare is reflected in our specialized services that focus on Healthcare Effectiveness Data and Information Set (HEDIS) measures. These measures, developed and maintained by National Committee for Quality Assurance (NCQA), is critical tool for health plans to assess the quality of care and services they provide. HEDIS measures cover a broad range of important health issues, including chronic conditions management, preventive services, and patient satisfaction."
          image="/images/hedis/hedisbg.svg"
        />
        {/* Comprehensive */}
        <section className="my-10">
          <div className="bg-[#F8F9FA]">
            <h1 className="text-3xl lg:text-4xl lg:text-start text-center max-w-2xl lg:ms-20  py-10">
              <sapn className="lg:block">Our Comprehensive HEDIS </sapn>measures
              reporting service include
            </h1>
            <div className="px-5 pb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 ">
                {hedisServices.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[white] rounded-3xl p-6 shadow-md hover:shadow-md transition duration-300  hover:-translate-y-1.5"
                  >
                    {/* Image */}
                    <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
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
        <section className="mb-20 relative">
          <div className="max-w-350 mx-auto ">
            <h1 className="text-3xl md:text-4xl text-center py-10">Benifits</h1>
            <div
              className={`lg:w-[90vw] hidden lg:block max-w-350 lg:aspect-[1900/900]  p-5 rounded-[55px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col items-start justify-center ps-10 bg-cover bg-center mx-auto  `}
              style={{
                backgroundImage: "url('/images/hedis/hedis-benifit.svg')",
              }}
            ></div>
          </div>
          <div className="lg:absolute lg:-bottom-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-30 px-10 ">
            {hedisServices.map((item) => (
              <div
                key={item.id}
                className="bg-[white] rounded-3xl p-6 shadow-md hover:shadow-md transition duration-300  hover:-translate-y-1.5"
              >
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
