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
        countries: action.payload,
        allCountries: action.payload,
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
        let order = action.payload === "asc"
          ? state.countries.sort((a, b) => (a.name > b.name ? 1 : -1))
          : state.countries.sort((a, b) => (a.name < b.name ? 1 : -1));
      return {
        ...state,
        countries: order,
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
      const countriesAll = state.countries;
      let stateActivity = [];
      for (let country of countriesAll) {
        if (country.activities.length !== 0) {
          for (let el of country.activities) {
            if (el.name === action.payload) {
              stateActivity = [...stateActivity, country];
            }
          }
        }
      }
      return {
        ...state,
        countries: stateActivity,
      }
    default:
      return state;
  }
}
