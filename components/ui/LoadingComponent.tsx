'use client';

import { Box, Spinner } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';

type Props = {};

export const LoadingComponent = ({}: Props): JSX.Element => {
  const color = useColorModeValue('secondaryGray.900', 'white');
  const bg = useColorModeValue('secondaryGray.300', 'navy.900');

  return (
    <Box
      bg={bg}
      minH={'100dvh'}
      w={'100vw'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="#FF9900"
        color={color}
        size="xl"
      />
    </Box>
  );
};
