import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Provider } from 'react-native-paper';

interface IContainerProps {
  title: string,
  children: any,
}

/**
 * Displays a container with a title and given children
 * 
 * @param {string} title title to show
 * @returns container with title and children
 */
export const Container = ({title, children}:IContainerProps) => {
  return(
    <View style={styles.container}>
      <Title style={styles.title}>{title.toUpperCase()}</Title>
      {children}
    </View>
  );
}

/**
 * Styles for the container component
 */
const styles = StyleSheet.create({
  container: {
    padding: 16, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    height: '100%',
  },
  title: {
    marginTop: 32, 
    marginBottom: 32, 
    color: '#212121', 
    textAlign: 'center', 
    fontSize: 24
  }
});