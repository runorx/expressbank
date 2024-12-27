// import axios from "axios";

// const API_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://express-dfcc.onrender.com/api/users/"
//     : "http://localhost:5000/api/users/";

// //Login User
// // Login User with OTP
// const login = async (userData) => {
//   const res = await axios.post(API_URL + "login", userData, {
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const data = res.data;

//     return data;
// };

// // const login = async (userData) => {
// //   const res = await axios.post(API_URL + "login", userData, {
// //     headers: {
// //       "content-type": "application/json",
// //     },
// //   });
// //   const data = res.data;

// //   return data;
// // };

// //Register User
// const register = async (userData) => {
//   const res = await axios.post(API_URL, userData, {
//     headers: {
//       "content-type": "application/json",
//     },
//   });

//   const data = res.data;

//   return data;
// };

// //Logout
// const logout = () => {
//   return;
// };

// const authService = {
//   register,
//   logout,
//   login,
// };

// export default authService;


// import axios from "axios";

// const API_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://express-dfcc.onrender.com/api/users/"
//     : "http://localhost:5000/api/users/";

// //Login User
// // Login User with OTP
// const login = async (userData) => {
//   const res = await axios.post(API_URL + "login", userData, {
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const data = res.data;

//   if (data.token) {
//     localStorage.setItem('user', JSON.stringify(data));
//   }

//   return data;
// };

// //Register User
// const register = async (userData) => {
//   const res = await axios.post(API_URL, userData, {
//     headers: {
//       "content-type": "application/json",
//     },
//   });

//   const data = res.data;

//   return data;
// };

// //Logout
// const logout = () => {
//   return;
// };

// const authService = {
//   register,
//   logout,
//   login,
// };

// export default authService;

import axios from "axios";
import { USERS_API } from "../../api";

const sendOTP = async (email) => {
  try {
    const response = await axios.post(`${USERS_API}/send-otp`, { email });
    return response.data;
  } catch (error) {
    console.error("Error sending OTP:", error.response?.data || error.message);
    throw error.response?.data || { message: "Failed to send OTP" };
  }
};

const verifyOTP = async (email, otp) => {
  try {
    const response = await axios.post(`${USERS_API}verify-otp`, { email, otp });
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error.response?.data || error.message);
    throw error.response?.data || { message: "Failed to verify OTP" };
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(`${USERS_API}login`, userData);
    const data = response.data;

    if (data.token) {
      localStorage.setItem('user', JSON.stringify(data));
    }

    return data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Login failed" };
  }
};

const register = async (userData) => {
  try {
    const response = await axios.post(USERS_API, userData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Registration failed" };
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  sendOTP,
  verifyOTP,
  login,
  register,
  logout,
};

export default authService;

