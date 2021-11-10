import React from "react";
import { StyleSheet } from "react-native";
import { TextInput, IconButton, Colors } from 'react-native-paper';
import { View } from "react-native";

interface ISearchProps {
  value: string,
  placeholder: string,
  setValue: any,
  onPress: () => void,
}

/**
 * Displays a Search input with a icon button
 * 
 * @param {string} value current value of the search input
 * @param {string} placeholder placeholder text for the search input
 * @param {any} setValue function to set the value of the search input
 * @param {() => void} onPress function to be called when the search button is pressed
 * @returns search component
 */
export const Search = ({value, placeholder, setValue, onPress}:ISearchProps) => {

  return(
    <View style={styles.container}>
      <TextInput
        mode='outlined'
        placeholder={placeholder}
        value={value}
        onChangeText={text => setValue(text)}
        style={styles.input}
        theme={{ colors: { text: Colors.grey900, placeholder: Colors.grey400 } }}
        activeOutlineColor={Colors.grey700}
      />
      <IconButton
        icon="magnify"
        size={24}
        color="black"
        onPress={onPress}
        style={styles.icon}
      />
    </View>
  );
}

/**
 * Styles for the Search component
 */
const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '100%',
  },
  input: {
    marginBottom: 16, 
    backgroundColor: Colors.grey100, 
    width: '100%'
  },
  icon: {
    borderColor: Colors.grey500, 
    borderWidth: 1, 
    borderRadius: 100, 
    padding: 24
  }
});