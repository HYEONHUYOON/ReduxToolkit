import { createSlice } from "@reduxjs/toolkit";

const colorBox = ['#DC143C','#FF8C00','#FFD700','#4169E1'];

//state init
const initialState = {
    index : 0,
    color : colorBox[0],
    clickColor : colorBox[3],
    leftClickState : false,
    rightClickState : false,
};

//slice
export const colorChangerSlice = createSlice({
    name : 'colorChanger',
    initialState,
    reducers : {
        change : (state) => {     
            if(state.index < colorBox.length - 2){
                state.index += 1;
            }else{
                state.index = 0;
            }
            state.color = colorBox[state.index];         
        },
        leftClick : (state) => {
            state.leftClickState = !state.leftClickState;
            if(state.rightClickState) state.rightClickState = false;
        },
        rightClick : (state) => {
            state.rightClickState = !state.rightClickState;
            if(state.leftClickState) state.leftClickState = false;
        },
    },
});

//actions
export const { change,leftClick,rightClick } = colorChangerSlice.actions;

//reducer
export default colorChangerSlice.reducer;