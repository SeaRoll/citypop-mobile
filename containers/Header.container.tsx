import React from "react";
import { Header } from "../components/Header.component";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { routes } from "../redux/reducers/navigation.reducer";
import { goBack } from "../redux/actions/navigation.actions";

export const HeaderContainer = () => {
  const currentRoute = useSelector((state: RootState) => state.navigation.currentRoute);
  const dispatch = useDispatch();

  return currentRoute !== routes.HOME ? <Header title={'City Pop'} onPress={() => dispatch(goBack)} /> : null;
};