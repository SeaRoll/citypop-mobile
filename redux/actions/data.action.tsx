import { setCities, setSelectedCity } from "../reducers/data.reducer";
import { setLoading, setError } from "../reducers/feedback.reducer";
import { setCurrentRoute, routes } from "../reducers/navigation.reducer";
import { Dispatch } from "redux";
import { RootState } from "../store";
import axios from "axios";


export const getCountry = (searchValue:string) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoading(true));
  const res:any = await axios.post('https://countriesnow.space/api/v0.1/countries/population/cities', {
    city: searchValue
  });
  const cityTitle = res.data.data.city;
  const cityPopulation = res.data.data.populationCounts[0].value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  dispatch(setCities([{
    city: cityTitle,
    population: cityPopulation
  }]));
  dispatch(setLoading(false));
  dispatch(setSelectedCity(0));
  dispatch(setCurrentRoute(routes.CITY_RESULTS));
}



export const getCity = (searchValue:string) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoading(true));
  const res:any = await axios.post('https://countriesnow.space/api/v0.1/countries/population/cities', {
    city: searchValue
  }).catch((err) => {
    dispatch(setError(err));
    dispatch(setLoading(false));
  });
  const cityTitle = res.data.data.city;
  const cityPopulation = res.data.data.populationCounts[0].value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  dispatch(setCities([{
    city: cityTitle,
    population: cityPopulation
  }]));
  dispatch(setLoading(false));
  dispatch(setSelectedCity(0));
  dispatch(setCurrentRoute(routes.CITY_RESULTS));
}