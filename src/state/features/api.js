
 const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://express-five-alpha.vercel.app/api/account/"
    : "http://localhost:5000/api/account/";

    export default API_URL;