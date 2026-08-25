"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Monda } from "next/font/google";

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const categories = [
  {
    id: 1,
    title: "Electronics",
    description:
      "Handcrafted attars with rich woody, floral, musk & oud notes. Available in 3ml, 6ml & 8ml",
    image: "https://i.ibb.co.com/PGMQLwVx/image-19.png",
    products: "48 Products",
    tags: ["Woody", "Floral", "Oud", "Musk"],
  },
  {
    id: 2,
    title: "Attar & Fragrances",
    description:
      "Handcrafted attars with rich woody, floral, musk & oud notes. Available in 3ml, 6ml & 8ml",
    image: "https://i.ibb.co.com/kgvL7g4t/dd-2.png",
    products: "48 Products",
    tags: ["Woody", "Floral", "Oud", "Musk"],
  },
  {
    id: 3,
    title: "Cosmetics",
    description:
      "Handcrafted attars with rich woody, floral, musk & oud notes. Available in 3ml, 6ml & 8ml",
    image: "https://i.ibb.co.com/DDjkBNX6/dd.png",
    products: "48 Products",
    tags: ["Woody", "Floral", "Oud", "Musk"],
  },
];

const ShopbyCategory = () => {
  return (
    <section className={`${monda.className} w-full py-8`}>
      <div className="container mx-auto px-2 xl:px-0">
        <h2 className="text-[20px] font-bold text-[#202020]">
          Shop by Category
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="
                rounded-[9px]
                border
                border-[#e5e5e5]
                bg-[#f9f9f9]
                px-[8px]
                pt-[10px]
                pb-[9px]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              {/* TITLE */}
              <h3 className="text-[20px] font-bold text-[#242424]">
                {category.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-[16px] leading-[120%] text-[#888]">
                {category.description}
              </p>

              {/* IMAGE */}
              <div className="mt-4 flex h-[190px] w-full items-center justify-center">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={335}
                  height={190}
                  className="
                    h-[190px]
                    w-full
                    object-contain
                    transition-transform
                    duration-700
                    ease-in-out
                    hover:scale-110
                  "
                />
              </div>

              {/* BOTTOM INFO */}
              <div className="mt-3 flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap text-[16px] text-[#777]">
                  <span>{category.products}</span>

                  {category.tags.map((tag, index) => (
                    <span key={tag} className="flex items-center gap-1">
                      <span>·</span>
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* ARROW */}
                <button
                  type="button"
                  aria-label={`View ${category.title}`}
                  className="
                    flex
                    h-[30px]
                    w-[30px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[4px]
                    bg-[#12c8c0]
                    text-white
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-[#0db5ae]
                  "
                >
                  <FiArrowUpRight size={20} strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopbyCategory;