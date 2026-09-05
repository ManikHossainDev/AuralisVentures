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
import Link from "next/link";

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
// REVIEWS
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
  const [activeImage, setActiveImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const [activeTab, setActiveTab] =
    useState<ActiveTab>("description");

  const [reviewSource, setReviewSource] = useState<
    "website" | "other"
  >("website");

  const [formRating, setFormRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formReview, setFormReview] = useState("");
  const [formPhotos, setFormPhotos] = useState<File[]>([]);

  // ======================================================
  // TOTAL PRICE
  // ======================================================

  const totalPrice = product.price * quantity;

  // ======================================================
  // QUANTITY
  // ======================================================

  const decrement = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increment = () => {
    setQuantity((current) => current + 1);
  };

  // ======================================================
  // PHOTO UPLOAD
  // ======================================================

  const handlePhotoUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files) return;

    setFormPhotos((current) =>
      [...current, ...Array.from(files)].slice(0, 3)
    );
  };

  // ======================================================
  // REVIEW SUBMIT
  // ======================================================

  const handleSubmitReview = () => {
    console.log({
      rating: formRating,
      name: formName,
      email: formEmail,
      title: formTitle,
      review: formReview,
      photos: formPhotos,
    });
  };

  return (
    <section className={`${monda.className} w-full py-8 sm:py-10`}>
      {/* ==================================================
          PRODUCT SECTION
      ================================================== */}

      <div className="container mx-auto px-3 sm:px-5 xl:px-0">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[310px_minmax(0,1fr)_260px] xl:gap-8">

          {/* ==================================================
              LEFT - PRODUCT GALLERY
          ================================================== */}

          <div className="w-full">
            {/* Main Image */}

            <div className="flex h-[320px] w-full items-center justify-center overflow-hidden rounded-xl border border-[#e5e5e5]  sm:h-[350px]">
              <Image
                src={productImages[activeImage]}
                alt={product.name}
                width={320}
                height={320}
                unoptimized
                priority
                className="h-[290px] w-[290px] object-contain p-2 transition-transform duration-300 hover:scale-105 sm:h-[320px] sm:w-[320px]"
              />
            </div>

            {/* Thumbnails */}

            <div className="mt-3 grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`flex h-[72px] items-center justify-center overflow-hidden rounded-lg border  transition-all duration-200 sm:h-[78px] ${
                    activeImage === index
                      ? "border-[#19c7c0] shadow-sm"
                      : "border-[#e5e5e5] hover:border-[#bcecea]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    width={60}
                    height={60}
                    unoptimized
                    className="h-[58px] w-[58px] object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ==================================================
              MIDDLE - PRODUCT INFORMATION
          ================================================== */}

          <div className="min-w-0 w-full">
            {/* Product Name */}

            <h1 className="text-[22px] font-bold leading-tight text-[#202020] sm:text-[25px]">
              {product.name}
            </h1>

            {/* Rating */}

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-[#facc15]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar
                    key={index}
                    size={15}
                    fill={
                      index < Math.round(product.rating)
                        ? "#facc15"
                        : "none"
                    }
                  />
                ))}
              </div>

              <span className="text-xs text-[#999]">
                {product.rating} ({totalReviews} reviews)
              </span>
            </div>

            {/* Viewers */}

            <div className="mt-3 flex items-center gap-2 text-xs text-[#888]">
              <FiEye size={14} />

              <span>
                {product.viewers} people are viewing this item right
                now
              </span>
            </div>

            {/* Price */}

            <div className="mt-6 border-y border-[#eeeeee] py-5">
              <p className="text-xs text-[#999]">
                Regular Price:{" "}
                <span className="line-through">
                  ৳{product.regularPrice.toLocaleString()}
                </span>
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="text-[30px] font-bold leading-none text-[#202020] sm:text-[32px]">
                  ৳{product.price.toLocaleString()}
                </span>

                <span className="rounded-md bg-[#c8f5ef] px-3 py-1.5 text-xs font-bold text-[#18bdb5]">
                  Save {product.discountPercent}%
                </span>
              </div>
            </div>

            {/* Quantity */}

            <div className="mt-5">
              <p className="text-sm font-bold text-[#202020]">
                Quantity
              </p>

              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={decrement}
                  disabled={quantity <= 1}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e5e5e5] bg-[#f7f7f7] text-[#555] transition hover:border-[#19c7c0] hover:text-[#19c7c0] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FiMinus size={14} />
                </button>

                <span className="flex h-9 min-w-[48px] items-center justify-center rounded-lg border border-[#e5e5e5] bg-white px-3 text-sm font-bold text-[#202020]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increment}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#333] text-white transition hover:bg-[#19c7c0]"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>

            {/* Total */}

            <div className="mt-5 flex items-center gap-2">
              <span className="text-sm font-semibold text-[#555]">
                Total Price:
              </span>

              <span className="text-lg font-bold text-[#19c7c0]">
                ৳{totalPrice.toLocaleString()}
              </span>
            </div>

            {/* Buttons */}

            <div className="mt-5 flex items-center gap-2">
              <Link href="/checkout"
                type="button"
                className="flex h-11 items-center background-bg justify-center gap-2 rounded-lg  px-7 text-sm font-bold text-white transition hover:bg-[#149c96]"
              >
                Buy Now
                <FiArrowRight size={15} />
              </Link>

              <button
                type="button"
                aria-label="Add to cart"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] text-[#999] transition hover:border-[#19c7c0] hover:bg-[#e5fafa] hover:text-[#19c7c0]"
              >
                <FiShoppingBag size={17} />
              </button>
            </div>

            <p className="mt-4 text-[11px] text-[#aaa]">
              Category ID: {id}
            </p>
          </div>

          {/* ==================================================
              RIGHT - TOP SELLING
          ================================================== */}

          <aside className="w-full rounded-xl border border-[#e5e5e5] bg-white p-4">
            <h2 className="mb-2 text-sm font-bold text-[#202020]">
              Top Selling Products
            </h2>

            <div className="divide-y divide-[#eeeeee]">
              {topSellingProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 py-3"
                >
                  {/* Image */}

                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#f7f7f7]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      unoptimized
                      className="h-[48px] w-[48px] object-contain"
                    />
                  </div>

                  {/* Info */}

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold text-[#292929]">
                      {item.name}
                    </p>

                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="text-sm font-bold text-[#222]">
                        ৳{item.price.toLocaleString()}
                      </span>

                      <span className="text-[10px] text-[#999] line-through">
                        ৳{item.oldPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* ==================================================
          DESCRIPTION / REVIEWS
      ================================================== */}

      <div className="container mx-auto mt-12 px-3 sm:px-5 xl:px-0">
        {/* Tabs */}

        <div className="flex items-center gap-7 border-b border-[#e5e5e5]">
          <button
            type="button"
            onClick={() => setActiveTab("description")}
            className={`relative pb-3 text-sm font-bold transition ${
              activeTab === "description"
                ? "text-[#202020]"
                : "text-[#aaa]"
            }`}
          >
            Description

            {activeTab === "description" && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#19c7c0]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("reviews")}
            className={`relative pb-3 text-sm font-bold transition ${
              activeTab === "reviews"
                ? "text-[#202020]"
                : "text-[#aaa]"
            }`}
          >
            Reviews

            {activeTab === "reviews" && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#19c7c0]" />
            )}
          </button>
        </div>

        {/* ==================================================
            DESCRIPTION
        ================================================== */}

        {activeTab === "description" ? (
          <div className="pt-6">
            <p className="max-w-4xl text-sm leading-7 text-[#666]">
              {descriptionText}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {productDetails.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-[180px_20px_1fr]"
                >
                  <span className="font-medium text-[#666]">
                    {row.label}
                  </span>

                  <span className="hidden text-[#aaa] sm:block">
                    :
                  </span>

                  <span className="text-[#666]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ==================================================
             REVIEWS
          ================================================== */

          <div className="pt-6">
            <div className="flex flex-col gap-6 lg:flex-row">
              {/* Rating Summary */}

              <div className="w-full shrink-0 rounded-xl border border-[#e5e5e5] bg-white p-5 lg:max-w-[240px]">
                <p className="text-center text-[32px] font-bold text-[#202020]">
                  {product.rating}
                </p>

                <div className="mt-1 flex justify-center gap-1 text-[#facc15]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiStar
                      key={index}
                      size={15}
                      fill={
                        index < Math.round(product.rating)
                          ? "#facc15"
                          : "none"
                      }
                    />
                  ))}
                </div>

                <p className="mt-2 text-center text-xs text-[#999]">
                  Based on {totalReviews} reviews
                </p>

                <div className="mt-5 flex flex-col gap-2.5">
                  {ratingBreakdown.map((row) => (
                    <div
                      key={row.star}
                      className="flex items-center gap-2 text-xs text-[#666]"
                    >
                      <span className="w-3">{row.star}</span>

                      <FiStar
                        size={11}
                        fill="#facc15"
                        className="shrink-0 text-[#facc15]"
                      />

                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e5e5e5]">
                        <div
                          className="h-full rounded-full bg-[#19c7c0]"
                          style={{
                            width: `${Math.min(
                              (row.count / totalReviews) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>

                      <span className="w-6 text-right">
                        {row.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review List */}

              <div className="w-full flex-1">
                {/* Filter */}

                <div className="mb-5 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setReviewSource("website")}
                    className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
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
                    className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                      reviewSource === "other"
                        ? "bg-[#19c7c0] text-white"
                        : "border border-[#e5e5e5] bg-white text-[#666] hover:border-[#19c7c0]"
                    }`}
                  >
                    Other Platform
                  </button>
                </div>

                {/* Reviews */}

                {reviews.length === 0 ? (
                  <p className="text-sm text-[#999]">
                    No reviews yet.
                  </p>
                ) : (
                  <div className="flex flex-col gap-5">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-[#ececec] pb-5 last:border-b-0"
                      >
                        {/* Reviewer */}

                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f0f0f0]">
                            <Image
                              src={review.avatar}
                              alt={review.name}
                              width={40}
                              height={40}
                              unoptimized
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div>
                            <p className="text-sm font-bold text-[#202020]">
                              {review.name}
                            </p>

                            <p className="mt-0.5 text-[11px] text-[#999]">
                              {review.date} - {review.location}
                            </p>
                          </div>
                        </div>

                        {/* Rating */}

                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex gap-0.5 text-[#facc15]">
                            {Array.from({ length: 5 }).map(
                              (_, index) => (
                                <FiStar
                                  key={index}
                                  size={13}
                                  fill={
                                    index < review.rating
                                      ? "#facc15"
                                      : "none"
                                  }
                                />
                              )
                            )}
                          </div>

                          <span className="text-xs font-bold text-[#666]">
                            {review.rating.toFixed(1)}
                          </span>
                        </div>

                        {/* Images */}

                        {review.images &&
                          review.images.length > 0 && (
                            <div className="mt-3 flex gap-2">
                              {review.images.map((img, index) => (
                                <div
                                  key={index}
                                  className="h-16 w-16 overflow-hidden rounded-lg bg-[#f0f0f0]"
                                >
                                  <Image
                                    src={img}
                                    alt={`${review.title} photo ${
                                      index + 1
                                    }`}
                                    width={64}
                                    height={64}
                                    unoptimized
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                        {/* Content */}

                        <p className="mt-3 text-sm font-bold text-[#202020]">
                          {review.title}
                        </p>

                        <p className="mt-1.5 max-w-4xl text-sm leading-6 text-[#666]">
                          {review.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ==================================================
                WRITE REVIEW
            ================================================== */}

            <div className="mt-8 rounded-xl border border-[#e5e5e5] bg-white p-5 sm:p-6">
              <h3 className="text-base font-bold text-[#202020]">
                Write a Review
              </h3>

              <p className="mt-1 text-xs text-[#999]">
                Share your experience with this product to help
                other customers.
              </p>

              {/* Rating */}

              <p className="mt-6 text-sm font-bold text-[#202020]">
                Your Rating{" "}
                <span className="text-red-500">*</span>
              </p>

              <div className="mt-2 flex gap-1">
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
                    >
                      <FiStar
                        size={24}
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

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-[#202020]">
                    Your Name{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Your name"
                    className="mt-2 h-11 w-full rounded-lg border border-[#e5e5e5] px-3 text-sm text-[#202020] outline-none transition focus:border-[#19c7c0]"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-[#202020]">
                    Email Address{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="Your email"
                    className="mt-2 h-11 w-full rounded-lg border border-[#e5e5e5] px-3 text-sm text-[#202020] outline-none transition focus:border-[#19c7c0]"
                  />
                </div>
              </div>

              {/* Review Title */}

              <div className="mt-4">
                <label className="text-sm font-bold text-[#202020]">
                  Review Title{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Summarize your experience in one line..."
                  className="mt-2 h-11 w-full rounded-lg border border-[#e5e5e5] px-3 text-sm text-[#202020] outline-none transition focus:border-[#19c7c0]"
                />
              </div>

              {/* Review */}

              <div className="mt-4">
                <label className="text-sm font-bold text-[#202020]">
                  Your Review{" "}
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                  placeholder="Tell others what you liked or didn't like..."
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg border border-[#e5e5e5] px-3 py-3 text-sm text-[#202020] outline-none transition focus:border-[#19c7c0]"
                />
              </div>

              {/* Photo Upload */}

              <div className="mt-4">
                <label className="text-sm font-bold text-[#202020]">
                  Add Photos{" "}
                  <span className="font-normal text-[#999]">
                    (optional)
                  </span>
                </label>

                <label
                  htmlFor="review-photo-upload"
                  className="mt-2 flex h-11 w-full cursor-pointer items-center gap-2 rounded-lg border border-dashed border-[#e5e5e5] px-3 text-xs text-[#999] transition hover:border-[#19c7c0]"
                >
                  <FiImage size={15} />

                  {formPhotos.length > 0
                    ? `${formPhotos.length} photo${
                        formPhotos.length > 1 ? "s" : ""
                      } selected`
                    : "Click to upload photos (max 3 images)"}
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

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleSubmitReview}
                  className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#19c7c0] px-6 text-sm font-bold text-white transition hover:bg-[#149c96]"
                >
                  Submit Review
                  <FiSend size={14} />
                </button>

                <span className="text-xs text-[#999]">
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