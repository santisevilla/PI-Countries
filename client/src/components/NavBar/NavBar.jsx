import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    getCountries,
    orderByName
} from "../../actions/index"

export default function NavBar() {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.dogs) 

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    function handleAlphabeticalOrder(e) {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
      }

    return(
        <div>
            <div>
                <label> Order: </label>
                    <select onChange={(e) => handleAlphabeticalOrder(e)}> 
                        <option value="None">None</option>
                        <option value="asc">A-Z</option>
                        <option value="des">Z-A</option>
                    </select>
            </div>
            <div>
                <label> Population: </label>
                    <select onChange={(e) => handleAlphabeticalOrder(e)}> 
                        <option value="None">None</option>
                        <option value="asc">A-Z</option>
                        <option value="des">Z-A</option>
                    </select>
            </div>
            <div>
                <label> Continents: </label>
                    <select onChange={(e) => handleAlphabeticalOrder(e)}> 
                        <option value="None">None</option>
                        <option value="asc">A-Z</option>
                        <option value="des">Z-A</option>
                    </select>
            </div>
            <div>
                <label> Activity: </label>
                    <select onChange={(e) => handleAlphabeticalOrder(e)}> 
                        <option value="None">None</option>
                        <option value="asc">A-Z</option>
                        <option value="des">Z-A</option>
                    </select>
            </div>
        
        
        
        
        















        </div>
    )
}

