import React from 'react';
import { Container } from '../components/Container.component';
import { Search } from '../components/Search.component';

import { useAppDispatch } from "../redux/store";
import { getCountry } from '../redux/actions/data.action';

/**
 * Displays the page to search for a country
 */
export const SearchCountry = () => {

  const dispatch = useAppDispatch();
  const [country, setCountry] = React.useState('');

  return (
    <Container title={'SEARCH BY COUNTRY'}>
      <Search value={country} setValue={setCountry} placeholder={'Enter a country'} onPress={() => dispatch(getCountry(country))} />
    </Container>
  );
};