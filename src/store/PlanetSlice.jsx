import { createSlice } from "@reduxjs/toolkit"


const initialState=[]


const planetSlice= createSlice({
    name:'planets',
    initialState,
    reducers:{
        setPlanets(state,action){
            state=action.payload;
            return state;
        },
        removePlanet(state,action){
            return state.filter((item,ind)=>ind !== action.payload);
        },
    }
})


export const {setPlanets, removePlanet} = planetSlice.actions;
export default planetSlice.reducer;