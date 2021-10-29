import axios from "axios";

import {
    GET_PHYSICAL_DATA,
    GET_SOCIAL_EMOTIONAL_DATA,
    FINISH_ASSESSMENT
} from "./constants"

export function getPhysicalData() {
    return function(dispatch) {
        return axios.get("http://localhost:8000/physicalData")
        .then(physicalData => {
            dispatch({
                type: GET_PHYSICAL_DATA,
                payload: physicalData.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function getSocialEmotionalData() {
    return function(dispatch) {
        return axios.get("http://localhost:8000/socialEmotionalData")
        .then(socialEmotionalData => {
            dispatch({
                type: GET_SOCIAL_EMOTIONAL_DATA,
                payload: socialEmotionalData.data
            })
        })
    }
}

export function finishAssessment(answers) {
    return function(dispatch) {
        return axios.post("http://localhost:8000/finishAssessment", {answers: answers})
        .then(res => {
            dispatch({
                type: FINISH_ASSESSMENT,
                payload: res.data
            })
        })
    }
}