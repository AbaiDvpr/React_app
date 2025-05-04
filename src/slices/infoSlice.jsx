import { createSlice } from "@reduxjs/toolkit";

const getInitialState = ()=>{
    const saved=localStorage.getItem('show');
    return saved === null ? true: JSON.parse(saved)
    
}

console.log(getInitialState())
const infoSlice = createSlice({
    name:'info',
    // initialState: getInitialState(),
    initialState:{
        show: getInitialState(),
    },
    reducers:{
        korsetu: (state) =>{
            state.show = true;

            localStorage.setItem("show",true)
        },
        owiru: (state) =>{
            state.show =false;

            localStorage.setItem('show',false)
        },
        
    }

})
export const {korsetu,owiru }=infoSlice.actions;
export default infoSlice.reducer;
