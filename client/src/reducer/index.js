const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  detail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
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
      let arr =
        action.payload === "asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: arr,
      };
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
        action.payload === "desc"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
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
        countries: orderByPopulation,
      };
    case "FILTER_ACTIVITY":
      const filteredActivity =
        action.payload === "All"
          ? state.allCountries
          : state.allCountries.filter(
              (c) =>
                c.activities &&
                c.activities.filter((a) => a.name === action.payload).length
            );
      return {
        ...state,
        countries: filteredActivity,
      };
    default:
      return state;
  }
}
