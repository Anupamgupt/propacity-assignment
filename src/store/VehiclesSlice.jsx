import { createSlice } from "@reduxjs/toolkit"


const initialState=[]


const vehiclesSlice= createSlice({
    name:'vehicles',
    initialState,
    reducers:{
        setVehicle(state,action){
            state=action.payload;
            return state;
        },
        removeVehilce(state,action){
            return state.filter((item,ind)=>ind !== action.payload);
        },
    }
})


export const {setVehicle, removeVehilce} = vehiclesSlice.actions;
export default vehiclesSlice.reducer;