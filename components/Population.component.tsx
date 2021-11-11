import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Colors } from 'react-native-paper';

interface IPopulationProps {
  population: number;
}

/**
 * A card with Population information
 * 
 * @param {population} number of population to be shown
 * @returns population card
 */
export const Population = ({ population }:IPopulationProps) => (
  <Card style={{width: '100%', backgroundColor: 'rgb(39, 39, 39)'}}>
    <Card.Content>
      <Title style={styles.title}>Population</Title>
      <Title style={styles.populationText}>{population}</Title>
    </Card.Content>
  </Card>
);

/**
 * Styles for the Population component
 */
const styles = StyleSheet.create({
  title: {
    fontSize: 12, 
    textAlign: 'center', 
    color: Colors.grey50
  },
  populationText: {
    textAlign: 'center', 
    color: Colors.grey50
  }
});