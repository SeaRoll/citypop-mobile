import React from 'react';
import { Container } from '../components/Container.component';
import { Search } from '../components/Search.component';

import { useAppDispatch } from "../redux/store";
import { getCity } from '../redux/actions/data.action';

/**
 * Page to search for a city
 */
export const SearchCity = () => {

  const dispatch = useAppDispatch();
  const [city, setCity] = React.useState('');

  return (
    <Container title={'SEARCH BY CITY'}>
      <Search value={city} setValue={setCity} placeholder={'Enter a city'} onPress={() => dispatch(getCity(city))} />
    </Container>
  );
};