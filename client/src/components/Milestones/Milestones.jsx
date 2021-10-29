import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    @media screen and (min-width: 1920px) {
        width: 86%;
    }
`
const UpperDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const BottomDiv = styled.div`
`
const TextDiv = styled.div`
    width: 61%;
`
const ButtonDiv = styled.div`
`
const ButtonDivMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 130px;
`
const Title = styled.p`
    font-family: 'Mukta', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #70818C;
    margin-bottom: 0;
`
const Age = styled.p`
    font-family: 'Mukta', sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: #92A2AE;
    margin: 5px 0 30px 0;
`

const ButtonDesktop = styled.button(({answer, color}) =>`
    background-color: ${answer === "Completed" ? "#75B753" : null};
    border: none;
    border-radius: 50px;
    font-family: 'Mukta', sans-serif;
    font-weight: 600;
    font-size: 25px;
    height: 60px;
    width: 220px;
    transition: transform 250ms;
    color: ${answer === "Not answered" ? "#9D9D9D" : color};

    &:hover {
        transform: translateY(-10px)
    }
`)
const ButtonMobile = styled.button(({answer, color}) => `
    background-color: ${answer === "Completed" ? "#75B753" : null};
    border: none;
    border-radius: 100%;
    height: 70px;
    width: 70px;
    font-family: 'Mukta', sans-serif;
    font-weight: 600;
    font-size: 30px;
    color: ${answer === "Not answered" ? "#9D9D9D" : color};
`)
const ButtonText = styled.p(({answer}) =>`
    font-family: 'Mukta', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: ${answer === "Not answered" ? "#9D9D9D" : "#75B753"};
    margin-top: 2px;
    width: 100%;
    text-align: center;
`)
function Milestones({data, answers, setAnswers}) {
    const [answer, setAnswer] = useState("Not answered");
    const [color, setColor] = useState();
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)"});

    useEffect(() => {
        if (answers[data.id]) {
            setAnswer(answers[data.id])
            if(answers[data.id] === "Completed") {
                setColor("white")
            } else {
                setColor("#75B753")
            }
        }
    }, [])

    function handleButtonAnswerd() {
        if (answer === "Completed") {
            setAnswer("Uncompleted")
            setAnswers({
                ...answers,
                [data.id]: "Uncompleted"
            })
            setColor("#75B753")
        } else {
            setAnswer("Completed")
            setAnswers({
                ...answers,
                [data.id]: "Completed"
            })
            setColor("white")
        }
    }

    return (
        <MainDiv>
            <UpperDiv>
                <TextDiv>
                    <Title>{data.title}</Title>
                    <Age>{`Usually achieved at age: ${data.age}`}</Age>
                </TextDiv>
                <ButtonDiv>
                    {isTabletOrMobile && 
                    <ButtonDivMobile>
                        <ButtonMobile 
                            onClick={handleButtonAnswerd}
                            answer={answer}
                            color={color}
                        >✓</ButtonMobile>
                        <ButtonText answer={answer}>{answer}</ButtonText>
                    </ButtonDivMobile>}
                    {isDesktopOrLaptop && <ButtonDesktop 
                        onClick={handleButtonAnswerd}
                        answer={answer}
                        color={color}
                        >{answer}</ButtonDesktop>}
                </ButtonDiv>
            </UpperDiv>
            <BottomDiv>
                <hr style={{border: "solid 1px #F0F0F0"}}/>
            </BottomDiv>
        </MainDiv>
    )
}

export default Milestones;
