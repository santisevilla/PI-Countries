import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getActivities,
  getCountries,
  orderByName,
  orderByPopulation,
  filterByActivity,
  filterByContinent,
  filterByPopulation,
} from "../../actions";
import Paginado from "../Paginado/Paginado";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);
  const [order, setOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const indexOfLastCountrie = currentPage * countriesPerPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleAlphabeticalOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleOrderPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleFilterActivity(e) {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  }

  // function handleFilterPopulation(e) {
  //   e.preventDefault()
  //   dispatch(filterByPopulation(e.target.value))
  //   setOrder(`Ordenado ${e.target.value}`)
  // }

  window.scrollTo(0, 0);

  return (
    <div className="bodyHome">
      <div className="bodyNavBar">
        <div className="divActivity">
          <button className="buttonAll">
            <Link
              to="/activities"
              style={{ textDecoration: "none" }}
            >
              Create Activity
            </Link>
          </button>
        </div>
        <div className="div">
          <button
            className="buttonAll"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            All Countries
          </button>
        </div>
        <div className="div">
          <SearchBar />
        </div>
        {/* <div>
        <label> Population </label>
        <select onChange={(e) => handleFilterPopulation(e)}>
          <option value="All"></option>
          <option value="menor">menor a 50000</option>
        </select>
      </div> */}
        <div className="div">
          <label> Order: </label>
          <select
            className="selectStyle"
            onChange={(e) => handleAlphabeticalOrder(e)}
          >
            <option value="All"></option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        <div className="div">
          <label> Population: </label>
          <select
            className="selectStyle"
            onChange={(e) => handleOrderPopulation(e)}
          >
            <option value="All"></option>
            <option value="asc"> Highest </option>
            <option value="desc"> Lowest </option>
          </select>
        </div>
        <div className="div">
          <label> Continents: </label>
          <select
            className="selectStyle"
            onChange={(e) => handleFilterContinent(e)}
          >
            <option value="All"></option>
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
          <select
            className="selectStyle"
            onChange={(e) => handleFilterActivity(e)}
          >
            <option value="All"></option>
            {allActivities.map((element) => (
              <option value={element.name} key={element}>
                {element.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="cards">
        {currentCountries?.map((el) => {
          return (
            <div className="card">
              <Link
                to={"/home/" + el.id}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Card
                  image={el.image}
                  name={el.name}
                  id={el.id}
                  continent={el.continent}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="paginate">
        <Paginado
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
}
