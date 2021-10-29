import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
    width: 86%;
`
const SkillDescription = styled.p`
    color: white;
    font-family: 'Mukta', sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 50px;
`

function SkillDescriptionText({text}) {
    return (
        <MainDiv>
            <SkillDescription>{text}</SkillDescription>
        </MainDiv>
    )
}

export default SkillDescriptionText;