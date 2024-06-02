import { createSlice } from "@reduxjs/toolkit";

const FeedbackSlice = createSlice({
    name : "feedback",
    initialState : {
        allfeedbacks : [{id : 1,
            title : "feedback title",
            description : "feedback description",
        }],
        edit : {
            feedback : {},
            isEdit : false,
        },
    },
    reducers :{

        // Add

        add : (state,action) => {
            return {
                ...state,
                allfeedbacks : [action.payload, ...state.allfeedbacks]
            }
        },

        // Delete

        remove : (state,action) => {
            return {
                ...state,
                allfeedbacks : state.allfeedbacks.filter(item => item.id !== action.payload)
            }
        },

        edit : (state,action) => {
            return {
                ...state,
                edit : {feedback:action.payload , isEdit:true}
            };
        }

    },
});

export const {add , remove, edit} = FeedbackSlice.actions
export default FeedbackSlice.reducer;