import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./personSlice";

const store = configureStore({
     reducer: {
        person: personSlice
     }
})
export default store