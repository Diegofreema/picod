'use client';
import {
  Card,
  useColorModeValue,
  Flex,
  Text,
  Avatar,
  Box,
} from '@chakra-ui/react';

interface Props {}

export const TestimonyCard = ({}: Props) => {
  const bg = useColorModeValue('white', 'navy.900');
  const textColor = useColorModeValue('navy.700', 'white');
  const secondaryTextColor = useColorModeValue('navy.400', 'gray');

  return (
    <Card
      bg={bg}
      gap={5}
      w={'250px'}
      boxShadow={'0px 40px 58px -20px rgba(112, 144, 176, 0.12)'}
      p={5}
      borderRadius={8}
    >
      <Flex alignItems={'center'} gap={3}>
        <Avatar src="/img/avatars/avatar5.png" />
        <Box>
          <Text fontSize={'14px'} fontWeight={'bold'} textColor={textColor}>
            Hibiscus{' '}
          </Text>
          <Text fontSize={'12px'} textColor={secondaryTextColor}>
            CEO Hibiscus Design{' '}
          </Text>
        </Box>
      </Flex>
      <Text textColor={textColor} fontSize={'11px'}>
        “ This team is really the best in its field,I don&apos;t regret working
        with them, and will come back again thanks “{' '}
      </Text>
    </Card>
  );
};
