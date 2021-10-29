import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
`
var ButtonArea = styled.button(({selected, color}) => `
    background-color: ${selected ? "white" : "transparent"};
    border: solid 2px white;
    border-radius: 40px 0 0 40px;
    color: ${selected ? color : "white"};
    font-family: 'Mukta', sans-serif;
    font-weight: 600;
    font-size: 20px;
    width: 200px;
    height: 50px;
`)

function AreaButtonLeft({stateArea, setStateArea, color, name, nameRef}) {

    const [selected, setSelected] = useState();

    useEffect(() => {
        if (stateArea === nameRef) {
            setSelected(true)
        } else {
            setSelected(false)
        }
    }, [stateArea])

    function handleButtonClick() {
        setStateArea(nameRef)
    }

    return (
        <MainDiv>
            <ButtonArea onClick={handleButtonClick} selected={selected} color={color}>{name}</ButtonArea>
        </MainDiv>
    )
}

export default AreaButtonLeft;