"use client";

import Link from "next/link";
import Image from "next/image";
import {
  RiSearchLine,
  RiTranslate2,
  RiShoppingBagLine,
  RiUser3Line,
} from "react-icons/ri";
import logo from "@asset/allPhoto/Logo.png";
import { MdNotificationsActive } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-t border-black bg-[#F0FDFA]">
      <div className="mx-auto flex w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-8 xl:container xl:px-0">
        {/* Logo */}
        <Link href="/" className="w-[300px] h-auto flex shrink-0 items-center">
          <Image
            src={logo}
            alt="Aries Ventures"
            width={200}
            height={200}
            className="h-auto w-auto object-center"
            priority
          />
        </Link>

        {/* Search Bar */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
          <div className="flex h-12 w-[300px] items-center gap-2.5 rounded-full border border-[#DCEAE7] bg-white/30 px-4">
            <RiSearchLine className="h-5 w-5 shrink-0 text-[#9AA8A5]" />

            <input
              type="text"
              placeholder="Search for attar, cosmetics, gadgets..."
              className="w-full bg-transparent font-[Monda] text-base font-normal leading-none outline-none placeholder:text-[#9AA8A5]"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-4">
          {/* Language */}
          <button
            type="button"
            aria-label="Language"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCEAE7] bg-white/30 p-2.5 text-[#667572] transition hover:bg-white/60 sm:w-auto sm:gap-2 sm:px-3.5"
          >
            <RiTranslate2 className="h-5 w-5" />

            <span className="hidden font-[Monda] text-sm sm:inline">
              Eng
            </span>
          </button>

          {/* Shopping Bag */}
          <button
            type="button"
            aria-label="Shopping bag"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCEAE7] bg-white/30 p-2.5 text-[#667572] transition hover:bg-white/60"
          >
            <RiShoppingBagLine className="h-7 w-7" />
          </button>

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
      </div>
    </nav>
  );
};

export default Navbar;