
export const checkIfNameIsValid= (state) => {
    return !(state.firstName.hasError || state.lastName.hasError);
}
export const checkIfEmailIsValid= (state) => {
    return !(state.email.hasError);
}
export const checkIfPoemTitleIsValid= (state) => {
    return !(state.poemTitle.hasError || state.poemContent.hasError);
}
export const checkIfRegisterIsValid = (state) =>{
    return !(state.registerUserName.hasError || state.email.hasError
     || state.registerConfirmPassword.hasError || !(checkIfNameIsValid(state)))
}
export const checkIfPoemInfoIsValid = (state) => {
    return !(checkIfNameIsValid(state) && checkIfEmailIsValid(state) && checkIfPoemTitleIsValid(state))
}
