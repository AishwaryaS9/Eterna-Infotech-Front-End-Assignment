import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { assets } from '../assets/assets';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex h-screen w-full bg-cover bg-no-repeat bg-center justify-center "
      style={{ backgroundImage: `url(${assets.bgImage})` }}>
      <div className='flex px-8 py-8 '>
        <div className="flex bg-white rounded-2xl w-full max-w-5xl overflow-hidden p-2">
          <div
            className="hidden md:flex w-full flex-col justify-center p-12 text-white relative rounded-2xl"
            style={{
              backgroundImage: `url(${assets.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0  rounded-l-2xl"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className='flex gap-3'>

                <p className="uppercase tracking-wider text-sm font-medium text-white">A Wise Quote</p>
                <hr className='w-40 my-2 text-white' />
              </div>
              <div className="mt-auto">
                <h2 className="text-5xl font-bold leading-tight font-playfair">Get<br />Everything<br />You Want</h2>
                <p className="mt-4 text-md text-white/90">
                  You can get everything you want if you work hard, trust the process, and stick to the plan.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-r-2xl flex flex-col items-center justify-center bg-white">
            <div className="flex gap-1 mb-6">
              <img src={assets.logo} alt="logo" className="w-6 h-6" />
              <span className="text-lg font-semibold">Cogie</span>
            </div>

            <form className="md:w-96 w-80 flex flex-col items-center justify-center">
              <h2 className="text-4xl text-black font-playfair font-medium">Welcome back</h2>
              <p className="text-sm text-mediumGray mt-3">
                Enter your email and password to access your account
              </p>

              <div className="flex flex-col w-full mt-8">
                <label htmlFor="email" className="text-black text-md font-medium mb-2">
                  Email
                </label>
                <div className="flex items-center h-12 rounded-xl bg-gray-100 overflow-hidden pl-6 gap-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent text-gray-600 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-full mt-8">
                <label htmlFor="password" className="text-black text-md font-medium mb-2">
                  Password
                </label>
                <div className="relative flex items-center h-12 rounded-xl bg-gray-100 overflow-hidden pl-6">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="bg-transparent text-gray-600 placeholder-gray-500/80 outline-none text-sm w-full h-full pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="w-5 h-5 text-gray-600" />
                    ) : (
                      <AiOutlineEye className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              <div className="w-full flex items-center justify-between mt-4 text-gray-500/80">
                <div className="flex items-center gap-2">
                  <input className="h-5" type="checkbox" id="checkbox" />
                  <label className="text-black text-sm font-medium" htmlFor="checkbox">
                    Remember me
                  </label>
                </div>
                <a className="text-black text-sm font-medium" href="#">
                  Forgot Password
                </a>
              </div>

              <button type="submit" className="mt-8 w-full h-12 rounded-xl text-white bg-black">
                Sign In
              </button>
              <button
                type="button"
                className="w-full mt-8 bg-white flex items-center justify-center gap-3 h-12 rounded-xl border border-gray-200"
              >
                <img src={assets.googleIcon} alt="googleLogo" className="w-4 h-4" />
                Sign In with Google
              </button>

              <p className="text-gray-600 text-sm mt-8">
                Don't have an account?{" "}
                <a className="text-black hover:underline" href="#">
                  Sign Up
                </a>
              </p>
            </form>
          </div>

        </div>


      </div>
    </div>
  )
}

export default LoginScreen

