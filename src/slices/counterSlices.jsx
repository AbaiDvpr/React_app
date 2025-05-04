import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'aaa',
    initialState:{
        
        value:10,
    },
    reducers:{

        increment: (state) =>{
            state.value += 1;
        },

        decrement: (state) =>{
            state.value -=1;
        },
        incrementByAmount: (state,janaSan) =>{
            state.value +=janaSan.payload
        }
    }
})
export const {increment,decrement, incrementByAmount}=counterSlice.actions;
export default counterSlice.reducer;
