import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
`
const AreaP = styled.p`
    color: white;
    font-family: 'Mukta', sans-serif;
    font-weight: 600;
    font-size: 23px;
    margin-top: 37px;
`

function AreaText() {
    return (
        <MainDiv>
            <AreaP>Areas</AreaP>
        </MainDiv>
    )
}

export default AreaText;