import { useState, type FormEvent } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { assets } from '../assets/assets';
import toast from 'react-hot-toast';
import { dummyUsers } from '../utils/data';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setErrors(prev => ({
      ...prev,
      email: emailRegex.test(value) ? '' : prev.email
    }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setErrors(prev => ({
      ...prev,
      password: passwordRegex.test(value) ? '' : prev.password
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 6 characters and include 1 number';
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    const user = dummyUsers.find(u => u.email === email && u.password === password);
    if (user) {
      toast.success('Login successful!');
      setEmail('');
      setPassword('');
    } else {
      toast.error('Invalid email or password.');
    }
  };

  return (
    <main
      className="flex h-screen w-full bg-cover bg-no-repeat bg-center justify-center"
      style={{ backgroundImage: `url(${assets.bgImage})` }}
      role="main"
      aria-label="Login page"
    >
      <div className='flex px-4 py-6 sm:px-8 sm:py-8 w-full max-w-5xl'>
        <div className="flex bg-white rounded-2xl w-full max-w-5xl overflow-hidden shadow-lg p-2">
          <div
            className="hidden md:flex w-1/2 flex-col justify-center p-12 text-white relative rounded-2xl"
            style={{
              backgroundImage: `url(${assets.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-2xl bg-black/30"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className='flex gap-3 items-center'>
                <p className="uppercase tracking-wider text-[12px] font-medium text-white/90">A Wise Quote</p>
                <hr className='w-30 border-white/90 my-2' />
              </div>
              <div className="mt-auto">
                <h2 className="text-4xl sm:text-5xl font-medium leading-tight font-playfair">Get<br />Everything<br />You Want</h2>
                <p className="mt-4 text-sm font-light text-white/80">
                  You can get everything you want if you work hard,<br /> trust the process, and stick to the plan.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 rounded-r-2xl flex flex-col items-center justify-center bg-white p-8 sm:p-12">
            <div className="flex gap-2 mb-6 items-center" aria-label="App logo and name">
              <img src={assets.logo} alt="Cogie logo" className="w-6 h-6" />
              <span className="text-xl font-medium">Cogie</span>
            </div>

            <form className="w-full" onSubmit={handleSubmit} noValidate aria-labelledby="login-title">
              <h2 id="login-title" className="text-3xl sm:text-4xl text-black font-playfair font-medium text-center">Welcome Back</h2>
              <p className="text-sm text-center text-mediumGray mt-2 sm:mt-3">
                Enter your email and password to access your account
              </p>
              <div className="flex flex-col w-full mt-6">
                <label htmlFor="email" className="text-black text-sm font-medium mb-2">Email</label>
                <div className={`flex items-center h-12 rounded-xl bg-gray-100 overflow-hidden pl-4 gap-2 ${errors.email && 'border border-red-500'}`}>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent text-gray-600 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    required
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </div>
                {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col w-full mt-4">
                <label htmlFor="password" className="text-black text-sm font-medium mb-2">Password</label>
                <div className={`relative flex items-center h-12 rounded-xl bg-gray-100 overflow-hidden pl-4 ${errors.password && 'border border-red-500'}`}>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="bg-transparent text-gray-600 placeholder-gray-500/80 outline-none text-sm w-full h-full pr-10"
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    aria-invalid={errors.password ? "true" : "false"}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(prev => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <AiOutlineEyeInvisible className="w-5 h-5" /> : <AiOutlineEye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p id="password-error" className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="w-full flex flex-row items-center justify-between mt-4 text-gray-500/80 gap-2">
                <div className="flex items-center gap-2">
                  <input className="h-4 w-4" type="checkbox" id="remember" />
                  <label className="text-black text-[13px] font-medium" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a className="text-black text-[13px] font-medium hover:underline" href="#" aria-label="Forgot your password? Click to reset">
                  Forgot Password
                </a>
              </div>

              <button
                type="submit"
                className="mt-6 w-full h-12 rounded-xl text-white font-medium bg-black hover:bg-gray-900 transition cursor-pointer"
                aria-label="Sign in with email and password"
              >
                Sign In
              </button>

              <button
                type="button"
                className="w-full mt-4 bg-white flex items-center justify-center gap-3 h-12 rounded-xl border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
                aria-label="Sign in with Google account">
                <img src={assets.googleIcon} alt="googleLogo" className="w-5 h-5" aria-label="Sign in with Google account" />
                Sign In with Google
              </button>

              <p className="text-gray-600 text-sm mt-6 text-center">
                Don&apos;t have an account?{" "}
                <a className="text-black hover:underline" href="#" aria-label="Sign up for a new account">
                  Sign Up
                </a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default LoginScreen;
