import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Router } from './containers/Router.container';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {

  return (
    <Provider store={store}>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </Provider>
  );
}
