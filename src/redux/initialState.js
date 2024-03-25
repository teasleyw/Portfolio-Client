export let initialState = {
  firstName: {
    value: "",
    hasError: false,
    errorMessage: "",
  },
  lastName: {
    value: "",
    hasError: false,
    errorMessage: "",
  },
  poemTitle: {
    value: "",
    hasError: false,
    errorMessage: ""
  },
  poemContent: {
    value: "",
    hasError: false,
    errorMessage: ""
  },
  email: { value: "", hasError: false, errorMessage: "" },
  emailConsent: { value: false },
  isLoggedIn: {value: false},
  userId: {value: null},
  registerPassword: {value: "", hasError: true, errorMessage: ""},
  registerConfirmPassword: {value: "", hasError: true, errorMessage: ""},
  registerUserName: {value: "", hasError: true, errorMessage: ""},
  isRegisterValid: {value: "", hasError: false, errorMessage: ""}
};
