import { createSlice } from "@reduxjs/toolkit"


const initialState=[]


const filmSlice= createSlice({
    name:'films',
    initialState,
    reducers:{
        setFilm(state,action){
            state=action.payload;
            return state
        },
        removeFilm(state,action){
            return state.filter((item,ind)=>ind !== action.payload);
        },
    }
})


export const {setFilm, removeFilm} = filmSlice.actions;
export default filmSlice.reducer;