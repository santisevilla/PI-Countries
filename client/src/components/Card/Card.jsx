import React from "react";
import styles from "./card.css";

export default function Card1({ image, name, continent, id }) {
  return (
    <div className="letras">
        <img className="imgCard" src={image} alt={`${name}`}/>
        <h2>🌍 {name}</h2>
        <h3>🆔{id}</h3>
        <h2>📍 {continent}</h2>
    </div>
  );
}
