import { createSlice } from "@reduxjs/toolkit"


const initialState=[]


const peopleSlice= createSlice({
    name:'people',
    initialState,
    reducers:{
        setPeople(state,action){
            state=action.payload;
            return state;
        },
        removePeople(state,action){
            return state.filter((item,ind)=>ind !== action.payload);
        },
    }
})


export const {setPeople, removePeople} = peopleSlice.actions;
export default peopleSlice.reducer;