import React from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  Package,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
  Zap,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      value: "20K+",
      label: "Products",
      icon: Package,
    },
    {
      value: "50K+",
      label: "Happy Customers",
      icon: Users,
    },
    {
      value: "4.9",
      label: "Average Rating",
      icon: Star,
    },
    {
      value: "99%",
      label: "On-time Delivery",
      icon: Truck,
    },
  ];

  const values = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "Trust First",
      description:
        "Every product goes through quality checks so you can shop with complete confidence.",
    },
    {
      number: "02",
      icon: Zap,
      title: "Built for Speed",
      description:
        "From discovering products to getting them delivered, everything is designed to be fast.",
    },
    {
      number: "03",
      icon: Heart,
      title: "Customer Obsessed",
      description:
        "Your feedback shapes our products, experience and everything we build at SkyMart.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Quality Always",
      description:
        "We believe fewer great products are better than thousands of products you don't need.",
    },
  ];

  const team = [
    {
      initial: "R",
      name: "Riya Joshi",
      role: "Founder & CEO",
      gradient: "from-lime-300 to-green-400",
    },
    {
      initial: "A",
      name: "Anup kushwaha",
      role: "Head of Product",
      gradient: "from-cyan-300 to-blue-400",
    },
    {
      initial: "R",
      name: "Rui",
      role: "Lead Engineer",
      gradient: "from-violet-300 to-purple-400",
    },
    {
      initial: "N",
      name: "Nassuu",
      role: "Design Director",
      gradient: "from-orange-300 to-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07111f] text-white overflow-hidden">
      <section className="relative px-5 pt-20 pb-16 md:pt-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-lime-400/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-300/20 bg-lime-300/5 text-lime-300 text-sm font-medium">
              <Sparkles size={15} />
              The future of online shopping
            </div>

            <h1 className="mt-7 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05]">
              Shopping should feel
              <span className="block mt-2 bg-gradient-to-r from-lime-200 via-lime-400 to-green-400 bg-clip-text text-transparent">
                this simple.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-8">
              SkyMart is a modern e-commerce platform built around one simple
              idea — making online shopping faster, smarter and genuinely
              enjoyable.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/shop"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-lime-300 text-[#07111f] font-bold hover:bg-lime-200 transition"
              >
                Explore Products
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

              <a
                href="#story"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-200 hover:bg-white/[0.07] transition"
              >
                Our Story
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-20">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5 md:p-7 hover:border-lime-300/30 hover:bg-white/[0.06] transition duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-lime-300/10 text-lime-300 flex items-center justify-center">
                      <Icon size={19} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-gray-600 group-hover:text-lime-300 transition"
                    />
                  </div>

                  <h2 className="mt-6 text-2xl md:text-3xl font-bold">
                    {item.value}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="story" className="px-5 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-center">
            <div>
              <p className="text-lime-300 text-sm font-semibold uppercase tracking-[0.25em]">
                Our Story
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                More than a store.
                <span className="block text-gray-500">
                  A better way to shop.
                </span>
              </h2>

              <div className="mt-8 w-16 h-1 rounded-full bg-lime-300" />
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute -inset-5 bg-lime-300/5 blur-3xl rounded-full" />

              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 md:p-10">
                <p className="text-gray-300 leading-8">
                  SkyMart started in 2022 as a small side project by two
                  engineers who were frustrated with slow and complicated
                  e-commerce experiences.
                </p>

                <p className="mt-5 text-gray-400 leading-8">
                  We wondered what online shopping would look like if it was
                  designed around people instead of endless distractions.
                </p>

                <p className="mt-5 text-gray-400 leading-8">
                  Today, SkyMart brings together thousands of products across
                  electronics, fashion, lifestyle and everyday essentials —
                  while keeping the experience simple, transparent and fast.
                </p>

                <div className="mt-8 pt-7 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-lime-300 flex items-center justify-center text-[#07111f]">
                    <Check size={19} />
                  </div>

                  <div>
                    <p className="font-semibold">Built for everyday shoppers</p>

                    <p className="text-sm text-gray-500">
                      Simple. Honest. Fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 bg-[#091525] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-lime-300 text-sm font-semibold uppercase tracking-[0.25em]">
              What drives us
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              The principles behind
              <span className="text-gray-500"> SkyMart.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative rounded-3xl border border-white/10 bg-[#0c192b] p-7 md:p-8 hover:border-lime-300/30 transition duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-lime-300/10 text-lime-300 flex items-center justify-center group-hover:bg-lime-300 group-hover:text-[#07111f] transition">
                      <Icon size={22} />
                    </div>

                    <span className="text-4xl font-black text-white/5 group-hover:text-lime-300/10 transition">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-gray-500 leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-lime-300 text-sm font-semibold uppercase tracking-[0.25em]">
              The people
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Meet the team
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-gray-500">
              A small team with a big obsession for building a better shopping
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:-translate-y-2 hover:border-white/20 transition duration-300"
              >
                <div className="h-48 rounded-2xl bg-[#0d1a2c] flex items-center justify-center overflow-hidden">
                  <div
                    className={`w-24 h-24 rounded-[2rem] bg-gradient-to-br ${member.gradient} flex items-center justify-center text-[#07111f] text-4xl font-black shadow-2xl group-hover:scale-110 transition duration-300`}
                  >
                    {member.initial}
                  </div>
                </div>

                <div className="pt-5 px-1">
                  <h3 className="text-lg font-bold">{member.name}</h3>

                  <p className="mt-1 text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-lime-300/20 bg-gradient-to-br from-lime-300/[0.12] via-white/[0.03] to-transparent p-8 md:p-16 text-center">
            <div className="absolute w-72 h-72 bg-lime-300/10 blur-[100px] rounded-full -top-32 left-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-lime-300 text-[#07111f] flex items-center justify-center">
                <Zap size={25} fill="currentColor" />
              </div>

              <h2 className="mt-6 text-3xl md:text-5xl font-bold">
                Ready to discover something great?
              </h2>

              <p className="mt-4 max-w-xl mx-auto text-gray-400">
                Explore our collection and find products you'll actually love.
              </p>

              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-xl bg-lime-300 text-[#07111f] font-bold hover:bg-lime-200 transition"
              >
                Browse Products
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-lime-300 text-[#07111f] flex items-center justify-center">
              <Zap size={16} fill="currentColor" />
            </div>

            <span className="font-bold text-lg">
              Sky<span className="text-lime-300">Mart</span>
            </span>
          </div>

          <p className="text-sm text-gray-600">
            © 2026 SkyMart. Built with React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
