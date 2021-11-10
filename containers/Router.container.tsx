import React from "react";
import { RootState } from "../redux/store";
import { routes } from "../redux/reducers/navigation.reducer";
import { useAppSelector } from "../redux/store";

import { HeaderContainer } from "./Header.container";
import { HomeContainer } from "./Home.container";
import { SearchCity } from "./SearchCity.container";
import { Loader } from "./Loader.container";
import { CityResult } from "./CityResult.container";

export const Router = () => {
  const currentRoute = useAppSelector((state: RootState) => state.navigation.currentRoute);

  const renderRouter = () => {
    switch(currentRoute) {
      case routes.HOME:
        return <HomeContainer />;
      case routes.SEARCH_CITY:
        return <SearchCity />;
      case routes.CITY_RESULTS:
        return <CityResult />;
    }

    return null;
  }

  return (
    <>
      <HeaderContainer />
      {renderRouter()}
      <Loader />
    </>
  );
}