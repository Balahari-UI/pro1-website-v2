import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cetacean-blue text-white">
      <section>
        <div className="mx-auto w-[90%] max-w-[1900px] pt-10 pb-5">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-4">
                <Link href="/">
                  <Image
                    src="/images/footer/pro1logo-white.png"
                    alt="PRO1 Health"
                    width={170}
                    height={56}
                    className="h-auto w-[150px]"
                    priority
                  />
                </Link>

                <div className="flex items-center gap-5 text-white">
                  <a
                    href="https://www.linkedin.com/company/pro1-health/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61579464304273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/_pro1health/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
                <div className="hidden lg:flex items-center gap-5 py-5">
                  <Image
                    src="/images/footer/iso-white.png"
                    alt="ISO"
                    width={90}
                    height={42}
                    className="h-auto w-[85px]"
                  />
                  <Image
                    src="/images/footer/soc-white.png"
                    alt="SOC"
                    width={90}
                    height={42}
                    className="h-auto w-[85px]"
                  />
                  <Image
                    src="/images/footer/hippa-white.png"
                    alt="HIPAA"
                    width={90}
                    height={42}
                    className="h-auto w-[125px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-3">
                  <Link
                    href="/"
                    className="block  font-semibold uppercase text-gray-200 mb-5"
                  >
                    Home
                  </Link>
                  <h6 className=" font-semibold uppercase text-gray-200 mb-5">
                    Services
                  </h6>
                  <Link
                    href="/medical-revenue-cycle-management"
                    className="block text-base text-gray-400 transition hover:text-white mb-5"
                  >
                    Revenue Cycle Management
                  </Link>
                  <Link
                    href="/dental-revenue-cycle-management"
                    className="block text-base text-gray-400 transition hover:text-white mb-5"
                  >
                    Dental RCM
                  </Link>
                  <Link
                    href="/risk-adjustment"
                    className="block text-base text-gray-400 transition hover:text-white"
                  >
                    Risk Adjustment Coding
                  </Link>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/clinical-documentation-improvement"
                    className="block text-base text-gray-400 transition hover:text-white mb-5"
                  >
                    CDI
                  </Link>
                  <Link
                    href="/hedis-abstraction"
                    className="block text-base text-gray-400 transition hover:text-white mb-5"
                  >
                    HEDIS Abstraction
                  </Link>
                  <Link
                    href="/radv-audit-support"
                    className="block text-base text-gray-400 transition hover:text-white mb-5"
                  >
                    RADV Audit Support
                  </Link>
                  <Link
                    href="/whom-we-serve"
                    className="block pt-1  font-semibold uppercase text-gray-200  mb-5"
                  >
                    Whom We Serve
                  </Link>
                  <Link
                    href="/why-pro1"
                    className="block  font-semibold uppercase text-gray-200"
                  >
                    Why Pro1
                  </Link>
                </div>

                <div className="space-y-3">
                  <h6 className="block font-semibold uppercase text-gray-200  mb-5">
                    Capabilities
                  </h6>
                  <Link
                    href="/people"
                    className="block text-base text-gray-400 transition hover:text-white mb-5"
                  >
                    People
                  </Link>
                  <Link
                    href="/process"
                    className="block text-base text-gray-400 transition hover:text-white mb-5"
                  >
                    Process
                  </Link>
                  <Link
                    href="/technology"
                    className="block text-base text-gray-400 transition hover:text-white"
                  >
                    Technology
                  </Link>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/careers"
                    className="block  font-semibold uppercase text-gray-200  mb-5"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/about-us"
                    className="block  font-semibold uppercase text-gray-200  mb-5"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block font-semibold uppercase text-gray-200"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            {/* Mobile Certifications */}
            <div className=" flex lg:hidden gap-6 mt-8 justify-start sm:justify-center">
              <Image
                src="/images/footer/iso-white.png"
                alt="ISO"
                width={100}
                height={100}
                className="h-auto w-[60px]"
              />
              <Image
                src="/images/footer/soc-white.png"
                alt="SOC"
                width={100}
                height={100}
                className="h-auto w-[60px]"
              />
              <Image
                src="/images/footer/hippa-white.png"
                alt="HIPAA"
                width={160}
                height={80}
                // className="h-[80px] w-auto"
                className="h-[50px] w-[95px] mt-2"
              />
            </div>
          </div>
        </div>

        <hr className="border-white/20" />

        <div className="mx-auto flex w-[90%] max-w-[1900px] flex-col justify-between gap-2 py-4 text-sm text-gray-400 md:flex-row md:items-center">
          <p>Copyright © {year} Pro1 Health. All rights reserved.</p>
          <p>Privacy Policy | Data Access Request | Terms of Use</p>
        </div>
      </section>
    </footer>
  );
}
