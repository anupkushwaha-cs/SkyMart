import React, { useContext, useMemo } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Folder,
  ShieldCheck,
  Star,
  Tag,
  Truck,
  Zap,
} from "lucide-react";

import { MyStore } from "../Context/AppContaxts";

const Home = () => {
  const { productsData = [] } = useContext(MyStore);

  const categories = useMemo(() => {
    const categoryMap = {};

    productsData.forEach((product) => {
      const category = product.category;

      if (category) {
        categoryMap[category] = (categoryMap[category] || 0) + 1;
      }
    });

    return Object.entries(categoryMap).map(([name, count]) => ({
      name,
      count,
    }));
  }, [productsData]);

  const topRated = useMemo(() => {
    return [...productsData]
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 5);
  }, [productsData]);

  const newArrivals = useMemo(() => {
    return [...productsData].slice(-5).reverse();
  }, [productsData]);

  const formatCategory = (category) => {
    if (!category) return "Products";

    return category
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <section className="px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#101010]">
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="absolute -right-20 -top-32 w-80 h-80 bg-lime-300/10 blur-[100px] rounded-full" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_260px] gap-10 p-7 sm:p-10 md:p-14">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-lime-300 text-sm font-medium uppercase tracking-wider">
                  Good afternoon
                  <span>👋</span>
                </div>

                <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                  Welcome back,
                  <span className="block text-lime-300 mt-1">ANUP!</span>
                </h1>

                <p className="mt-6 max-w-xl text-gray-500 text-sm sm:text-base leading-7">
                  Discover today's picks — hand-curated products across
                  electronics, fashion, lifestyle and more.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  <Link
                    to="/shop"
                    className="group inline-flex items-center gap-2 bg-lime-300 text-black font-semibold px-6 py-3 rounded-xl hover:bg-lime-200 transition"
                  >
                    Shop Now
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </Link>

                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-6 py-3 rounded-xl text-gray-300 hover:bg-white/[0.07] transition"
                  >
                    View All Products
                  </Link>
                </div>
              </div>

              <div className="flex lg:flex-col gap-3 justify-center">
                <div className="flex-1 rounded-2xl border border-lime-300/20 bg-lime-300/[0.08] p-5">
                  <h2 className="text-3xl font-bold text-lime-300">
                    {productsData.length}+
                  </h2>

                  <p className="text-xs text-gray-500 mt-1">
                    Products Available
                  </p>
                </div>

                <div className="flex-1 rounded-2xl border border-white/20 p-5">
                  <h2 className="text-2xl font-bold">Free</h2>

                  <p className="text-xs text-gray-500 mt-1">
                    Delivery on ₹999+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="group border border-white/10 rounded-2xl bg-[#101010] p-5 hover:border-lime-300/30 transition">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-lime-300/10 text-lime-300 flex items-center justify-center">
                <Box size={21} />
              </div>

              <div>
                <h3 className="text-xl font-bold">4</h3>

                <p className="text-sm text-gray-400">Cart Items</p>

                <p className="text-xs text-gray-600 mt-1">In your bag</p>
              </div>
            </div>
          </div>

          <div className="group border border-white/10 rounded-2xl bg-[#101010] p-5 hover:border-blue-400/30 transition">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <ArrowUpRight size={21} />
              </div>

              <div>
                <h3 className="text-xl font-bold">$1199.96</h3>

                <p className="text-sm text-gray-400">Cart Value</p>

                <p className="text-xs text-gray-600 mt-1">Ready to checkout</p>
              </div>
            </div>
          </div>

          <div className="group border border-white/10 rounded-2xl bg-[#101010] p-5 hover:border-yellow-400/30 transition">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
                <Star size={21} />
              </div>

              <div>
                <h3 className="text-xl font-bold">{topRated.length}</h3>

                <p className="text-sm text-gray-400">Top Products</p>

                <p className="text-xs text-gray-600 mt-1">Highly rated</p>
              </div>
            </div>
          </div>

          <div className="group border border-white/10 rounded-2xl bg-[#101010] p-5 hover:border-purple-400/30 transition">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Tag size={21} />
              </div>

              <div>
                <h3 className="text-xl font-bold">{categories.length}</h3>

                <p className="text-sm text-gray-400">Categories</p>

                <p className="text-xs text-gray-600 mt-1">To explore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-bold">Shop by Category</h2>

            <Link
              to="/products"
              className="flex items-center gap-1 text-lime-300 text-sm hover:text-lime-200"
            >
              View All
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.slice(0, 6).map((category, index) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name}`}
                className="group bg-white rounded-2xl min-h-[125px] flex flex-col items-center justify-center text-center hover:-translate-y-1 transition duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition">
                  {index === 0
                    ? "💻"
                    : index === 1
                      ? "👕"
                      : index === 2
                        ? "📦"
                        : index === 3
                          ? "🏠"
                          : index === 4
                            ? "⚽"
                            : "🎒"}
                </div>

                <h3 className="text-sm font-semibold text-gray-800">
                  {formatCategory(category.name)}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {category.count} items
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5">
          <div className="bg-white rounded-[24px] p-5 md:p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Star
                  size={20}
                  className="text-yellow-400"
                  fill="currentColor"
                />
                Top Rated
              </h2>

              <Link
                to="/products"
                className="text-sm text-lime-500 flex items-center gap-1"
              >
                See all
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-3">
              {topRated.map((product) => (
                <Link
                  key={product.id}
                  to={`/shop/details/${product.id}`}
                  className="group flex items-center gap-4 border border-gray-200 rounded-2xl p-3 hover:border-lime-300 hover:shadow-sm transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 overflow-hidden shrink-0">
                    <img
                      src={product.thumbnail || product.images?.[0]}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-gray-800 truncate">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lime-500 font-bold text-sm">
                        ${product.price}
                      </span>

                      <span className="text-xs text-gray-400">
                        ★ {product.rating}
                      </span>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-lg bg-lime-50 text-lime-500 flex items-center justify-center">
                    <ArrowUpRight size={17} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-5 md:p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Zap size={20} className="text-lime-400" fill="currentColor" />
                New Arrivals
              </h2>

              <Link
                to="/products"
                className="text-sm text-lime-500 flex items-center gap-1"
              >
                See all
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-3">
              {newArrivals.map((product) => (
                <Link
                  key={product.id}
                  to={`/shop/details/${product.id}`}
                  className="group flex items-center gap-4 border border-gray-200 rounded-2xl p-3 hover:border-lime-300 hover:shadow-sm transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 overflow-hidden shrink-0">
                    <img
                      src={product.thumbnail || product.images?.[0]}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-gray-800 truncate">
                      {product.title}
                    </h3>

                    <span className="text-lime-500 font-bold text-sm">
                      ${product.price}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-lg bg-lime-50 text-lime-500 flex items-center justify-center">
                    <ArrowUpRight size={17} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 mt-10 mb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-3">
          <div className="border border-white/10 rounded-2xl p-5 bg-[#101010] flex items-center gap-4">
            <div className="text-lime-300">
              <Zap size={25} />
            </div>

            <div>
              <h3 className="font-semibold">Fast Delivery</h3>

              <p className="text-xs text-gray-600 mt-1">
                Same-day on select items
              </p>
            </div>
          </div>

          <div className="border border-white/10 rounded-2xl p-5 bg-[#101010] flex items-center gap-4">
            <div className="text-blue-400">
              <ShieldCheck size={25} />
            </div>

            <div>
              <h3 className="font-semibold">Secure Payments</h3>

              <p className="text-xs text-gray-600 mt-1">
                100% encrypted checkout
              </p>
            </div>
          </div>

          <div className="border border-white/10 rounded-2xl p-5 bg-[#101010] flex items-center gap-4">
            <div className="text-green-400">
              <Tag size={25} />
            </div>

            <div>
              <h3 className="font-semibold">Best Prices</h3>

              <p className="text-xs text-gray-600 mt-1">
                Price-match guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-2xl font-bold text-lime-300">SkyMart</h2>

          <p className="text-xs text-gray-600 mt-3">
            © 2026 SkyMart • Built with React + Redux + TanStack Query
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
