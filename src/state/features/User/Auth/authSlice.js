// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import authService from "./authServices";

// const initialState = {
//   user: null,
//   isLoading: false,
//   isError: false,
//   isSuccess: false,
//   message: "",
// };

// //Login
// // export const login = createAsyncThunk(
// //   "auth/login",
// //   async (userData, thunkAPI) => {
// //     try {
// //       return await authService.login(userData);
// //     } catch (error) {
// //       const message = error.response.data;

// //       return thunkAPI.rejectWithValue(message);
// //     }
// //   }
// // );
// // Login with OTP
// export const login = createAsyncThunk(
//   "auth/login",
//   async (userData, thunkAPI) => {
//     try {
//       return await authService.login(userData);
//     } catch (error) {
//       const message = error.response?.data?.message || "Login failed.";
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );


// //Register
// export const register = createAsyncThunk(
//   "auth/register",
//   async (userData, thunkAPI) => {
//     try {
//       return await authService.register(userData);
//     } catch (error) {
//       const message = error.response.data;

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// //Logout
// export const logout = createAsyncThunk("auth/logout", async () => {
//   authService.logout();
// });

// export const authSlice = createSlice({
//   name: "userAuth",
//   initialState,
//   reducers: {
//     resetAuthStatus: (state) => {
//       state.isLoading = false;
//       state.isError = false;
//       state.isSuccess = false;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.isSuccess = false;
//         state.message = "";
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isError = false;
//         state.message = "";
//         state.user = action.payload;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.isSuccess = false;
//         state.user = null;
//       })
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.isSuccess = false;
//         state.message = "";
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isError = false;
//         state.message = "";
//         state.user = action.payload;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.isSuccess = false;
//         state.user = null;
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null;
//       });
//   },
// });

// export const { resetAuthStatus } = authSlice.actions;

// export default authSlice.reducer;






// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import authService from "./authServices";

// const initialState = {
//   user: null,
//   isLoading: false,
//   isError: false,
//   isSuccess: false,
//   message: "",
// };

// export const login = createAsyncThunk(
//   "auth/login",
//   async (userData, thunkAPI) => {
//     try {
//       const response = await authService.login(userData);
//       return response;
//     } catch (error) {
//       const message = error.response?.data?.message || "Login failed.";
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const register = createAsyncThunk(
//   "auth/register",
//   async (userData, thunkAPI) => {
//     try {
//       return await authService.register(userData);
//     } catch (error) {
//       const message = error.response?.data?.message || "Registration failed.";
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await authService.logout();
// });

// export const authSlice = createSlice({
//   name: "userAuth",
//   initialState,
//   reducers: {
//     resetAuthStatus: (state) => {
//       state.isLoading = false;
//       state.isError = false;
//       state.isSuccess = false;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.isSuccess = false;
//         state.message = "";
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isError = false;
//         state.message = "";
//         state.user = action.payload;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.isSuccess = false;
//         state.user = null;
//       })
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.isSuccess = false;
//         state.message = "";
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isError = false;
//         state.message = "";
//         state.user = action.payload;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.isSuccess = false;
//         state.user = null;
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null;
//       });
//   },
// });

// export const { resetAuthStatus } = authSlice.actions;

// export default authSlice.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authServices";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.login(userData);
      return response;
    } catch (error) {
      const message = error.response?.data?.message || "Login failed.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      const message = error.response?.data?.message || "Registration failed.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    resetAuthStatus: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
        state.user = null;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { resetAuthStatus } = authSlice.actions;

export default authSlice.reducer;

