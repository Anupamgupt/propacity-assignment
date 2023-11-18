import { createSlice } from "@reduxjs/toolkit"


const initialState=[]


const speciesSlice= createSlice({
    name:'species',
    initialState,
    reducers:{
        setSpecies(state,action){
            state=action.payload;
            return state;
        },
        removeSpecies(state,action){
            return state.filter((item,ind)=>ind !== action.payload);
        },
    }
})


export const {setSpecies, removeSpecies} = speciesSlice.actions;
export default speciesSlice.reducer;