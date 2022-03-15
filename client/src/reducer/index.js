const initialState = {
  countries: [],
  allCountries: [],
  detail: [],
  activities: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };
    case "GET_NAME_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "POST_ACTIVITY": {
      return {
        ...state,
      };
    }
    case "GET_COUNTRY_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "ORDER_BY_NAME":
      let arr = action.payload === "Desc" ?
      state.allCountries.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1 // los cambia
          } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return 1 //los cambia
          } else {
              return 0 //los deja igual
          }
      }) :
      state.countries.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1 // los cambia
          } else if (b.name.toLowerCase() < a.name.toLowerCase()) {
              return 1 //los cambia
          } else {
              return 0 //los deja igual
          }
      })
  return {
      ...state,
      countries: arr
  }
    case "FILTER_CONTINENT":
      const allCountries = state.allCountries;
      const continentFilter =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((el) => el.continent === action.payload);
      return {
        ...state,
        countries: continentFilter,
      };
    case "ORDER_BY_POPULATION":
      const orderByPopulation =
        action.payload === "less"
          ? state.allCountries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.allCountries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allCountries: orderByPopulation,
      };
    case "FILTER_ACTIVITY":
      const allActivitiesCountries = state.allCountries;
      const activityFiltered = action.payload === 'All' 
      ? allActivitiesCountries.filter(element => element.activities.length > 0) 
      : allActivitiesCountries.filter(element => 
          element.activities && element.activities.map(element => element.name).includes(action.payload)); 
          return{
              ...state,
              countries: activityFiltered
          }  
    default:
      return state;
  }
}
