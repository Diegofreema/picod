'use client';
import {
  Box,
  Flex,
  Heading,
  Highlight,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { MyText } from '../../../components/ui/MyText';
import { Hero } from '../../../sections/Hero';
import { Services } from '../../../sections/Services';
import { Team } from '../../../sections/Team';
import { Collaborate } from '../../../components/sections/Home/Collaborate';
import { Frequently } from '../../../components/sections/Home/Frequently';

interface Props {}

export const Landing = ({}: Props) => {
  return (
    <Box minH="100vh" mb={10}>
      <Hero />
      <ChoseUs />
      <Services />
      <Team />
      <Collaborate />
      <Frequently />
    </Box>
  );
};

const ChoseUs = () => {
  const bg = useColorModeValue('#073E57', 'white');
  const textColor = useColorModeValue('white', 'navy.700');
  const secondaryTextColor = useColorModeValue('#FF9900', '#073E57');

  return (
    <Box w="100%" bg={bg}>
      <Flex
        w={{ base: '90%', md: '80%' }}
        mx={'auto'}
        maxH="300px"
        justifyContent="space-around"
        alignItems="center"
        my={10}
        py={10}
        flexDir={{ base: 'column', md: 'row' }}
        gap={5}
      >
        <Box flex={{ base: 1, md: 0.7 }}>
          <Text textColor={textColor} fontSize={{ base: '15px', md: '25px' }}>
            Why Choose Us:
          </Text>

          <Text
            textColor={textColor}
            fontSize={{ base: '15px', md: '25px' }}
            flex={1}
            w="100%"
          >
            <Highlight
              query={['Brand', 'Digital Expertise']}
              styles={{ color: secondaryTextColor, fontWeight: 'bold' }}
            >
              Elevate Your Brand with Our Digital Expertise
            </Highlight>
          </Text>
        </Box>
        <Box flex={{ base: 1, md: 0.3 }}>
          <Text textColor={textColor} fontSize={'12px'}>
            Choosing the right digital marketing partner is crucial for the
            success of your brand. At [Your Company Name], we&apos;re more than
            just a service provider; we&apos;re your dedicated ally in
            navigating the dynamic landscape of digital marketing. With our
            wealth of experience and expertise, we offer tailored solutions
            designed to elevate your brand and drive tangible results.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
