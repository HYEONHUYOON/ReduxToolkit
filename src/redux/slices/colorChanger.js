import { createSlice } from "@reduxjs/toolkit";

const colorBox = ['#DC143C','#FF8C00','#FFD700'];

const initialState = {
    index : 0,
    color : colorBox[0],
    isClick : false,
    clickColor : '#4169E1',
    leftClickState : false,
    rightClickState : false,
};

export const colorChangerSlice = createSlice({
    name : 'colorChanger',
    initialState,
    reducers : {
        change : (state) => {
            if(!state.isClick){
                if(state.index < 2){
                    state.index += 1;
                }else{state.index =0;}
                state.color = colorBox[state.index];
            }
        },
        leftClick : (state) => {
            console.log('left')
            state.leftClickState = !state.leftClickState;
            if(state.rightClickState) state.rightClickState = false;
        },
        rightClick : (state) => {
            console.log('right')
            state.rightClickState = !state.rightClickState;
            if(state.leftClickState) state.leftClickState = false;
        },
    },
});

export const { change,leftClick,rightClick } = colorChangerSlice.actions;

export default colorChangerSlice.reducer;