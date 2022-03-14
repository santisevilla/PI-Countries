import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailCountry } from "../../actions/index";
import styles from './Detail.css'

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  
  useEffect(() => {
    dispatch(getDetailCountry(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.detail);

  return (
    <div className="bodyDetail">
      <div>
        <div className="positionCardDetail">
            <div className="cardDetail">
            <div>
                <img alt='flag' src= {detail?.image}/>
                <p><strong>Name:</strong> {detail?.name}</p>
                <p><strong>Continent:</strong> {detail?.continent}</p>            
                <p><strong>Capital:</strong> {detail?.capital}</p>
                <p><strong>Subregion:</strong> {detail?.subRegion}</p>
                <p><strong>Area:</strong> {parseInt(detail?.area).toLocaleString()} km2</p>
                <p><strong>Population:</strong> {parseInt(detail?.population).toLocaleString()}</p>                  
            </div>
              <h4>Activities: </h4>
              {detail.activities &&
                detail.activities?.map((a) => (
                  <div key={a.id}>
                    <p>
                      <li>Name: {a.name}</li>
                      <li>Season: {a.season} </li>
                      <li>Duration: {a.duration} </li>
                      <li>Difficulty: {a.difficulty} </li>
                    </p>
                  </div>
                ))}
            </div>
        </div>
        <div className="buttonDetail">
          <Link to="/home">
            <button>BACK</button>
          </Link>
        </div>
        </div>
    </div>
  );
}
