import React from "react";
import { Container } from "../components/Container.component";
import { useAppDispatch } from "../redux/store";
import { routes } from "../redux/reducers/navigation.reducer";
import { setCurrentRouteAction } from "../redux/actions/navigation.action";
import { FullButton } from "../components/FullButton.component";

/**
 * Displays the home page where the user can choose between
 * searching the city or a country
 */
export const HomeContainer = () => {

  const dispatch = useAppDispatch();

  return (
    <Container title={'City Pop'}>
      <FullButton title={'SEARCH BY CITY'} onPress={() => dispatch(setCurrentRouteAction(routes.SEARCH_CITY))} />
      <FullButton title={'SEARCH BY COUNTRY'} onPress={() => dispatch(setCurrentRouteAction(routes.SEARCH_COUNTRY))} />
    </Container>
  );
};