'use client';
import { Box, Image } from '@chakra-ui/react';

interface Props {}

export const BigImage = ({}: Props) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      mt={5}
      position={'relative'}
      w={'100%'}
      h={'100%'}
    >
      <Image
        zIndex={1}
        alt="big-image"
        src={'/img/big-image.png'}
        maxW={'100%'}
        w={{ base: '100%', md: '600px', lg: '900px' }}
        h={{ base: '200px', md: '500px', lg: 'auto' }}
      />
      <Image
        hideBelow={'md'}
        alt="big-image"
        src={'/img/rocket.png'}
        maxW={'100%'}
        position={'absolute'}
        bottom={'-200px'}
      />
      <Image
        hideBelow={'md'}
        alt="lamp-image"
        src={'/img/lamp.png'}
        maxW={'100%'}
        position={'absolute'}
        right={'70px'}
        top={'80px'}
        w={'50px'}
      />
    </Box>
  );
};
