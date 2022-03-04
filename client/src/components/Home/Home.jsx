import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../actions";
import Paginado from "../Paginado/Paginado";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import styles from "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);
  const [order, setOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
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

  window.scrollTo(0, 0);

  return (
    <div className="bodyHome">
      <div className="bodyNavBar">
        <NavBar />
      </div>
      <div className="cards">
        {currentCountries?.map((el) => {
          return (
            <div key={el.id} className="card">
              <Link to={"/home/" + el.id} style={{ textDecoration: "none" }}>
                <Card
                  image={el.image}
                  name={el.name}
                  continent={el.continents}
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
