// import React from "react";
// import { useState, useEffect } from "react";
// import { FcCurrencyExchange } from "react-icons/fc";
// import { RiLoginCircleFill } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../../state/features/User/Auth/authSlice";
// import FormButton from "../../shared/FormButton";
// import { Logo } from "../../shared/Logo";
// import MessagesContainer from "../../shared/MessagesContainer";

// export default function Login() {
//   const [formInputs, setFormInputs] = useState({
//     email: "",
//     password: "",
//     msg: "",
//   });

//   const { email, password, msg } = formInputs;

//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   const { user, isError, isSuccess, isLoading, message } = useSelector(
//     (state) => state.userAuth
//   );

//   useEffect(() => {
//     if (isError) {
//       setFormInputs({ ...formInputs, msg: message });
//     }

//     if (user) {
//       setFormInputs({ ...formInputs, msg: "Login Succesfully" });
//       navigate("/");
//     }
//   }, [isError, message, user, msg]);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   //set msg to none first
//   //   setFormInputs({ ...formInputs, msg: "" });

//   //   const userData = {
//   //     email: email.trim(),
//   //     password,
//   //   };
//   //   dispatch(login(userData));
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Clear previous messages
//     setFormInputs({ ...formInputs, msg: "" });
  
//     const userData = {
//       email: email.trim(),
//       password,
//       otp: formInputs.otp, // Include OTP in the login payload
//     };
  
//     dispatch(login(userData));
//   };
  

//   // Function to handle sending OTP
// const handleSendOTP = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/api/users/send-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       setFormInputs({ ...formInputs, msg: "OTP sent successfully to your email." });
//     } else {
//       setFormInputs({ ...formInputs, msg: data.message || "Error sending OTP." });
//     }
//   } catch (error) {
//     setFormInputs({ ...formInputs, msg: "Error occurred while sending OTP." });
//   }
// };

//   return (
//     <div className="w-full lg:w-[40%] max-w-md block p-6 rounded shadow-lg shadow-black/20 bg-slate-50 mx-auto">
//       <Logo />
//       <h3 className="flex justify-center items-center text-2xl text-blue-800 font-bold text-center p-2 my-4 rounded shadow bg-blue-200 border-x-4 border-blue-800 select-none">
//         <FcCurrencyExchange className="mr-1" size={45} />
//         <span>Login</span>
//       </h3>
//       <form className="mt-10" onSubmit={handleSubmit}>
//         <div className="mb-6">
//           <label
//             htmlFor="email"
//             className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
//           >
//             Email address
//           </label>
//           <input
//             type="email"
//             name="email"
//             className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//             defaultValue={email}
//             onChange={(e) =>
//               setFormInputs({ ...formInputs, email: e.target.value })
//             }
//             placeholder="Enter your Email"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none"
//             defaultValue={password}
//             onChange={(e) =>
//               setFormInputs({ ...formInputs, password: e.target.value })
//             }
//             placeholder="Enter Your Password"
//             required
//           />
//         </div>


//         <div className="mb-6">
//   <label
//     htmlFor="otp"
//     className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
//   >
//     OTP
//   </label>
//   <input
//     type="text"
//     name="otp"
//     className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//     placeholder="Enter OTP"
//     onChange={(e) => setFormInputs({ ...formInputs, otp: e.target.value })}
//   />
// </div>

// {/* Send OTP Button */}
// <button
//   type="button"
//   className="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
//   onClick={() => handleSendOTP()}
// >
//   Send OTP
// </button>
//         <div className="flex justify-end items-center mb-6">
//           <a
//             href="#"
//             className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
//           >
//             Forgot password?
//           </a>
//         </div>

//         {/*Request Status and Errors*/}
//         {(isError || isSuccess) && (
//           <MessagesContainer
//             msg={msg}
//             isSuccess={isSuccess}
//             isError={isError}
//           />
//         )}

//         {/*form button */}
//         <FormButton
//           text={{ loading: "Processing", default: "Login" }}
//           isLoading={isLoading}
//           icon={<RiLoginCircleFill className="mb-[-2px] ml-1" size={27} />}
//         />

//         {/*Redirect for Register */}

//         <p className="text-gray-800 mt-6 text-center">
//           Not a Client?
//           <Link
//             to="/register"
//             className="mx-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
//           >
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }



// import React, { useState, useEffect, useCallback } from "react";
// import { FcCurrencyExchange } from "react-icons/fc";
// import { RiLoginCircleFill } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../../state/features/User/Auth/authSlice";
// import FormButton from "../../shared/FormButton";
// import { Logo } from "../../shared/Logo";
// import MessagesContainer from "../../shared/MessagesContainer";

// const OTPInput = ({ value, onChange }) => {
//   const inputRefs = Array(6).fill(0).map(() => React.createRef());

//   const handleChange = (index, e) => {
//     const val = e.target.value;
//     if (val === '' || /^[0-9]$/.test(val)) {
//       const newOtp = value.split('');
//       newOtp[index] = val;
//       onChange(newOtp.join(''));
//       if (val !== '' && index < 5) {
//         inputRefs[index + 1].current.focus();
//       }
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === 'Backspace' && index > 0 && value[index] === '') {
//       inputRefs[index - 1].current.focus();
//     }
//   };

//   return (
//     <div className="flex justify-between">
//       {[0, 1, 2, 3, 4, 5].map((index) => (
//         <input
//           key={index}
//           ref={inputRefs[index]}
//           type="text"
//           inputMode="numeric"
//           maxLength="1"
//           className="w-12 h-12 text-center text-2xl border rounded-md mr-2"
//           value={value[index] || ''}
//           onChange={(e) => handleChange(index, e)}
//           onKeyDown={(e) => handleKeyDown(index, e)}
//         />
//       ))}
//     </div>
//   );
// };

// export default function Login() {
//   const [formInputs, setFormInputs] = useState({
//     email: "",
//     password: "",
//     otp: "",
//     msg: "",
//   });

//   const { email, password, otp, msg } = formInputs;
//   const [otpSent, setOtpSent] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { user, isError, isSuccess, isLoading, message } = useSelector(
//     (state) => state.userAuth
//   );

//   useEffect(() => {
//     if (isError) {
//       setFormInputs((prev) => ({ ...prev, msg: message }));
//     }

//     if (user) {
//       setFormInputs((prev) => ({ ...prev, msg: "Login Successfully" }));
//       navigate("/");
//     }
//   }, [isError, message, user, navigate]);

//   const handleSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     setFormInputs((prev) => ({ ...prev, msg: "" }));

//     const userData = {
//       email: email.trim(),
//       password,
//       otp,
//     };

//     try {
//       await dispatch(login(userData)).unwrap();
//     } catch (error) {
//       console.error("Login failed:", error);
//       setFormInputs((prev) => ({ 
//         ...prev, 
//         msg: error.message || "Login failed. Please check your credentials and try again." 
//       }));
//     }
//   }, [dispatch, email, password, otp]);

//   const handleSendOTP = useCallback(async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/users/send-otp', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       let data;
//       const contentType = response.headers.get("content-type");
//       if (contentType && contentType.indexOf("application/json") !== -1) {
//         data = await response.json();
//       } else {
//         data = { message: await response.text() };
//       }

//       if (response.ok) {
//         setOtpSent(true);
//         setFormInputs((prev) => ({ ...prev, msg: data.message || "OTP sent successfully to your email." }));
//       } else {
//         setFormInputs((prev) => ({ ...prev, msg: data.message || "Error sending OTP." }));
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       setFormInputs((prev) => ({ ...prev, msg: "Error occurred while sending OTP." }));
//     }
//   }, [email]);

//   const handleOTPChange = useCallback((newOtp) => {
//     setFormInputs((prev) => ({ ...prev, otp: newOtp }));
//   }, []);

//   return (
//     <div className="w-full lg:w-[40%] max-w-md block p-6 rounded shadow-lg shadow-black/20 bg-slate-50 mx-auto">
//       <Logo />
//       <h3 className="flex justify-center items-center text-2xl text-blue-800 font-bold text-center p-2 my-4 rounded shadow bg-blue-200 border-x-4 border-blue-800 select-none">
//         <FcCurrencyExchange className="mr-1" size={45} />
//         <span>Login</span>
//       </h3>
//       <form className="mt-10" onSubmit={handleSubmit}>
//         <div className="mb-6">
//           <label
//             htmlFor="email"
//             className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
//           >
//             Email address
//           </label>
//           <input
//             type="email"
//             name="email"
//             className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//             value={email}
//             onChange={(e) =>
//               setFormInputs((prev) => ({ ...prev, email: e.target.value }))
//             }
//             placeholder="Enter your Email"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none"
//             value={password}
//             onChange={(e) =>
//               setFormInputs((prev) => ({ ...prev, password: e.target.value }))
//             }
//             placeholder="Enter Your Password"
//             required
//           />
//         </div>

//         {!otpSent ? (
//           <button
//             type="button"
//             className="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
//             onClick={handleSendOTP}
//           >
//             Send OTP
//           </button>
//         ) : (
//           <div className="mb-6">
//             <label
//               htmlFor="otp"
//               className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
//             >
//               OTP
//             </label>
//             <OTPInput value={otp} onChange={handleOTPChange} />
//           </div>
//         )}

//         {otpSent && otp.length === 6 && (
//           <FormButton
//             text={{ loading: "Processing", default: "Login" }}
//             isLoading={isLoading}
//             icon={<RiLoginCircleFill className="mb-[-2px] ml-1" size={27} />}
//           />
//         )}

//         {/*Request Status and Errors*/}
//         {(isError || isSuccess || msg) && (
//           <MessagesContainer
//             msg={msg}
//             isSuccess={isSuccess}
//             isError={isError}
//           />
//         )}

//         {/*Redirect for Register */}
//         <p className="text-gray-800 mt-6 text-center">
//           Not a Client?
//           <Link
//             to="/register"
//             className="mx-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
//           >
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }





// import React, { useState, useEffect, useCallback } from "react";
// import { FcCurrencyExchange } from "react-icons/fc";
// import { RiLoginCircleFill } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../../state/features/User/Auth/authSlice";
// import FormButton from "../../shared/FormButton";
// import { Logo } from "../../shared/Logo";
// import MessagesContainer from "../../shared/MessagesContainer";
// import { USERS_API } from "../../../state/features/api";



// const OTPInput = ({ value, onChange }) => {
//   const inputRefs = Array(6).fill(0).map(() => React.createRef());

//   const handleChange = (index, e) => {
//     const val = e.target.value;
//     if (val === '' || /^[0-9]$/.test(val)) {
//       const newOtp = value.split('');
//       newOtp[index] = val;
//       onChange(newOtp.join(''));
//       if (val !== '' && index < 5) {
//         inputRefs[index + 1].current.focus();
//       }
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === 'Backspace' && index > 0 && value[index] === '') {
//       inputRefs[index - 1].current.focus();
//     }
//   };

//   return (
//     <div className="flex justify-between">
//       {[0, 1, 2, 3, 4, 5].map((index) => (
//         <input
//           key={index}
//           ref={inputRefs[index]}
//           type="text"
//           inputMode="numeric"
//           maxLength="1"
//           className="w-12 h-12 text-center text-2xl border-2 border-navy-blue rounded-md mr-2"
//           value={value[index] || ''}
//           onChange={(e) => handleChange(index, e)}
//           onKeyDown={(e) => handleKeyDown(index, e)}
//         />
//       ))}
//     </div>
//   );
// };

// export default function Login() {
//   const [formInputs, setFormInputs] = useState({
//     email: "",
//     password: "",
//     otp: "",
//     msg: "",
//   });

//   const { email, password, otp, msg } = formInputs;
//   const [otpSent, setOtpSent] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { user, isError, isSuccess, isLoading, message } = useSelector(
//     (state) => state.userAuth
//   );

//   useEffect(() => {
//     if (isError) {
//       setFormInputs((prev) => ({ ...prev, msg: message }));
//     }

//     if (user) {
//       setFormInputs((prev) => ({ ...prev, msg: "Login Successfully" }));
//       navigate("/");
//     }
//   }, [isError, message, user, navigate]);

//   const handleSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     setFormInputs((prev) => ({ ...prev, msg: "" }));

//     const userData = {
//       email: email.trim(),
//       password,
//       otp,
//     };

//     try {
//       await dispatch(login(userData)).unwrap();
//     } catch (error) {
//       console.error("Login failed:", error);
//       setFormInputs((prev) => ({ 
//         ...prev, 
//         msg: error.message || "Login failed. Please check your credentials and try again." 
//       }));
//     }
//   }, [dispatch, email, password, otp]);

//   const handleSendOTP = useCallback(async () => {
//     try {
//       const response = await fetch(`${USERS_API}send-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       let data;
//       const contentType = response.headers.get("content-type");
//       if (contentType && contentType.indexOf("application/json") !== -1) {
//         data = await response.json();
//       } else {
//         data = { message: await response.text() };
//       }

//       if (response.ok) {
//         setOtpSent(true);
//         setFormInputs((prev) => ({ ...prev, msg: " provide the 6 digit OTP code sent to your email" }));
//       } else {
//         setFormInputs((prev) => ({ ...prev, msg: data.message || "Error sending OTP." }));
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       setFormInputs((prev) => ({ ...prev, msg: "Error occurred while sending OTP." }));
//     }
//   }, [email]);

//   const handleOTPChange = useCallback((newOtp) => {
//     setFormInputs((prev) => ({ ...prev, otp: newOtp }));
//   }, []);

//   return (
//     <div className="w-full lg:w-[40%] max-w-md block p-6 rounded shadow-lg shadow-black/20 bg-slate-50 mx-auto">
//       <Logo />
//       <h3 className="flex justify-center items-center text-2xl text-blue-800 font-bold text-center p-2 my-4 rounded shadow bg-blue-200 border-x-4 border-blue-800 select-none">
//         <FcCurrencyExchange className="mr-1" size={45} />
//         <span>Login</span>
//       </h3>
//       <form className="mt-10" onSubmit={handleSubmit}>
//         <div className="mb-6">
//           <label
//             htmlFor="email"
//             className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
//           >
//             Email address
//           </label>
//           <input
//             type="email"
//             name="email"
//             className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//             value={email}
//             onChange={(e) =>
//               setFormInputs((prev) => ({ ...prev, email: e.target.value }))
//             }
//             placeholder="Enter your Email"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none"
//             value={password}
//             onChange={(e) =>
//               setFormInputs((prev) => ({ ...prev, password: e.target.value }))
//             }
//             placeholder="Enter Your Password"
//             required
//           />
//         </div>

//         {otpSent && (
//           <div className="mb-6">
//             <label
//               htmlFor="otp"
//               className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-black-800 rounded shadow bg-blue-200"
//             >
//               OTP
//             </label>
//             <OTPInput value={otp} onChange={handleOTPChange} />
//             {msg && (
//               <p className="mt-2 text-sm" style={{color: "navyblue"}} >{msg}</p>
//             )}
//           </div>
//         )}

//         {!otpSent ? (
//           <button
//             type="button"
//             className="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
//             onClick={handleSendOTP}
//           >
//             Send OTP
//           </button>
//         ) : (
//           <></>
//         )}

//         {otpSent && otp.length === 6 && (
//           <FormButton
//             text={{ loading: "Processing", default: "Login" }}
//             isLoading={isLoading}
//             icon={<RiLoginCircleFill className="mb-[-2px] ml-1" size={27} />}
//           />
//         )}

//         {/*Request Status and Errors*/}
//         {(isError || isSuccess || msg) && (
//           <MessagesContainer
//             msg={msg}
//             isSuccess={isSuccess}
//             isError={isError}
//           />
//         )}

//         {/*Redirect for Register */}
//         <p className="text-gray-800 mt-6 text-center">
//           Not a Client?
//           <Link
//             to="/register"
//             className="mx-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
//           >
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }



import React, { useState, useEffect, useCallback } from "react";
import { FcCurrencyExchange } from "react-icons/fc";
import { RiLoginCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../state/features/User/Auth/authSlice";
import FormButton from "../../shared/FormButton";
import { Logo } from "../../shared/Logo";
import MessagesContainer from "../../shared/MessagesContainer";
// import { USERS_API } from "../../../config/api";
import { USERS_API } from "../../../state/features/api";

const OTPInput = ({ value, onChange }) => {
  const inputRefs = Array(6).fill(0).map(() => React.createRef());

  const handleChange = (index, e) => {
    const val = e.target.value;
    if (val === '' || /^[0-9]$/.test(val)) {
      const newOtp = value.split('');
      newOtp[index] = val;
      onChange(newOtp.join(''));
      if (val !== '' && index < 5) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && value[index] === '') {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="flex justify-between">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          inputMode="numeric"
          maxLength="1"
          className="w-12 h-12 text-center text-2xl border-2 border-navy-blue rounded-md mr-2"
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </div>
  );
};

export default function Login() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    otp: "",
    msg: "",
  });

  const { email, password, otp, msg } = formInputs;
  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.userAuth
  );

  useEffect(() => {
    if (isError) {
      setFormInputs((prev) => ({ ...prev, msg: message }));
    }

    if (user) {
      setFormInputs((prev) => ({ ...prev, msg: "Login Successfully" }));
      navigate("/");
    }
  }, [isError, message, user, navigate]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setFormInputs((prev) => ({ ...prev, msg: "" }));

    const userData = {
      email: email.trim(),
      password,
      otp,
    };

    try {
      await dispatch(login(userData)).unwrap();
    } catch (error) {
      console.error("Login failed:", error);
      setFormInputs((prev) => ({ 
        ...prev, 
        msg: error.message || "Login failed. Please check your credentials and try again." 
      }));
    }
  }, [dispatch, email, password, otp]);

  const handleSendOTP = useCallback(async () => {
    try {
      const response = await fetch(`${USERS_API}send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      if (response.ok) {
        setOtpSent(true);
        setFormInputs((prev) => ({ ...prev, msg: "Provide the 6 digit OTP code sent to your email" }));
      } else {
        setFormInputs((prev) => ({ ...prev, msg: data.message || "Error sending OTP." }));
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setFormInputs((prev) => ({ ...prev, msg: "Error occurred while sending OTP." }));
    }
  }, [email]);

  const handleOTPChange = useCallback((newOtp) => {
    setFormInputs((prev) => ({ ...prev, otp: newOtp }));
  }, []);

  return (
    <div className="w-full lg:w-[40%] max-w-md block p-6 rounded shadow-lg shadow-black/20 bg-slate-50 mx-auto">
      <Logo />
      <h3 className="flex justify-center items-center text-2xl text-blue-800 font-bold text-center p-2 my-4 rounded shadow bg-blue-200 border-x-4 border-blue-800 select-none">
        <FcCurrencyExchange className="mr-1" size={45} />
        <span>Login</span>
      </h3>
      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={email}
            onChange={(e) =>
              setFormInputs((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none"
            value={password}
            onChange={(e) =>
              setFormInputs((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="Enter Your Password"
            required
          />
        </div>

        {otpSent && (
          <div className="mb-6">
            <label
              htmlFor="otp"
              className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-black-800 rounded shadow bg-blue-200"
            >
              OTP
            </label>
            <OTPInput value={otp} onChange={handleOTPChange} />
            {msg && (
              <p className="mt-2 text-sm text-navy-blue">{msg}</p>
            )}
          </div>
        )}

        {!otpSent ? (
          <button
            type="button"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
            onClick={handleSendOTP}
          >
            Send OTP
          </button>
        ) : (
          <></>
        )}

        {otpSent && otp.length === 6 && (
          <FormButton
            text={{ loading: "Processing", default: "Login" }}
            isLoading={isLoading}
            icon={<RiLoginCircleFill className="mb-[-2px] ml-1" size={27} />}
          />
        )}

        {/*Request Status and Errors*/}
        {(isError || isSuccess || msg) && (
          <MessagesContainer
            msg={msg}
            isSuccess={isSuccess}
            isError={isError}
          />
        )}

        {/*Redirect for Register */}
        <p className="text-gray-800 mt-6 text-center">
          Not a Client?
          <Link
            to="/register"
            className="mx-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

