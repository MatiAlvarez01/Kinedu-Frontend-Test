import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
const ModalContainer = styled.div`
    width: 500px;
    min-height: 100px;
    background-color: white;
    position: relative;
    border-radius: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ModalText = styled.div`
    font-family: 'Mukta', sans-serif;
    font-weight: 600;
    font-size: 23px;
`
const ButtonClose = styled.button`
    position: absolute;
    top: 25px;
    right: 25px;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    border-radius: 25px;

    &:hover {
        background-color: #75B753;
        color: white;
    }
`
function Modal({state, setState}) {

    function handleCloseModal() {
        setState(false)
    }

    return (
        <>
        {state && <Overlay>
            <ModalContainer>
                <ModalText>Assessment submited. Thank you!</ModalText>
                <ButtonClose onClick={handleCloseModal}>X</ButtonClose>
            </ModalContainer>
        </Overlay>
        }
        </>
    )
}

export default Modal;