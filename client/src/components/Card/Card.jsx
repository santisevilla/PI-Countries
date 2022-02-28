import React from "react";

export default function Card({ image, name, continents}) {
    return(
        <div>
            <img src={image} alt={`${name}`} width='250px' heigth='200px'/>
            <h1>{name}</h1>
            <h2>{continents}</h2>
        </div>
    )
}