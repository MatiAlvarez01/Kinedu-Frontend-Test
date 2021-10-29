import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
`
const SkillTitle = styled.p`
    color: white;
    font-family: 'Mukta', sans-serif;
    font-weight: 700;
    font-size: 30px;
    margin: 0;
`

function SkillNameText({text}) {
    return (
        <MainDiv>
            <SkillTitle>{`Skill: ${text}`}</SkillTitle>
        </MainDiv>
    )
}

export default SkillNameText;