import { createSlice } from "@reduxjs/toolkit"


const initialState={show:false,id:-1};


const dropSlice= createSlice({
    name:'drop',
    initialState,
    reducers:{
        setDrop(state,action){
            if(action.payload===state.id){
                state.show=!state.show;
            }
            state.id=action.payload;
            return state
        },
        setdf(state,action){
            state.show=false
            return state;
        }
    }
})


export const {setDrop,setdf} = dropSlice.actions;
export default dropSlice.reducer;