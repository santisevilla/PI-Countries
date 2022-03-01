import axios from 'axios'

export function getCountries() {
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/countries")
        return dispatch ({
            type: "GET_COUNTRIES",
            payload: json.data
        })
    }
}

export function getNameCountries(name) {
    return async function(dispatch) {
        var json  = await axios.get("http://localhost:3001/countries?name=" + name)
        return dispatch({
            type: "GET_NAME_DOGS",
            payload: json.data
        })
    }
}

export function orderByName(payload){
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}