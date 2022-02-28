const initialState = {
    countries: [],
    allCountries: [],
    detail: []
}

export default function rootReducer ( state= initialState, action ) {
    switch(action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        default:
            return state
    }
}