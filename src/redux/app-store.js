import {configureStore} from "@reduxjs/toolkit";
import customerDataReducer from "./app-state-slice";

export default configureStore({
    reducer:{
        customerData: customerDataReducer,
    }
});
