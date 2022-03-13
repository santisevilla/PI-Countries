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

export function getActivities (){
    return async function(dispatch){
        try{
        const response = await axios.get("http://localhost:3001/activities/get")
        dispatch({
            type: "GET_ACTIVITIES",
            payload: response.data
        })
        }catch(error){
            console.log(error)
        }
    }
}

export function getNameCountries(name) {
    return async function(dispatch) {
        var json  = await axios.get("http://localhost:3001/countries?name=" + name)
        return dispatch({
            type: "GET_NAME_COUNTRIES",
            payload: json.data
        })
    }
}

export function getDetailCountry(id){
    return async function(dispatch){
        try {
            const countryIdJson = await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({
                type: 'GET_COUNTRY_DETAIL',
                payload: countryIdJson.data
            })
        } catch (error) {
            return(error)
        }        
        }
}

export function postActivity (payload) {
    return async function (dispatch){
        let res = await axios.post('http://localhost:3001/activities', payload);
        return dispatch({
            type: "POST_ACTIVITY",
            payload: res
        })
    }
}

export function orderByName(payload){
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}

export function filterByContinent(payload){
    return{
        type: "FILTER_CONTINENT",
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type: "ORDER_BY_POPULATION",
        payload
    }
}

export function filterByActivity(payload){
   // console.log(payload)
    return{
        type: "FILTER_ACTIVITY",
        payload
    }
}

