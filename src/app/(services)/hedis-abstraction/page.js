import ContactForm from "@/app/components/ContactForm";
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
          buttonText="Connect With US"
        buttonLink="#Service-form5"
        />
        {/* Comprehensive */}
        <section className="mb-10">
          <div className="bg-[#F8F9FA]">
            <h1 className="text-3xl lg:text-4xl lg:text-start text-center max-w-2xl lg:ms-20  py-10">
              <span className="lg:block">Our Comprehensive HEDIS </span>measures
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
      {/* card section */}
<section className="mb-16">
  <div className="space-y-12">
    {hedisCards.map((card, index) => (
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

          <p className="text-lg leading-[1.7] mb-8 text-gray-600">
            {card.description1}
          </p>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {card.subheading1}
            </h3>

            <ul className="space-y-4">
              {card.services.map((item, i) =>
                item ? (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[16px] leading-[1.6]"
                  >
                    <Image
                      src="/images/rcm/services-tick.svg"
                      alt="tick"
                      width={20}
                      height={20}
                      className="mt-1"
                    />
                    <span>{item}</span>
                  </li>
                ) : null
              )}
            </ul>
          </div>

          {/* DESCRIPTION 2 AS OUTCOME STYLE */}
          {card.description2 && (
              <p className="text-gray-600 mt-5 leading-[1.7]">
                {card.description2}
              </p>
          )}
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


        <section className="mb-20 relative">
          <div className="max-w-350 mx-auto ">
            <h1 className="text-3xl md:text-4xl text-center py-10">Benefits</h1>
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
        {/* form */}
        <section className="bg-light py-12" id="Service-form5">
                  <div className="mx-auto w-[90%]">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="lg:w-1/2 text-cetacean-blue flex flex-col justify-center h-full">
                {/* <h6 className="text-base font-medium tracking-wide  ">
                  CONNECT WITH US
                </h6> */}
                <h1 className="lg:text-4xl text-3xl md:text-5xl font-extrabold  mt-2 py-3">
                  Boost quality scores,Ensure HEDIS compliance
                </h1>
                <p className="text-base mt-4 max-w-2xl">
                  Rely on our expert abstractors for accurate, timely, and
                  compliant HEDIS reporting.
                </p>
              </div>

           <div className="lg:w-1/2 w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">

                <ContactForm formName="Service request from HEDIS Abstraction" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
