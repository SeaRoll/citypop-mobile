import React from "react";
import { TextInput, IconButton, Colors } from 'react-native-paper';
import { View } from "react-native";

interface ISearchProps {
  value: string,
  placeholder: string,
  setValue: any,
  onPress: () => void,
}

export const Search = ({value, placeholder, setValue, onPress}:ISearchProps) => {

  return(
    <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <TextInput
        mode='outlined'
        placeholder={placeholder}
        value={value}
        onChangeText={text => setValue(text)}
        style={{marginBottom: 16, backgroundColor: Colors.grey100, width: '100%'}}
        theme={{ colors: { text: Colors.grey900, placeholder: Colors.grey400 } }}
        activeOutlineColor={Colors.grey700}
      />
      <IconButton
        icon="magnify"
        size={24}
        color="black"
        onPress={onPress}
        style={{borderColor: Colors.grey500, borderWidth: 1, borderRadius: 100, padding: 24}}
      />
    </View>
  );
}