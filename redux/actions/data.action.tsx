import { setCities, setSelectedCity } from "../reducers/data.reducer";
import { setLoading, setError } from "../reducers/feedback.reducer";
import { setCurrentRoute, routes } from "../reducers/navigation.reducer";
import { Dispatch } from "redux";
import { RootState } from "../store";
import axios from "axios";

const getCityValue = (city:any) => {
  const cityTitle = city.city;
  const cityPopulation = city.populationCounts[city.populationCounts.length - 1].value;
  return {city: cityTitle, population: cityPopulation};
}

export const getCountry = (searchValue:string) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoading(true));

  const res:any = await axios.post('https://countriesnow.space/api/v0.1/countries/population/cities/filter', {
    order: 'desc',
    orderBy: 'population',
    country: searchValue
  }).catch((err) => {
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

  citiesSorted.sort((city1:any, city2:any) => {
    return city2.population - city1.population;
  });

  citiesSorted.forEach((city:any) => {
    city.population = city.population.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  });

  dispatch(setCities(citiesSorted));
  dispatch(setLoading(false));
  dispatch(setCurrentRoute(routes.COUNTRY_RESULTS));
}



export const getCity = (searchValue:string) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoading(true));
  const res:any = await axios.post('https://countriesnow.space/api/v0.1/countries/population/cities', {
    city: searchValue
  }).catch((err) => {
    dispatch(setError('Error: City was not found'));
    dispatch(setLoading(false));
    return null;
  });

  if(!res) {
    return;
  }

  const cityTitle = res.data.data.city;
  const cityPopulation = res.data.data.populationCounts[res.data.data.populationCounts.length - 1].value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  dispatch(setCities([{
    city: cityTitle,
    population: cityPopulation
  }]));
  dispatch(setLoading(false));
  dispatch(setSelectedCity(0));
  dispatch(setCurrentRoute(routes.CITY_RESULTS));
}