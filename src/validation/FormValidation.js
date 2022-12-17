
export const checkIfNameIsValid= (state) => {
    return !(state.firstName.hasError || state.lastName.hasError);
}
export const checkIfEmailIsValid= (state) => {
    return !(state.email.hasError);
}
export const checkIfPoemTitleIsValid= (state) => {
    return !(state.poemTitle.hasError || state.poemContent.hasError);
}

export const checkIfPoemInfoIsValid = (state) => {
    return !(checkIfNameIsValid(state) && checkIfEmailIsValid(state) && checkIfPoemTitleIsValid(state))
}
