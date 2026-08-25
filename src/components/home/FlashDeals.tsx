"use client";

import Image from "next/image";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Monda } from "next/font/google";

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const products = [
  {
    id: 1,
    name: "Al Haramain Haneen 25 ML",
    image:
      "https://i.ibb.co.com/DDjkBNX6/dd.png",
    price: 2000,
    oldPrice: 2800,
  },
  {
    id: 2,
    name: "AV Pro Wireless Headphones",
    image:
      "https://i.ibb.co.com/Vp3NdZxW/pngtree-headphones-on-transparent-background-png-image-14018451-1.png",
    price: 2000,
    oldPrice: 2800,
  },
  {
    id: 3,
    name: "AV Pro Wireless Headphones",
    image:
      "https://i.ibb.co.com/1YnXFQ8T/f84400e465077ef7a3e2eb82de93989e-1.png",
    price: 2000,
    oldPrice: 2800,
  },
  {
    id: 4,
    name: "AV Pro Wireless Headphones",
    image:
      "https://i.ibb.co.com/Vp3NdZxW/pngtree-headphones-on-transparent-background-png-image-14018451-1.png",
    price: 2000,
    oldPrice: 2800,
  },
];

const FlashDeals = () => {
  const [time, setTime] = useState({
    hours: 5,
    minutes: 45,
    seconds: 38,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return prev;
        }

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            }
          }
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${monda.className} w-full py-8 pb-12`}>
      <div className="container mx-auto px-2 xl:px-0">
        {/* ================= HEADER ================= */}
        <div className="mb-6">
          {/* Title */}
          <h2 className="text-[20px] font-bold leading-none text-[#202020]">
            Flash Deals
          </h2>

          {/* Timer + View All */}
          <div className="mt-4 flex w-full items-center justify-between">
            {/* Timer */}
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-normal leading-none text-[#777]">
                Ends in:
              </span>

              {/* Hours */}
              <span className="rounded-full border border-[#e5e5e5] bg-[#fafafa] px-2 py-[5px] text-[12px] font-normal leading-none text-[#777]">
                {String(time.hours).padStart(2, "0")}H
              </span>

              <span className="text-[12px] font-normal leading-none text-[#aaa]">
                :
              </span>

              {/* Minutes */}
              <span className="rounded-full border border-[#e5e5e5] bg-[#fafafa] px-2 py-[5px] text-[12px] font-normal leading-none text-[#777]">
                {String(time.minutes).padStart(2, "0")} Min
              </span>

              <span className="text-[12px] font-normal leading-none text-[#aaa]">
                :
              </span>

              {/* Seconds */}
              <span className="rounded-full border border-[#e5e5e5] bg-[#fafafa] px-2 py-[5px] text-[12px] font-normal leading-none text-[#777]">
                {String(time.seconds).padStart(2, "0")} Sec
              </span>
            </div>

            {/* View All */}
            <button
              type="button"
              className="flex items-center gap-1 text-[12px] font-normal leading-none text-[#777] transition-colors duration-200 hover:text-[#18c8c0]"
            >
              View All Products
              <FiArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-[#f9f9f9] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* ================= PRODUCT IMAGE ================= */}
              <div className="flex h-[200px] items-center justify-center bg-[#f7f7f7]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="h-[200px] w-[200px] object-contain p-1"
                />
              </div>

              {/* ================= PRODUCT CONTENT ================= */}
              <div className="px-[10px] pb-[10px]">
                {/* Discount */}
                <div className="mt-2 flex items-center gap-1">
                  <span className="text-[12px] font-normal leading-none text-[#12c8c0]">
                    30% OFF
                  </span>

                  <span className="text-[12px] font-normal leading-none text-[#12c8c0]">
                    · 12 left
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-[#d8d8d8]">
                  <div className="h-full w-[30%] rounded-full bg-[#18c8c0]" />
                </div>

                {/* Product Name */}
                <h3 className="mt-3 truncate text-[13px] font-bold leading-none text-[#292929]">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-2 min-h-[27px] text-[12px] font-normal leading-[13px] text-[#888]">
                  Handcrafted attars with rich woody, floral, musk & oud
                  notes. Available in 3ml, 6ml & 8ml
                </p>

                {/* Price */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[14px] font-bold leading-none text-[#222]">
                    ৳{product.price.toLocaleString()}
                  </span>

                  <span className="text-[12px] font-normal leading-none text-[#999] line-through">
                    ৳{product.oldPrice.toLocaleString()}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-3 flex items-center gap-1">
                  {/* Buy Now */}
                  <button
                    type="button"
                    className="flex h-[32px] flex-1 items-center justify-center gap-2 rounded-[9px] bg-[#bce9e7] text-[12px] font-normal leading-none text-white transition-colors duration-200 hover:bg-[#19c7c0]"
                  >
                    Buy Now
                    <FiArrowRight size={13} />
                  </button>

                  {/* Add To Cart */}
                  <button
                    type="button"
                    aria-label="Add to cart"
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-[9px] border border-[#e5e5e5] bg-[#f5f5f5] text-[#b7b7b7] transition-all duration-200 hover:border-[#19c7c0] hover:bg-[#e5fafa] hover:text-[#19c7c0]"
                  >
                    <FiShoppingBag size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;