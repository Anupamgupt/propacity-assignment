import { createSlice } from "@reduxjs/toolkit"


const initialState={}


const sidebarContentSlice= createSlice({
    name:'sideContent',
    initialState,
    reducers:{
        setSide(state,action){
            state=action.payload;
            return state;
        },
       
    }
})


export const {setSide} = sidebarContentSlice.actions;
export default sidebarContentSlice.reducer;