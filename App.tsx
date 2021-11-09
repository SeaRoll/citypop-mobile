import React from 'react';
import { NativeBaseProvider, View, Center, Heading, Text } from 'native-base';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HeaderContainer } from './containers/Header.container';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <HeaderContainer />
        <Center flex={1} px="3">
          <View>
            <Heading>
              A component library for the{" "}
              <Heading color="emerald.400">React Ecosystem</Heading>
            </Heading>
            <Text pt="3" fontWeight="md">
              NativeBase is a simple, modular and accessible component library that
              gives you building blocks to build you React applications.
            </Text>
          </View>
        </Center>
      </NativeBaseProvider>
    </Provider>
  );
}
