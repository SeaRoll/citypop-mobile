import React from 'react';

import { RootState } from '../redux/store';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { setError } from '../redux/reducers/feedback.reducer';

import { Snack } from '../components/Snack.component';

export const SnackContainer = () => {
  const error = useAppSelector((state: RootState) => state.feedback.error);
  const dispatch = useAppDispatch();

  return <Snack text={error} visible={error !== ''} dismiss={() => dispatch(setError(''))} />;
}