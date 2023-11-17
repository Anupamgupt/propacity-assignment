import { createSlice } from "@reduxjs/toolkit"


const initialState=false;


const menuSlice= createSlice({
    name:'menu',
    initialState,
    reducers:{
        setMenu(state,action){
            state=!state;
            return state
        },
        setf(state,action){
            state=false
            return state;
        }
    }
})


export const {setMenu,setf} = menuSlice.actions;
export default menuSlice.reducer;