import ContactForm from "@/app/components/ContactForm";
import HeroSection from "@/app/components/ui/HeroSection";
import { cdiCards } from "@/app/data/home";
import Image from "next/image";
import StickyScrollSection from "../../components/ui/StickyScrollSection";
import ApproachTimelineSection from "@/app/components/ui/ApproachTimelineSection";
import CapabilitiesSection from "@/app/components/ui/CapabilitiesSection";
import {
  whomWeServeApproachData,
  whomWeServeCapabilitiesData,
} from "@/app/data/home";
export default function clinical() {
  const data1 = whomWeServeApproachData.cdi;
  const data2 = whomWeServeCapabilitiesData.cdi;
  return (
    <>
      <div>
        {/* hero section */}
        <HeroSection
          title="Clinical Documentation Improvement"
          description="Pro1 Health delivers comprehensive Clinical Documentation Improvement (CDI) services designed to strengthen clinical documentation quality, enhance coding accuracy, and support optimal reimbursement outcomes for healthcare organizations. Our CDI solutions provide clarity, completeness, and compliance — enabling providers to accurately reflect patient care and drive improved financial and clinical performance.At Pro1 Health, our CDI services are tailored to support hospitals, health systems, physician groups, and outpatient practices. We focus on refining clinical documentation workflows, collaborating with clinicians and coders, and ensuring records meet payer, regulatory, and audit standards."
          image="/images/cdi/cdibg.svg"
          buttonText="Connect With US"
          buttonLink="#Service-form4"
        />
        {/*  section 2  */}
        <section className="mb-16">
          <div className="space-y-12">
            {cdiCards.map((card, index) => (
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

                  <p className="text-lg leading-[1.7] mb-8">
                    {card.description1}
                  </p>

                  {/* SERVICES */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      {card.subheading1}
                    </h3>

                    <ul className="space-y-4">
                      {card.services.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[16px] leading-[1.6]"
                        >
                          <Image
                            src="/images/rcm/services-tick.svg"
                            alt="tick"
                            width={30}
                            height={30}
                            className="h-10"
                          />
                          <span className="mt-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* IMAGE SIDE — 35% */}
                <div className="w-full lg:w-[35%] hidden lg:block">
                  <div className="relative w-full h-[380px]">
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

        {/* Section3 */}
        <StickyScrollSection
          title="Why Partner with Pro1 Health for Clinical Documentation Improvement"
          description=""
          items={[
            {
              title: "Enhanced Coding Accuracy",
              text: "Our CDI specialists work closely with clinicians and coders to ensure documentation truly reflects the patient’s severity of illness, complexity of care, and clinical outcomes — boosting precision in code assignment and capture.",
            },
            {
              title: "Improved Reimbursement Performance",
              text: "Accurate documentation supports proper assignment of diagnosis and procedure codes, minimizing lost revenue opportunities and enhancing claim acceptance rates.",
            },
            {
              title: "Regulatory & Compliance Assurance",
              text: "We ensure clinical documentation aligns with industry standards and payer requirements, reducing audit exposure and compliance risk.",
            },
            {
              title: "Stronger Clinical & Financial Insights",
              text: "By bridging clinical documentation with coding insight, Pro1 Health enables providers to make data-driven decisions that support quality metrics, performance initiatives, and strategic planning.",
            },
            {
              title: "Flexible, Scalable Solutions",
              text: "Whether supporting inpatient, outpatient, or ambulatory care settings, our CDI services are adaptable to meet your specific practice needs and growth goals.",
            },
          ]}
        />
        {/* Section4*/}
        <ApproachTimelineSection
          titleLine1={data1.titleLine1}
          titleLine2={data1.titleLine2}
          items={data1.items}
        />

        {/* Section5 */}
        <section>
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="mx-auto mt-10 w-full lg:w-3/4">
              <h1 className="text-3xl lg:text-4xl font-semibold text-cetacean-blue mb-4 text-left md:text-center">
                The Pro1 Health CDI Advantage
              </h1>

              <p className="text-lg font-normal text-cetacean-blue text-left md:text-center leading-relaxed">
                With a team of experienced CDI specialists, combined with a
                strong foundation in healthcare documentation standards and
                coding compliance.
              </p>
            </div>
          </div>
        </section>

        <CapabilitiesSection
          images={data2.images}
          servicesTitle={data2.servicesTitle}
          services={data2.services}
        />

        {/* Section7 */}
        <section className=" pb-10">
          <div className="w-[90%] max-w-[1000px] mx-auto">
            <div className="mx-auto mt-10  bg-[#F0F0F0] p-5 rounded-[16px]">
              <p className="text-lg font-normal text-cetacean-blue text-left md:text-center leading-relaxed">
                <strong>Get Started with CDI Services :</strong> At Pro1 Health,
                we don’t just deliver services—we build reliable, compliant, and
                scalable healthcare solutions that enable our clients to focus
                on what matters most: patient care.
              </p>
            </div>
          </div>
        </section>
        {/* form */}
        <section className="bg-light py-12" id="Service-form4">
          <div className="mx-auto w-[90%]">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="lg:w-1/2 text-cetacean-blue flex flex-col justify-center h-full">
                <h1 className="lg:text-4xl text-3xl md:text-5xl font-extrabold mt-2 py-3">
                  Strengthen documentation, Support accurate coding
                </h1>
                <p className="text-base mt-4 max-w-2xl">
                  Enhance clinical clarity and ensure documentation reflects
                  true patient acuity with our CDI solutions.
                </p>
              </div>

              <div className="lg:w-1/2 w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <ContactForm formName="Service request from CDI" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
