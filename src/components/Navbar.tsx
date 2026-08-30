"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiSearchLine,
  RiTranslate2,
  RiShoppingBagLine,
  RiUser3Line,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import logo from "@asset/allPhoto/Logo.png";
import { MdNotificationsActive } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-t border-black bg-[#F0FDFA]">
      <div className="relative mx-auto px-2 flex w-full items-center justify-between  py-2 sm:py-5 md:py-4 lg:py-3  lg:px-4 xl:container xl:px-2">
        {/* Logo */}
        <Link href="/" className="flex h-auto  shrink-0 items-center">
          <Image
            src={logo}
            alt="Aries Ventures"
            width={200}
            height={200}
            className="h-[20px] w-[45px] sm:h-[30px] sm:w-[60px] md:h-[40px] md:w-[90px] object-center"
            priority
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 px-3 sm:absolute sm:left-1/2 sm:flex-none sm:-translate-x-1/2 sm:px-0">
          <div className="flex h-8 sm:h-9 md:h-10 w-full items-center gap-2.5 rounded-md border border-[#DCEAE7] bg-white/30 px-4 sm:w-[300px]">
            <RiSearchLine className="h-5 w-5 shrink-0 text-[#9AA8A5]" />

            <input
              type="text"
              placeholder="Search for attar, cosmetics, gadgets..."
              className="w-full bg-transparent font-[Monda] placeholder:text-[#FFFFFF]   text-base font-normal leading-none outline-none sm:placeholder:text-[#9AA8A5]"
            />
          </div>
        </div>

        {/* Right Actions - Desktop */}
        <div className="ml-auto hidden items-center gap-4 lg:flex">
          {/* Language */}
          <button
            type="button"
            aria-label="Language"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCEAE7] bg-white/30 p-2.5 text-[#667572] transition hover:bg-white/60 sm:w-auto sm:gap-2 sm:px-3.5"
          >
            <RiTranslate2 className="h-5 w-5" />
            <span className="hidden font-[Monda] text-sm sm:inline">Eng</span>
          </button>

          {/* Shopping Bag */}
          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCEAE7] bg-white/30 p-2.5 text-[#667572] transition hover:bg-white/60"
          >
            <RiShoppingBagLine className="h-7 w-7" />
          </Link>

          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCEAE7] bg-white/30 p-2.5 text-[#667572] transition hover:bg-white/60"
          >
            <MdNotificationsActive className="h-7 w-7" />
          </button>

          {/* User */}
          <button
            type="button"
            aria-label="Profile"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCEAE7] bg-white/30 p-2.5 text-[#667572] transition hover:bg-white/60"
          >
            <RiUser3Line className="h-7 w-7" />
          </button>
        </div>

        {/* Hamburger - Mobile & Tablet */}
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="ml-2 flex h-[20px] w-[45px] sm:h-[30px] sm:w-[60px] md:h-12 md:w-12 shrink-0 items-center justify-center rounded-2xl border border-[#DCEAE7] bg-white/30 p-2.5 text-[#667572] transition hover:bg-white/60 lg:hidden"
        >
          {menuOpen ? (
            <RiCloseLine className="h-7 w-7" />
          ) : (
            <RiMenu3Line className="h-7 w-7" />
          )}
        </button>

        {/* Dropdown Menu - Mobile & Tablet */}
        {menuOpen && (
          <div className="absolute right-0 top-full mt-0 h-screen z-50 flex w-1/2 flex-col gap-3 rounded-b-md border border-t-0 border-[#DCEAE7] bg-[#F0FDFA] p-4 shadow-md lg:hidden">
            {/* Language */}
            <button
              type="button"
              aria-label="Language"
              className="flex h-12 w-full items-center gap-2 rounded-2xl border border-[#DCEAE7] bg-white/30 px-3.5 text-[#667572] transition hover:bg-white/60"
            >
              <RiTranslate2 className="h-5 w-5" />
              <span className="font-[Monda] text-sm">Eng</span>
            </button>

            {/* Shopping Bag */}
            <button
              type="button"
              aria-label="Shopping bag"
              className="flex h-12 w-full items-center gap-2 rounded-2xl border border-[#DCEAE7] bg-white/30 px-3.5 text-[#667572] transition hover:bg-white/60"
            >
              <RiShoppingBagLine className="h-6 w-6" />
              <span className="font-[Monda] text-sm">Bag</span>
            </button>

            {/* Notification */}
            <button
              type="button"
              aria-label="Notifications"
              className="flex h-12 w-full items-center gap-2 rounded-2xl border border-[#DCEAE7] bg-white/30 px-3.5 text-[#667572] transition hover:bg-white/60"
            >
              <MdNotificationsActive className="h-6 w-6" />
              <span className="font-[Monda] text-sm">Notifications</span>
            </button>

            {/* User */}
            <button
              type="button"
              aria-label="Profile"
              className="flex h-12 w-full items-center gap-2 rounded-2xl border border-[#DCEAE7] bg-white/30 px-3.5 text-[#667572] transition hover:bg-white/60"
            >
              <RiUser3Line className="h-6 w-6" />
              <span className="font-[Monda] text-sm">Profile</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;