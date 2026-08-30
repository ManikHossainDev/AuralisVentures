"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Clock3,
  Heart,
  UserRoundPen,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-full max-w-[225px] space-y-4">
      {/* Profile Card */}
      <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
        <div className="flex flex-col items-center">
          <div className="relative h-[58px] w-[58px] overflow-hidden rounded-xl">
            <Image
              src="https://i.ibb.co/9kGRkyzV/profile1.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="mt-2 text-[19px] font-semibold text-gray-900">
            Motin Kako
          </h2>

          <p className="mt-0.5 text-[11px] text-gray-500">
            rahim.islam@email.com
          </p>
        </div>
      </div>

      {/* Menu Card */}
      <div className="rounded-xl border border-gray-200 bg-white px-2 py-2">
        {/* My Orders */}
        <Link
          href="/my-orders"
          className="group flex h-[42px] items-center gap-2 rounded-lg border-l-2 border-teal-400 bg-gradient-to-r from-teal-50 to-transparent px-2 text-[11px] font-medium text-teal-500 transition hover:bg-teal-50"
        >
          <FileText
            size={14}
            strokeWidth={1.8}
            className="text-teal-500"
          />
          <span>My Orders</span>
        </Link>

        <div className="h-px bg-gray-200" />

        {/* Track Orders */}
        <Link
          href="/track-orders"
          className="flex h-[43px] items-center gap-2 px-2 text-[11px] font-medium text-gray-800 transition hover:text-teal-500"
        >
          <Clock3 size={14} strokeWidth={1.8} />
          <span>Track Orders</span>
        </Link>

        <div className="h-px bg-gray-200" />

        {/* Wishlist */}
        <Link
          href="/wishlist"
          className="flex h-[43px] items-center gap-2 px-2 text-[11px] font-medium text-gray-800 transition hover:text-teal-500"
        >
          <Heart size={14} strokeWidth={1.8} />
          <span>Wishlist</span>
        </Link>

        <div className="h-px bg-gray-200" />

        {/* Edit Profile */}
        <Link
          href="/edit-profile"
          className="flex h-[43px] items-center gap-2 px-2 text-[11px] font-medium text-gray-800 transition hover:text-teal-500"
        >
          <UserRoundPen size={14} strokeWidth={1.8} />
          <span>Edit Profile</span>
        </Link>

        <div className="h-px bg-gray-200" />

        {/* Logout */}
        <button
          type="button"
          className="flex h-[44px] w-full items-center justify-center gap-1.5 text-[11px] font-medium text-red-500 transition hover:text-red-600"
        >
          <LogOut size={14} strokeWidth={1.8} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;