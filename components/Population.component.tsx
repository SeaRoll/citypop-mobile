import React from 'react';

import { Card, Title, Colors } from 'react-native-paper';

interface IPopulationProps {
  population: number;
}

export const Population = ({ population }:IPopulationProps) => (
  <Card style={{width: '100%'}}>
    <Card.Content>
      <Title style={{fontSize: 12, textAlign: 'center', color: Colors.grey50}}>Population</Title>
      <Title style={{textAlign: 'center', color: Colors.grey50}}>{population}</Title>
    </Card.Content>
  </Card>
);