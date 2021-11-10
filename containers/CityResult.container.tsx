import React from 'react';
import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/store";

import { Population } from '../components/Population.component';
import { Container } from '../components/Container.component';

export const CityResult = () => {
  const cityData:any = useAppSelector((state: RootState) => state.data.cities[state.data.selectedCity]);
  return(
    <>
      <Container title={cityData.city}>
        <Population population={cityData.population} />
      </Container>
    </>
  );
}