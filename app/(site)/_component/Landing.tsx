'use client';
import {
  Box,
  Flex,
  Heading,
  Highlight,
  Image,
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
    <Box minH="100dvh" mb={10}>
      <Hero />
      <ChoseUs />
      <Services />
      <Team />
      <Mission />
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
        <Box flex={{ base: 1, md: 0.3 }} pt={5}>
          <Text textColor={textColor} fontSize={{ base: '13px', lg: '18px' }}>
            Choosing the right digital marketing partner is crucial for the
            success of your brand. At PICOD, we&apos;re more than just a service
            provider; we&apos;re your dedicated ally in navigating the dynamic
            landscape of digital marketing. With our wealth of experience and
            expertise, we offer tailored solutions designed to elevate your
            brand and drive tangible results.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const Mission = () => {
  const bg = useColorModeValue('#073E57', 'white');
  const textColor = useColorModeValue('white', 'navy.700');
  const secondaryTextColor = useColorModeValue('#FF9900', '#073E57');

  return (
    <Box w="100%" bg={bg} mt={{ base: 10, md: 20 }}>
      <Flex
        w={{ base: '90%', md: '80%' }}
        mx={'auto'}
        maxH={{ base: 'auto', md: '400px' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems=""
        my={10}
        py={10}
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: 5, md: 10, lg: 20 }}
      >
        <Box flexBasis={{ base: '100%', md: '40%' }}>
          <Image
            src="/img/girl.png"
            alt="girl"
            objectFit={'cover'}
            height={300}
          />
        </Box>
        <Box pt={5} flexBasis={{ base: '100%', md: '35%' }}>
          <Text
            textColor={textColor}
            mb={5}
            fontSize={{ base: '13px', lg: '18px' }}
          >
            Mission
          </Text>
          <Text
            textColor={textColor}
            fontSize={{ base: '13px', lg: '18px' }}
            maxWidth={'100ch'}
          >
            Choosing the right digital marketing partner is crucial for the
            success of your brand. At PICOD, we&apos;re more than just a service
            provider; we&apos;re your dedicated ally in navigating the dynamic
            landscape of digital marketing. With our wealth of experience and
            expertise, we offer tailored solutions designed to elevate your
            brand and drive tangible results.
          </Text>
        </Box>
        <Box pt={5} flexBasis={{ base: '100%', md: '25%' }}>
          <Text
            textColor={textColor}
            mb={5}
            fontSize={{ base: '13px', lg: '18px' }}
          >
            Vision
          </Text>
          <Text
            textColor={textColor}
            fontSize={{ base: '13px', lg: '18px' }}
            maxWidth={'100ch'}
          >
            To partner with our clients becoming an important aspect of their
            success of our clients, helping our clients achieve their strategic
            goals while building long-lasting relationship.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
