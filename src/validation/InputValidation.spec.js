import {
  validateAndUpdateEmail,
  validateAndUpdateFirstName,
  validateAndUpdateLastName,
} from "./InputValidation";

describe("Input Validation tests",()=>{

  describe('Email Validation', () => {
    test("Should Check if email address has a value", () => {
      const state = {
        email: {
          value: '',
          hasError: false,
          errorMessage: ''
        },
      }
      validateAndUpdateEmail(state);
      expect(state.email.hasError).toBeTruthy();
      expect(state.email.errorMessage).toEqual('Email is required');
    })
    test("Should Check if email address has a value", () => {
      const state = {
        email: {
          value: 'abcdeford.com',
          hasError: false,
          errorMessage: ''
        },
      }
      validateAndUpdateEmail(state);
      expect(state.email.hasError).toBeTruthy();
      expect(state.email.errorMessage).toEqual('Email is Invalid');
    })
    test("Should set hasError to False for valid email", () => {
      const state = {
        email: {
          value: 'abcde@ford.com',
          hasError: true,
          errorMessage: ''
        },
      }
      validateAndUpdateEmail(state);
      expect(state.email.hasError).toBeFalsy();
    })
  })

  describe("First Name Validation",()=> {
    test("Should set hasError to true when first name has more than 15 characters", () => {
      const state = {
        firstName: {
          value: "abcderfasdfdsfsdmfm",
          hasError: false,
          errorMessage: ""
        },
      }
      validateAndUpdateFirstName(state);
      expect(state.firstName.hasError).toBeTruthy();
      expect(state.firstName.errorMessage).toEqual("First name must be less than or equal to 15 characters")
    })
  test("Should set hasError to true when first name has a number", () => {
    const state = {
      firstName: {
        value: "will24",
        hasError: false,
        errorMessage: ""
      },
    }
    validateAndUpdateFirstName(state);
    expect(state.firstName.hasError).toBeTruthy();
    expect(state.firstName.errorMessage).toEqual("First name is invalid")
  })
  test("Should set hasError to false when first name is valid", () => {
    const state = {
      firstName: {
        value: "will",
        hasError: true,
        errorMessage: ""
      },
    }
    validateAndUpdateFirstName(state);
    expect(state.firstName.hasError).toBeFalsy();
    expect(state.firstName.errorMessage).toEqual("")
  })
  })
  describe("Last Name Validation",()=> {
    test("Should set hasError to true when last name has more than 40 characters", () => {
      const state = {
        lastName: {
          value: "abcderfasdfdsfsdmfmfdsjanfkjdsfkjsdakjfhdsjklfhdsakjfhklsdjhfjkdsahdfsa",
          hasError: false,
          errorMessage: ""
        },
      }
      validateAndUpdateLastName(state);
      expect(state.lastName.hasError).toBeTruthy();
      expect(state.lastName.errorMessage).toEqual("Last name must be less than or equal to 40 characters")
    })
    test("Should set hasError to true when last name has a number", () => {
      const state = {
        lastName: {
          value: "will24",
          hasError: false,
          errorMessage: ""
        },
      }
      validateAndUpdateLastName(state);
      expect(state.lastName.hasError).toBeTruthy();
      expect(state.lastName.errorMessage).toEqual("Last name is invalid")
    })
    test("Should set hasError to false when last name is valid", () => {
      const state = {
        lastName: {
          value: "will",
          hasError: true,
          errorMessage: ""
        },
      }
      validateAndUpdateLastName(state);
      expect(state.lastName.hasError).toBeFalsy();
      expect(state.lastName.errorMessage).toEqual("")
    })
  })
})
