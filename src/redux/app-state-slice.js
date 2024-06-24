import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  validateAndUpdateFirstName,validateAndUpdateUserName,
  validateAndUpdateEmail, validateAndUpdateLastName, validateAndUpdatePoemTitle, validateAndUpdateConfirmPassword
} from "../validation/InputValidation";
import {
    checkIfRegisterIsValid
 } from "../validation/FormValidation";
export const customerDataSlice = createSlice({
  name: "customerDataSlice",
  initialState: initialState,
  reducers: {
    updateFirstName : (state, action) => {
      state.firstName.value = action.payload;
      validateAndUpdateFirstName(state);
      state.isRegisterValid.value = checkIfRegisterIsValid(state)
    },
    updateLastName : (state, action) => {
      state.lastName.value = action.payload;
      validateAndUpdateLastName(state);
      state.isRegisterValid.value = checkIfRegisterIsValid(state)
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
      state.isRegisterValid.value = checkIfRegisterIsValid(state)
    },
    updateEmailConsent : (state, action) => {
      state.emailConsent.value = action.payload;
    },
    updateIsLoggedIn : (state, action) => {
          state.isLoggedIn.value = action.payload;
    },
     updateUserId : (state, action) => {
       state.userId.value = action.payload;
     },
    updateRegisterPassword : (state,action) => {
        state.registerPassword.value = action.payload;
        validateAndUpdateConfirmPassword(state);
        state.isRegisterValid.value = checkIfRegisterIsValid(state)
    },
    updateRegisterConfirmPassword : (state, action) => {
          state.registerConfirmPassword.value = action.payload;
          validateAndUpdateConfirmPassword(state);
          state.isRegisterValid.value = checkIfRegisterIsValid(state)
     },
     updateRegisterUserName : (state, action) => {
       state.registerUserName.value = action.payload;
       validateAndUpdateUserName(state);
       state.isRegisterValid.value = checkIfRegisterIsValid(state)
    },
     updateUserRole : (state, action) => {
           state.userRole.value = action.payload;
     }
  },
});

export const {
  updateFirstName,
  updateUserRole,
  updateUserId,
  updateRegisterUserName,
  updateRegisterPassword,
  updateRegisterConfirmPassword,
  updateLastName,
  updatePoemTitle,
  updatePoemContent,
  updateEmail,
  updateIsLoggedIn
} = customerDataSlice.actions;

export default customerDataSlice.reducer;
