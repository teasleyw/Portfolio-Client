import {
  isValidEmail,
  isValidName, isValidPoemTitle,isValidUserName
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
export const validateAndUpdateConfirmPassword = (state) => {
  if (state.registerConfirmPassword.value !== state.registerPassword.value) {
    state.registerConfirmPassword.hasError = true;
    state.registerConfirmPassword.errorMessage = "Passwords must be the same";
  }
  else{
      state.registerConfirmPassword.hasError  =false;
      state.registerConfirmPassword.errorMessage = '';
  }

}
export const validateAndUpdateUserName = (state) => {
  if (!isValidUserName(state.registerUserName.value)){
    state.registerUserName.hasError = true;
    state.registerUserName.errorMessage = "First name is invalid. Only Use Letters and Numbers";
  }
  else if (state.registerUserName.value.length > 15) {
    state.registerUserName.hasError = true;
    state.registerUserName.errorMessage = "User name must be below 15 characters";
  }
  else if (state.registerUserName.value == "") {
      state.registerUserName.hasError = true;
      state.registerUserName.errorMessage = "User name is empty";
    }
  else{
      state.registerUserName.hasError  =false;
      state.registerUserName.errorMessage = '';
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

export const validateAndUpdatePoemTitle = (state) => {
  if (!isValidPoemTitle(state.poemTitle.value)){
    state.poemTitle.hasError = true;
    state.poemTitle.errorMessage = "Poem Contains Invalid Charachters";
  }
  else if (state.lastName.value.length > 20){
    state.poemTitle.hasError = true;
    state.poemTitle.errorMessage = "Poem Title Must be 20 characters";
  }
  else{
    state.poemTitle.hasError =false;
    state.poemTitle.errorMessage = ''
  }
}
