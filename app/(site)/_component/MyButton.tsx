'use client';
import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';

interface Props extends ButtonProps {
  children: React.ReactNode;

  onClick?: () => {};
}

export const MyButton = ({ children, onClick, ...props }: Props) => {
  const buttonBg = useColorModeValue('#FF9900', '#073E57');
  return (
    <Button
      {...props}
      bg={buttonBg}
      onClick={onClick}
      size={'md'}
      borderRadius={'5px'}
    >
      {children}
    </Button>
  );
};
