import React from "react";
import { Button } from "react-native-paper";

interface IFullButtonProps {
  title: string;
  onPress: () => void;
}

/**
 * Displays a full width button with a title and an onPress function
 * 
 * @param {string} title label of the button
 * @param {() => void} onPress function to be called when the button is pressed
 * @returns a full width button with the given title and onPress function
 */
export const FullButton = ({title, onPress}:IFullButtonProps) => {
  return (
    <Button mode='contained' dark style={{backgroundColor: 'rgb(39, 39, 39)', marginBottom: 8, width: '100%'}} onPress={onPress}>{title}</Button>
  );
};