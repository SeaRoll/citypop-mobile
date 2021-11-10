import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar, Colors } from 'react-native-paper';

interface ISnackProps {
  visible: boolean,
  text: string,
  dismiss: () => void
}

/**
 * Displays a snackbar with a dismiss button
 * 
 * @param {boolean} visible if the snack should be visible
 * @param {string} text the text to display
 * @returns a snackbar
 */
export const Snack = ({visible, text, dismiss}:ISnackProps) => {
  return (
    <View style={styles.container}>
      <Snackbar 
        duration={5000}
        style={styles.snack}
        theme={{ colors: {surface: Colors.white, accent: Colors.white}}}
        visible={visible} 
        onDismiss={dismiss}
        action={{
          label: 'Dismiss',
          onPress: dismiss,
      }}>
        {text}
      </Snackbar>
    </View>
  );
};

/**
 * Styles for the snackbar
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  snack: {
    backgroundColor: Colors.red600,
  }
});