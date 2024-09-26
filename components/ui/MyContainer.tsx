'use client';
import { Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  id: string;
}

export const MyContainer = ({ children, id }: Props) => {
  return (
    <Box
      id={id}
      minH={'100dvh'}
      w={{ base: '90%', md: '80%' }}
      mx={'auto'}
      pt={{ base: '100px', md: '150px' }}
    >
      {children}
    </Box>
  );
};
