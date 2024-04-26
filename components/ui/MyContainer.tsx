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
      minH={'100vh'}
      mt={{ base: '70px', md: '50px' }}
      w={{ base: '90%', md: '80%' }}
      mx={'auto'}
      pt={{ base: '40px', md: '100px' }}
    >
      {children}
    </Box>
  );
};
