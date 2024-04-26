'use client'
import { Text, TextProps, useColorModeValue } from '@chakra-ui/react';

type Props = TextProps & {
  text: string;
};

export const MyText = ({ text, ...props }: Props): JSX.Element => {
  const textColor = useColorModeValue('navy.700', 'white');

  return <Text {...props} color={textColor}>{text}</Text>;
};
