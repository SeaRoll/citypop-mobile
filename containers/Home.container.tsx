import React from "react";
import { Container } from "../components/Container.component";
import { useAppDispatch } from "../redux/store";
import { routes } from "../redux/reducers/navigation.reducer";
import { setCurrentRouteAction } from "../redux/actions/navigation.action";
import { Button } from "react-native-paper";

interface IFullButtonProps {
  title: string;
  onPress: () => void;
}

const FullButton = ({title, onPress}:IFullButtonProps) => {
  return (
    <Button mode='contained' dark style={{backgroundColor: 'rgb(39, 39, 39)', marginBottom: 8, width: '100%'}} onPress={onPress}>{title}</Button>
  );
};

export const HomeContainer = () => {

  const dispatch = useAppDispatch();

  return (
    <Container title={'City Pop'}>
      <FullButton title={'SEARCH BY CITY'} onPress={() => dispatch(setCurrentRouteAction(routes.SEARCH_CITY))} />
      <FullButton title={'SEARCH BY COUNTRY'} onPress={() => dispatch(setCurrentRouteAction(routes.SEARCH_COUNTRY))} />
    </Container>
  );
};