

import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../state/features/User/Auth/authSlice";
import { USERS_API } from "../../../state/features/api";



export default function Login() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    msg: "",
    showVerification: false,
    otp: ["", "", "", "", "", ""],
    resendTimer: 60,
  });

  const { email, password, msg, showVerification, otp, resendTimer } = formInputs;
  const inputRefs = Array(6).fill().map(() => useRef(null));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading } = useSelector(
    (state) => state.userAuth
  );

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    let timer;
    if (resendTimer > 0 && showVerification) {
      timer = setInterval(() => {
        setFormInputs((prev) => ({
          ...prev,
          resendTimer: prev.resendTimer - 1,
        }));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer, showVerification]);

  const handleSendOTP = async () => {
    try {
      if (!email) {
        setFormInputs((prev) => ({
          ...prev,
          msg: "Please enter a valid email to send OTP.",
        }));
        return;
      }

      const response = await fetch(
        `${USERS_API}send-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setFormInputs((prev) => ({
          ...prev,
          msg: "OTP sent successfully to your email.",
          showVerification: true,
          resendTimer: 60,
        }));
      } else {
        throw new Error(data.message || "Error sending OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setFormInputs((prev) => ({
        ...prev,
        msg: error.message || "Failed to send OTP. Please try again.",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setFormInputs((prev) => ({ ...prev, msg: "Please fill in all fields." }));
      return;
    }

    try {
      await handleSendOTP();
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setFormInputs((prev) => ({ ...prev, msg: "Failed to process request." }));
    }
  };

  const handleOTPChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setFormInputs((prev) => ({ ...prev, otp: newOtp }));

      if (value && index < 5) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleVerifySubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      const userData = { email: email.trim(), password, otp: otpValue };
      dispatch(login(userData));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
    style={{
      width: "100%",
      maxWidth: "500px", /* Ensures the container doesn't exceed 500px */
      margin: "auto",
    }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {!showVerification ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl font-bold text-center">Welcome Back!</h1>
            <p className="text-sm text-gray-500 text-center mb-6">
              Sign in and take control of your finances
            </p>
            
            <div className="space-y-2">
              <label className="text-sm block">Phone / E-mail</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setFormInputs((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm block">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setFormInputs((prev) => ({ ...prev, password: e.target.value }))}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="text-right">
              <Link to="/reset-password" className="text-blue-600 hover:underline text-sm">
                Forgot Password? Reset Now!
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#002147] text-white py-2 rounded"
            >
              {isLoading ? "Processing..." : "Continue"}
            </button>

            {msg && <p className="text-red-500 text-sm text-center">{msg}</p>}

            <div className="text-sm text-center">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Join Express Bank
              </Link>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center px-4 py-2 border rounded hover:bg-gray-50">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
                Google
              </button>
              <button type="button" className="flex items-center justify-center px-4 py-2 border rounded hover:bg-gray-50">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                Apple
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              Your information is securely encrypted.
            </p>
          </form>
        ) : (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-center">
              Verify Your Email
            </h1>
            <p className="text-sm text-gray-500 text-center">
              Please verify your Email Address
            </p>
            
            <label className="text-sm block text-center">
              Enter your verification Code (6 digits)
            </label>
            
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOTPChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-lg border rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              ))}
            </div>

            <div className="text-center text-sm">
              <button 
                className={`text-blue-600 hover:underline ${resendTimer > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={resendTimer > 0}
                onClick={handleSendOTP}
              >
                resend code in 00:{resendTimer.toString().padStart(2, '0')}
              </button>
            </div>

            <button
              onClick={handleVerifySubmit}
              className="w-full bg-[#002147] text-white py-2 rounded"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

