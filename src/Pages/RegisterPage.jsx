import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../Context/AuthContext";

const RegisterPage = () => {
  const { registeredUsers, setRegisteredUsers, setLoggedInUser } =
    useContext(Auth);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const arr = [...registeredUsers, data];

    setRegisteredUsers(arr);
    setLoggedInUser(data);

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(arr)
    );

    localStorage.setItem(
      "loggedinUser",
      JSON.stringify(data)
    );

    alert("User registered successfully");

    reset();

    navigate("/main");
  };

  return (
    <div className="min-h-screen bg-[#0b1220] flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-lime-300/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-lime-300/10 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-2xl bg-lime-300 flex items-center justify-center text-3xl text-[#0b1220] shadow-[0_0_35px_rgba(190,255,50,0.25)]">
              ⚡
            </div>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Sky<span className="text-lime-300">Mart</span>
          </h1>

          <p className="text-gray-400 mt-2">
            Create your account and start shopping.
          </p>
        </div>

        <div className="bg-[#111a2b] border border-white/10 rounded-3xl p-7 md:p-9 shadow-2xl">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-white">
              Create Account 🚀
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Join SkyMart and discover amazing products.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="space-y-5"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Full Name
              </label>

              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl bg-[#0b1220] border border-white/10 text-white placeholder:text-gray-600 px-4 py-3.5 outline-none transition focus:border-lime-300/60 focus:ring-2 focus:ring-lime-300/10"
              />

              {errors.name && (
                <p className="text-red-400 text-xs mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Email Address
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl bg-[#0b1220] border border-white/10 text-white placeholder:text-gray-600 px-4 py-3.5 outline-none transition focus:border-lime-300/60 focus:ring-2 focus:ring-lime-300/10"
              />

              {errors.email && (
                <p className="text-red-400 text-xs mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Password
              </label>

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters is required",
                  },
                })}
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl bg-[#0b1220] border border-white/10 text-white placeholder:text-gray-600 px-4 py-3.5 outline-none transition focus:border-lime-300/60 focus:ring-2 focus:ring-lime-300/10"
              />

              {errors.password && (
                <p className="text-red-400 text-xs mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-lime-300 hover:bg-lime-200 text-[#0b1220] font-bold py-3.5 rounded-xl transition duration-300 cursor-pointer shadow-[0_0_25px_rgba(190,255,50,0.12)] hover:shadow-[0_0_30px_rgba(190,255,50,0.2)]"
            >
              Create Account
            </button>
          </form>

          <div className="flex items-center gap-3 my-7">
            <div className="h-px flex-1 bg-white/10"></div>

            <span className="text-xs text-gray-500">OR</span>

            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/")}
              type="button"
              className="text-lime-300 hover:text-lime-200 font-semibold cursor-pointer transition"
            >
              Login
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          © 2026 SkyMart. Shop smarter, live better.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;