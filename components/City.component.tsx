import React from 'react';

import { Card, Title, Colors } from 'react-native-paper';

interface ICityProps {
  cityName: string,
  onPress: () => void
}

export const City = ({ cityName, onPress }:ICityProps) => (
  <Card style={{width: '100%', marginBottom: '8px'}} onPress={onPress}>
    <Card.Content>
      <Title style={{textAlign: 'center', color: Colors.grey50}}>{cityName}</Title>
    </Card.Content>
  </Card>
);