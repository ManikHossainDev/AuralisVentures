"use client";

import { FiArrowRight } from "react-icons/fi";
import { Monda } from "next/font/google";
import ProductCard from "./ProductCard";


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
  {
    id: 5,
    name: "AV Pro Wireless Headphones",
    image: "https://i.ibb.co.com/PGMQLwVx/image-19.png",
    price: 2000,
    oldPrice: 2800,
  },
  {
    id: 6,
    name: "AV Pro Wireless Headphones",
    image: "https://i.ibb.co.com/DDjkBNX6/dd.png",
    price: 2000,
    oldPrice: 2800,
  },
  {
    id: 7,
    name: "Al Haramain Haneen 25 ML",
    image: "https://i.ibb.co.com/4n585bNC/ddd.png",
    price: 2000,
    oldPrice: 2800,
  },
  {
    id: 8,
    name: "AV Pro Wireless Headphones",
    image: "https://i.ibb.co.com/kgvL7g4t/dd-2.png",
    price: 2000,
    oldPrice: 2800,
  },
];

const ExclusiveDeals = () => {
  return (
    <section className={`${monda.className} w-full py-8 xl:pb-12`}>
      <div className="container mx-auto px-2 xl:px-0">
        {/* Header */}
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-[20px] font-bold leading-[100%] text-[#202020]">
            Exclusive Deals
          </h2>

          <button
            type="button"
            className="
              flex
              items-center
              gap-1
              border-b
              border-[#999]
              pb-1
              text-[11px]
              text-[#777]
              transition-colors
              hover:border-[#19c7c0]
              hover:text-[#19c7c0]
            "
          >
            View All Products
            <FiArrowRight size={12} />
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
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

export default ExclusiveDeals;