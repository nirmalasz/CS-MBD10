"use client";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Register(){
   return(
      <main className="min-h-screen flex flex-col justify-center p-4 md:p-8">
         <div className="w-full max-w-lg mx-auto sm:max-w-4xl border border-[#515967] rounded-lg p-6 shadow-sm bg-[#111825]">
            <div className="mb-12">
               <Link href="/">
                  <img src="https://static.wikia.nocookie.net/chiikawa/images/4/43/YahaUsagi.png/revision/latest?cb=20240709065537" alt="logo"
                  className="w-40 inline-block " />
               </Link>
               <p className="text-slate-600 text-base mt-6 dark:text-slate-400">Create your account and get started</p>
            </div>

            <form className="w-full">
               <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                     <label htmlFor="name" className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">
                        Name</label>
                     <input type="text" id="name" name="name" placeholder="John Pork" required
                        className="pl-3 pr-10 py-2.5 text-sm  rounded-md w-full outline-1 -outline-offset-1  focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ext-slate-50 bg-[#0e1420] outline-neutral-700" suppressHydrationWarning />
                  </div>
                  <div>
                     <label htmlFor="uname" className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Username</label>
                     <input type="text" id="uname" name="uname" placeholder="johnpork" required
                        className="pl-3 pr-10 py-2.5 text-sm  rounded-md w-full outline-1 -outline-offset-1  focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ext-slate-50 bg-[#0e1420] outline-neutral-700" suppressHydrationWarning />
                  </div>
                  <div>
                     <label htmlFor="email"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                     <input type="email" id="email" name="email" placeholder="john.pork@gmail.com" required
                        className="pl-3 pr-10 py-2.5 text-sm  rounded-md w-full outline-1 -outline-offset-1  focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ext-slate-50 bg-[#0e1420] outline-neutral-700" suppressHydrationWarning />
                  </div>
                  <div>
                     <label htmlFor="mobile"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Mobile Number</label>
                     <input type="tel" id="mobile" name="mobile" placeholder="+123-456-7890" required
                        className="pl-3 pr-10 py-2.5 text-sm  rounded-md w-full outline-1 -outline-offset-1  focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ext-slate-50 bg-[#0e1420] outline-neutral-700" suppressHydrationWarning />
                  </div>
                  <div>
                     <label htmlFor="password"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
                     <input type="password" id="password" name="password" placeholder="••••••••" required
                        className="pl-3 pr-10 py-2.5 text-sm  rounded-md w-full outline-1 -outline-offset-1  focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ext-slate-50 bg-[#0e1420] outline-neutral-700" suppressHydrationWarning />
                  </div>
                  <div>
                     <label htmlFor="cpassword"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Confirm
                        Password</label>
                     <input type="password" id="cpassword" name="cpassword" placeholder="••••••••" required
                        className="pl-3 pr-10 py-2.5 text-sm  rounded-md w-full outline-1 -outline-offset-1  focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ext-slate-50 bg-[#0e1420] outline-neutral-700"  suppressHydrationWarning/>
                  </div>
               </div>
               <div className="mt-6">
                  <Link href='/'>
                  <button
                     className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-[#515967] bg-[#425267] hover:bg-[#2a3441] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                     Register
                     </button></Link>
               </div>
            </form>
         </div>
      </main>
    );
}

