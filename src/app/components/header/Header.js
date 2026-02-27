"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const desktopMenu = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    sub: [
      {
        name: "Revenue Cycle Management",
        path: "/medical-revenue-cycle-management",
      },
      {
        name: "Dental Revenue Cycle Management",
        path: "/dental-revenue-cycle-management",
      },
      { name: "Risk Adjustment Coding", path: "/risk-adjustment" },
      {
        name: "Clinical Documentation Improvement",
        path: "/clinical-documentation-improvement",
      },
      { name: "HEDIS Abstraction", path: "/hedis-abstraction" },
      { name: "RADV Audit Support", path: "/radv-audit-support" },
    ],
  },
  { name: "Whom We Serve", path: "/whom-we-serve" },
  { name: "Why Pro1", path: "/why-pro1" },
  {
    name: "Capabilities",
    sub: [
      { name: "People", path: "/people" },
      { name: "Process", path: "/process" },
      { name: "Technology", path: "/technology" },
    ],
  },
  { name: "Careers", path: "/careers" },
  { name: "About Us", path: "/about-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white p-3">
        <div className="mx-auto flex h-[60px] w-[95%] max-w-[1520px] items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/header/pro1logo.svg"
              alt="Pro1 Logo"
              width={126}
              height={42}
              className="h-auto w-[110px] sm:w-[126px]"
              priority
            />
          </Link>

          <div className="hidden nav:flex nav:items-center nav:gap-2 lg:gap-3">
            <ul className="flex items-center gap-1 lg:gap-2">
              {desktopMenu.map((item) => {
                const isActive =
                  pathname === item.path ||
                  item.sub?.some((subItem) => subItem.path === pathname);
                return (
                  <li key={item.name} className="group relative">
                    {item.sub ? (
                      <>
                        <button
                          className={`flex items-center gap-2 rounded-md px-3 py-2 text-[15px] font-medium transition ${
                            isActive
                              ? "text-primary"
                              : "text-cetacean-blue hover:text-primary"
                          }`}
                        >
                          {item.name}
                          <FaChevronDown className="text-xs" />
                        </button>
                        <ul
                          className={[
                            "invisible absolute left-0 top-full z-50 mt-1 min-w-[290px] rounded-md bg-white py-2 shadow-xl opacity-0 transition",
                            item.name === "Services"
                              ? "w-[380px]"
                              : "w-[220px]",
                            "group-hover:visible group-hover:opacity-100",
                          ].join(" ")}
                        >
                          {item.sub.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.path}
                                className={`block px-4 py-2 text-sm transition ${
                                  pathname === subItem.path
                                    ? "bg-primary text-white"
                                    : "text-cetacean-blue hover:bg-primary hover:text-white"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={`rounded-md px-3 py-2 text-[15px] font-medium transition ${
                          isActive
                            ? "text-primary"
                            : "text-cetacean-blue hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <Link
              href="/contact-us"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="nav:hidden text-2xl text-cetacean-blue"
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] nav:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[90%] max-w-[360px] overflow-y-auto bg-white p-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="ml-auto block text-3xl text-cetacean-blue"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <ul className="mt-4 space-y-1">
              {desktopMenu.map((item) => {
                const isActive =
                  pathname === item.path ||
                  item.sub?.some((subItem) => subItem.path === pathname);
                if (!item.sub) {
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        onClick={closeMobileMenu}
                        className={`block rounded-md px-2 py-2.5 text-base font-medium ${
                          isActive
                            ? "text-primary"
                            : "text-cetacean-blue hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                }
                const isOpen = openSubmenu === item.name;
                return (
                  <li key={item.name}>
                    <button
                      onClick={() =>
                        setOpenSubmenu((prev) =>
                          prev === item.name ? null : item.name,
                        )
                      }
                      className={`flex w-full items-center justify-between rounded-md px-2 py-2.5 text-left text-base font-medium ${
                        isActive
                          ? "text-primary"
                          : "text-cetacean-blue hover:text-primary"
                      }`}
                    >
                      {item.name}
                      <FaChevronDown
                        className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <ul className="mt-1 space-y-1 pl-4">
                        {item.sub.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.path}
                              onClick={closeMobileMenu}
                              className={`block rounded-sm px-2 py-2 text-sm ${
                                pathname === subItem.path
                                  ? "bg-primary text-white"
                                  : "text-cetacean-blue hover:bg-primary hover:text-white"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact-us"
                  onClick={closeMobileMenu}
                  className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
