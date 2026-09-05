"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTag,
  FiTrash2,
} from "react-icons/fi";

const Carts = () => {
  const [quantities, setQuantities] = useState([2, 2, 2, 2]);
  const [coupon, setCoupon] = useState("");

  const products = [
    {
      id: 1,
      name: "AV Pro Wireless Headphones",
      image: "https://i.ibb.co.com/PGMQLwVx/image-19.png",
      price: 2000,
      oldPrice: 2800,
    },
    {
      id: 2,
      name: "AV Pro Wireless Headphones",
      image: "https://i.ibb.co.com/DDjkBNX6/dd.png",
      price: 2000,
      oldPrice: 2800,
    },
    {
      id: 3,
      name: "AV Pro Wireless Headphones",
      image: "https://i.ibb.co.com/4n585bNC/ddd.png",
      price: 2000,
      oldPrice: 2800,
    },
    {
      id: 4,
      name: "AV Pro Wireless Headphones",
      image: "https://i.ibb.co.com/kgvL7g4t/dd-2.png",
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
    <div className="w-full bg-[#fafafa] py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-3 sm:px-5 xl:px-0">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.45fr_0.8fr] xl:gap-6">
          {/* ================= CART ================= */}
          <div className="overflow-hidden rounded-xl border border-[#e5e5e5] bg-white">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#eeeeee] px-4 py-4 sm:px-5">
              <div>
                <h2 className="text-base font-bold text-[#222] sm:text-lg">
                  Your Cart
                </h2>

                <p className="mt-1 text-[11px] text-[#888] sm:text-xs">
                  {products.length} products in your cart
                </p>
              </div>

              <button
                type="button"
                className="text-xs font-medium text-[#555] transition-colors hover:text-[#08b8a8]"
              >
                Select All
              </button>
            </div>

            {/* Products */}
            <div className="px-3 sm:px-4">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="flex min-h-[88px] items-center gap-3 border-b border-[#eeeeee] py-3 last:border-b-0 sm:min-h-[100px] sm:gap-4"
                >
                  {/* Product Image */}
                  <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#eeeeee] bg-[#f8f8f8] sm:h-[76px] sm:w-[76px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-1.5"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-xs font-semibold text-[#292929] sm:text-sm">
                      {product.name}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="text-sm font-bold text-[#222] sm:text-base">
                        ৳{product.price.toLocaleString()}
                      </span>

                      <span className="text-[10px] text-[#999] line-through sm:text-xs">
                        ৳{product.oldPrice.toLocaleString()}
                      </span>
                    </div>

                    <span className="mt-1 inline-block rounded-full bg-[#e7faf7] px-2 py-0.5 text-[9px] font-medium text-[#08a99d] sm:text-[10px]">
                      20% OFF
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(index)}
                      className="flex h-7 w-7 items-center justify-center rounded-md border border-[#ffb1b1] bg-[#fffafa] text-[#ff5d5d] transition hover:bg-[#fff0f0] sm:h-8 sm:w-8"
                    >
                      <FiMinus size={12} />
                    </button>

                    <div className="flex h-7 min-w-[32px] items-center justify-center rounded-md bg-[#f5f5f5] px-2 text-xs font-semibold text-[#333] sm:h-8 sm:min-w-[36px]">
                      {quantities[index]}
                    </div>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(index)}
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-[#08b8a8] text-white transition hover:bg-[#00a99a] sm:h-8 sm:w-8"
                    >
                      <FiPlus size={13} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    className="hidden text-[#aaa] transition hover:text-[#ff5d5d] sm:block"
                  >
                    <FiTrash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-4">
            {/* Order Summary */}
            <div className="rounded-xl border border-[#e5e5e5] bg-white p-4 sm:p-5">
              <h2 className="text-base font-bold text-[#222] sm:text-lg">
                Order Summary
              </h2>

              <div className="my-4 border-t border-[#eeeeee]" />

              {/* Subtotal */}
              <div className="flex items-center justify-between py-2">
                <span className="text-xs font-medium text-[#555] sm:text-sm">
                  Subtotal ({products.length} items)
                </span>

                <span className="text-xs font-semibold text-[#222] sm:text-sm">
                  ৳{subtotal.toLocaleString()}
                </span>
              </div>

              {/* Delivery */}
              <div className="flex items-center justify-between py-2">
                <span className="text-xs font-medium text-[#555] sm:text-sm">
                  Delivery
                </span>

                <span className="text-xs font-semibold text-[#222] sm:text-sm">
                  ৳{delivery.toLocaleString()}
                </span>
              </div>

              {/* Discount */}
              <div className="flex items-center justify-between py-2">
                <span className="text-xs font-medium text-[#555] sm:text-sm">
                  Promo (NEW20)
                </span>

                <span className="text-xs font-semibold text-[#00a950] sm:text-sm">
                  -৳{discount.toLocaleString()}
                </span>
              </div>

              <div className="my-3 border-t border-[#eeeeee]" />

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#333] sm:text-base">
                  Total
                </span>

                <span className="text-lg font-bold text-[#08a99d] sm:text-xl">
                  ৳{total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Coupon */}
            <div className="rounded-xl border border-[#e5e5e5] bg-white p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8faf8] text-[#08b8a8]">
                  <FiTag size={15} />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-[#222] sm:text-base">
                    Coupon / Promo Code
                  </h2>

                  <p className="mt-0.5 text-[10px] text-[#999] sm:text-[11px]">
                    Save more with your promo code
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter promo code"
                  className="h-10 min-w-0 flex-1 rounded-lg bg-[#f6f6f6] px-3 text-xs text-[#333] outline-none transition focus:ring-1 focus:ring-[#08b8a8] placeholder:text-[#aaa]"
                />

                <button
                  type="button"
                  className="h-10 rounded-lg bg-[#08b8a8] px-5 text-xs font-semibold text-white transition hover:bg-[#00a99a]"
                >
                  Apply
                </button>
              </div>

              {/* Success */}
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#8add99] bg-[#edfff0] px-3 py-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#35b954] text-[11px] font-bold text-white">
                  ✓
                </span>

                <p className="text-[10px] font-medium text-[#28a644] sm:text-xs">
                  Promo code NEW20 applied — 20% off your first order!
                </p>
              </div>
            </div>

            {/* Checkout */}
            <Link href="/checkout" className="block">
              <button
                type="button"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#08b8a8] text-sm font-semibold text-white transition hover:bg-[#00a99a] sm:h-12"
              >
                <FiShoppingBag size={16} />
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;