"use client";

import Image from "next/image";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import HeroSection from "../components/ui/HeroSection";
import { aboutcards, aboutusstats } from "../data/home";

export default function AboutUsPage() {
  return (
    <>
      {/* Section1 */}
      <HeroSection
        title="About Us"
        description="Pro1 Health is a trusted healthcare services partner delivering end-to-end Revenue Cycle Management , Risk Adjustment Coding, and clinical support solutions to healthcare organizations across the United States. With over 9 years of industry experience, we help providers, payers, MSOs, and healthcare organizations achieve accuracy, compliance, and sustainable revenue outcomes. We specialize in Risk Adjustment coding, Clinical Documentation Improvement, HEDIS abstraction, RADV support, medical and dental RCM, and home health coding services. Our solutions are designed to scale seamlessly while maintaining the highest standards of quality, data security, and regulatory compliance."
        image="/images/about-us/about-us.svg"
      />

      {/* Section2 */}
      <section className=" pb-10">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="mx-auto mt-10 w-full lg:w-3/4">
            <h1 className="text-3xl lg:text-5xl font-semibold text-cetacean-blue mb-4 text-left md:text-center">
              Who We Are
            </h1>

            <p className="text-lg font-normal text-cetacean-blue text-left md:text-center leading-relaxed">
              Trusted RCM partner, Maximize Reimbursements, Reduce Denials,
              Ensure Seamless Revenue flow, letting healthcare providers to
              excel in care.
            </p>
          </div>
        </div>
        <div className="mx-auto w-[90%] rounded-2xl border border-[#e5e5e5] bg-[#f4f4f4] px-6 py-14  lg:px-16 my-10">
          {/* Wrapper */}
          <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:justify-around">
            {aboutusstats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Section3 */}
      <section className="py-10">
        <div className="space-y-10">
          {aboutcards.map((card, index) => (
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
              {/* TEXT SIDE */}
              <div className="w-full lg:w-[65%] text-cetacean-blue">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
                  {card.title}
                </h2>

                <p className="text-lg leading-[1.7] mb-8">
                  {card.description1}
                </p>

                <p className="text-lg leading-[1.7] mb-8">
                  {card.description2}
                </p>

                <div className="grid grid-cols-1 gap-8">
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
                  {card.description2 ? (
                    <div className="bg-[#F0F0F0] text-start rounded-lg lg:px-3 lg:py-2 p-2 flex lg:flex-row flex-col items-center gap-2 w-fit">
                      <span className="text-lg font-semibold">Outcome :</span>
                      <p className="text-gray-600">{card.description2}</p>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* IMAGE SIDE */}
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

      {/* Section4 */}
      <section className="py-10">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          {/* Top Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Vision */}
            <div>
              <h1 className="text-2xl md:text-[40px] font-semibold text-cetacean-blue text-center mb-4">
                Our Vision
              </h1>

              <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 min-h-[150px]">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0">
                  <Image
                    src="/images/about-us/our-vision.svg"
                    alt="Vision Icon"
                    width={60}
                    height={60}
                  />
                </div>

                <p className="text-base text-cetacean-blue leading-relaxed">
                  Be a global leader and service provider of choice for
                  healthcare business and knowledge process outsourcing
                  services.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div>
              <h1 className="text-2xl md:text-[40px] font-semibold text-cetacean-blue text-center mb-4">
                Our Values
              </h1>

              <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 min-h-[150px]">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0">
                  <Image
                    src="/images/about-us/our-value.svg"
                    alt="Values Icon"
                    width={60}
                    height={60}
                  />
                </div>

                <p className="text-base text-cetacean-blue leading-relaxed">
                  We uphold mutual respect, transparency, compliance, aligned
                  with our core values of fulfilment, ingenuity, and teamwork.
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl md:text-[40px] font-semibold text-cetacean-blue text-center mb-4">
                Our Infrastructure
              </h1>

              <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 min-h-[150px]">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0">
                  <Image
                    src="/images/about-us/ourinfa.svg"
                    alt="Infrastructure Icon"
                    width={60}
                    height={60}
                  />
                </div>

                <p className="text-base text-cetacean-blue leading-relaxed">
                  Our systems, policies, and workforce are aligned to meet
                  stringent US healthcare regulatory and audit requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure Row */}
          {/* <div className="flex justify-center mt-10">
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl md:text-[40px] font-semibold text-cetacean-blue text-center mb-4">
                Our Infrastructure
              </h1>

              <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 min-h-[110px]">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0">
                  <Image
                    src="/images/about-us/ourinfa.svg"
                    alt="Infrastructure Icon"
                    width={60}
                    height={60}
                  />
                </div>

                <p className="text-base text-cetacean-blue leading-relaxed">
                  Our systems, policies, and workforce are aligned to meet
                  stringent US healthcare regulatory and audit requirements.
                </p>
              </div>
            </div>
          </div> */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Our Team */}
            <div>
              <h1 className="text-2xl md:text-[40px] font-semibold text-cetacean-blue text-center mb-4">
                Our Team
              </h1>

              <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 min-h-[150px]">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0">
                  <Image
                    src="/images/risk/rs-3.svg"
                    alt="Vision Icon"
                    width={60}
                    height={60}
                  />
                </div>

                <p className="text-base text-cetacean-blue leading-relaxed">
                  Our strength lies in our people. Pro1 Health is powered by a
                  highly skilled workforce of certified coders, auditors, CDI
                  specialists, and RCM professionals, trained to deliver
                  consistent quality at scale.
                </p>
              </div>
            </div>

            {/*Our Commitment */}
            <div>
              <h1 className="text-2xl md:text-[40px] font-semibold text-cetacean-blue text-center mb-4">
                Our Commitment
              </h1>

              <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 min-h-[150px]">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0">
                  <Image
                    src="/images/risk/rs-2.svg"
                    alt="Values Icon"
                    width={60}
                    height={60}
                  />
                </div>

                <p className="text-base text-cetacean-blue leading-relaxed">
                  We partner with our clients as an extension of their
                  operations. Whether it is improving RAF accuracy,
                  strengthening documentation, supporting audits, optimizing
                  revenue cycles, our focus remains on measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="w-[90%]  mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div className="text-cetacean-blue">
              {/* <h2 className="text-3xl md:text-[40px] font-semibold mb-4">
                Our Team
              </h2> */}

              <p className="text-lg leading-relaxed">
                At Pro1 Health, we don’t just deliver services—we build
                reliable, compliant, and scalable healthcare solutions that
                enable our clients to focus on what matters most: patient care.
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/about-us/leadership-team.svg"
                alt="Our Team"
                width={800}
                height={400}
                className="w-full max-w-[600px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-10">
        <div className="w-[90%]  mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center"> */}

      {/* <div className="flex justify-center md:justify-start md:order-1 order-2">
              <Image
                src="/images/about-us/aboutus3.svg"
                alt="Commitment"
                width={800}
                height={400}
                className="w-full max-w-[600px] h-auto"
              />
            </div> */}

      {/*
            <div className="text-cetacean-blue md:order-2 order-1">
              <h2 className="text-3xl md:text-[40px] font-semibold mb-4">
                Our Commitment
              </h2>

              <p className="text-lg leading-relaxed">
                We partner with our clients as an extension of their operations.
                Whether it is improving RAF accuracy, strengthening
                documentation, supporting audits, or optimizing revenue cycles,
                our focus remains on measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section7 */}
      {/* <section className=" pb-10">
        <div className="w-[90%] max-w-[1000px] mx-auto">
          <div className="mx-auto mt-10  bg-[#F0F0F0] p-5 rounded-[16px]">
            <p className="text-lg font-normal text-cetacean-blue text-left md:text-center leading-relaxed">
              At Pro1 Health, we don’t just deliver services—we build reliable,
              compliant, and scalable healthcare solutions that enable our
              clients to focus on what matters most: patient care.
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
}
