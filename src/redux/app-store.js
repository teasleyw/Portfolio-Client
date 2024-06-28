import { configureStore } from "@reduxjs/toolkit";
import customerDataReducer, { loadState } from "./app-state-slice";

// Function to load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state from localStorage", e);
    return undefined;
  }
};

// Function to save state to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.warn("Could not save state to localStorage", e);
  }
};

// Load initial state from localStorage
const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    customerData: customerDataReducer,
  },
  preloadedState: persistedState
});

// Subscribe to store changes to save state to localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

// Load state into the Redux store
store.dispatch(loadState(persistedState));

export default store;
