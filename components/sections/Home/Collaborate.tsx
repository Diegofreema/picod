'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { ContactForm } from '../../collaborate/ContactForm';
import { GridImages } from '../../collaborate/GridImages';
import { MyContainer } from '../../ui/MyContainer';

interface Props {}

export const Collaborate = ({}: Props) => {
  return (
    <MyContainer id="contact">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
        <ContactForm />
        <GridImages />
      </SimpleGrid>
    </MyContainer>
  );
};
