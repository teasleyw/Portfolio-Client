import exrAppReducer, {
  updateEmail,
  updateFirstName, updateLastName
} from "./app-state-slice";
import { initialState } from "./initialState";

describe("exrApp reducer", () => {
  let appInitialState;

  beforeEach(() => {
    appInitialState = JSON.parse(JSON.stringify(initialState));
  });

  it("should handle initial state", () => {
    expect(exrAppReducer(undefined, { type: "unknown" })).toEqual(
      appInitialState
    );
  });

  it("should handle updateFirstName", () => {
    let expected = appInitialState;
    expected.firstName.value = "Ziggy";
    let actualState = exrAppReducer(
      appInitialState,
      updateFirstName("Ziggy")
    );
    expect(actualState.firstName.value).toEqual(expected.firstName.value);
  });

  it("should handle updateLastName", () => {
    let expected = appInitialState;
    expected.lastName.value = "Stardust";
    let actualState = exrAppReducer(
      appInitialState,
      updateLastName("Stardust")
    );
    expect(actualState.lastName.value).toEqual(expected.lastName.value);
  });

  it("should update email", () => {
    let expected = appInitialState;
    expected.email.hasError = false;
    expected.email.value = "Abcd@ford.com";
    let actualState = exrAppReducer(
      appInitialState,
      updateEmail("Abcd@ford.com")
    );
    expect(actualState.email.value).toEqual(expected.email.value);
  });


});
