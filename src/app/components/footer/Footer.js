// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="bg-cetacean-blue text-white">
//       <section>
//         <div className="mx-auto w-[90%] max-w-[1520px] py-10">
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
//             <div className="lg:col-span-4">
//               <div className="flex flex-col gap-4">
//                 <Link href="/">
//                   <Image
//                     src="/images/footer/pro1logo-white.png"
//                     alt="PRO1 Health"
//                     width={170}
//                     height={56}
//                     className="h-auto w-[150px]"
//                     priority
//                   />
//                 </Link>

//                 <div className="flex items-center gap-5 text-white">
//                   <a
//                     href="https://www.linkedin.com/company/pro1-health/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="transition hover:text-blue-300"
//                     aria-label="LinkedIn"
//                   >
//                     <FaLinkedinIn className="text-base" />
//                   </a>
//                   <a
//                     href="https://www.facebook.com/profile.php?id=61579464304273"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="transition hover:text-blue-300"
//                     aria-label="Facebook"
//                   >
//                     <FaFacebookF className="text-base" />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/_pro1health/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="transition hover:text-blue-300"
//                     aria-label="Instagram"
//                   >
//                     <FaInstagram className="text-base" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-8">
//               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                 <div className="space-y-3">
//                   <Link
//                     href="/"
//                     className="block text-sm font-semibold uppercase text-gray-200"
//                   >
//                     Home
//                   </Link>
//                   <h6 className="text-sm font-semibold uppercase text-gray-200">
//                     Services
//                   </h6>
//                   <Link
//                     href="/medical-revenue-cycle-management"
//                     className="block text-sm text-gray-400 transition hover:text-white"
//                   >
//                     Revenue Cycle Management
//                   </Link>
//                   <Link
//                     href="/dental-revenue-cycle-management"
//                     className="block text-sm text-gray-400 transition hover:text-white"
//                   >
//                     Dental RCM
//                   </Link>
//                   <Link
//                     href="/risk-adjustment"
//                     className="block text-sm text-gray-400 transition hover:text-white"
//                   >
//                     Risk Adjustment Coding
//                   </Link>
//                 </div>

//                 <div className="space-y-3">
//                   <Link
//                     href="/clinical-documentation-improvement"
//                     className="block text-sm text-gray-400 transition hover:text-white"
//                   >
//                     CDI
//                   </Link>
//                   <Link
//                     href="/hedis-abstraction"
//                     className="block text-sm text-gray-400 transition hover:text-white"
//                   >
//                     HEDIS Abstraction
//                   </Link>
//                   <Link
//                     href="/radv-audit-support"
//                     className="block text-sm text-gray-400 transition hover:text-white"
//                   >
//                     RADV Audit Support
//                   </Link>
//                   <Link
//                     href="/whom-we-serve"
//                     className="block pt-1 text-sm font-semibold uppercase text-gray-200"
//                   >
//                     Whom We Serve
//                   </Link>
//                   <Link
//                     href="/why-pro1"
//                     className="block text-sm font-semibold uppercase text-gray-200"
//                   >
//                     Why Pro1
//                   </Link>
//                 </div>

//                 <div className="space-y-3">
//                   <h6 className="text-sm font-semibold uppercase text-gray-200">
//                     Capabilities
//                   </h6>
//                   <Link
//                     href="/people"
//                     className="block text-sm text-gray-400 transition hover:text-white"
//                   >
//                     People
//                   </Link>
//                   <Link
//                     href="/process"
//                     className="block text-sm text-gray-400 transition hover:text-white"
//                   >
//                     Process
//                   </Link>
//                   <Link
//                     href="/technology"
//                     className="block text-sm text-gray-400 transition hover:text-white"
//                   >
//                     Technology
//                   </Link>
//                 </div>

//                 <div className="space-y-3">
//                   <Link
//                     href="/careers"
//                     className="block text-sm font-semibold uppercase text-gray-200"
//                   >
//                     Careers
//                   </Link>
//                   <Link
//                     href="/about-us"
//                     className="block text-sm font-semibold uppercase text-gray-200"
//                   >
//                     About Us
//                   </Link>
//                   <Link
//                     href="/contact-us"
//                     className="block text-sm font-semibold uppercase text-gray-200"
//                   >
//                     Contact Us
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center gap-5 py-5">
//             <Image
//               src="/images/footer/iso-white.png"
//               alt="ISO"
//               width={90}
//               height={42}
//               className="h-auto w-[78px]"
//             />
// <Image
//   src="/images/footer/soc-white.png"
//   alt="SOC"
//   width={90}
//   height={42}
//   className="h-auto w-[78px]"
// />
//             <Image
//               src="/images/footer/hippa-white.png"
//               alt="HIPAA"
//               width={90}
//               height={42}
//               className="h-auto w-[78px]"
//             />
//           </div>
//         </div>

//         <hr className="border-white/20" />

//         <div className="mx-auto flex w-[90%] max-w-[1520px] flex-col justify-between gap-2 py-4 text-sm text-gray-400 md:flex-row md:items-center">
//           <p>Copyright © {year} Pro1 Health. All rights reserved.</p>
//           <p>Privacy Policy | Data Access Request | Terms of Use</p>
//         </div>
//       </section>
//     </footer>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#05054F] text-white">
      <div className="max-w-[90%] mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SECTION */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Logo */}
            <Image
              src="/images/footer/pro1logo-white.png"
              alt="Pro1 Health"
              width={130}
              height={60}
              className="w-[130px]"
            />

            {/* Social Icons */}
            <div className="flex gap-5 text-lg">
              <Link
                href="https://www.linkedin.com/company/pro1-health/"
                target="_blank"
              >
                <FaLinkedinIn className="hover:text-pink-500 transition" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61579464304273"
                target="_blank"
              >
                <FaFacebookF className="hover:text-pink-500 transition" />
              </Link>
              <Link
                href="https://www.instagram.com/_pro1health/"
                target="_blank"
              >
                <FaInstagram className="hover:text-pink-500 transition" />
              </Link>
            </div>

            {/* Desktop Certifications */}
            <div className="hidden xl:flex gap-5 mt-4 items-center">
              <Image
                src="/images/footer/iso-white.png"
                alt="ISO"
                width={100}
                height={100}
              />
              <Image
                src="/images/footer/soc-white.png"
                alt="SOC"
                width={100}
                height={100}
              />
              <Image
                src="/images/footer/hippa-white.png"
                alt="HIPAA"
                width={180}
                height={80}
                className="h-[80px] w-auto"
              />
            </div>
          </div>

          {/* LINKS SECTION */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <Link href="/">
                <h6 className="mb-5 text-gray-300 font-semibold">HOME</h6>
              </Link>

              <h6 className="mb-5 text-gray-300 font-semibold">SERVICES</h6>

              <Link href="/medical-revenue-cycle-management">
                <p className="text-base text-gray-400 hover:text-white mb-5">
                  Revenue Cycle Management
                </p>
              </Link>
              <Link href="/dental-revenue-cycle-management">
                <p className="text-base  text-gray-400 hover:text-white mb-5">
                  Dental RCM
                </p>
              </Link>
              <Link href="/risk-adjustment">
                <p className="text-base  text-gray-400 hover:text-white mb-5">
                  Risk Adjustment Coding
                </p>
              </Link>
            </div>

            {/* Column 2 */}
            <div>
              <Link href="/clinical-documentation-improvement">
                <p className="text-base  text-gray-400 hover:text-white mb-5">
                  CDI
                </p>
              </Link>
              <Link href="/hedis-abstraction">
                <p className="text-base  text-gray-400 hover:text-white mb-5">
                  HEDIS Abstraction
                </p>
              </Link>
              <Link href="/radv-audit-support">
                <p className="text-base  text-gray-400 hover:text-white mb-5">
                  RADV Audit Support
                </p>
              </Link>

              <Link href="/whom-we-serve">
                <h6 className="mt-6 mb-4 text-gray-300 font-semibold">
                  WHOM WE SERVE
                </h6>
              </Link>
              <Link href="/why-pro1">
                <h6 className="text-gray-300 font-semibold">WHY PRO1</h6>
              </Link>
            </div>

            {/* Column 3 */}
            <div>
              <h6 className="mb-3 text-gray-300 font-semibold">CAPABILITIES</h6>

              <Link href="/people">
                <p className="text-base  text-gray-400 hover:text-white mb-5">
                  People
                </p>
              </Link>
              <Link href="/process">
                <p className="text-base  text-gray-400 hover:text-white mb-5">
                  Process
                </p>
              </Link>
              <Link href="/technology">
                <p className="text-base  text-gray-400 hover:text-white mb-5">
                  Technology
                </p>
              </Link>
            </div>

            {/* Column 4 */}
            <div>
              <Link href="/careers">
                <h6 className="mb-5 text-white font-semibold">CAREERS</h6>
              </Link>
              <Link href="/about-us">
                <h6 className="mb-5 text-gray-300 font-semibold">ABOUT US</h6>
              </Link>
              <Link href="/contact-us">
                <h6 className="text-gray-300 font-semibold">CONTACT US</h6>
              </Link>
            </div>
          </div>

          {/* Mobile Certifications */}
          <div className="col-span-12 flex xl:hidden gap-6 mt-8 justify-start sm:justify-center">
            <Image
              src="/images/footer/iso-image.png"
              alt="ISO"
              width={100}
              height={100}
            />
            {/* <Image src="/images/soc.png" alt="SOC" width={100} height={100} /> */}
            <Image
              src="/images/footer/soc-white.png"
              alt="SOC"
              width={100}
              height={100}
            />
            <Image
              src="/images/footer/hippa-white.png"
              alt="HIPAA"
              width={160}
              height={80}
              className="h-[80px] w-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-[90%] mx-auto py-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>
            Copyright © {new Date().getFullYear()} Pro1 Health. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Privacy Policy | Data Access Request | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
}
