import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postActivity, getCountries } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import styles from './Create.css'

export function validate(activity) {
  let errors = {};
  if (!activity.name) {
    errors.name = "ingrese un nombre";
  }
  if (!activity.difficulty) {
    errors.difficulty = "ingrese un nivel de difucultad";
  }
  if (activity.duration < 1) {
    errors.duration = "ingrese una duracion mayor 1 hora";
  }
  if (!activity.season) {
    errors.season = "selecciones una termporada";
  }
  if (!activity.countries) {
    errors.countries = "seleccione los paises";
  }
  return errors;
}

export default function CreateActivity() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleChange(e) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...activity,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    let errors = Object.keys(validate(activity));
    if (!errors.length !== 0) {
      dispatch(postActivity(activity));
      setActivity({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
      alert("activity created successfully");
    } else {
      alert("Fill in the fields");
    }
  }
  function handleSelect(e) {
    setActivity({
      ...activity,
      countries: [...activity.countries, e.target.value],
    });
    setErrors(
      validate({
        ...activity,
        countries: [...activity.countries, e.target.value],
      })
    );
  }
  function handleDelete(id) {
    //e.preventDefault(e)
    setActivity({
      ...activity,
      countries: activity.countries.filter((t) => t !== id),
    });
  }

  return (
    <div className="bodyCreate">
        <div className="h1Create">
          <h1> Crear Actividad Turistica </h1>
        </div>
      <div className="cardCreate">
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div>
                <label>Name:</label>
              </div>
              <input
                name="name"
                id="name"
                type="text"
                value={activity.name}
                placeholder="surf, safari, sky, diving, camping, montain"
                onChange={handleChange}
                required
              ></input>
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
              <div>
                <label>Difficulty:</label>
              </div>
              <select
                id="difficulty"
                name="difficulty"
                type="text"
                value={activity.difficulty}
                onChange={handleChange}
                required
              >
                <option value="">select your Difficulty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errors.difficulty && (
                <p className="error">{errors.difficulty}</p>
              )}
            </div>

            <div>
              <div>
                <label>Duration:</label>
              </div>
              <input
                name="duration"
                type="number"
                value={activity.duration}
                placeholder="hours"
                required="required"
                onChange={handleChange}
              ></input>
              {errors.duration && <p className="error">{errors.duration}</p>}
            </div>

            <div>
              <div>
                <label>Season:</label>
              </div>
              <select
                name="season"
                type="text"
                value={activity.season}
                required="required"
                onChange={handleChange}
              >
                <option value="">Select your Season</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
              {errors.season && <p className="error">{errors.season}</p>}
            </div>

            <div>
              <div>
                <label>Countries:</label>
              </div>
              <select name="countries" type="text" onChange={e => handleSelect(e)}>
                <option>Select countries</option>
                {countries.map((c) => (
                  <option value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <ul>
              {activity.countries.map((c) => (
                <li key={c.id}>
                  {c} <button onClick={() => handleDelete(c)}>X</button>
                </li>
              ))}
            </ul>

            {activity.name &&
            activity.difficulty &&
            activity.duration &&
            activity.season ? (
              <button type="submit">Create Activity</button>
            ) : null}
            <div>
              <Link to="/home">
                <button className="bts">Back</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
