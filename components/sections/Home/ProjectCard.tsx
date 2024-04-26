'use client';
import { StarIcon } from '@chakra-ui/icons';
import { Card, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { MyText } from '../../ui/MyText';

interface Props {}

export const ProjectCard = ({}: Props) => {
  const bg = useColorModeValue('white', 'navy.900');
  const textColor = useColorModeValue('navy.700', 'white');

  return (
    <Card
      borderRadius={8}
      bg={bg}
      gap={5}
      w={'fit-content'}
      boxShadow={'2xl'}
      p={5}
    >
      <Flex alignItems={'center'}>
        <StarIcon color={'yellow.400'} />
        <Text fontSize={'12px'} textColor={textColor}>
          Great projects{' '}
        </Text>
      </Flex>
      <Text textColor={textColor}>50+ Done </Text>
    </Card>
  );
};
