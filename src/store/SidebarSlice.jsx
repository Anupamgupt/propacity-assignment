import { createSlice } from "@reduxjs/toolkit"


const initialState=false;


const sidebarSlice= createSlice({
    name:'sidebar',
    initialState,
    reducers:{
        setTranslate(state,action){
            state=action.payload;
            return state
        },
        setFalse(state,action){
            state=false;
            return state;
        },
    }
})


export const {setTranslate, setFalse} = sidebarSlice.actions;
export default sidebarSlice.reducer;