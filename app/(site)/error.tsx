'use client'; // Error components must be Client Components

import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import { MyText } from '../../components/ui/MyText';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const bg = useColorModeValue('secondaryGray.300', 'navy.900');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box
      minH={'100dvh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      bg={bg}
    >
      <MyText text="Something went wrong!" fontSize={'25px'} />
      <Button variant={'outline'} onClick={() => reset()}>
        <MyText text="Try again!" fontSize={'25px'} />
      </Button>
    </Box>
  );
}
