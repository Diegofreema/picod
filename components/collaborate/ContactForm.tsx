'use client';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { MyText } from '../ui/MyText';
import { Controller, Form, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormSchema } from '../../lib/validator';
import { MyButton } from '../../app/(site)/_component/MyButton';

interface Props {}

export const ContactForm = ({}: Props) => {
  const textColor = useColorModeValue('navy.700', 'white');
  return (
    <SimpleGrid>
      <Box gap={5} display={'grid'} mb={10}>
        <Heading textColor={textColor} fontSize={{ base: '20px', md: '35px' }}>
          Interesting Collaboration With Us?
        </Heading>
        <MyText
          text="Discover our extensive array of tailored digital services crafted to amplify your brand's online presence and achieve your business objectives."
          fontSize={{ base: '12px', md: '14px' }}
        />
      </Box>
      <MyForm />
    </SimpleGrid>
  );
};

const MyForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      email: '',
      message: '',
      fullName: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display={'grid'} gap={5}>
        <FormControl isRequired>
          <FormLabel>Full name</FormLabel>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Full name" />}
            rules={{ required: true }}
          />

          <FormErrorMessage>{errors?.fullName?.message}.</FormErrorMessage>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Email" type="email" />
            )}
            rules={{ required: true }}
          />

          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                placeholder="Message"
                resize={'none'}
                rows={5}
              />
            )}
            rules={{ required: true }}
          />

          <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
        </FormControl>

        <MyButton type="submit" w={'fit-content'}>
          <Text textColor={'white'}>Submit</Text>
        </MyButton>
      </Box>
    </form>
  );
};
