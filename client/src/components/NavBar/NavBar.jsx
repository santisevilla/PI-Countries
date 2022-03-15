import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterByContinent,
  getCountries,
  orderByName,
  orderByPopulation,
  filterByActivity,
  getActivities
} from "../../actions/index";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activities);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getActivities())
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleAlphabeticalOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }
  
  function handleOrderPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value));
  }

  function handleFilterActivity(e) {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
  }

  return (
    <div className="select">
      <div className="buttonCreate">
        <Link to="/activities" style={{ textDecoration: "none", color: "none" }}>
          Create a new activity!
        </Link>
      </div>
      <div className="buttonAllCountries">
        <button onClick={(e) => {handleClick(e)}}>
          All Countries
        </button>
      </div>
      <div className="div">
        <SearchBar />
      </div>
      <div className="div">
        <label> Order: </label>
        <select onChange={(e) => handleAlphabeticalOrder(e)}>
          <option value="None">All</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <div className="div">
        <label> Population: </label>
        <select onChange={(e) => handleOrderPopulation(e)}>
          <option value="None">All</option>
          <option value="asc"> Highest </option>
          <option value="desc"> Lowest </option>
        </select>
      </div>
      <div className="div">
        <label> Continents: </label>
        <select onChange={(e) => handleFilterContinent(e)}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>
      <div className="div">
        <label> Activity: </label>
        <select onChange={(e) => handleFilterActivity(e)}>
          <option value="All">All activities</option>
          {allActivities.map((element) => (
            <option value={element.name} key={element}>
              {element.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
