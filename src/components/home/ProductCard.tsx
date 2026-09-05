
"use client";

import Image from "next/image";
import { FiArrowRight, FiShoppingBag, FiHeart } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  discount?: number;
}

const ProductCard = ({
  title,
  price,
  image,
  discount,
}: ProductCardProps) => {
  const [favorite, setFavorite] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/Cetagorys/1/");
  };

  return (
    <div
      onClick={handleCardClick}
      className="
        group
        relative
        flex
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-[16px]
        border
        border-[#e5e5e5]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* ================= IMAGE ================= */}
      <div
        className="
          relative
          flex
          h-[200px]
          w-full
          flex-shrink-0
          items-center
          justify-center
          overflow-hidden
        "
      >
        {/* DISCOUNT */}
        <div
          className="
            absolute
            right-0
            top-4
            z-10
            translate-x-full
            rounded-l-lg
            bg-[#f5f5f5]
            px-3
            py-1
            opacity-0
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          <span className="text-[12px] font-semibold leading-none text-[#202020]">
            {discount ? `${discount}% off` : "20% off"}
          </span>
        </div>

        {/* FAVORITE */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setFavorite(!favorite);
          }}
          aria-label="Add to favorites"
          className="
            absolute
            right-7
            top-14
            z-10
            flex
            translate-x-full
            items-center
            justify-center
            opacity-0
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          <FiHeart
            size={24}
            className={
              favorite
                ? "fill-[#ff4757] stroke-[#ff4757]"
                : "stroke-[#d0d0d0]"
            }
          />
        </button>

        {/* PRODUCT IMAGE */}
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="
            h-[140px]
            w-[140px]
            object-contain
            transition-all
            duration-300
            group-hover:h-[110px]
            group-hover:w-[110px]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative overflow-hidden px-4 py-4">
        <div
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-[42px]
          "
        >
          {/* TITLE */}
          <h3 className="line-clamp-2 text-[14px] font-bold leading-[1.3] text-[#202020]">
            {title}
          </h3>

          {/* PRICE */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[16px] font-bold leading-none text-[#202020]">
              ৳{price.toLocaleString()}
            </span>

            {discount && (
              <span className="text-[12px] font-normal leading-none text-[#999] line-through">
                ৳{(price + discount).toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ================= BUTTONS ================= */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          flex
          translate-y-full
          items-center
          gap-2
          px-4
          pb-4
          opacity-0
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        {/* BUY NOW */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            router.push("/checkout");
          }}
          className="
            flex
            h-[36px]
            flex-1
            items-center
            justify-center
            gap-2
            rounded-[8px]
            bg-[#202020]
            text-[13px]
            font-semibold
            leading-none
            text-white
            transition-all
            duration-200
            hover:bg-[#0a0a0a]
            active:scale-95
          "
        >
          Buy Now
          <FiArrowRight size={14} />
        </button>

        {/* CART */}
        <Link href="/cart"
          type="button"
          aria-label="Add to cart"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="
            flex
            h-[36px]
            w-[36px]
            items-center
            justify-center
            rounded-[8px]
            border
            border-[#e5e5e5]
            bg-[#f9f9f9]
            text-[#999]
            transition-all
            duration-200
            hover:border-[#202020]
            hover:bg-[#f0f0f0]
            hover:text-[#202020]
          "
        >
          <FiShoppingBag size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

