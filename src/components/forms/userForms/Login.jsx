import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../state/features/User/Auth/authSlice';
import { USERS_API } from '../../../state/features/api';

export default function Login() {
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
    msg: '',
    showVerification: false,
    otp: ['', '', '', '', '', ''],
    resendTimer: 60,
  });

  const { email, password, msg, showVerification, otp, resendTimer } =
    formInputs;
  const inputRefs = Array(6)
    .fill()
    .map(() => useRef(null));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading } = useSelector(
    (state) => state.userAuth
  );

  useEffect(() => {
    if (user) {
      navigate('/');
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
          msg: 'Please enter a valid email to send OTP.',
        }));
        return;
      }

      const response = await fetch(`${USERS_API}send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setFormInputs((prev) => ({
          ...prev,
          msg: 'OTP sent successfully to your email.',
          showVerification: true,
          resendTimer: 60,
        }));
      } else {
        throw new Error(data.message || 'Error sending OTP.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setFormInputs((prev) => ({
        ...prev,
        msg: error.message || 'Failed to send OTP. Please try again.',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setFormInputs((prev) => ({ ...prev, msg: 'Please fill in all fields.' }));
      return;
    }

    try {
      await handleSendOTP();
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setFormInputs((prev) => ({ ...prev, msg: 'Failed to process request.' }));
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
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      const userData = { email: email.trim(), password, otp: otpValue };
      dispatch(login(userData));
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        width: '100%',
        maxWidth: '500px' /* Ensures the container doesn't exceed 500px */,
        margin: 'auto',
      }}
    >
      <div
        className="
    w-full /* Full width by default */
    md:max-w-800px /* Restrict width to 800px for larger screens */
    mx-auto /* Center horizontally */
    px-3 /* Add padding for content inside */
  "
      >
       
        {!showVerification ? (
          <>
            <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
            <p className="text-sm text-gray-500 text-center mb-6">
              Sign in and take control of your finances
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center">
              Verify Your Email
            </h1>
            <p className="text-sm text-gray-500 text-center mb-6">
              Please verify your Email Address
            </p>
          </>
        )}
        {!showVerification ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 lg:bg-gray-100  bg-white-100 lg:shadow-lg shadow-none "
            style={{
              marginBottom: '10px',
              padding: '10px 0px',
            }}
          >
            <div className="space-y-2 flex flex-col items-center">
              <label className="text-sm block self-start w-[90%] lg:w-[80%] pl-[3%] lg:pl-[10%] lg:text-[12px] lg:text-black text-[navy] text-[12px]">
                Phone / E-mail
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setFormInputs((prev) => ({ ...prev, email: e.target.value }))
                }
                className="px-2 py-2 border rounded border-navy w-[95%] lg:w-[80%]"
                style={{
                  border: '0.05px solid navy',
                }}
              />
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <label className="text-sm block self-start w-[90%] lg:w-[80%] pl-[3%] lg:pl-[10%] lg:text-[12px] lg:text-black text-[navy] text-[12px]">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setFormInputs((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                className="px-2 py-2 border rounded border-navy w-[95%] lg:w-[80%]"
                style={{
                  border: '0.05px solid navy',
                }}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#002147] text-white py-2 rounded w-[95%] lg:w-[80%] "
                style={{
                  fontWeight: '600',
                }}
              >
                {isLoading ? 'Processing...' : 'Continue'}
              </button>
            </div>

            {msg && <p className="text-red-500 text-sm text-center">{msg}</p>}

            <div className="text-left lg:w-[80%] w-[94%] mx-auto">
              <Link
                to="/reset-password"
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot Password? Reset Now!
              </Link>
            </div>

            <div className="text-left lg:w-[80%] w-[94%] mx-auto">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Join Express Bank
              </Link>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              Your information is securely encrypted.
            </p>

            <div className="relative lg:w-[80%] w-[94%] mx-auto">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span
                  className="bg-white"
                  style={{
                    color: 'lightgrey',
                    textTransform: 'lowercase',
                  }}
                >
                  or
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 justify-center items-center w-full">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border rounded hover:bg-white-40 w-[88%] lg:w-[60%] mx-auto"
                style={{
                  border: '0.05px solid navy',
                }}
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4 mr-2"
                />
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border rounded hover:bg-white-40 w-[88%] lg:w-[60%] mx-auto"
                style={{
                  border: '0.05px solid navy',
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="w-4 h-4 mr-2"
                />
                Apple
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4 mx-auto">
            

            <label className="text-sm block text-center">
              Enter your verification Code (6 digits)
            </label>

            <div className="flex justify-center space-x-2 lg:w-[80%] w-[94%] mx-auto">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOTPChange(index, e.target.value)}
                  className="w-12  h-12 text-center text-lg border rounded focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
                />
              ))}
            </div>

            <div className="text-center text-sm">
              <button
                className={`text-blue-600 hover:underline ${
                  resendTimer > 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={resendTimer > 0}
                onClick={handleSendOTP}
              >
                resend code in 00:{resendTimer.toString().padStart(2, '0')}
              </button>
            </div>

            {/* <button
              onClick={handleVerifySubmit}
              className="bg-[#002147] text-white py-2 rounded lg:w-[80%] w-[95%] mx-auto"
            >
              Signin
            </button> */}
            <div className="flex justify-center">
              <button
                onClick={handleVerifySubmit}
                className="bg-[#002147] text-white py-2 rounded lg:w-[76%] w-[80%] text-bold"
              >
                Signin
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
