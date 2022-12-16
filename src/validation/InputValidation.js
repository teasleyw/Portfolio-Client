import {
  isValidEmail,
  isValidName
} from "./PatternValidation";

export const validateAndUpdateEmail = (state) => {
  if (!state.email.value || state.email.value === "") {
    state.email.hasError = true;
    state.email.errorMessage = "Email is required";
  }
  else if (!isValidEmail(state.email.value)){
    state.email.hasError = true;
    state.email.errorMessage = "Email is Invalid";
  }
  else{
    state.email.hasError =false;
    state.email.errorMessage = ''
  }
}
export const validateAndUpdateFirstName = (state) => {
  if (!isValidName(state.firstName.value)){
    state.firstName.hasError = true;
    state.firstName.errorMessage = "First name is invalid";
  }
  else if (state.firstName.value.length > 15){
    state.firstName.hasError = true;
    state.firstName.errorMessage = "First name must be less than or equal to 15 characters";
  }
  else{
    state.firstName.hasError =false;
    state.firstName.errorMessage = ''
  }
}


export const validateAndUpdateLastName = (state) => {
  if (!isValidName(state.lastName.value)){
    state.lastName.hasError = true;
    state.lastName.errorMessage = "Last name is invalid";
  }
  else if (state.lastName.value.length > 40){
    state.lastName.hasError = true;
    state.lastName.errorMessage = "Last name must be less than or equal to 40 characters";
  }
  else{
    state.lastName.hasError =false;
    state.lastName.errorMessage = ''
  }
}
