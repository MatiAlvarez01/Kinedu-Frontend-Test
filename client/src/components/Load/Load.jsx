import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhysicalData, getSocialEmotionalData } from "../../action/index";
import styled from "styled-components";
import Home from "../Home/Home";

const MainSection = styled.section`
    background-color: #F4F5F6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const GifLoading = styled.img`
`

function Load() {
    const dispatch = useDispatch();
    const physicalAreaData = useSelector(state => state.physicalData);
    const socialEmotionalAreaData = useSelector(state => state.socialEmotionalData);
  
    useEffect(() => {
      dispatch(getPhysicalData());
      dispatch(getSocialEmotionalData());
    }, [])
    
    return (
        <div>
            {(physicalAreaData.data && socialEmotionalAreaData.data) ? <Home physicalAreaData={physicalAreaData} socialEmotionalAreaData={socialEmotionalAreaData}/> : 
            <MainSection>
                <GifLoading src={`/gif/spinnerLoading.gif`} alt="Loading..."/>
            </MainSection>}
        </div>
    )    
}

export default Load;