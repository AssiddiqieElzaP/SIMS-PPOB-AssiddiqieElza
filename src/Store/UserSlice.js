import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const request = await axios.post(
      "https://api-doc-tht.nutech-integrasi.app/login",
      userCredentials
    );
    const response = await request.data.token;
    localStorage.setItem("user", JSON.stringify(response));
    console.log(response, "aaaa");
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        console.log(loginUser, "aaa");
        if (action.error.message === "Request failed with status code 101") {
          state.error = "Access Denied";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
