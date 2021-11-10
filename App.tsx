import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Router } from './containers/Router.container';
import { Provider as PaperProvider } from 'react-native-paper';

// entry point
export default function App() {

  return (
    <Provider store={store}>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </Provider>
  );
}
