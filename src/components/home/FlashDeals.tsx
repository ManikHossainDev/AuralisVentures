"use client";

import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Monda } from "next/font/google";
import ProductCard from "./ProductCard";

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ================= PRODUCTS =================

const products = [
  {
    title: "Al Haramain Haneen 25 ML",
    image: "https://i.ibb.co.com/DDjkBNX6/dd.png",
    price: 2000,
    oldPrice: 2800,
  },
  {
    title: "AV Pro Wireless Headphones",
    image:
      "https://i.ibb.co.com/Vp3NdZxW/pngtree-headphones-on-transparent-background-png-image-14018451-1.png",
    price: 2000,
    oldPrice: 2800,
  },
  {
    title: "AV Pro Wireless Headphones",
    image:
      "https://i.ibb.co.com/1YnXFQ8T/f84400e465077ef7a3e2eb82de93989e-1.png",
    price: 2000,
    oldPrice: 2800,
  },
  {
    title: "AV Pro Wireless Headphones",
    image:
      "https://i.ibb.co.com/Vp3NdZxW/pngtree-headphones-on-transparent-background-png-image-14018451-1.png",
    price: 2000,
    oldPrice: 2800,
  },
];

// ================= TIMER TYPE =================

interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
}

// ================= COMPONENT =================

const FlashDeals = () => {
  const [time, setTime] = useState<TimerState>({
    hours: 5,
    minutes: 45,
    seconds: 38,
  });

  // ================= COUNTDOWN =================

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

        <div className="mb-8">

          {/* TITLE */}

          <h2 className="text-[28px] font-bold leading-[100%] tracking-[0%] text-[#202020]">
            Flash Deals
          </h2>

          {/* TIMER + VIEW ALL */}

          <div className="mt-4 flex w-full items-center justify-between">

            {/* TIMER */}

            <div className="flex items-center gap-2">

              <span className="text-[12px] font-normal leading-none text-[#777]">
                Ends in:
              </span>

              {/* HOURS */}

              <span className="rounded-full border border-[#e5e5e5] bg-[#fafafa] px-2 py-[5px] text-[12px] font-normal leading-none text-[#777]">
                {String(time.hours).padStart(2, "0")}H
              </span>

              <span className="text-[12px] leading-none text-[#aaa]">
                :
              </span>

              {/* MINUTES */}

              <span className="rounded-full border border-[#e5e5e5] bg-[#fafafa] px-2 py-[5px] text-[12px] font-normal leading-none text-[#777]">
                {String(time.minutes).padStart(2, "0")} Min
              </span>

              <span className="text-[12px] leading-none text-[#aaa]">
                :
              </span>

              {/* SECONDS */}

              <span className="rounded-full border border-[#e5e5e5] bg-[#fafafa] px-2 py-[5px] text-[12px] font-normal leading-none text-[#777]">
                {String(time.seconds).padStart(2, "0")} Sec
              </span>

            </div>

            {/* VIEW ALL */}

            <button
              type="button"
              className="flex items-center gap-1 text-[12px] font-normal leading-none text-[#777] transition-colors duration-200 hover:text-[#18c8c0]"
            >
              View All Products
              <FiArrowRight size={12} />
            </button>

          </div>
        </div>

        {/* ================= PRODUCT GRID ================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
              discount={product.oldPrice}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default FlashDeals;