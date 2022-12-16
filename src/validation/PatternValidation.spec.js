import {
  isValidEmail,
  isValidName,
} from "./PatternValidation";

describe("Pattern Validation test",()=>{

  test("should return true when valid email", ()=> {
    const email = "abcde@ford.com";
    const result = isValidEmail(email);
    expect(result).toBeTruthy();
  })
  test("should return false when invalid email", ()=> {
    const email = "abcdefordcom";
    const result = isValidEmail(email);
    expect(result).toBeFalsy();
  })
  test("should return false when invalid first name", ()=> {
    const firstName = "12345";
    const result = isValidName(firstName);
    expect(result).toBeFalsy();
  })
  test("should return true when valid first name", ()=> {
    const firstName = "William";
    const result = isValidName(firstName);
    expect(result).toBeTruthy();
  })

})
