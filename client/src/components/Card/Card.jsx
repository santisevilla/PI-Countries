import React from "react";
import styles from "./card.css"

export default function Card({ image, name, continent, id}) {
    return(
        <div className="letras">
            <div>
                <img src={image} alt={`${name}`} width='200px' heigth='125px'/>
            </div>
            <h2>🌍 {name}</h2>
            <h3>🆔{id}</h3>
            <h2>📍 {continent}</h2>
        </div>
    )
}