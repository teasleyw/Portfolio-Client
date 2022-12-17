import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  validateAndUpdateFirstName,
  validateAndUpdateEmail, validateAndUpdateLastName, validateAndUpdatePoemTitle,
} from "../validation/InputValidation";

export const customerDataSlice = createSlice({
  name: "customerDataSlice",
  initialState: initialState,
  reducers: {
    updateFirstName : (state, action) => {
      state.firstName.value = action.payload;
      validateAndUpdateFirstName(state);
    },
    updateLastName : (state, action) => {
      state.lastName.value = action.payload;
      validateAndUpdateLastName(state);
    },
    updatePoemTitle : (state, action) => {
      state.poemTitle.value = action.payload;
      validateAndUpdatePoemTitle(state)
    },
    updatePoemContent : (state, action) => {
      state.poemContent.value = action.payload;
    },
    updateEmail : (state, action) => {
      state.email.value = action.payload;
      validateAndUpdateEmail(state);
    },
    updateEmailConsent : (state, action) => {
      state.emailConsent.value = action.payload;
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
