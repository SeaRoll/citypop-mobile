import React from "react";
import { Appbar } from 'react-native-paper';

interface IHeaderProps {
  title: string;
  onPress: () => void;
  isHome: boolean;
}

/**
 * Renders a header with a title and a back button (if not in home screen).
 * 
 * @param {string} title title of the header component
 * @param {() => void} onPress when back arrow is pressed
 * @param {boolean} isHome if the current screen is the home screen
 * @returns header component
 */
export const Header = ({title, onPress, isHome}:IHeaderProps) => {

  // Display back actionand title if not home page
  const renderNotHome = () => {
    if(!isHome) {
      return (
        <>
          <Appbar.BackAction onPress={onPress} color='#ffffff' />
          <Appbar.Content title={title} />
        </>
      );
    }

    return null;
  }

  return(
    <Appbar style={{backgroundColor: 'rgb(39, 39, 39)'}}>
      {renderNotHome()}
    </Appbar>
  );
}