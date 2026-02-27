import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin, ImFacebook2 } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="bg-[#00023D] text-white  mx-auto px-6 sm:px-6 md:px-12 lg:px-24">
      <div className=" py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* === Link Sections === */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h6 className="mb-4 text-gray-300 font-semibold">SERVICES</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <Link href="/risk-adjustment-coding">
                    Risk Adjustment Coding
                  </Link>
                </li>
                <li>
                  <Link href="/clinical-documentation-improvement">CID</Link>
                </li>
                <li>
                  <Link href="/hedis-abstraction">HEDIS Abstraction</Link>
                </li>
                <li>
                  <Link href="/radv-audit-support">RADV Audit Support</Link>
                </li>
                <li>
                  <Link href="/audit-as-a-service">Audit as a Service</Link>
                </li>
                <li>
                  <Link href="/drcm">Dental RCM</Link>
                </li>
                <li>
                  <Link href="/mrcm">Medical RCM</Link>
                </li>
              </ul>
            </div>

            {/* Capabilities */}
            <div>
              <h6 className="mb-4 text-gray-300 font-semibold">CAPABILITIES</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <Link href="/people">People</Link>
                </li>
                <li>
                  <Link href="/process">Process</Link>
                </li>
                <li>
                  <Link href="/technology">Technology</Link>
                </li>
              </ul>

              <h6 className="mt-6 mb-2 text-gray-300 font-semibold">
                <Link href="/careers">CAREERS</Link>
              </h6>

              <h6 className="mt-6 mb-2 text-gray-300 font-semibold">
                <Link href="/compliance">COMPLIANCE</Link>
              </h6>
            </div>

            {/* About */}
            <div>
              <h6 className="mb-4 text-gray-300 font-semibold">ABOUT US</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <Link href="/why-pro1">Why PRO1?</Link>
                </li>
                <li>
                  <Link href="/who-we-are">Who We Are?</Link>
                </li>
              </ul>

              <h6 className="mt-6 mb-2 text-gray-300 font-semibold">
                <Link href="/contact">CONTACT US</Link>
              </h6>
            </div>
          </div>

          {/* === Logos === */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              <Image
                src="/images/iso_image.png"
                alt="ISO"
                width={90}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/soc.png"
                alt="SOC"
                width={90}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/hippa_white.png"
                alt="HIPAA"
                width={120}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm sm:text-base text-gray-400 text-center">
          <p>Copyright © 2024 Pro1 Health. All rights reserved.</p>

          <div className="flex items-center gap-4 text-white">
            <a
              href="https://www.linkedin.com/company/pro1-health/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-blue-400 transition-colors text-xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579464304273"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-400 transition-colors text-xl" />
            </a>
            <a
              href="https://www.instagram.com/_pro1health/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-secondary transition-colors text-xl" />
            </a>
          </div>

          {/* <p className="flex flex-wrap gap-2 justify-center md:justify-end">
            <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
            <Link href="/data-access">Data Access Request</Link> |{" "}
            <Link href="/terms">Terms of Use</Link>
          </p> */}

          <p className="flex flex-wrap gap-2 justify-center md:justify-end">
            <span>Privacy Policy</span> |<span>Data Access Request</span> |
            <span>Terms of Use</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
