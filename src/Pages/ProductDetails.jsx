import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { MyStore } from "../Context/AppContaxts";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const { setCartItems } = useContext(MyStore);

  const getSingleProductData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

      setSingleProduct(res.data);
    } catch (error) {
      console.log("Error in fetching product", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, [id]);
  const addToCart = () => {
  setCartItems((prev) => {
    const existingProduct = prev.find(
      (item) => item.id === singleProduct.id
    );

    if (existingProduct) {
      return prev.map((item) =>
        item.id === singleProduct.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    return [
      ...prev,
      {
        ...singleProduct,
        quantity: 1,
      },
    ];
  });
};
  
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading product...
        </h2>
      </div>
    );
  }

  if (!singleProduct) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-bold">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f4] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm font-semibold text-stone-600 hover:text-black"
        >
          ← Back
        </button>

        <div className="grid gap-8 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">

          <div className="flex min-h-[350px] items-center justify-center rounded-2xl bg-[#f7f4ef] p-8">
            <img
              src={singleProduct.thumbnail}
              alt={singleProduct.title}
              className="max-h-[400px] w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-stone-400">
              {singleProduct.category}
            </p>

            <h1 className="mt-2 text-3xl font-bold text-stone-900 sm:text-4xl">
              {singleProduct.title}
            </h1>

            <p className="mt-5 leading-7 text-stone-500">
              {singleProduct.description}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="rounded-lg bg-yellow-50 px-3 py-2 text-sm font-semibold">
                ★ {singleProduct.rating}
              </span>

              <span className="text-sm text-stone-400">
                {singleProduct.stock} in stock
              </span>
            </div>

            <div className="mt-7">
              <span className="text-3xl font-bold text-stone-900">
                ${singleProduct.price}
              </span>
            </div>

            <button
              onClick={addToCart}
              className="mt-8 w-fit rounded-xl bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-stone-700"
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;