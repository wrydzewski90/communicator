import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    token: "",
    userId: "",
    name: "",
  },
  reducers: {
    setUserData: (state, action) => {
      const payload = action.payload;
      state.token = payload.authToken;
      state.userId = payload.userId;
      state.name = payload.me.name;
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
