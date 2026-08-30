"use client";

import Link from "next/link";
import { useState } from "react";

const Carts = () => {
  const [quantities, setQuantities] = useState([2, 2, 2, 2]);
  const [coupon, setCoupon] = useState("");

  const products = [
    {
      id: 1,
      name: "AV Pro Wireless Headphones",
      price: 2000,
      oldPrice: 2800,
    },
    {
      id: 2,
      name: "AV Pro Wireless Headphones",
      price: 2000,
      oldPrice: 2800,
    },
    {
      id: 3,
      name: "AV Pro Wireless Headphones",
      price: 2000,
      oldPrice: 2800,
    },
    {
      id: 4,
      name: "AV Pro Wireless Headphones",
      price: 2000,
      oldPrice: 2800,
    },
  ];

  const increaseQuantity = (index: number) => {
    setQuantities((prev) =>
      prev.map((quantity, i) =>
        i === index ? quantity + 1 : quantity
      )
    );
  };

  const decreaseQuantity = (index: number) => {
    setQuantities((prev) =>
      prev.map((quantity, i) =>
        i === index && quantity > 1 ? quantity - 1 : quantity
      )
    );
  };

  const subtotal = products.reduce(
    (total, product, index) =>
      total + product.price * quantities[index],
    0
  );

  const discount = 800;
  const delivery = 60;
  const total = subtotal + delivery - discount;

  return (
    <div className=" py-10">
      <div className="xl:container mx-auto grid  grid-cols-1 gap-4 lg:grid-cols-[1.35fr_1fr]">
        
        {/* ================= CART ================= */}
        <div className="rounded-[9px] border border-[#e5e5e5] bg-white">
          
          {/* Cart Header */}
          <div className="flex items-center justify-between px-5 py-3">
            <h2 className="text-[15px] font-semibold text-[#222]">
              Your Cart
            </h2>

            <button className="text-[8px] text-[#333]">
              Select All
            </button>
          </div>

          {/* Products */}
          <div className="px-2 pb-2">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex min-h-[64px] items-center border-b border-[#eeeeee] px-2"
              >
                {/* Product Image */}
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[3px] border border-[#eeeeee] bg-[#fafafa]">
                  <div className="flex h-[35px] w-[20px] items-center justify-center rounded-[2px] bg-[#e6e6e6] text-[13px]">
                    🎧
                  </div>
                </div>

                {/* Product Name */}
                <div className="ml-2 min-w-0 flex-1">
                  <p className="truncate text-[8px] font-medium text-[#444]">
                    {product.name}
                  </p>
                </div>

                {/* Price */}
                <div className="mr-4 flex items-center gap-1">
                  <span className="text-[9px] font-semibold text-[#222]">
                    ৳{product.price.toLocaleString()}
                  </span>

                  <span className="text-[6px] text-[#777] line-through">
                    ৳{product.oldPrice.toLocaleString()}
                  </span>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="flex h-[22px] w-[22px] items-center justify-center rounded-[5px] border border-[#ff7777] bg-[#fffafa] text-[13px] leading-none text-[#ff5d5d] transition hover:bg-[#fff0f0]"
                  >
                    −
                  </button>

                  <div className="flex h-[22px] w-[34px] items-center justify-center rounded-[4px] bg-[#f7f7f7] text-[9px] font-semibold text-[#333]">
                    {quantities[index]}
                  </div>

                  <button
                    onClick={() => increaseQuantity(index)}
                    className="flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-[#08b8a8] text-[14px] leading-none text-white transition hover:bg-[#00a99a]"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <div>
          <div className="rounded-[9px] border border-[#e5e5e5] bg-white px-5 py-3">
            
            <h2 className="text-[15px] font-semibold text-[#222]">
              Order Summary
            </h2>

            <div className="my-3 border-t border-[#eeeeee]" />

            {/* Subtotal */}
            <div className="flex items-center justify-between py-[4px]">
              <span className="text-[9px] font-medium text-[#333]">
                Subtotal(2 items)
              </span>

              <span className="text-[9px] font-semibold text-[#222]">
                ৳4,000
              </span>
            </div>

            {/* Delivery */}
            <div className="flex items-center justify-between py-[4px]">
              <span className="text-[9px] font-medium text-[#333]">
                Delivery
              </span>

              <span className="text-[9px] font-semibold text-[#222]">
                ৳60
              </span>
            </div>

            {/* Promo */}
            <div className="flex items-center justify-between py-[4px]">
              <span className="text-[9px] font-medium text-[#333]">
                Promo (NEW20)
              </span>

              <span className="text-[9px] font-semibold text-[#00a950]">
                -৳800
              </span>
            </div>

            <div className="my-3 border-t border-[#eeeeee]" />

            {/* Total */}
            <div className="flex items-center justify-between pb-1">
              <span className="text-[9px] font-semibold text-[#333]">
                Total
              </span>

              <span className="text-[10px] font-bold text-[#222]">
                ৳3,260
              </span>
            </div>
          </div>

          {/* ================= COUPON ================= */}
          <div className="mt-2 rounded-[9px] border border-[#e5e5e5] bg-white px-5 py-3">
            <h2 className="text-[15px] font-semibold text-[#222]">
              Coupon / Promo Code
            </h2>

            <div className="mt-3 flex gap-2">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter promo code (e.g. NEW20)"
                className="h-[28px] flex-1 rounded-[6px] bg-[#f5f5f5] px-3 text-[8px] text-[#333] outline-none placeholder:text-[#aaa]"
              />

              <button className="h-[28px] w-[65px] rounded-[6px] bg-[#08b8a8] text-[8px] font-semibold text-white transition hover:bg-[#00a99a]">
                Apply
              </button>
            </div>

            {/* Success Message */}
            <div className="mt-2 flex items-center gap-2 rounded-[6px] border border-[#7bdd92] bg-[#e9fbea] px-2 py-[5px]">
              <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#38b956] text-[8px] text-[#22a83d]">
                ✓
              </span>

              <p className="text-[7px] font-medium text-[#28a644]">
                Promo code NEW20 applied - 20% off your first order!
              </p>
            </div>
          </div>

          {/* Checkout */}
          <Link href="/checkout">
          <button className="mt-2 h-[32px] w-full rounded-[7px] bg-[#08b8a8] text-[8px] font-semibold text-white transition hover:bg-[#00a99a]">
            Proceed To Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carts;