import { setCities, setSelectedCity, setCountry } from "../reducers/data.reducer";
import { setLoading, setError } from "../reducers/feedback.reducer";
import { setCurrentRoute, routes } from "../reducers/navigation.reducer";
import { Dispatch } from "redux";
import { RootState } from "../store";
import axios from "axios";

/**
 * get the city as a object from the raw city data
 * 
 * @param city city object containing city name and its population
 * @returns a formatted city object with name and latest population data
 */
const getCityValue = (city:any) => {
  const cityTitle = city.city;
  const cityPopulation = city.populationCounts[city.populationCounts.length - 1].value;
  return {city: cityTitle, population: cityPopulation};
}

/**
 * Search all city with the given country and sorts them by population (descending)
 * 
 * @param searchValue the search value to be used in the api call
 */
export const getCountry = (searchValue:string) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoading(true));

  const res:any = await axios.post('https://countriesnow.space/api/v0.1/countries/population/cities/filter', {
    order: 'desc',
    orderBy: 'population',
    country: searchValue
  }).catch(() => {
    dispatch(setError('Error: Country was not found'));
    dispatch(setLoading(false));
    return null;
  });

  if(!res) {
    return;
  }

  const cities = res.data.data;
  let citiesSorted:any = [];

  cities.forEach((city:any) => {
    const cityValue = getCityValue(city);
    if(city) citiesSorted.push(cityValue);
  });

  // sort the cities by population
  citiesSorted.sort((city1:any, city2:any) => {
    return city2.population - city1.population;
  });

  // format each population value with spaces
  citiesSorted.forEach((city:any) => {
    city.population = city.population.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  });

  dispatch(setCountry(searchValue));
  dispatch(setCities(citiesSorted));
  dispatch(setLoading(false));
  dispatch(setCurrentRoute(routes.COUNTRY_RESULTS));
}

/**
 * Search a city and redirects the user to display the population
 * 
 * @param searchValue the search value to be used in the api call
 */
export const getCity = (searchValue:string) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoading(true));
  const res:any = await axios.post('https://countriesnow.space/api/v0.1/countries/population/cities', {
    city: searchValue
  }).catch(() => {
    dispatch(setError('Error: City was not found'));
    dispatch(setLoading(false));
    return null;
  });

  if(!res) {
    return;
  }

  const city = getCityValue(res.data.data);
  dispatch(setCities([city]));
  dispatch(setLoading(false));
  dispatch(setSelectedCity(0));
  dispatch(setCurrentRoute(routes.CITY_RESULTS));
}