
const API_URL = process.env.NODE_ENV === "production"
  ? "https://express-dfcc.onrender.com/api/"
  : "http://localhost:5000/api/";

export const USERS_API = `${API_URL}users/`;
export const ACCOUNT_API = `${API_URL}account/`;
export const ADMIN_API = `${API_URL}admins/`;
export const REQUEST_API = `${API_URL}request/`;

