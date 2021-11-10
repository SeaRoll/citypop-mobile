import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar, Colors } from 'react-native-paper';

interface ISnackProps {
  visible: boolean,
  text: string,
  dismiss: () => void
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  snack: {
    backgroundColor: Colors.red600,
  }
});