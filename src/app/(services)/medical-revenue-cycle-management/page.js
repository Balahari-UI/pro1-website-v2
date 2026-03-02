import Carouselrun from "@/app/components/ui/Carouselrun";
import HeroSection from "@/app/components/ui/HeroSection";
import { rcmbillingCards, rcmCards, rcmlogos } from "@/app/data/home";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function RevenueCycle() {
  return (
    <div className=" px-2">
      {/* HERO */}
      <HeroSection
        title=" Revenue Cycle Management"
        description=" At Pro1 Health, we offer comprehensive Medical Revenue Cycle
            Management solutions tailored to physician practices, hospitals, and
            billing companies. Our RCM services ensure timely reimbursements,
            reduced denials, and complete transparency, allowing providers to
            focus on patient care while we take care of the rest."
        image="/images/rcm/rcm.svg"
      />
      {/* solutions*/}
      <section className=" ">
        <h1 className="text-lg md:text-4xl mx-auto text-center mb-5">
          Results-Driven Medical Billing Solutions
        </h1>

        <div
          className={`grid  items-center justify-between p-10 md:grid-cols-3 grid-cols-1 lg:grid-cols-5 md:gap-20 gap-10 lg:gap-0  border border-[#E5E5E5] rounded-xl bg-[#F8F9FA] max-w-[1400px]  mx-auto`}
        >
          <div className="flex flex-col items-center justify-center text-center gap-2 ">
            <h1 className="text-2xl">30</h1>
            <p className="text-[#7E7E7E] text-lg">Days in AR</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2 ">
            <h1 className="text-2xl">10-15%</h1>
            <p className="text-[#7E7E7E] text-lg">REvenue Increase</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2 ">
            <h1 className="text-2xl">97%</h1>
            <p className="text-[#7E7E7E] text-lg">First Pass Ratio</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2 ">
            <h1 className="text-2xl">96%</h1>
            <p className="text-[#7E7E7E] text-lg">Collection Ratios</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2 ">
            <h1 className="text-2xl">98%</h1>
            <p className="text-[#7E7E7E] text-lg">Clean Claims Rate</p>
          </div>
        </div>
      </section>{" "}
      {/* card section  */}
      <section className="mt-20 mb-10">
        <div className="space-y-10">
          {rcmCards.map((card, index) => (
            <section
              key={index}
              className={`max-w-350 mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 border border-[#E5E5E5] rounded-xl p-5
        ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* TEXT SIDE */}
              <div className="  flex-3">
                <h2 className="text-3xl font-bold mb-5">{card.title}</h2>

                <p className="text-gray-600 mb-2">{card.description1}</p>

                <p className="text-gray-600 mb-2">{card.description2}</p>

                <div className="grid sm:grid-cols-2 gap-8">
                  {/* SERVICES */}
                  <div>
                    <h3 className="font-semibold  mb-3">{card.subheading1}</h3>
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
                    <h3 className="font-semibold  mb-3">{card.subheading2}</h3>
                    <ul className="space-y-2">
                      {card.benefits.map((item, i) => (
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
                </div>
              </div>

              {/* IMAGE SIDE */}
              <div className="flex-1 w-full hidden lg:block">
                <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[350px]">
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
      {/* medical RCM */}
      <section className="mb-20">
        <div className="max-w-350 mx-auto flex lg:flex-row flex-col gap-5">
          <div className="flex-1  border border-[#E5E5E5] rounded-2xl w-full p-5">
            <h1 className=" text-lg md:text-3xl font-semibold mb-5 text-center lg:text-start">
              Why Choose Pro1 for Medical RCM ?
            </h1>
            <div className="flex  flex-col gap-2 justify-center items-center lg:justify-start lg:items-start">
              <div className="bg-[#EEE1FE] text-sm p-4 w-fit rounded-xl">
                HIPAA, SOC2, and ISO 27001 Certified
              </div>
              <div className="bg-[#EEE1FE] text-sm p-4 w-fit rounded-xl">
                50+ PMS/EHR integrations (Epic, eClinicalWorks, Athena, Kareo,
                etc.)
              </div>
              <div className="flex gap-1">
                <div className="bg-[#EEE1FE] text-sm p-4 w-fit rounded-xl">
                  Certified Coders and Billing Specialists
                </div>
                <div className="bg-[#EEE1FE] text-sm p-4 w-fit rounded-xl">
                  97%+ Claim Accuracy Rate
                </div>
              </div>
              <div className="flex gap-1">
                <div className="bg-[#EEE1FE] text-sm p-4 w-fit rounded-xl">
                  Real-time dashboards & transparent reporting
                </div>
                <div className="bg-[#EEE1FE] text-sm p-4 w-fit rounded-xl">
                  Dedicated Account Managers
                </div>
              </div>
              <div className="bg-[#EEE1FE] text-sm p-4 w-fit rounded-xl">
                SLA-driven performance across all RCM functions
              </div>
            </div>
          </div>
          <div className="flex-1  border border-[#E5E5E5] rounded-2xl w-full p-5">
            <h1 className=" text-lg md:text-3xl font-semibold mb-5 text-center lg:text-start">
              Our Value-Added Services
            </h1>
            <div className="flex  flex-col gap-2 justify-center items-center lg:justify-start lg:items-start">
              <div className="flex gap-1">
                <div className="bg-[#FFD9EC] text-sm p-4 w-fit rounded-xl">
                  Custom reporting and dashboards
                </div>
                <div className="bg-[#FFD9EC] text-sm p-4 w-fit rounded-xl">
                  Coding review & compliance audits
                </div>
              </div>
              <div className="bg-[#FFD9EC] text-sm p-4 w-fit rounded-xl">
                ICD-10 training for providers and front desk
              </div>
              <div className="bg-[#FFD9EC] text-sm p-4 w-fit rounded-xl">
                Free billing consultation for workflow optimization
              </div>
              <div className="bg-[#FFD9EC] text-sm p-4 w-fit rounded-xl">
                Revenue leakage analysis and root cause investigation
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* billing process */}
      <section className="mb-10">
        <div className="max-w-350 mx-auto">
          <div className="bg-[#F0F0F0] text-sm max-w-3xl mx-auto rounded-lg p-2 mb-10">
            <p>
              <span className="font-semibold ">
                Let us become your trusted RCM partner :
              </span>
              At Pro1 Health, we don’t just process claims — we optimize your
              revenue cycle, improve efficiency, and protect your profitability.
            </p>
          </div>
          <div className="mx-auto max-w-3xl ">
            <h1 className="text-lg md:text-5xl  text-center mb-5 ">
              Our Medical Billing Process
            </h1>
            <p className="text-center text-md max-w-2xl mx-auto">
              We take a systemic approach to file your claim. Our medical
              billing process is designed to ensure full reimbursements on the
              first attempt. We work hand in hand with healthcare providers to
              file accurate medical claims.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
              {rcmbillingCards.map((card, index) => (
                <div
                  key={index}
                  className="border border-[#E5E5E5] rounded-xl p-6 lg:p-8 flex flex-col gap-4 hover:shadow-lg transition duration-300"
                >
                  <div className="w-14 h-14">
                    <img
                      src={card.logo}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h1 className="text-lg font-semibold">
                    {String(index + 1).padStart(2, "0")}. {card.title}
                  </h1>

                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mt-30">
        <div
          className={`lg:w-[90vw] max-w-350 lg:aspect-[1900/650] p-5 rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col items-start justify-center ps-10 bg-cover bg-center mx-auto  `}
          style={{ backgroundImage: "url('/images/rcm/support.svg')" }}
        >
          <h1 className="text-lg md:text-4xl font-semibold mb-10">
            24/7 Support Across All Specialties
          </h1>
          <p className="text-lg max-w-2xl">
            Get answers to your questions! At Pro1health, we offer 24/7
            dedicated customer support with all our services. Our staff has the
            knowledge and expertise to address medical billing, coding and
            related issues all specialties.
          </p>
        </div>
      </section>
      <section className="mb-30 lg:mt-15 my-10">
        <div className="flex max-w-350 mx-auto border border-[#E5E5E5] rounded-xl lg:py-15 lg:px-10 p-5 gap-8">
          <div className="flex-4">
            <h1 className="text-lg md:text-4xl font-semibold">
              Our Expertise in PMS Software
            </h1>
            <p className="text-lg mt-3 max-w-4xl">
              With valuable hands-on experience and trusted expertise, we
              seamlessly integrate with leading practice management systems to
              streamline your revenue cycle operations and maximize efficiency,
              ensuring your practice achieves peak financial performance. Our
              billing team is proficient in using a wide range of medical
              billing software to ensure accuracy, efficiency, and compliance.
              Some of the prominent platforms we work with include. We adapt
              quickly to client-specific systems and workflows, ensuring smooth
              integration and optimized billing operations.
            </p>
          </div>
          <div className="flex-2 w-full hidden lg:block">
            <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[250px]">
              <Image
                src="images/rcm/expertise.svg"
                alt="PMS software"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20">
        <div className="max-w-350 mx-auto">
          <Carouselrun
            items={rcmlogos}
            type="image"
            speed={60}
            gap="gap-16"
            imageHeight="h-12"
          />
        </div>
      </section>
    </div>
  );
}
