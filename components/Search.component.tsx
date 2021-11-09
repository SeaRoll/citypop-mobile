import React from "react";
import { TouchableOpacity } from "react-native";

interface ISearchProps {
  value: string,
  placeholder: string,
  setValue: any,
  onPress: () => void,
}

export const Search = ({value, placeholder, setValue, onPress}:ISearchProps) => {

  return(
    <>
      
    </>
  );
}

/**
 * <Input style={{width: '100%'}} mb='4' placeholder={placeholder} value={value} onChangeText={setValue} textAlign='center' />
      <TouchableOpacity onPress={onPress} style={{borderRadius: 100, backgroundColor: '#fef3c7', padding: '12px'}}>
        <SearchIcon style={{width: '24px', height: '24px'}}/>
      </TouchableOpacity>
 */