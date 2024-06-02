import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const QuoteSlice = createSlice({
    name : "Quote",
    initialState : {
        allQuotes : [{
            content : "sbxh",
            author : "erf",
        }],
        isLoading : false,
        isError : false,
        isSuccess : false,

    },
        
        
        reducers : {

        },

        extraReducers:(builder) =>{
            builder.addCase(fetchQuote.pending, (state,action) =>{
                state.isLoading = true
                state.isError = false
                state.isSuccess = false;

            }).addCase(fetchQuote.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isError = false
                state.isSuccess = true;
                state.allQuotes = action.payload;
            }).addCase(fetchQuote.rejected, (state,action) =>{
                state.isLoading = false
                state.isError =true
                state.isSuccess = false;
            });
        }


    

    
});

export default QuoteSlice.reducer;

export const fetchQuote = createAsyncThunk("FETCH/QUOTE",
async() => {
    const response =await fetch("https://quotable.io/random");
    const data = await response.json();
    console.log(response);
    return data;
})