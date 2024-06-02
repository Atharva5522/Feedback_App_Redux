import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedback/FeedbackSlice";
import QuoteReducer from "./feedback/QuoteSlice"

const store = configureStore({
    reducer : {

        feedback : feedbackReducer,
        Quote : QuoteReducer,

    }
}) 

export default store