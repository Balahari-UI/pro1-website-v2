"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { coreCompetencies, partnerCards, stats, tabs } from "./data/home";
import Tabs from "./components/ui/Tabs";
import AnimatedCounter from "./components/ui/AnimatedCounter";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";

import {
  FiBookOpen,
  FiAward,
  FiShield,
  FiBarChart2,
  FiDollarSign,
  FiFileText,
} from "react-icons/fi";
import StickyScrollSection from "./components/ui/StickyScrollSection";

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);
  const [activePartner, setActivePartner] = useState(0);

  const [heroPaused, setHeroPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (heroPaused) return;

    const timer = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setActiveService((prev) => (prev + 1) % tabs.length);
        setIsFading(false);
      }, 700);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroPaused]);

  const prevPartner = () => {
    setActivePartner(
      (prev) => (prev - 1 + partnerCards.length) % partnerCards.length,
    );
  };
  const nextPartner = () => {
    setActivePartner((prev) => (prev + 1) % partnerCards.length);
  };

  const iconMap = {
    book: FiBookOpen,
    award: FiAward,
    shield: GoShieldCheck,
    chart: FiBarChart2,
    dollar: FiDollarSign,
    file: FiFileText,
  };

  const competencyCardClass =
    "rounded-2xl border border-primary p-6 lg:p-7 min-h-[250px] lg:min-h-[330px] shadow-sm transition hover:shadow-md";
  const competencyIconClass = "text-[30px] lg:text-[34px] text-primary";
  const competencyTitleClass =
    "mt-4 text-xl font-semibold leading-snug text-cetacean-blue sm:text-2xl";
  const competencyTextClass =
    "mt-3 text-base font-medium leading-relaxed text-gray-600";

  return (
    <main className="pt-[86px]">
      {/* Section1 */}

      <section className="lg:h-[90vh] min-h-[400px] h-[40vh]">
        <div className="mx-auto h-full w-[90%]">
          <div className="flex h-full items-center gap-4 lg:gap-8">
            <div className="flex h-full w-full flex-col justify-start lg:basis-3/5 lg:justify-between">
              <div className="mt-2 lg:mt-5">
                <div
                  className={`transition-opacity duration-700 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}
                >
                  <h1 className="text-wrap bg-[linear-gradient(94.31deg,#3e3df3_0.73%,#ff007c_97.24%)] bg-clip-text text-4xl md:text-6xl lg:text-7xl leading-tight font-semibold text-transparent">
                    <span>{tabs[activeService].heading}</span>
                  </h1>
                  <p className="py-1 text-lg md:text-2xl lg:text-3xl font-semibold leading-[1.35] text-primary md:py-4">
                    {tabs[activeService].subheading}
                  </p>
                  <p className="mt-1 max-w-2xl text-base md:text-lg lg:text-xl leading-[1.6] text-[#7e7e7e]">
                    {tabs[activeService].description}
                  </p>

                  <Link
                    href={tabs[activeService].link}
                    className="mt-4 inline-flex items-center gap-2 rounded-[12px] border border-[#afafaf] bg-transparent px-4 py-2 text-[#272727] transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                  >
                    Know More <FaArrowRight className="text-base" />
                  </Link>

                  <div className="mt-10 flex justify-center gap-2 lg:hidden">
                    {tabs.map((tab, idx) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveService(idx)}
                        className={`h-2.5 w-2.5 rounded-full transition ${idx === activeService ? "bg-black" : "bg-gray-400/70"}`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden pb-6 lg:block">
                <Tabs
                  tabs={tabs}
                  onChange={(index) => setActiveService(index)}
                  initialIndex={activeService}
                />
              </div>
            </div>

            <div className="hidden h-full lg:block lg:basis-2/5">
              <div
                className={`transition-opacity duration-700 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}
              >
                <div className="relative h-full min-h-[84vh]">
                  <Image
                    src={tabs[activeService].image}
                    alt={tabs[activeService].title}
                    fill
                    priority
                    className="object-contain object-right"
                    sizes="(min-width:1024px) 40vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section2 */}
      <section className="py-14">
        <div className="mx-auto w-[90%] rounded-2xl border border-[#e5e5e5] bg-[#f4f4f4] px-6 py-14  lg:px-16">
          {/* Wrapper */}
          <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:justify-between">
            <div className="grid gap-10 text-center sm:grid-cols-2 xl:grid-cols-4 xl:gap-16">
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>

            {/* Divider only for large */}
            <div className="hidden xl:block xl:h-30  xl:w-[3px] xl:bg-[#afafaf]" />

            <div className="w-full xl:w-auto">
              {/* Mobile & Tablet Layout */}
              <div className="grid grid-cols-2 gap-8 xl:hidden">
                <div className="flex justify-center">
                  <Image
                    src="/images/home/certificate1.png"
                    alt="SOC 2 Type 2"
                    width={170}
                    height={100}
                    className="h-[100px] w-[170px] object-contain"
                  />
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/images/home/certificate2.png"
                    alt="ISO 27001"
                    width={170}
                    height={100}
                    className="h-[100px] w-[170px] object-contain"
                  />
                </div>

                <div className="col-span-2 flex justify-center">
                  <Image
                    src="/images/home/certificate3.png"
                    alt="HIPAA"
                    width={170}
                    height={100}
                    className="h-[100px] w-[170px] object-contain"
                  />
                </div>
              </div>

              {/* Large Screen Layout */}
              <div className="hidden items-center gap-12 xl:flex">
                <Image
                  src="/images/home/certificate1.png"
                  alt="SOC 2 Type 2"
                  width={170}
                  height={120}
                  className="h-[120px] w-[170px] object-contain"
                />
                <Image
                  src="/images/home/certificate2.png"
                  alt="ISO 27001"
                  width={170}
                  height={120}
                  className="h-[120px] w-[170px] object-contain"
                />
                <Image
                  src="/images/home/certificate3.png"
                  alt="HIPAA"
                  width={170}
                  height={120}
                  className="h-[120px] w-[170px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section3 */}
      <section className="relative overflow-hidden py-16">
        {/* Background Image */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 "
          style={{
            backgroundImage: "url('/images/home/core-bg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            // opacity: 0.08,
          }}
        />

        <div className="mx-auto w-[90%]">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <h2 className="text-4xl font-medium leading-tight text-cetacean-blue sm:text-5xl lg:text-[56px]">
                Core <br /> Competency
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
                Accurate, compliant, and timely medical coding that reduces
                claim denials and improves revenue cycle efficiency.
              </p>
            </div>

            {/* Top Right 2 Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-6">
              {coreCompetencies.slice(0, 2).map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <article key={item.title} className={competencyCardClass}>
                    <Icon className={competencyIconClass} />
                    <h3 className={competencyTitleClass}>{item.title}</h3>
                    <p className={competencyTextClass}>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Bottom 4 Cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreCompetencies.slice(2).map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <article key={item.title} className={competencyCardClass}>
                  <Icon className={competencyIconClass} />
                  <h3 className={competencyTitleClass}>{item.title}</h3>
                  <p className={competencyTextClass}>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* section4 */}
      <StickyScrollSection
        title="Enhancing Healthcare Delivery"
        description="Choose Pro1 Health — your trusted RCM partner in driving operational efficiency and financial growth."
        items={[
          {
            title: "Comprehensive RCM Services",
            text: "From accurate medical coding to denial management and AR follow-up — we cover it all.",
          },
          {
            title: "Skilled and Scalable Workforce",
            text: "Certified coders ensuring fast ramp-up and consistent quality.",
          },
          {
            title: "Compliance-Driven Operations",
            text: "SOC2, HIPAA, ISO certified with HITRUST readiness.",
          },
          {
            title: "Client-Centric Approach",
            text: "We align with your workflows and systems for smooth outcomes.",
          },
          {
            title: "Results That Matter",
            text: "Improved collections and better financial performance.",
          },
        ]}
      />

      {/* section5 */}
      <section className="py-6">
        <div className="mx-auto w-[90%] rounded-3xl bg-[linear-gradient(261.69deg,_#3e3df3_0.83%,_#ff007c_100%)] px-12 py-16 text-white shadow ">
          <h2 className="text-3xl font-semibold lg:text-5xl">
            Trusted by Healthcare Providers, Backed by Proven Results
          </h2>
          <p className="mt-6 max-w-9xl  text-[18px]">
            Our performance speaks through numbers. With a commitment to
            accuracy, speed, and compliance, we deliver measurable results that
            strengthen revenue cycles and build lasting client trust.
          </p>
        </div>
      </section>

      {/* section6 */}
      <section className="py-16">
        <div className="mx-auto w-[92%] max- rounded-3xl border border-gray-200  p-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* LEFT TITLE */}
            <div className="lg:col-span-3">
              <h2 className="text-center text-4xl font-semibold leading-tight text-cetacean-blue lg:text-left lg:text-5xl">
                Why Partner
                <br />
                with us ?
              </h2>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-9">
              <div className="flex flex-col items-center gap-10 md:flex-row md:items-center">
                {/* IMAGE BLOCK */}
                <div className="relative h-[420px] w-full max-w-[320px] overflow-hidden rounded-3xl">
                  {partnerCards.map((card, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === activePartner
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0"
                      }`}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    </div>
                  ))}
                </div>

                {/* TEXT CONTENT */}
                <div className="flex-1 text-left">
                  <h3 className="text-3xl font-semibold text-gray-800">
                    {partnerCards[activePartner].id}.{" "}
                    {partnerCards[activePartner].title}
                  </h3>

                  <p className="mt-5 text-lg leading-relaxed text-gray-600">
                    {partnerCards[activePartner].desc}
                  </p>

                  {/* ARROWS */}
                  <div className="mt-6 flex items-center gap-4">
                    <button
                      onClick={prevPartner}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                    >
                      <FaChevronLeft className="text-gray-700" />
                    </button>

                    <button
                      onClick={nextPartner}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                    >
                      <FaChevronRight className="text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#F8F9FA] py-16 ">
        <div className="mx-auto grid w-[90%] gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-semibold text-cetacean-blue sm:text-5xl lg:text-[40px]">
              People Advantage
            </h2>
            <p className="mt-5 max-w-6xl text-[18px] leading-relaxed text-cetacean-blue">
              Our success is attributed to the large offshore resource pool of
              certified FTEs with rich experience in process management, coding,
              billing, and reimbursement. Our focus revolves around intensive
              and continuous employee training, providing broad spectrum of
              education and training in revenue cycle management, risk
              adjustment coding and compliance requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="rounded-xl bg-[#23282d] px-5 py-2.5 text-base font-medium text-white"
              >
                Contact Us
              </Link>
              <Link
                href="/careers"
                className="rounded-xl border border-[#9ca3af] bg-transparent px-5 py-2.5 text-base font-medium text-[#1f2937] "
              >
                Join Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative h-[280px] overflow-hidden rounded-3xl sm:h-[360px] lg:h-[460px]">
              <Image
                src="/images/home/peopleadvantage.svg"
                alt="People Advantage healthcare team"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
