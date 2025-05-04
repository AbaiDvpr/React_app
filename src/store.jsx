import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlices'
import infoReducer from './slices/infoSlice'



const store = configureStore({
    reducer:{
        counter2:counterReducer,
        info2:infoReducer
    }
})


export default store;