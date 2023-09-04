import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { change,leftClick,rightClick} from "../redux/slices/colorChanger";

import { useInterval } from "../customHooks/useInterval";

const Button = styled.button`
    background-color   : ${props => props.color};
    float: ${props => props.position === 'left' ? "left" : "right"};
    border-radius: 10px;
    border-style: hidden;
    width: 500px;
    height: 50px;
    margin: 10px;
    position:  relative;
    display: block;
`

const LeftButton = styled(Button)` 
`;

const RightButton = styled(Button)` 
`;

const Text = styled.p`
    position:  relative;
    display: block;

    color: white;

    font-weight: 800;
`;

function Buttons({position,setClick}){

    const color = useSelector((state) => state.colorChanger.color);
    const clickColor = useSelector((state) => state.colorChanger.clickColor);

    const leftClickState = useSelector((state) => state.colorChanger.leftClickState);
    const rightClickState = useSelector((state) => state.colorChanger.rightClickState);

    const dispatch = useDispatch();

    const ClickPosition = () => {
        if(position === 'left'){
            dispatch(leftClick());
        }
        else if(position === 'right')
        {
            dispatch(rightClick());
        }
    }

    const ChangeColor = () => {
        dispatch(change());
    }
    
    useInterval(() => {
        ChangeColor();
    }, 500);

    return(
        <div>
            {
                position === 'left' ? 
                    <LeftButton 
                        color= {rightClickState === true ? clickColor : color} 
                        position = {position} 
                        onClick={()=>{ClickPosition()}}><Text>{position}</Text>
                    </LeftButton>
                : <RightButton 
                    color= {leftClickState === true ? clickColor : color} 
                    position = {position} 
                    onClick={()=>{ClickPosition()}}><Text>{position}</Text>
                    </RightButton>
            }
        </div>
    )
}

export default Buttons;