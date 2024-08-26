import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
const Login = ({onLogin}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const onSubmit = async(data) => {
    // console.log(data);
    try {
      const response = await axios.post('https://mapday-backend.onrender.com/api/auth/login', data,{  withCredentials: true,});
      // const { msg, already } = response.data;
      // console.log(msg, already)
       onLogin()
      navigate("/dashboard")
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="flex justify-center w-full mt-20 h-custom items-center bg-gray-800 text-black"> 
      <div className="bg-white h-auto flex flex-col gap-6 items-center rounded-md w-[30%] py-8 shadow-lg">
        <h1 className="text-2xl font-semibold">Log in</h1>
        <h3 className="text-lg font-semibold text-gray-500 text-center px-4">
          Enter your information to login your account
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8 flex flex-col gap-4">




          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Enter a valid email address',
                },
              })}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Password</label>
            <div className="relative w-full">
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                })}
                type={showPassword ? 'text' : 'password'}
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-2 top-4 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
              </button>
            </div>

            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log in
          </button>
        </form>
        <h2 className='text-xl font-medium text-center'>Don't have an account <NavLink className="text-blue-600 underline" to="/signup">Sign up</NavLink></h2>
      </div>
    </div>
  );
}

export default Login