"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState(null);
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };

  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeMobileParent =
    desktopMenu.find((item) =>
      item.sub?.some((subItem) => subItem.path === pathname),
    )?.name ?? null;

  return (
    <>
      {/* <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white p-3">
        <div className="mx-auto flex h-[60px] w-[95%] max- items-center justify-between"> */}
      {/* <nav
        className={`fixed top-0 left-0 z-50 w-full bg-white p-3 transition-colors ${
          hasScrolled
            ? "border-b border-gray-200"
            : "border-b border-transparent"
        }`}
      > */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full bg-white p-3 transition-all duration-300 ${hasScrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.15)]" : "shadow-none"}`}
      >
        <div className="mx-auto flex h-[60px] w-[90%]  items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/header/pro1logo.svg"
              alt="Pro1 Logo"
              width={126}
              height={42}
              className="h-auto w-[70px] lg:w-[110px]"
              priority
            />
          </Link>

          <div
            className="hidden nav:flex nav:items-center nav:gap-2 lg:gap-3"
            onMouseLeave={() => setOpenDesktopSubmenu(null)}
          >
            <ul className="flex items-center gap-1 lg:gap-2">
              {desktopMenu.map((item) => {
                const isActive =
                  pathname === item.path ||
                  item.sub?.some((subItem) => subItem.path === pathname);
                return (
                  <li
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.sub) setOpenDesktopSubmenu(item.name);
                    }}
                    // onMouseEnter={() =>
                    //   item.sub ? setOpenDesktopSubmenu(item.name) : null
                    // }
                    // onMouseLeave={() =>
                    //   item.sub ? setOpenDesktopSubmenu(null) : null
                    // }
                  >
                    {item.sub ? (
                      <>
                        <button
                          className={`relative flex items-center gap-2 rounded-md px-3 py-2 text-[17px] font-normal text-black transition after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[3px] after:origin-left after:bg-primary after:transition-transform after:duration-300 ${
                            isActive
                              ? "after:scale-x-100"
                              : "after:scale-x-0 hover:after:scale-x-100"
                          }`}
                        >
                          {item.name}
                          <FaChevronDown
                            className={`text-[14px] transition-transform duration-200 ${
                              openDesktopSubmenu === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <ul
                          className={[
                            "absolute left-0 top-full mt-[-8px] z-50 min-w-[100px] rounded-[12px] bg-white border border-gray-200 pb-5 shadow-xl transitio ",
                            item.name === "Services"
                              ? "w-[370px]"
                              : "w-[220px]",
                            openDesktopSubmenu === item.name
                              ? "visible opacity-100 translate-y-2"
                              : "invisible opacity-0 translate-y-0",
                          ].join(" ")}
                        >
                          <div className="py-3">
                            {item.sub.map((subItem) => (
                              <li key={subItem.name} className="px-3">
                                <Link
                                  href={subItem.path}
                                  className={`group relative block rounded-lg px-4 py-3 text-[16px] transition after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[1px] after:origin-left after:bg-primary after:transition-transform after:duration-300 hover:bg-primary hover:text-white mt-2 ${
                                    pathname === subItem.path
                                      ? "bg-primary text-white after:scale-x-0"
                                      : "text-[#272727] after:scale-x-100"
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </div>
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={`relative rounded-md px-3 py-2 text-[17px] font-normal text-black transition after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[3px] after:origin-left after:bg-primary after:transition-transform after:duration-300 ${
                          isActive
                            ? "after:scale-x-100"
                            : "after:scale-x-0 hover:after:scale-x-100"
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
              className="rounded-full bg-primary px-5 py-2 text-[17px] font-semibold text-white transition hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="nav:hidden text-xl text-cetacean-blue"
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] nav:hidden overflow-y-auto bg-white pt-[50px] shadow-lg transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-3 right-[10px] text-[20px] leading-none text-[#272727]"
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <ul className="w-full">
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
                    className={`flex items-center justify-between px-5 py-[10px] text-[16px] font-semibold text-[#272727] transition ${
                      isActive
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            }

            const isOpen =
              openSubmenu === item.name ||
              (!openSubmenu && activeMobileParent === item.name);
            return (
              <li key={item.name}>
                <button
                  onClick={() =>
                    setOpenSubmenu((prev) =>
                      prev === item.name ? null : item.name,
                    )
                  }
                  className={`flex w-full items-center justify-between px-5 py-[10px] text-left text-[16px] font-semibold transition ${
                    isActive
                      ? "bg-[#e6f0ff] text-primary"
                      : "text-[#272727] hover:bg-primary hover:text-white"
                  }`}
                >
                  {item.name}
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <ul
                  className={`overflow-hidden bg-[#f5f5f5] transition-all duration-300 ${
                    isOpen ? "max-h-[420px]" : "max-h-0"
                  }`}
                >
                  {item.sub.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        href={subItem.path}
                        onClick={closeMobileMenu}
                        className={`block border-none py-[10px] pr-5 pl-10 text-[16px] font-medium transition ${
                          pathname === subItem.path
                            ? "bg-primary text-white"
                            : "text-[#555] hover:bg-[#e6f0ff] hover:text-primary"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}

          <li>
            <Link
              href="/contact-us"
              onClick={closeMobileMenu}
              className={`flex items-center justify-between px-5 py-[10px] text-[16px] font-semibold transition ${
                pathname === "/contact-us"
                  ? "bg-primary text-white"
                  : "text-[#272727] hover:bg-primary hover:text-white"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
