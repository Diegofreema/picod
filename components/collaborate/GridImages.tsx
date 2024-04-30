'use client';
import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react';

interface Props {}

export const GridImages = ({}: Props) => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      position={'relative'}
      hideBelow={'md'}
    >
      <Image
        alt="image"
        src="/img/site/blue.png"
        position={'absolute'}
        width={100}
        top={150}
        left={100}
      />
      <Image
        alt="image"
        src="/img/site/orange.png"
        position={'absolute'}
        bottom={220}
        width={100}
        right={8}
      />

      <Image
        alt="image"
        src="/img/site/img.png"
        width={250}
        height={250}
        zIndex={1}
      />
      <Image
        alt="image"
        src="/img/site/img-1.png"
        width={250}
        height={250}
        position={'absolute'}
        top={'50px'}
        right={-5}
        zIndex={0}
      />
    </Flex>
  );
};
