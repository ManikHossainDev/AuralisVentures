
/* eslint-disable react/no-unescaped-entities */
const Checkout = () => {
  return (
    <div className="px-3 py-10 text-[#222]">
      <div className="xl:container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]">

        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-5">

          {/* Guest Notice */}
          <div className="flex h-[30px] items-center rounded-lg border border-[#7ac9e8] bg-[#dff5ff] px-3 text-[11px] text-[#2582a5]">
            <span className="mr-2 text-[13px]">✓</span>
            You're checking out as a guest. Sign up to track your order & get 20% off →
          </div>

          {/* Contact Information */}
          <div className="rounded-xl border border-[#e5e5e5] p-[10px]">
            <h2 className="mb-5 text-[22px] font-bold">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="h-[42px] w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-[11px] outline-none placeholder:text-[#999] focus:border-[#00b8ad] focus:ring-1 focus:ring-[#00b8ad]/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="Your phone number"
                  className="h-[42px] w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-[11px] outline-none placeholder:text-[#999] focus:border-[#00b8ad] focus:ring-1 focus:ring-[#00b8ad]/20"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-[11px] font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-[42px] w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-[11px] outline-none placeholder:text-[#999] focus:border-[#00b8ad] focus:ring-1 focus:ring-[#00b8ad]/20"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="rounded-xl border border-[#e5e5e5] p-[10px]">
            <h2 className="mb-5 text-[22px] font-bold">
              Shipping Address
            </h2>

            <div className="space-y-4">

              {/* Street Address */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold">
                  Street Address *
                </label>

                <input
                  type="text"
                  placeholder="House/Flat No., Road, Area"
                  className="h-[42px] w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-[11px] outline-none placeholder:text-[#999] focus:border-[#00b8ad] focus:ring-1 focus:ring-[#00b8ad]/20"
                />
              </div>

              {/* City + Postal */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* City */}
                <div>
                  <label className="mb-2 block text-[11px] font-semibold">
                    City / District *
                  </label>

                  <input
                    type="text"
                    placeholder="Your city / district"
                    className="h-[42px] w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-[11px] outline-none placeholder:text-[#999] focus:border-[#00b8ad] focus:ring-1 focus:ring-[#00b8ad]/20"
                  />
                </div>

                {/* Postal Code */}
                <div>
                  <label className="mb-2 block text-[11px] font-semibold">
                    Postal Code
                  </label>

                  <input
                    type="text"
                    placeholder="Your postal code"
                    className="h-[42px] w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-[11px] outline-none placeholder:text-[#999] focus:border-[#00b8ad] focus:ring-1 focus:ring-[#00b8ad]/20"
                  />
                </div>
              </div>

              {/* Delivery Note */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold">
                  Delivery Note (optional)
                </label>

                <input
                  type="text"
                  placeholder="e.g. Leave at gate, call before delivery"
                  className="h-[42px] w-full rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-[11px] outline-none placeholder:text-[#999] focus:border-[#00b8ad] focus:ring-1 focus:ring-[#00b8ad]/20"
                />
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="rounded-xl border border-[#e5e5e5] p-[10px]">
            <h2 className="mb-5 text-[22px] font-bold">
              Delivery Method
            </h2>

            <div className="space-y-2">

              {/* Standard */}
              <label className="flex h-[42px] cursor-pointer items-center justify-between rounded-lg border border-[#00c2b7] bg-[#effffc] px-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    defaultChecked
                    className="h-4 w-4 accent-[#00b8ad]"
                  />

                  <div>
                    <p className="text-[11px] font-semibold">
                      Standard Delivery
                    </p>

                    <p className="text-[8px] text-gray-500">
                      3-5 business days · Dhaka city
                    </p>
                  </div>
                </div>

                <span className="text-[16px] font-bold">
                  ৳60
                </span>
              </label>

              {/* Express */}
              <label className="flex h-[42px] cursor-pointer items-center justify-between rounded-lg border border-[#e7e7e7] bg-[#fafafa] px-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    className="h-4 w-4 accent-[#00b8ad]"
                  />

                  <div>
                    <p className="text-[11px] font-semibold">
                      Express Delivery
                    </p>

                    <p className="text-[8px] text-gray-500">
                      Next business day · Dhaka city
                    </p>
                  </div>
                </div>

                <span className="text-[16px] font-bold">
                  ৳120
                </span>
              </label>

              {/* Free */}
              <label className="flex h-[42px] cursor-pointer items-center justify-between rounded-lg border border-[#e7e7e7] bg-[#fafafa] px-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    className="h-4 w-4 accent-[#00b8ad]"
                  />

                  <div>
                    <p className="text-[11px] font-semibold">
                      Free Delivery
                    </p>

                    <p className="text-[8px] text-gray-500">
                      5-7 days · Orders above ৳1,500 qualify
                    </p>
                  </div>
                </div>

                <span className="text-[16px] font-bold">
                  ৳ FREE
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="space-y-5">

          {/* Order Summary */}
          <div className="rounded-xl border border-[#e5e5e5] p-[10px]">
            <h2 className="mb-5 text-[22px] font-bold">
              Order Summary
            </h2>

            {/* Product */}
            <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4">

              <div className="flex items-center gap-3">
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-md border border-[#eeeeee] bg-white">
                  <span className="text-[23px]">🎧</span>
                </div>

                <p className="text-[10px] font-semibold text-gray-500">
                  AV Pro Wireless Headphones
                </p>
              </div>

              <p className="text-[12px] font-bold">
                ৳2,000 × 2
              </p>
            </div>

            {/* Price Details */}
            <div className="space-y-4 pt-4">

              <div className="flex justify-between">
                <span className="text-[12px] font-semibold">
                  Subtotal (2 items)
                </span>

                <span className="text-[12px] font-bold">
                  ৳4,000
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[12px] font-semibold">
                  Delivery
                </span>

                <span className="text-[12px] font-bold">
                  ৳60
                </span>
              </div>

              <div className="flex justify-between border-b border-[#e5e5e5] pb-4">
                <span className="text-[12px] font-semibold">
                  Promo (NEW20)
                </span>

                <span className="text-[12px] font-bold text-green-500">
                  -৳800
                </span>
              </div>

              <div className="flex justify-between pt-1">
                <span className="text-[13px] font-bold">
                  Total
                </span>

                <span className="text-[13px] font-bold">
                  ৳3,260
                </span>
              </div>
            </div>
          </div>

          {/* Coupon */}
          <div className="rounded-xl border border-[#e5e5e5] p-[10px]">
            <h2 className="mb-5 text-[22px] font-bold">
              Coupon / Promo Code
            </h2>

            <label className="mb-2 block text-[11px] font-semibold">
              Code
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter promo code (e.g. NEW20)"
                className="h-[42px] flex-1 rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-[11px] outline-none placeholder:text-[#999] focus:border-[#00b8ad] focus:ring-1 focus:ring-[#00b8ad]/20"
              />

              <button className="h-[42px] w-[93px] rounded-lg bg-[#05b8ae] text-[10px] font-semibold text-white transition hover:bg-[#00a79f]">
                Apply
              </button>
            </div>

            {/* Promo Success */}
            <div className="mt-3 flex h-[30px] items-center rounded-lg border border-[#72d28b] bg-[#e3f9e8] px-3 text-[9px] text-[#20a84b]">
              <span className="mr-2 text-[13px]">✓</span>
              Promo code NEW20 applied – 20% off your first order!
            </div>
          </div>

          {/* Payment Method */}
          <div className="rounded-xl border border-[#e5e5e5] p-[10px]">
            <h2 className="mb-5 text-[22px] font-bold">
              Payment Method
            </h2>

            <div className="space-y-2">

              {/* bKash */}
              <label className="flex h-[42px] cursor-pointer items-center justify-between rounded-lg border border-[#00c2b7] bg-[#effffc] px-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="h-4 w-4 accent-[#00b8ad]"
                  />

                  <div>
                    <p className="text-[11px] font-semibold">
                      bKash
                    </p>

                    <p className="text-[8px] text-gray-500">
                      Pay via bKash mobile banking
                    </p>
                  </div>
                </div>

                <span className="text-[15px] font-bold text-[#e2136e]">
                  bKash
                </span>
              </label>

              {/* Nagad */}
              <label className="flex h-[42px] cursor-pointer items-center justify-between rounded-lg border border-[#e7e7e7] bg-[#fafafa] px-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="h-4 w-4 accent-[#00b8ad]"
                  />

                  <div>
                    <p className="text-[11px] font-semibold">
                      Nagad
                    </p>

                    <p className="text-[8px] text-gray-500">
                      Pay via Nagad mobile banking
                    </p>
                  </div>
                </div>

                <span className="text-[15px] font-bold text-[#f15a24]">
                  নগদ
                </span>
              </label>

              {/* Cash on Delivery */}
              <label className="flex h-[42px] cursor-pointer items-center justify-between rounded-lg border border-[#e7e7e7] bg-[#fafafa] px-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="h-4 w-4 accent-[#00b8ad]"
                  />

                  <div>
                    <p className="text-[11px] font-semibold">
                      Cash on Delivery
                    </p>

                    <p className="text-[8px] text-gray-500">
                      Pay when your order arrives
                    </p>
                  </div>
                </div>

                <span className="text-[12px] font-bold">
                  CASH
                </span>
              </label>
            </div>
          </div>

          {/* Place Order */}
          <button className="h-[42px] w-full rounded-lg bg-[#06b9ae] text-[11px] font-bold text-white transition hover:bg-[#00a79e]">
            Place Order
          </button>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
