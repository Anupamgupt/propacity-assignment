import { createSlice } from "@reduxjs/toolkit"


const initialState=false;


const modalSlice= createSlice({
    name:'menu',
    initialState,
    reducers:{
        setModal(state,action){
            state=!state;
            return state
        },
        setmf(state,action){
            state=false
            return state;
        }
    }
})


export const {setModal,setmf} = modalSlice.actions;
export default modalSlice.reducer;