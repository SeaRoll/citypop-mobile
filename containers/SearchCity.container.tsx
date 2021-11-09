import React from 'react';
import { Container } from '../components/Container.component';
import { Search } from '../components/Search.component';


export const SearchCity = () => {

  const [city, setCity] = React.useState('');

  return (
    <Container title={'SEARCH BY\nCITY'}>
      <Search value={city} setValue={setCity} placeholder={'Enter a city'} onPress={() => null} />
    </Container>
  );
};