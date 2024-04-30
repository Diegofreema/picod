'use client';
import {
  Box,
  Heading,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
} from '@chakra-ui/react';
import { MyContainer } from '../../ui/MyContainer';
import { MyText } from '../../ui/MyText';
import { faqs } from '../../../data';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface Props {}

export const Frequently = ({}: Props) => {
  const textColor = useColorModeValue('navy.700', 'white');

  return (
    <MyContainer id="questions">
      <Box gap={5} display={'grid'} mb={10}>
        <Heading textColor={textColor} fontSize={{ base: '20px', md: '35px' }}>
          Frequently Asked Questions
        </Heading>
        <MyText
          text="Discover our extensive array of tailored digital services crafted to amplify your brand's online presence and achieve your business objectives."
          fontSize={{ base: '12px', md: '14px' }}
          maxW={'500px'}
        />
      </Box>
      <Accord />
    </MyContainer>
  );
};

const Accord = () => {
  const textColor = useColorModeValue('navy.700', 'white');
  const buttonBg = useColorModeValue('#FF9900', '#073E57');
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {faqs.map(({ question, answer }, i) => (
        <AccordionItem key={i}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _hover={{
                    bg: buttonBg,
                    transition: 'all 0.2s ease',
                  }}
                  role="group"
                >
                  <Box
                    _groupHover={{
                      textColor: 'white',
                      transition: 'all 0.2s ease',
                    }}
                    as="h2"
                    flex="1"
                    textColor={textColor}
                    fontWeight={'bold'}
                    fontSize={{ base: '14px', md: '18px' }}
                    textAlign="left"
                  >
                    {question}
                  </Box>
                  {isExpanded ? (
                    <IconButton
                      _groupHover={{
                        bg: '#073E57',
                        transition: 'all 0.2s ease',
                      }}
                      bg={buttonBg}
                      aria-label="button"
                      icon={<FaAngleUp color="white" size={20} />}
                    />
                  ) : (
                    <IconButton
                      _groupHover={{
                        bg: '#073E57',
                        textColor: 'green',
                        transition: 'all 0.2s ease',
                      }}
                      bg={buttonBg}
                      aria-label="button"
                      icon={<FaAngleDown color="white" size={20} />}
                    />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{answer}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
