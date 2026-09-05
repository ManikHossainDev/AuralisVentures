"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  RiSearchLine,
  RiGlobalLine,
  RiShoppingBagLine,
  RiUserLine,
} from "react-icons/ri";
import logo from "@asset/allPhoto/Logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#171717] border-b background-bg">
      <div className="xl:container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <Image
              src={logo}
              alt="Aries Ventures"
              width={95}
              height={45}
              className="h-[45px] w-[95px] object-contain"
              priority
            />
          </Link>

          {/* Search Bar - Centered */}
          <div className="flex-1 max-w-sm mx-auto hidden md:block">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border-2 border-[#404040] bg-transparent hover:border-[#505050] transition">
              <RiSearchLine className="h-4 w-4 text-[#888888] shrink-0" />
              <input
                type="text"
                placeholder="Search for attar, cosmetics, gadgets..."
                className="w-full bg-transparent text-sm text-white placeholder:text-[#666666] outline-none"
                aria-label="Search products"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Language */}
            <button
              type="button"
              aria-label="Select language"
              className="flex items-center gap-1.5 border-2 rounded-2xl p-3 border-[#404040] text-white hover:text-[#4dd9b3] transition duration-200"
            >
              <RiGlobalLine className="h-5 w-5" />
              <span className="text-sm font-medium hidden sm:inline">Eng</span>
            </button>

            {/* Shopping Bag */}
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="text-white border-2 rounded-2xl p-3 border-[#404040] hover:text-[#4dd9b3] transition duration-200"
            >
              <RiShoppingBagLine className="h-5 w-5" />
            </Link>

            {/* Notification */}
            <button
              type="button"
              aria-label="Notifications"
              className="text-white border-2 rounded-2xl p-3 border-[#404040] hover:text-[#4dd9b3] transition duration-200"
            >
              <IoIosNotificationsOutline className="h-5 w-5" />
            </button>

            {/* User Profile */}
            <Link
              href="/profile"
              aria-label="User profile"
              className="text-white border-2 rounded-2xl p-3 border-[#404040] hover:text-[#4dd9b3] transition duration-200"
            >
              <RiUserLine className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="block sm:hidden mt-3">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border-2 border-[#404040] bg-transparent focus-within:border-[#505050] transition">
            <RiSearchLine className="h-4 w-4 text-[#888888] shrink-0" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm text-white placeholder:text-[#666666] outline-none"
              aria-label="Search products on mobile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;