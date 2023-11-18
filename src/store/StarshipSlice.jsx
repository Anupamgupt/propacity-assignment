import { createSlice } from "@reduxjs/toolkit"


const initialState=[]


const starshipSlice= createSlice({
    name:'starships',
    initialState,
    reducers:{
        setStarship(state,action){
            state=action.payload;
            return state;
        },
        removeStarship(state,action){
            return state.filter((item,ind)=>ind !== action.payload);
        },
    }
})


export const {setStarship, removeStarship} = starshipSlice.actions;
export default starshipSlice.reducer;