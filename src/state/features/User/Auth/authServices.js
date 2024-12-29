import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://express-dfcc.onrender.com/api/users/"
    : "http://localhost:5000/api/users/";

//Login User
// Login User with OTP
const login = async (userData) => {
  const res = await axios.post(API_URL + "login", userData, {
    headers: {
      "content-type": "application/json",
    },
  });
  const data = res.data;

    return data;
};

// const login = async (userData) => {
//   const res = await axios.post(API_URL + "login", userData, {
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const data = res.data;

//   return data;
// };

//Register User
const register = async (userData) => {
  const res = await axios.post(API_URL, userData, {
    headers: {
      "content-type": "application/json",
    },
  });

  const data = res.data;

  return data;
};

//Logout
const logout = () => {
  return;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;


