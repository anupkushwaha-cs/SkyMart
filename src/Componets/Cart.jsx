import React, { useContext } from "react";
import { MyStore } from "../Context/AppContaxts";
import CartCard from "./CartCard";

const Cart = () => {
  const { cartItems } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-600">
            SkyMart
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-[#0b1220] sm:text-4xl">
            Your Cart
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Review your selected products before checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="mx-auto flex max-w-md flex-col items-center justify-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#0b1220] text-5xl shadow-lg">
                🛒
              </div>

              <h2 className="mt-6 text-2xl font-bold text-[#0b1220]">
                Your cart is empty
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Looks like you haven't added anything to your cart yet.
                Explore our products and add something you love.
              </p>

              <button
                onClick={() => (window.location.href = "/shop")}
                className="mt-7 rounded-xl bg-lime-300 px-6 py-3 font-bold text-[#0b1220] transition hover:bg-lime-200"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
              <h2 className="text-lg font-bold text-[#0b1220]">
                Cart Items
              </h2>

              <span className="rounded-full bg-lime-100 px-3 py-1 text-sm font-semibold text-lime-700">
                {cartItems.length} Items
              </span>
            </div>

            <div className="space-y-4">
              {cartItems.map((elem) => (
                <CartCard key={elem.id} product={elem} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;