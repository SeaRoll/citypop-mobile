import React from "react";
import { Header } from "../components/Header.component";
import { RootState } from "../redux/store";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { routes } from "../redux/reducers/navigation.reducer";
import { goBack } from "../redux/actions/navigation.action";

export const HeaderContainer = () => {
  const currentRoute = useAppSelector((state: RootState) => state.navigation.currentRoute);
  const dispatch = useAppDispatch();

  return <Header title={'City Pop'} onPress={() => dispatch(goBack())} isHome={currentRoute === routes.HOME} />;
};