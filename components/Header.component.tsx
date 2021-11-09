import React from "react";
import { Appbar } from 'react-native-paper';

interface IHeaderProps {
  title: string;
  onPress: () => void;
  isHome: boolean;
}

// Display Header with title and back button
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
    <Appbar>
      {renderNotHome()}
    </Appbar>
  );
}