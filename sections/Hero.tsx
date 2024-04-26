'use client';
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { BigImage } from '../components/sections/Home/BigImage';
import { MyButton } from '../app/(site)/_component/MyButton';
import { MyText } from '../components/ui/MyText';
import { HeroFooter } from '../components/sections/Home/HeroFooter';
import { ProjectCard } from '../components/sections/Home/ProjectCard';
import { TestimonyCard } from '../components/sections/Home/TestimonyCard';
import { MyContainer } from '../components/ui/Mycontainer';

interface Props {}

export const Hero = ({}: Props) => {
  const textColor = useColorModeValue('#52525B', 'gray');
  const headingColor = useColorModeValue('#000', 'white');
  return (
    <MyContainer id="home">
      <Flex
        justifyContent={'center'}
        w={{ base: '90%', md: '80%' }}
        mx={'auto'}
        flexDir={'column'}
        gap={6}
        position={'relative'}
      >
        <Text
          textAlign={'center'}
          fontSize={{ base: '13px', md: '18px' }}
          textColor={textColor}
          mb={5}
        >
          &quot;Harnessing the Power of Emerging Technologies and Strategic
          Vision to Propel Your Brand Towards Digital Success&quot;
        </Text>

        <Heading
          textColor={headingColor}
          textAlign={'center'}
          fontWeight={'600'}
          fontSize={{ base: '25px', md: '50px' }}
        >
          Ignite Your Online Growth: Where Innovation Meets Marketing
        </Heading>

        <Flex justifyContent={'center'} zIndex={0}>
          <MyButton my={6} w="fit-content">
            <Text fontSize={'13px'} textColor={'white'}>
              Get started
            </Text>
          </MyButton>
        </Flex>
        <Box position={'absolute'} zIndex={2} left={9} hideBelow={'md'}>
          <ProjectCard />
        </Box>
        <Box
          position={'absolute'}
          zIndex={2}
          right={0}
          bottom={12}
          hideBelow={'md'}
        >
          <TestimonyCard />
        </Box>
        <BigImage />

        <Box>
          <HeroFooter />
        </Box>
      </Flex>
    </MyContainer>
  );
};
