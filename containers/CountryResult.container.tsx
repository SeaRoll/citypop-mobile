import React from 'react';
import { ScrollView } from 'react-native';

import { City } from '../components/City.component';
import { Container } from '../components/Container.component';
import { setCurrentRouteAction } from '../redux/actions/navigation.action';
import { setSelectedCity } from '../redux/reducers/data.reducer';
import { routes } from '../redux/reducers/navigation.reducer';

import { RootState } from '../redux/store';
import { useAppSelector, useAppDispatch } from '../redux/store';

/**
 * Displays the results of the country and its cities
 */
export const CountryResult = () => {

  const country = useAppSelector((state: RootState) => state.data.country);
  const cities = useAppSelector((state: RootState) => state.data.cities);
  const dispatch = useAppDispatch();

  return(
    <ScrollView>
      <Container title={country}>
        {
          cities.map((city:any, index:any) => (
            <City 
              key={index} 
              cityName={city.city.toUpperCase()} 
              onPress={() => {
                dispatch(setSelectedCity(index)); 
                dispatch(setCurrentRouteAction(routes.CITY_RESULTS));
              }}
            />
          ))
        }
      </Container>
    </ScrollView>
  );
}