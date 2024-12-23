import { useState, useEffect } from "react";
import shopifyClient from "../utils/shopify";

export default function Cart() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    // Check for existing checkout ID in localStorage
    const checkoutId = localStorage.getItem("checkoutId");
    if (checkoutId) {
      shopifyClient.checkout.fetch(checkoutId).then((checkout) => {
        setCart(checkout);
      });
    }
  }, []);

  return (
    <div className="fixed right-0 top-0 max-w-xs w-full h-full bg-white shadow-xl p-6">
      <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
      {cart?.lineItems.map((item) => (
        <div key={item.id} className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
            <p className="text-sm font-medium text-gray-900">
              ${item.variant.price}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
        </div>
      ))}
      {cart && (
        <button
          className="mt-8 w-full bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700"
          onClick={() => {
            window.location.href = cart.webUrl;
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}
