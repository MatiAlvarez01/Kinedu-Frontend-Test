import {
    GET_PHYSICAL_DATA,
    GET_SOCIAL_EMOTIONAL_DATA,
    FINISH_ASSESSMENT
} from "../action/constants"

var initialState = {
    physicalData: {},
    socialEmotionalData: {}
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_PHYSICAL_DATA: 
            return {
                ...state,
                physicalData: action.payload
            }
        case GET_SOCIAL_EMOTIONAL_DATA:
            return {
                ...state,
                socialEmotionalData: action.payload
            }
        case FINISH_ASSESSMENT:
            return {
                ...state
            }
        default: 
            return {
                ...state
            }
    }
}

export default reducer;