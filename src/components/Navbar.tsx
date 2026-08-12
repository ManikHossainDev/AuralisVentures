"use client";
import { useState } from "react";
import {  RiMenuLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import logo from "@asset/allPhoto/Logo.png";

const links = ["Features", "Baby Journey", "How It Works", "Pricing", "Reviews"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-1 z-50 bg-[#FFFFFF] ">
      <div className="xl:container mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#" className="">
          <Image src={logo} alt="Together Baby Logo" width={80} height={80} className="w-16 h-14 object-contain" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <Link href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-[#6b7c6e] hover:text-[#4a7c59] transition-colors">
                {l}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">

          <Link href="#pricing"
            className="bg-[#344F47] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2d5038] transition-colors">
            Download App
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[#4a7c59] text-2xl" onClick={() => setOpen(!open)}>
          {open ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#e4ece6] px-5 pb-5 pt-3">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l}>
                <Link href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#6b7c6e] hover:text-[#4a7c59]">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#pricing"
            className="mt-4 block text-center bg-[#4a7c59] text-white text-sm font-medium px-5 py-3 rounded-full">
            Download App
          </Link>
        </div>
      )}
    </nav>
  );
}
