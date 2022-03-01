const initialState = {
    countries: [],
    allCountries: [],
    detail: [],
    activities: []
}

export default function rootReducer ( state= initialState, action ) {
    switch(action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case "GET_ACTIVITIES":
            return {
                ...state,
                activities: action.payload
            }
        case "GET_NAME_COUNTRIES":
            return {
                ...state,
                countries: action.payload
            }
        case "ORDER_BY_NAME":
            const sortedArr = action.payload === 'asc' ?
            state.countries.sort(function (a, b) {
                if (a.name > b.name) { return 1 }
                if (b.name > a.name) { return -1 }
                return 0;
                }) :
            state.countries.sort(function (a, b) {
                if (a.name > b.name) { return -1; }
                if (b.name > a.name) { return 1; }
                return 0;
                })
            return {
                ...state,
                allCountries: sortedArr
                }
        default:
            return state
    }
}