"use client";

import Image from "next/image";
import { FiArrowRight, FiHeart, FiShoppingBag } from "react-icons/fi";
import { Monda } from "next/font/google";

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    name: "Al Haramain Haneen 25 ML",
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

const Relatedproducts = () => {
  return (
    <section className={`${monda.className} w-full py-8 xl:py-12`}>
      <div className="container mx-auto px-2 xl:px-0">
        {/* ================= HEADER ================= */}
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-[20px] font-bold leading-[100%] tracking-[0%] text-[#202020]">
            Related products
          </h2>

          <button
            type="button"
            className="flex items-center gap-1 border-b border-[#999] pb-1 text-[11px] font-normal leading-[100%] tracking-[0%] text-[#777] transition-colors duration-200 hover:border-[#19c7c0] hover:text-[#19c7c0]"
          >
            View All Products
            <FiArrowRight size={12} />
          </button>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-[#f8f8f8] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* ================= PRODUCT IMAGE ================= */}
              <div className="relative flex h-[244px] items-center justify-center bg-[#f7f7f7]">
                {/* Wishlist */}
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="absolute left-[10px] top-[9px] z-10 flex h-[29px] w-[29px] items-center justify-center rounded-[9px] bg-[#e9e9e9] text-[#777] transition-all duration-200 hover:bg-[#dff8f6] hover:text-[#19c7c0]"
                >
                  <FiHeart size={15} />
                </button>

                {/* Discount */}
                <span className="absolute right-0 top-[9px] z-10 rounded-l-[9px] bg-[#c8f5ef] px-[12px] py-[8px] text-[10px] font-bold leading-none text-[#18bdb5]">
                  20% off
                </span>

                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={244}
                  unoptimized
                  className="h-[244px] w-[244px] object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* ================= PRODUCT CONTENT ================= */}
              <div className="px-[10px] pb-[10px] pt-[7px]">
                {/* Product Name */}
                <h3 className="truncate text-[12px] font-bold leading-[100%] tracking-[0%] text-[#292929]">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mt-[6px] line-clamp-2 min-h-[26px] text-[12px] font-normal leading-[100%] tracking-[0%] text-[#888]">
                  Handcrafted attars with rich woody, floral, musk & oud
                  notes. Available in 3ml, 6ml & 8ml
                </p>

                {/* Price */}
                <div className="mt-[9px] flex items-center gap-[8px]">
                  <span className="text-[13px] font-bold leading-[100%] tracking-[0%] text-[#222]">
                    ৳{product.price.toLocaleString()}
                  </span>

                  <span className="text-[12px] font-normal leading-[100%] tracking-[0%] text-[#999] line-through">
                    ৳{product.oldPrice.toLocaleString()}
                  </span>
                </div>

                {/* ================= BUTTONS ================= */}
                <div className="mt-[9px] flex items-center gap-[4px]">
                  {/* Buy Now */}
                  <button
                    type="button"
                    className="flex h-[29px] flex-1 items-center justify-center gap-[7px] rounded-[8px] bg-[#bce9e7] text-[10px] font-normal leading-[100%] tracking-[0%] text-white transition-colors duration-200 hover:bg-[#19c7c0]"
                  >
                    Buy Now
                    <FiArrowRight size={12} />
                  </button>

                  {/* Add To Cart */}
                  <button
                    type="button"
                    aria-label="Add to cart"
                    className="flex h-[29px] w-[29px] items-center justify-center rounded-[8px] border border-[#e5e5e5] bg-[#f5f5f5] text-[#b7b7b7] transition-all duration-200 hover:border-[#19c7c0] hover:bg-[#e5fafa] hover:text-[#19c7c0]"
                  >
                    <FiShoppingBag size={13} />
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

export default Relatedproducts;