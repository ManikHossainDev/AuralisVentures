"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiStar,
  FiEye,
  FiMinus,
  FiPlus,
  FiArrowRight,
  FiShoppingBag,
  FiImage,
  FiSend,
} from "react-icons/fi";
import { Monda } from "next/font/google";
import Relatedproducts from "./Relatedproducts";

// ======================================================
// FONT
// ======================================================

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ======================================================
// TYPES
// ======================================================

interface CetagorysDetailsProps {
  id: string;
}

interface ProductDetail {
  label: string;
  value: string;
}

type ActiveTab = "description" | "reviews";

interface RatingBreakdown {
  star: number;
  count: number;
}

interface Review {
  id: number;
  name: string;
  avatar: string;
  date: string;
  location: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
}

// ======================================================
// PRODUCT IMAGES
// ======================================================

const productImages: string[] = [
  "https://i.ibb.co.com/PGMQLwVx/image-19.png",
  "https://i.ibb.co.com/DDjkBNX6/dd.png",
  "https://i.ibb.co.com/4n585bNC/ddd.png",
  "https://i.ibb.co.com/kgvL7g4t/dd-2.png",
];

// ======================================================
// TOP SELLING PRODUCTS
// ======================================================

const topSellingProducts = [
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
];

// ======================================================
// PRODUCT DATA
// ======================================================

const product = {
  name: "Al Haramain Haneen 25 ML",
  regularPrice: 2800,
  price: 2000,
  discountPercent: 20,
  viewers: 231,
  rating: 4.8,
};

// ======================================================
// PRODUCT DESCRIPTION
// ======================================================

const descriptionText =
  "Al Haramain Haneen 25 ML is a premium fragrance designed with a beautiful and long-lasting scent. Its elegant aroma makes it suitable for everyday use as well as special occasions.";

// ======================================================
// PRODUCT DETAILS
// ======================================================

const productDetails: ProductDetail[] = [
  {
    label: "Product Name",
    value: product.name,
  },
  {
    label: "Brand",
    value: "Al Haramain",
  },
  {
    label: "Volume",
    value: "25 ML",
  },
  {
    label: "Product Type",
    value: "Perfume",
  },
  {
    label: "Availability",
    value: "In Stock",
  },
];

// ======================================================
// REVIEW SUMMARY + LIST DATA
// (Swap these with real data from your API)
// ======================================================

const totalReviews = 127;

const ratingBreakdown: RatingBreakdown[] = [
  { star: 5, count: 99 },
  { star: 4, count: 99 },
  { star: 3, count: 99 },
  { star: 2, count: 99 },
  { star: 1, count: 99 },
];

const reviews: Review[] = [
  {
    id: 1,
    name: "From website",
    avatar: "https://i.ibb.co.com/4n585bNC/ddd.png",
    date: "May 10, 2026",
    location: "Dhaka",
    rating: 5,
    title: "Good Product",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    images: [
      "https://i.ibb.co.com/PGMQLwVx/image-19.png",
      "https://i.ibb.co.com/DDjkBNX6/dd.png",
      "https://i.ibb.co.com/kgvL7g4t/dd-2.png",
    ],
  },
];

// ======================================================
// MAIN COMPONENT
// ======================================================

const CetagorysDetails = ({ id }: CetagorysDetailsProps) => {
  // ====================================================
  // STATES
  // ====================================================

  const [activeImage, setActiveImage] = useState<number>(0);

  const [quantity, setQuantity] = useState<number>(1);

  const [activeTab, setActiveTab] =
    useState<ActiveTab>("description");

  // FIXED
  const [reviewSource, setReviewSource] = useState<
    "website" | "other"
  >("website");

  // Review form state
  const [formRating, setFormRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formReview, setFormReview] = useState("");
  const [formPhotos, setFormPhotos] = useState<File[]>([]);

  // ====================================================
  // TOTAL PRICE
  // ====================================================

  const totalPrice = product.price * quantity;

  // ====================================================
  // QUANTITY HANDLERS
  // ====================================================

  const decrement = () => {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1)
    );
  };

  const increment = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  // ====================================================
  // REVIEW FORM HANDLERS
  // ====================================================

  const handlePhotoUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files) return;

    setFormPhotos((current) =>
      [...current, ...Array.from(files)].slice(0, 3)
    );
  };

  const handleSubmitReview = () => {
    // TODO: wire this up to your API
    console.log({
      rating: formRating,
      name: formName,
      email: formEmail,
      title: formTitle,
      review: formReview,
      photos: formPhotos,
    });
  };

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <section className={`${monda.className} w-full py-8`}>
      {/* ==================================================
          PRODUCT MAIN SECTION
      ================================================== */}

      <div className="container mx-auto flex flex-col items-start gap-8 px-4 xl:flex-row xl:px-0">
        {/* ==================================================
            LEFT - PRODUCT GALLERY
        ================================================== */}

        <div className="w-full shrink-0 xl:max-w-[300px]">
          {/* Main Image */}

          <div className="flex h-[300px] w-full items-center justify-center rounded-[12px] border border-[#e5e5e5] bg-[#f8f8f8]">
            <Image
              src={productImages[activeImage]}
              alt={product.name}
              width={260}
              height={260}
              unoptimized
              priority
              className="h-[260px] w-[260px] object-contain p-2"
            />
          </div>

          {/* Thumbnail Images */}

          <div className="mt-[10px] grid grid-cols-4 gap-[8px]">
            {productImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
                className={`flex h-[64px] items-center justify-center rounded-[8px] border bg-[#f8f8f8] transition-all duration-200 ${
                  activeImage === index
                    ? "border-[#19c7c0]"
                    : "border-[#e5e5e5] hover:border-[#bcecea]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={48}
                  height={48}
                  unoptimized
                  className="h-[48px] w-[48px] object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ==================================================
            MIDDLE - PRODUCT INFORMATION
        ================================================== */}

        <div className="min-w-0 w-full flex-1">
          {/* Product Name */}

          <h1 className="text-[19px] font-bold leading-[100%] tracking-[0%] text-[#202020]">
            {product.name}
          </h1>

          {/* Rating */}

          <div className="mt-[8px] flex items-center gap-[10px]">
            <div className="flex items-center gap-[2px] text-[#facc15]">
              {Array.from({ length: 5 }).map((_, index) => (
                <FiStar
                  key={index}
                  size={12}
                  fill={
                    index < Math.round(product.rating)
                      ? "#facc15"
                      : "none"
                  }
                />
              ))}
            </div>

            <span className="text-[11px] font-normal text-[#999]">
              ({totalReviews} reviews)
            </span>
          </div>

          {/* Viewers */}

          <div className="mt-[8px] flex items-center gap-[6px] text-[11px] font-normal text-[#999]">
            <FiEye size={12} />

            <span>
              {product.viewers} People are Viewing this item
              Right Now.
            </span>
          </div>

          {/* Regular Price */}

          <p className="mt-[18px] text-[12px] font-normal text-[#999]">
            Regular Price:{" "}
            <span className="line-through">
              ৳{product.regularPrice.toLocaleString()}
            </span>
          </p>

          {/* Current Price + Discount */}

          <div className="mt-[4px] flex flex-wrap items-center gap-[10px]">
            <span className="text-[26px] font-bold leading-[100%] tracking-[0%] text-[#202020]">
              ৳{product.price.toLocaleString()}
            </span>

            <span className="rounded-[6px] bg-[#c8f5ef] px-[10px] py-[5px] text-[11px] font-bold leading-none text-[#18bdb5]">
              Save {product.discountPercent}%
            </span>
          </div>

          {/* Quantity */}

          <p className="mt-[20px] text-[12px] font-bold text-[#202020]">
            Quantity:
          </p>

          <div className="mt-[8px] flex items-center gap-[10px]">
            {/* Minus */}

            <button
              type="button"
              onClick={decrement}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] border border-[#e5e5e5] bg-[#f5f5f5] text-[#666] transition-colors duration-200 hover:border-[#19c7c0] hover:text-[#19c7c0] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiMinus size={13} />
            </button>

            {/* Quantity Number */}

            <span className="flex h-[34px] w-[40px] items-center justify-center rounded-[8px] border border-[#e5e5e5] text-[13px] font-bold text-[#202020]">
              {quantity}
            </span>

            {/* Plus */}

            <button
              type="button"
              onClick={increment}
              aria-label="Increase quantity"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] bg-[#333] text-white transition-colors duration-200 hover:bg-[#19c7c0]"
            >
              <FiPlus size={13} />
            </button>
          </div>

          {/* Total Price */}

          <p className="mt-[20px] text-[16px] font-bold leading-[100%] tracking-[0%] text-[#202020]">
            Total Price:{" "}
            <span className="text-[#19c7c0]">
              ৳{totalPrice.toLocaleString()}
            </span>
          </p>

          {/* Buttons */}

          <div className="mt-[16px] flex items-center gap-[8px]">
            {/* Buy Now */}

            <button
              type="button"
              className="flex h-[42px] items-center justify-center gap-[8px] rounded-[10px] bg-[#19c7c0] px-[26px] text-[13px] font-normal leading-[100%] tracking-[0%] text-white transition-colors duration-200 hover:bg-[#149c96]"
            >
              Buy Now

              <FiArrowRight size={14} />
            </button>

            {/* Add To Cart */}

            <button
              type="button"
              aria-label="Add to cart"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-[#e5e5e5] bg-[#f5f5f5] text-[#b7b7b7] transition-all duration-200 hover:border-[#19c7c0] hover:bg-[#e5fafa] hover:text-[#19c7c0]"
            >
              <FiShoppingBag size={16} />
            </button>
          </div>

          {/* Category ID */}

          <p className="mt-4 text-[10px] text-gray-400">
            Category ID: {id}
          </p>
        </div>

        {/* ==================================================
            RIGHT - TOP SELLING PRODUCTS
        ================================================== */}

        <aside className="w-full shrink-0 rounded-[10px] border border-[#e5e5e5] bg-white p-[14px] xl:max-w-[240px]">
          <h2 className="mb-[10px] text-[13px] font-bold leading-[100%] tracking-[0%] text-[#202020]">
            Top Selling Products
          </h2>

          <div className="flex flex-col divide-y divide-[#ececec]">
            {topSellingProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-[10px] py-[10px]"
              >
                {/* Product Image */}

                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[8px] bg-[#f7f7f7]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={36}
                    height={36}
                    unoptimized
                    className="h-[36px] w-[36px] object-contain"
                  />
                </div>

                {/* Product Info */}

                <div className="min-w-0">
                  <p className="truncate text-[11px] font-bold leading-[100%] tracking-[0%] text-[#292929]">
                    {item.name}
                  </p>

                  <div className="mt-[6px] flex items-center gap-[6px]">
                    <span className="text-[12px] font-bold text-[#222]">
                      ৳{item.price.toLocaleString()}
                    </span>

                    <span className="text-[10px] font-normal text-[#999] line-through">
                      ৳{item.oldPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* ==================================================
          DESCRIPTION / REVIEWS
      ================================================== */}

      <div className="container mx-auto mt-10 px-4 xl:px-0">
        {/* Tabs */}

        <div className="flex items-center gap-[28px] border-b border-[#e5e5e5]">
          {/* Description Tab */}

          <button
            type="button"
            onClick={() => setActiveTab("description")}
            className={`relative pb-[12px] text-[15px] font-bold transition-colors duration-200 ${
              activeTab === "description"
                ? "text-[#202020]"
                : "text-[#b3b3b3]"
            }`}
          >
            Description

            {activeTab === "description" && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#19c7c0]" />
            )}
          </button>

          {/* Reviews Tab */}

          <button
            type="button"
            onClick={() => setActiveTab("reviews")}
            className={`relative pb-[12px] text-[15px] font-bold transition-colors duration-200 ${
              activeTab === "reviews"
                ? "text-[#202020]"
                : "text-[#b3b3b3]"
            }`}
          >
            Reviews

            {activeTab === "reviews" && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#19c7c0]" />
            )}
          </button>
        </div>

        {/* ==================================================
            TAB CONTENT
        ================================================== */}

        {activeTab === "description" ? (
          // ==================================================
          // DESCRIPTION TAB
          // ==================================================

          <div className="pt-[20px]">
            {/* Description */}

            <p className="text-[13px] font-normal leading-[22px] text-[#666]">
              {descriptionText}
            </p>

            {/* Product Details */}

            <div className="mt-[20px] flex flex-col gap-[10px]">
              {productDetails.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col text-[13px] sm:flex-row"
                >
                  <span className="w-full shrink-0 font-normal text-[#666] sm:w-[220px]">
                    {row.label}
                  </span>

                  <span className="mr-[10px] hidden text-[#666] sm:block">
                    :
                  </span>

                  <span className="font-normal text-[#666]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // ==================================================
          // REVIEWS TAB
          // ==================================================

          <div className="pt-[20px]">
            {/* Rating Summary + Review List */}

            <div className="flex flex-col gap-6 lg:flex-row">
              {/* Rating Summary */}

              <div className="w-full shrink-0 rounded-[12px] border border-[#e5e5e5] bg-white p-[18px] lg:max-w-[220px]">
                <p className="text-center text-[28px] font-bold text-[#202020]">
                  {product.rating}
                </p>

                <div className="mt-[4px] flex items-center justify-center gap-[2px] text-[#facc15]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiStar
                      key={index}
                      size={14}
                      fill={
                        index < Math.round(product.rating)
                          ? "#facc15"
                          : "none"
                      }
                    />
                  ))}
                </div>

                <p className="mt-[4px] text-center text-[11px] text-[#999]">
                  Based on {totalReviews} reviews
                </p>

                <div className="mt-[16px] flex flex-col gap-[8px]">
                  {ratingBreakdown.map((row) => (
                    <div
                      key={row.star}
                      className="flex items-center gap-[6px] text-[11px] text-[#666]"
                    >
                      <span className="w-[16px] shrink-0">
                        {row.star}
                      </span>

                      <FiStar
                        size={10}
                        fill="#facc15"
                        className="shrink-0 text-[#facc15]"
                      />

                      <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-[#e5e5e5]">
                        <div
                          className="h-full rounded-full bg-[#19c7c0]"
                          style={{
                            width: `${
                              (row.count / totalReviews) * 100
                            }%`,
                          }}
                        />
                      </div>

                      <span className="w-[24px] shrink-0 text-right">
                        {row.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review List */}

              <div className="w-full flex-1">
                {/* Source Filter */}

                <div className="mb-[16px] flex items-center gap-[10px]">
                  <button
                    type="button"
                    onClick={() => setReviewSource("website")}
                    className={`rounded-[8px] px-[16px] py-[8px] text-[12px] font-bold transition-colors duration-200 ${
                      reviewSource === "website"
                        ? "bg-[#19c7c0] text-white"
                        : "border border-[#e5e5e5] bg-white text-[#666] hover:border-[#19c7c0]"
                    }`}
                  >
                    From website
                  </button>

                  <button
                    type="button"
                    onClick={() => setReviewSource("other")}
                    className={`rounded-[8px] px-[16px] py-[8px] text-[12px] font-bold transition-colors duration-200 ${
                      reviewSource === "other"
                        ? "bg-[#19c7c0] text-white"
                        : "border border-[#e5e5e5] bg-white text-[#666] hover:border-[#19c7c0]"
                    }`}
                  >
                    Other Platform
                  </button>
                </div>

                {/* Review Cards */}

                {reviews.length === 0 ? (
                  <p className="text-[13px] text-[#999]">
                    No reviews yet.
                  </p>
                ) : (
                  <div className="flex flex-col gap-[18px]">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-[#ececec] pb-[18px] last:border-b-0"
                      >
                        {/* Reviewer Info */}

                        <div className="flex items-center gap-[10px]">
                          <div className="h-[36px] w-[36px] shrink-0 overflow-hidden rounded-full bg-[#f0f0f0]">
                            <Image
                              src={review.avatar}
                              alt={review.name}
                              width={36}
                              height={36}
                              unoptimized
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div>
                            <p className="text-[13px] font-bold text-[#202020]">
                              {review.name}
                            </p>

                            <p className="text-[11px] text-[#999]">
                              {review.date} - {review.location}
                            </p>
                          </div>
                        </div>

                        {/* Rating */}

                        <div className="mt-[8px] flex items-center gap-[6px]">
                          <div className="flex items-center gap-[2px] text-[#facc15]">
                            {Array.from({ length: 5 }).map(
                              (_, index) => (
                                <FiStar
                                  key={index}
                                  size={12}
                                  fill={
                                    index < review.rating
                                      ? "#facc15"
                                      : "none"
                                  }
                                />
                              )
                            )}
                          </div>

                          <span className="text-[11px] font-bold text-[#666]">
                            {review.rating.toFixed(1)}
                          </span>
                        </div>

                        {/* Review Images */}

                        {review.images &&
                          review.images.length > 0 && (
                            <div className="mt-[10px] flex gap-[8px]">
                              {review.images.map((img, index) => (
                                <div
                                  key={index}
                                  className="h-[56px] w-[56px] overflow-hidden rounded-[8px] bg-[#f0f0f0]"
                                >
                                  <Image
                                    src={img}
                                    alt={`${review.title} photo ${
                                      index + 1
                                    }`}
                                    width={56}
                                    height={56}
                                    unoptimized
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                        {/* Title + Content */}

                        <p className="mt-[10px] text-[13px] font-bold text-[#202020]">
                          {review.title}
                        </p>

                        <p className="mt-[6px] text-[13px] leading-[22px] text-[#666]">
                          {review.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ==================================================
                WRITE A REVIEW FORM
            ================================================== */}

            <div className="mt-[32px] rounded-[12px] border border-[#e5e5e5] bg-white p-[20px]">
              <h3 className="text-[15px] font-bold text-[#202020]">
                Write a Review
              </h3>

              <p className="mt-[4px] text-[12px] text-[#999]">
                Share your experience with this product to help
                other customers.
              </p>

              {/* Rating Input */}

              <p className="mt-[20px] text-[13px] font-bold text-[#202020]">
                Your Rating{" "}
                <span className="text-red-500">*</span>
              </p>

              <div className="mt-[8px] flex items-center gap-[4px]">
                {Array.from({ length: 5 }).map((_, index) => {
                  const starValue = index + 1;

                  return (
                    <button
                      key={starValue}
                      type="button"
                      aria-label={`Rate ${starValue} stars`}
                      onClick={() => setFormRating(starValue)}
                      onMouseEnter={() =>
                        setHoverRating(starValue)
                      }
                      onMouseLeave={() => setHoverRating(0)}
                      className="text-[#d9d9d9]"
                    >
                      <FiStar
                        size={22}
                        fill={
                          starValue <=
                          (hoverRating || formRating)
                            ? "#facc15"
                            : "none"
                        }
                        className={
                          starValue <=
                          (hoverRating || formRating)
                            ? "text-[#facc15]"
                            : "text-[#d9d9d9]"
                        }
                      />
                    </button>
                  );
                })}
              </div>

              {/* Name + Email */}

              <div className="mt-[18px] grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                <div>
                  <label className="text-[13px] font-bold text-[#202020]">
                    Your Name{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="your name"
                    className="mt-[8px] h-[42px] w-full rounded-[8px] border border-[#e5e5e5] px-[14px] text-[13px] text-[#202020] outline-none transition-colors duration-200 focus:border-[#19c7c0]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-bold text-[#202020]">
                    Email Address{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="your name"
                    className="mt-[8px] h-[42px] w-full rounded-[8px] border border-[#e5e5e5] px-[14px] text-[13px] text-[#202020] outline-none transition-colors duration-200 focus:border-[#19c7c0]"
                  />
                </div>
              </div>

              {/* Review Title */}

              <div className="mt-[14px]">
                <label className="text-[13px] font-bold text-[#202020]">
                  Review Title{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Summaries your experience in one line..."
                  className="mt-[8px] h-[42px] w-full rounded-[8px] border border-[#e5e5e5] px-[14px] text-[13px] text-[#202020] outline-none transition-colors duration-200 focus:border-[#19c7c0]"
                />
              </div>

              {/* Review Content */}

              <div className="mt-[14px]">
                <label className="text-[13px] font-bold text-[#202020]">
                  Your Review{" "}
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                  placeholder="Tell others what you liked or didn't like. Was the scent as described? How was the packaging and delivery?"
                  rows={4}
                  className="mt-[8px] w-full resize-none rounded-[8px] border border-[#e5e5e5] px-[14px] py-[10px] text-[13px] text-[#202020] outline-none transition-colors duration-200 focus:border-[#19c7c0]"
                />
              </div>

              {/* Photo Upload */}

              <div className="mt-[14px]">
                <label className="text-[13px] font-bold text-[#202020]">
                  Add Photos (optional)
                </label>

                <label
                  htmlFor="review-photo-upload"
                  className="mt-[8px] flex h-[42px] w-full cursor-pointer items-center gap-[8px] rounded-[8px] border border-dashed border-[#e5e5e5] px-[14px] text-[12px] text-[#999] transition-colors duration-200 hover:border-[#19c7c0]"
                >
                  <FiImage size={14} />

                  {formPhotos.length > 0
                    ? `${formPhotos.length} photo${
                        formPhotos.length > 1 ? "s" : ""
                      } selected`
                    : "Click to upload photos of the product (max 3 images)"}
                </label>

                <input
                  id="review-photo-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </div>

              {/* Submit */}

              <div className="mt-[18px] flex flex-wrap items-center gap-[14px]">
                <button
                  type="button"
                  onClick={handleSubmitReview}
                  className="flex h-[42px] items-center justify-center gap-[8px] rounded-[10px] bg-[#19c7c0] px-[22px] text-[13px] font-bold text-white transition-colors duration-200 hover:bg-[#149c96]"
                >
                  Submit Review

                  <FiSend size={13} />
                </button>

                <span className="text-[11px] text-[#999]">
                  Reviews are published after a brief verification
                  check.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================================================
          RELATED PRODUCTS
      ================================================== */}

      <Relatedproducts />
    </section>
  );
};

export default CetagorysDetails;