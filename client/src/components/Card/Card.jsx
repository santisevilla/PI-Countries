import React from "react";
import styles from "./card.css"

export default function Card({ image, name, continent}) {
    return(
        <div>
            <img src={image} alt={`${name}`} width='200px' heigth='125px'/>
            <h2>{name}</h2>
            <h2>{continent}</h2>
        </div>
    )
}