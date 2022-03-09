import { React, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    getDetailCountry
} from "../../actions/index"

export default function Detail() {
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getDetailCountry(id))
    },[id, dispatch]);

    const detail = useSelector((state)=>state.detail);

    return(
        <div>
            <div>
            <div>
            {
                detail?(
                    <div>
                        <div key={detail.id}></div>
                        <h2>Name:{detail.name}  {detail.id}</h2>
                        <img src={detail.image} alt="image_flag"></img>
                        <h4>Continent: {detail.continent}</h4>
                        <h4>Subregion: {detail.subRegion}</h4>
                        <h4>Capital: {detail.capital}</h4>
                        <h4>Population: {detail.population}</h4>
                        <h4>Area: {detail.area}km²</h4>
                        <h4>Activities: </h4>
                        {
                            detail.activities && 
                            detail.activities?.map((a) => (
                                    <div key={a.id}>
                                <p>
                                <li>Name: {a.name}</li>
                                <li>Season: {a.season} </li>
                                <li>Duration:  {' '} {a.duration} </li>
                                <li>Difficulty: {a.difficulty} </li>
                                </p>
                                </div>
                            ))}
                        
                    </div>
                ):(<h1>...Loading</h1>)
            }
             <Link to='/home'>
                        <button>BACK</button>
                    </Link>
                    </div>
                    </div>
        </div>
    )
}