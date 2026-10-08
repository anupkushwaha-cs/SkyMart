import React, { useContext } from "react";
import { Link } from "react-router";
import { MyStore } from "../Context/AppContaxts";

const CartCard = ({ product }) => {
  const { setCartItems } = useContext(MyStore);

  const increaseQuantity = () => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = () => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = () => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:flex-row sm:p-5">

      <Link to={`/products/${product.id}`}>
        <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-[#f7f4ef] p-3 sm:h-32 sm:w-28">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>
      </Link>

      <div className="min-w-0 flex-1">

        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
              {product.category}
            </p>

            <h2 className="mt-1 text-sm font-semibold text-stone-900 sm:text-base">
              {product.title}
            </h2>
          </div>

          <button
            onClick={removeItem}
            className="text-xs font-medium text-stone-400 hover:text-red-500"
          >
            Remove
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">

          <div className="flex items-center rounded-lg border border-stone-200 bg-stone-50">

            <button
              onClick={decreaseQuantity}
              className="cursor-pointer px-4 py-2 text-lg text-stone-500 hover:text-black"
            >
              −
            </button>

            <span className="min-w-10 text-center text-sm font-semibold text-stone-800">
              {product.quantity || 1}
            </span>

            <button
              onClick={increaseQuantity}
              className="cursor-pointer px-4 py-2 text-lg text-stone-500 hover:text-black"
            >
              +
            </button>

          </div>

          <p className="text-lg font-bold text-stone-900">
            ${(product.price * (product.quantity || 1)).toFixed(2)}
          </p>

        </div>
      </div>
    </div>
  );
};

export default CartCard;