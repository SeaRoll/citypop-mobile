import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { RootState } from '../redux/store';
import { useAppSelector } from "../redux/store";

export const Loader = () => {

  const isLoading = useAppSelector((state: RootState) => state.feedback.isLoading);

  return (
    <>
      {isLoading ? <ActivityIndicator style={{position: 'absolute', left: 0, right: 0, bottom: 16}} /> : null}
    </>
  );
};