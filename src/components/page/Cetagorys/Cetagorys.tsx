"use client";

import { useState } from "react";
import { FiStar, FiArrowRight, FiCheck } from "react-icons/fi";
import { Monda } from "next/font/google";
import ProductCard from "@/components/home/ProductCard";


const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ================= FILTER DATA =================

type FilterOption = {
  id: string;
  label: string;
};

const CATEGORIES: FilterOption[] = [
  { id: "electronics", label: "Electronics" },
  { id: "attar-fragrances", label: "Attar & Fragrances" },
  { id: "cosmetics", label: "Cosmetics" },
];

const SUB_CATEGORIES: FilterOption[] = [
  { id: "headphones", label: "Headphones" },
  { id: "camera", label: "Camera" },
  { id: "keyboard", label: "Keyboard" },
  { id: "mouse", label: "Mouse" },
];

const BRANDS: FilterOption[] = [
  { id: "brand-01", label: "Brand 01" },
  { id: "brand-02", label: "Brand 02" },
  { id: "brand-03", label: "Brand 03" },
];

const WARRANTY_TYPES: FilterOption[] = [
  { id: "no-warranty", label: "No Warranty" },
  { id: "seller-warranty", label: "Seller Warranty" },
  { id: "brand-warranty", label: "Brand Warranty" },
];

// ================= PRODUCT DATA =================

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
    name: "AV Pro Wireless Headphones",
    image: "https://i.ibb.co.com/PGMQLwVx/image-19.png",
    price: 2000,
    oldPrice: 2800,
  },
  {
    id: 8,
    name: "AV Pro Wireless Headphones",
    image: "https://i.ibb.co.com/DDjkBNX6/dd.png",
    price: 2000,
    oldPrice: 2800,
  },
];

// ================= CHECK ROW =================

const CheckRow = ({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) => (
  <button
    type="button"
    onClick={onToggle}
    className="flex w-full items-center justify-between py-[7px] text-left"
  >
    <span
      className={`text-[12.5px] font-normal leading-[100%] tracking-[0%] transition-colors duration-200 ${
        checked ? "text-[#202020]" : "text-[#777]"
      }`}
    >
      {label}
    </span>

    <span
      className={`flex h-[16px] w-[16px] items-center justify-center rounded-[4px] border transition-all duration-200 ${
        checked
          ? "border-[#171717] bg-[#171717]"
          : "border-[#d9d9d9] bg-white"
      }`}
    >
      {checked && <FiCheck size={11} className="text-white" />}
    </span>
  </button>
);

// ================= FILTER SECTION =================

const FilterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="border-b border-[#ececec] py-[18px] first:pt-0">
    <h3 className="mb-[6px] text-[13px] font-bold leading-[100%] tracking-[0%] text-[#202020]">
      {title}
    </h3>

    <div>{children}</div>
  </div>
);

// ================= MAIN COMPONENT =================

const Cetagorys = () => {
  const [category, setCategory] = useState<string>("electronics");

  const [subCategory, setSubCategory] =
    useState<string>("headphones");

  const [brands, setBrands] = useState<Set<string>>(
    new Set(["brand-01"])
  );

  const [warranty, setWarranty] =
    useState<string>("no-warranty");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // ================= BRAND TOGGLE =================

  const toggleBrand = (id: string) => {
    setBrands((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  return (
    <section className={`${monda.className} w-full py-8`}>
      <div className="mx-auto flex items-start gap-8 px-2 xl:container xl:px-0">

        {/* ================= SIDEBAR ================= */}

        <aside className="w-full max-w-[220px] shrink-0 text-[#202020]">

          {/* Category */}
          <FilterSection title="Category">
            {CATEGORIES.map((item) => (
              <CheckRow
                key={item.id}
                label={item.label}
                checked={category === item.id}
                onToggle={() => setCategory(item.id)}
              />
            ))}
          </FilterSection>

          {/* Sub Category */}
          <FilterSection title="Sub Category">
            {SUB_CATEGORIES.map((item) => (
              <CheckRow
                key={item.id}
                label={item.label}
                checked={subCategory === item.id}
                onToggle={() => setSubCategory(item.id)}
              />
            ))}
          </FilterSection>

          {/* Brand */}
          <FilterSection title="Brand">
            {BRANDS.map((item) => (
              <CheckRow
                key={item.id}
                label={item.label}
                checked={brands.has(item.id)}
                onToggle={() => toggleBrand(item.id)}
              />
            ))}
          </FilterSection>

          {/* Price */}
          <FilterSection title="Price">
            <div className="mt-[4px] flex items-center gap-[8px]">

              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="
                  h-[32px]
                  w-full
                  min-w-0
                  rounded-[8px]
                  border
                  border-[#e5e5e5]
                  bg-[#f7f7f7]
                  px-[10px]
                  text-[11px]
                  text-[#202020]
                  outline-none
                  placeholder:text-[#aaa]
                  focus:border-[#171717]
                "
              />

              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="
                  h-[32px]
                  w-full
                  min-w-0
                  rounded-[8px]
                  border
                  border-[#e5e5e5]
                  bg-[#f7f7f7]
                  px-[10px]
                  text-[11px]
                  text-[#202020]
                  outline-none
                  placeholder:text-[#aaa]
                  focus:border-[#171717]
                "
              />

              <button
                type="button"
                aria-label="Apply price filter"
                className="
                  flex
                  h-[32px]
                  w-[32px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[8px]
                  bg-[#171717]
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-[#149c96]
                "
              >
                <FiArrowRight size={14} />
              </button>
            </div>
          </FilterSection>

          {/* Warranty */}
          <FilterSection title="Warranty Type">
            {WARRANTY_TYPES.map((item) => (
              <CheckRow
                key={item.id}
                label={item.label}
                checked={warranty === item.id}
                onToggle={() => setWarranty(item.id)}
              />
            ))}
          </FilterSection>
        </aside>

        {/* ================= MAIN CONTENT ================= */}

        <div className="min-w-0 flex-1">

          {/* Product Header */}
          <div className="mb-5">

            <h1 className="text-[19px] font-bold leading-[100%] tracking-[0%] text-[#202020]">
              Al Haramain Haneen 25 ML
            </h1>

            <div className="mt-[8px] flex items-center gap-[8px]">

              {/* Rating */}
              <div className="flex items-center gap-[2px] text-[#f3b13a]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    size={12}
                    fill="#f3b13a"
                  />
                ))}
              </div>

              <span className="text-[11px] font-normal text-[#999]">
                (0 People Rated)
              </span>
            </div>

            <p className="mt-[6px] text-[11px] font-normal text-[#171717]">
              331 People are Viewing this item Right Now
            </p>
          </div>

          {/* ================= PRODUCTS ================= */}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                discount={product.oldPrice}
                image={product.image}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cetagorys;