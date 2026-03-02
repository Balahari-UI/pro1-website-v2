import { drcmCards } from "@/app/data/home";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function dentalrevenue() {
  return (
    <>
      <div className="pt-24 px-2">
        {/* hero */}
        <section className="lg:flex justify-between  max-w-350 mx-auto mb-10   ">
          <div className="lg:w-3/5 max-w-4xl mx-auto lg:px-10  lg:pt-30  flex  flex-col gap-10 mb-10 ">
            <h1 className="text-5xl text-center lg:text-start md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text p-3 text-transparent ">
              Dental Revenue Cycle Management
            </h1>
            <p className="text-lg md:text-xl lg:max-w-3xl max-w-2xl mx-auto lg:mx-0 text-center lg:text-start text-[#7E7E7E]">
              At Pro1 Health, we specialize in end-to-end Dental RCM services
              that enable dental practices to maximize collections, streamline
              operations, and reduce write-offs. From verifying eligibility to
              denial management and reporting, we ensure every claim is
              accurate, compliant, and paid faster, Here’s a breakdown of our
              core Dental RCM services.
            </p>
            <button className="px-2 py-1 flex items-center gap-2 text-center border rounded-lg w-45 lg:mt-5 mx-auto lg:mx-0 ">
              Connect With Us <FaArrowRightLong />
            </button>
          </div>
          <div className="hidden lg:flex lg:w-2/5 justify-center py-10">
            <div className="w-full max-w-[500px] rounded-[32px] overflow-hidden">
              <Image
                src="/images/drcm/drcmbg.svg"
                alt="Revenue Cycle Management"
                width={1000}
                height={600}
                className="w-full h-auto rounded-[32px]"
                priority
              />
            </div>
          </div>
        </section>{" "}
        {/* card section  */}
        <section className="mt-20 mb-10">
          <div className="space-y-10">
            {drcmCards.map((card, index) => (
              <section
                key={index}
                className={`max-w-350 mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 border border-[#E5E5E5] rounded-xl p-5
                ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* TEXT SIDE */}
                <div className="  flex-3">
                  <h2 className="text-4xl font-bold mb-5">{card.title}</h2>

                  <p className="text-gray-600 text-lg mb-2">
                    {card.description1}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* SERVICES */}
                    <div>
                      <h3 className="font-semibold text-lg  mb-3">
                        {card.subheading1}
                      </h3>
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
                      <h3 className="font-semibold text-lg  mb-3">
                        {card.subheading2}
                      </h3>
                      <ul className="space-y-2">
                        {card.benefits.map((item, i) =>
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
                  </div>
                  <p className="text-gray-600 my-2">{card.description2}</p>
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
      </div>
    </>
  );
}
