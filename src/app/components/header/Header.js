"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const menu = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    sub: [
      { name: "Risk Adjustment Coding", path: "/risk-adjustment-coding" },
      {
        name: "Clinical Documentation Improvement",
        path: "/clinical-documentation-improvement",
      },
      { name: "HEDIS Abstraction", path: "/hedis-abstraction" },
      { name: "RADV Audit Support", path: "/radv-audit-support" },
      { name: "Audit as a Service", path: "/audit-as-a-service" },
      { name: "Dental RCM", path: "/drcm" },
      { name: "Medical RCM", path: "/mrcm" },
    ],
  },
  {
    name: "Capabilities",
    sub: [
      { name: "People", path: "/people" },
      { name: "Process", path: "/process" },
      { name: "Technology", path: "/technology" },
    ],
  },
  { name: "Compliance", path: "/compliance" },
  { name: "Careers", path: "/careers" },
  {
    name: "About Us",
    sub: [
      { name: "Why PRO1?", path: "/why-pro1" },
      { name: "Who We Are?", path: "/who-we-are" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState(null);
  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY < lastScrollY || window.scrollY < 50);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 py-2 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[90%] mx-auto">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/pro1logo.svg"
              alt="Pro1 Logo"
              width={80}
              height={32}
              className="md:w-[90px] md:h-[36px] lg:w-[100px] lg:h-[45px]"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden nav:flex flex-wrap items-center gap-4 nav:gap-6">
            {menu.map((item, idx) => {
              const isActive =
                pathname === item.path ||
                item.sub?.some((sub) => sub.path === pathname);

              return (
                <li key={idx} className="relative group">
                  {item.sub ? (
                    <>
                      <button
                        className={`relative cursor-pointer flex items-center px-2 py-2 text-sm lg:text-[15px] xl:text-base font-medium transition-colors ${
                          isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-800 hover:text-blue-600"
                        } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all group-hover:after:w-full`}
                      >
                        {item.name}
                        <FaChevronDown className="ml-1 text-xs lg:text-sm" />
                      </button>

                      <div
                        className={[
                          "absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white shadow-lg rounded-xl p-4",
                          item.name === "Services"
                            ? "grid grid-cols-2 gap-x-8 gap-y-2 w-[90vw] max-w-[600px]"
                            : "grid grid-cols-1 gap-y-2 w-[70vw] max-w-[280px]",
                          "opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-300",
                        ].join(" ")}
                        role="menu"
                      >
                        {item.sub.map((sub, sidx) => (
                          <Link
                            key={sidx}
                            href={sub.path}
                            className={`block px-3 py-2 text-sm whitespace-nowrap border-b border-blue-600 transition ${
                              pathname === sub.path
                                ? "bg-blue-600 text-white font-medium"
                                : "text-gray-700 hover:bg-blue-600 hover:text-white"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`relative px-1.5 md:px-2 py-1.5 md:py-2 text-sm md:text-[15px] lg:text-base font-medium transition-colors ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "text-gray-800 hover:text-blue-600"
                      } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden nav:flex">
            <Link
              href="/contact"
              className="px-3 nav:px-4 py-1.5 nav:py-2 rounded-full bg-blue-600 text-white text-sm nav:text-base font-medium shadow hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="nav:hidden text-2xl text-gray-800"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="nav:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col p-4 space-y-2">
            {menu.map((item, idx) => {
              const isActive =
                pathname === item.path ||
                item.sub?.some((sub) => sub.path === pathname);

              return (
                <li key={idx}>
                  {item.sub ? (
                    <details open={isActive}>
                      <summary
                        className={`flex items-center justify-between cursor-pointer px-2 py-2 text-base font-medium ${
                          isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-800"
                        }`}
                      >
                        {item.name}
                        <FaChevronDown className="ml-2 text-sm" />
                      </summary>
                      <ul className="pl-4 mt-1 space-y-1">
                        {item.sub.map((sub, sidx) => (
                          <li key={sidx}>
                            <Link
                              href={sub.path}
                              onClick={() => setMobileOpen(false)}
                              className={`block px-2 py-2 text-sm border-b border-blue-600 ${
                                pathname === sub.path
                                  ? "bg-blue-600 text-white font-medium"
                                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-2 py-2 text-base font-medium ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "text-gray-800 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-2 text-base font-medium text-gray-800 hover:text-blue-600"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
