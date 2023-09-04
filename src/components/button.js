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
    width: 300px;
    height: 50px;
    margin: 10px;
    position:  relative;
    display: block;
`

const LeftButton = styled(Button)`
`;

const RightButton = styled(Button)`
    &:hover{

    }
`;

const Text = styled.p`
    position:  relative;
    display: block;
    color: white;
    font-weight: 800;
`;

function Buttons({position}){
    
    //색 State
    const color = useSelector((state) => state.colorChanger.color);
    const clickColor = useSelector((state) => state.colorChanger.clickColor);

    //클릭 이벤트 관리 State
    const leftClickState = useSelector((state) => state.colorChanger.leftClickState);
    const rightClickState = useSelector((state) => state.colorChanger.rightClickState);

    const dispatch = useDispatch();

    //position 값에 따른 action dispatch
    const ClickPosition = () => {
        if(position === 'left'){
            dispatch(leftClick());
        }
        else if(position === 'right')
        {
            dispatch(rightClick());
        }
    }

    //색 바꾸는 action
    const ChangeColor = () => {
        dispatch(change());
    }
    
    //0.5초에 한번씩 실행
    useInterval(() => {
        ChangeColor();
    }, 500);

    return(
        <div>
            {
                //조건부 렌더링 Position 값에 따름
                position === 'left' ? 
                    <LeftButton 
                        color= {rightClickState === true ? clickColor : color} 
                        position = {position} 
                        onClick={()=>{ClickPosition()}}><Text>{position}</Text>
                    </LeftButton>
                :   
                    <RightButton 
                        color= {leftClickState === true ? clickColor : color} 
                        position = {position} 
                        onClick={()=>{ClickPosition()}}><Text>{position}</Text>
                    </RightButton>
            }
        </div>
    )
}

export default Buttons;