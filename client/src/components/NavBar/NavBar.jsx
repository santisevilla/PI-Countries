import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { 
    filterByContinent, 
    getCountries, 
    orderByName, 
    orderByPopulation 
} from "../../actions/index";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.css"

export default function NavBar() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault()
    dispatch(getCountries())
  }

  function handleAlphabeticalOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
  }

  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value))
  }

  function handleOrderPopulation(e) {
    e.preventDefault()
    dispatch(orderByPopulation(e.target.value))
  }

  return (
    <div className="select">
      <div>
        <button>
          Create a new activity!
        </button>
      </div>
      <div className="div">
        <button onClick={ e => {handleClick(e)}}>
            Reset 
        </button>    
      </div>  
      <div className="div">
        <SearchBar />
      </div>
      <div className="div">
        <label> Order: </label>
        <select onChange={(e) => handleAlphabeticalOrder(e)}>
          <option value="None">None</option>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </select>
      </div>
      <div className="div">
        <label> Population: </label>
        <select onChange={(e) => handleOrderPopulation(e)}>
          <option value="None">None</option>
          <option value='more'> Highest </option>
          <option value='less'> Lowest </option>
        </select>
      </div>
      <div className="div">
        <label> Continents: </label>
        <select onChange={(e) => handleFilterContinent(e)}>
          <option value='All'>All</option>
          <option value='Africa'>Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value='Europe'>Europa</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>
      <div className="div">
        <label> Activity: </label>
        <select>
          <option value="None">None</option>
        </select>
      </div>
    </div>
  );
}
