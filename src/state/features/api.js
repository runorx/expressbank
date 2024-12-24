
 const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://express-dfcc.onrender.com/api/account/"
    : "http://localhost:5000/api/account/";

    export default API_URL;