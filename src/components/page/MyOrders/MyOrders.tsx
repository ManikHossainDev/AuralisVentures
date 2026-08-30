const MyOrders = () => {
  const orders = [
    {
      id: "ORD-1084",
      date: "May 14, 2026",
      items: 2,
      status: "Pending",
      product: "AV Pro Wireless Headphones",
      qty: 2,
      payment: "Cash Payment",
      price: "৳4,000",
    },
    {
      id: "ORD-1084",
      date: "May 14, 2026",
      items: 2,
      status: "Pending",
      product: "AV Pro Wireless Headphones",
      qty: 2,
      payment: "Cash Payment",
      price: "৳4,000",
    },
    {
      id: "ORD-1084",
      date: "May 14, 2026",
      items: 2,
      status: "Pending",
      product: "AV Pro Wireless Headphones",
      qty: 2,
      payment: "Cash Payment",
      price: "৳4,000",
    },
  ];

  return (
    <div className="w-full px-3 py-5 sm:px-5 lg:px-6">
      {/* Title */}
      <h2 className="mb-5 text-xl font-semibold text-gray-900">
        My Orders
      </h2>

      {/* Orders */}
      <div className="space-y-2.5">
        {orders.map((order, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white px-3 py-3 sm:px-4"
          >
            {/* Order Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">
                  #{order.id}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-[10px] text-gray-500 sm:text-xs">
                  <span>{order.date}</span>

                  <span className="h-1 w-1 rounded-full bg-gray-400" />

                  <span>{order.items} items</span>
                </div>
              </div>

              {/* Status */}
              <span className="rounded-full border border-orange-300 px-3 py-0.5 text-[8px] font-medium text-orange-500 sm:text-[9px]">
                {order.status}
              </span>
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-gray-200" />

            {/* Product */}
            <div className="flex items-center justify-between gap-3">
              {/* Product Info */}
              <div className="flex min-w-0 items-center gap-3">
                {/* Product Image */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-gray-100 bg-gray-50 sm:h-11 sm:w-11">
                  <span className="text-xl">🎧</span>
                </div>

                <div className="min-w-0">
                  <h4 className="truncate text-xs font-semibold text-gray-900 sm:text-sm">
                    {order.product}
                  </h4>

                  <div className="mt-1 flex items-center gap-2 text-[9px] text-gray-500 sm:text-[10px]">
                    <span>Qty: {order.qty}</span>

                    <span className="h-1 w-1 rounded-full bg-gray-400" />

                    <span>৳ Cash Payment</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="shrink-0 text-right">
                <p className="text-xs font-bold text-gray-900 sm:text-sm">
                  {order.price}
                </p>

                <p className="mt-0.5 text-[8px] text-gray-500 sm:text-[9px]">
                  Total payment
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;