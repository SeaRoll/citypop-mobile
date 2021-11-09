import React from "react";
import { TouchableOpacity } from "react-native";
import { ArrowBackIcon, HStack, Heading, Flex } from "native-base";

interface IHeaderProps {
  title: string;
  onPress: () => void;
}

// Display Header with title and back button
export const Header = ({title, onPress}:IHeaderProps) => {
  return(
    <HStack>
      <Flex direction='row' alignItems='center' justifyContent='flex-start'>
        <TouchableOpacity onPress={onPress}>
          <ArrowBackIcon style={{marginTop: '3px'}} />
        </TouchableOpacity>
        <Heading size='md'>{title}</Heading>
      </Flex>
    </HStack>
  );
}