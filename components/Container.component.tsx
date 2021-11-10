import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';

interface IContainerProps {
  title: string,
  children: any,
}

export const Container = ({title, children}:IContainerProps) => {
  return(
    <View style={{padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
      <Title style={{marginTop: '32px', marginBottom: '32px', color: '#212121', textAlign: 'center', fontSize: 24}}>{title.toUpperCase()}</Title>
      {children}
    </View>
  );
}