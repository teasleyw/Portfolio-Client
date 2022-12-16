import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  validateAndUpdateFirstName,
  validateAndUpdateEmail, validateAndUpdateLastName,
} from "../validation/InputValidation";

export const customerDataSlice = createSlice({
  name: "customerDataSlice",
  initialState: initialState,
  reducers: {
    updateFirstName : (state, action) => {
      state.value = action.payload;
      validateAndUpdateFirstName(state);
    },
    updateLastName : (state, action) => {
      state.value = action.payload;
      validateAndUpdateLastName(state);
    },
    updatePoemTitle : (state, action) => {
      state.value = action.payload;
    },
    updatePoemContent : (state, action) => {
      state.value = action.payload;
    },
    updateEmail : (state, action) => {
      state.value = action.payload;
      validateAndUpdateEmail(state);
    },
    updateEmailConsent : (state, action) => {
      state.state.value = action.payload;
    }
  },
});

export const {
  updateFirstName,
  updateLastName,
  updatePoemTitle,
  updatePoemContent,
  updateEmail,
} = customerDataSlice.actions;

export default customerDataSlice.reducer;
