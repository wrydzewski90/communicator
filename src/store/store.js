import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./reducer";

export default configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
