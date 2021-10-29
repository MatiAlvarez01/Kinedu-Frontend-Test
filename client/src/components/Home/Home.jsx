import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AreaButtonLeft from "../AreaButton/AreaButtonLeft";
import AreaButtonRight from "../AreaButton/AreaButtonRight";
import AreaText from '../Texts/AreaText';
import SkillNameText from "../Texts/SkillNameText";
import SkillDescriptionText from '../Texts/SkillDescriptionText';
import Milestones from '../Milestones/Milestones';
import styled from 'styled-components';
import { finishAssessment } from '../../action';

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F8F8F8;
`
const SkillSection = styled.section`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const HrLine = styled.hr`
    color: white;
    width: 90%;
    border: solid 0.5px white;
    border-radius: 20px;
    margin: 27px 0;
    @media screen and (min-width: 1024px) {
        width: 40%
    }
`
const MilestonesDiv = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    @media screen and (min-width: 768px) {
        width: 100%;
    }
    @media screen and (min-width: 1920px) {
        width: 79.7%;
    }
    @media screen and (min-width: 2560px) {
        width: 59.3%;
    }
`
const ButtonDiv = styled.div`
    background-color: #FFFFFF;
    text-align: center;
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 80%;
    }
    @media screen and (min-width: 1920px) {
        width: 79.7%;
    }
    @media screen and (min-width: 2560px) {
        width: 59.3%;
    }
`
const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
`
const Button = styled.button`
    width: 90%;
    border-radius: 25px;
    border: none;
    background-color: #75B753;
    color: white;
    font-family: 'Mukta', sans-serif;
    font-weight: 600;
    font-size: 25px;
    padding: 2%;
    margin: 20px 0 60px 0;
    transition: transform 250ms;
    @media screen and (min-width: 1024px) {
        width: 50%;
        padding: 1%;
    }
    @media screen and (min-width: 1440px) {
        width: 30%;
        padding: 0.7%;
    }
    @media screen and (min-width: 1920px) {
        width: 25%;
        padding: 0.7%;
    }
    @media screen and (min-width: 2560px) {
        width: 20%;
        padding: 0.5%;
    }

    &:hover {
        transform: translateY(-10px)
    }
`
var DinamicBackgroud = styled.div(({color}) => `
    background-color: ${color};
    transition: 0.5s ease;
    -moz-transition:0.5s ease;
    -webkit-transition:0.5s ease;
    @media screen and (min-width: 1920px) {
        width: 79.6%;
    }
`)

function Home() {
    const dispatch = useDispatch();
    const [color, setColor] = useState()
    const [area, setArea] = useState("Physical");
    const physicalData = useSelector(state => state.physicalData).data.skill;
    const socialEmotionalAreaData = useSelector(state => state.socialEmotionalData).data.skill;
    const [data, setData] = useState(physicalData)
    const [answers, setAnswers] = useState({})

    useEffect(() => {
        if (area === "Physical") {
            setData(physicalData);
            setColor("#1FADDF")
        } else if (area === "Social") {
            setData(socialEmotionalAreaData);
            setColor("#D43571")
        }
    }, [area])

    function handleButtonNext() {
        setArea("Social")
        setData(socialEmotionalAreaData)
        setColor("#D43571")
    }
    function handleButtonFinish() {
        dispatch(finishAssessment(answers))
        setAnswers({})
    }

    return (
        <MainSection>
            <DinamicBackgroud color={color}>
                <SkillSection>
                    <AreaText />
                    <ButtonsDiv>
                        <AreaButtonLeft
                            stateArea={area}
                            setStateArea={setArea}
                            color="#1FADDF"
                            name="Physical"
                            nameRef="Physical"
                        />
                        <AreaButtonRight
                            stateArea={area}
                            setStateArea={setArea}
                            color="#D43571"
                            name="Social & emotional"
                            nameRef="Social"
                        />
                    </ButtonsDiv>
                    <HrLine />
                    <SkillNameText text={data.title}/>
                    <SkillDescriptionText text={data.description}/>
                </SkillSection>
            </DinamicBackgroud>
            <MilestonesDiv>
                {data.milestones.map(milestone => <Milestones key={milestone.id} data={milestone} answers={answers} setAnswers={setAnswers}/>)}
            </MilestonesDiv>
            <ButtonDiv>
                {area === "Physical" ? <Button onClick={handleButtonNext}>Next</Button> : <Button onClick={handleButtonFinish}>Finish assessment</Button>}
            </ButtonDiv>
        </MainSection>
    )
}

export default Home;