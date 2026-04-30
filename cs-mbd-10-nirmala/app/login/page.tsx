"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    console.log("Logging in with:", { email, password });
    setError("");
  };
  return (
    <main className="min-h-screen flex items-center justify-center">
      
      <div className="py-4 px-4 md:px-8 w-full flex justify-center">
        <div className="border border-[#515967] rounded-lg p-6 max-w-md mx-auto shadow-sm md:p-8 lg:mx-0 bg-[#111825]">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-slate-50">Sign in</h1>
            <p className=" text-base leading-relaxed text-slate-400">
              Sign in to your account to add and buy our
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2  font-medium text-sm inline-block text-slate-50">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.pork@ui.ac.id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                suppressHydrationWarning
                className="px-3 py-2.5 text-sm  rounded-md  w-full outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 text-slate-50 bg-[#0e1420] outline-neutral-700"
              />
            </div>
            <div>
              <label className="mb-1 font-medium text-sm block py-1 text-slate-50">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  suppressHydrationWarning
                  className="pl-3 pr-10 py-2.5 text-sm  rounded-md w-full outline-1 -outline-offset-1  focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ext-slate-50 bg-[#0e1420] outline-neutral-700"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showPassword ? (
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clipRule="evenodd"
                        />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start flex-wrap gap-2">
              <label className="flex items-center group has-[input:checked]:text-slate-900">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="sr-only"
                />
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded  outline-neutral-700
                                    bg-neutral-800
                                    group-has-[input:checked]:bg-blue-600
                                    group-has-[input:checked]:outline-blue-600
                                    group-focus-within:outline-2
                                    group-focus-within:outline-blue-600"
                  aria-hidden="true"
                >
                  <svg
                    className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                    viewBox="0 0 12 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 5l3 3 7-7" />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-slate-300">Remember me</span>
              </label>

              <button
                type="button"
                onClick={() => alert("Forgot password not implemented yet")}
                className="ml-auto text-sm font-medium text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Forgot password?
              </button>
            </div>
            <div>
              <Link href='/'>
              <button
                type="submit"
                className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-[#515967] bg-[#425267] hover:bg-[#2a3441] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Sign in
              </button>
              </Link>
            </div>

            <div className=" text-sm text-center text-slate-50">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="hover:underline ml-1 font-medium text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
