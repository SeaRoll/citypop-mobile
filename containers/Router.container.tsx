import React from "react";
import { RootState } from "../redux/store";
import { routes } from "../redux/reducers/navigation.reducer";
import { useAppSelector } from "../redux/store";

import { HeaderContainer } from "./Header.container";
import { HomeContainer } from "./Home.container";
import { SearchCity } from "./SearchCity.container";
import { Loader } from "./Loader.container";
import { CityResult } from "./CityResult.container";
import { SnackContainer } from "./Snack.container";
import { View } from "react-native";
import { SearchCountry } from "./SearchCountry.container";
import { CountryResult } from "./CountryResult.container";

/**
 * The router container that renders the correct component based on the route
 * from the navigation reducer to make sure that the correct component is rendered
 */
export const Router = () => {
  const currentRoute = useAppSelector((state: RootState) => state.navigation.currentRoute);

  const renderRouter = () => {
    switch(currentRoute) {
      case routes.HOME:
        return <HomeContainer />;
      case routes.SEARCH_COUNTRY:
        return <SearchCountry />;
      case routes.SEARCH_CITY:
        return <SearchCity />;
      case routes.CITY_RESULTS:
        return <CityResult />;
      case routes.COUNTRY_RESULTS:
        return <CountryResult />;
    }

    return null;
  }

  return (
    <>
      <HeaderContainer />
      <View style={{flex: 1}}>
        {renderRouter()}
        <Loader />
        <SnackContainer />
      </View>
    </>
  );
}