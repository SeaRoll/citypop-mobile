import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';

interface IContainerProps {
  title: string,
  children: any,
}

export const Container = ({title, children}:IContainerProps) => {
  return(
    <View style={{padding: 16}}>
      <Title style={{marginTop: '64px', marginBottom: '64px', color: '#212121', textAlign: 'center', fontSize: 24}}>{title}</Title>
      {children}
    </View>
  );
}