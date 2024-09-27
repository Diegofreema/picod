'use client';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { MyContainer } from '../components/ui/MyContainer';
import { MyText } from '../components/ui/MyText';
import { FaDribbble, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiDrizzleFill } from 'react-icons/ri';

interface Props {}

export const Team = ({}: Props) => {
  const textColor = useColorModeValue('navy.700', 'white');

  return (
    <MyContainer id={'our-team'}>
      <Heading
        size={{ base: 'md', md: 'lg', lg: 'xl' }}
        mb={3}
        textColor={textColor}
      >
        ABOUT US
      </Heading>
      <Box display={'grid'} gap={3} mb={10}>
        <MyText
          text="We are a Marketing Agency that is helping businesses thrive by providing
        Strategic Marketing solutions for today's businesses. We expertise in
        Digital and Traditional Marketing strategies aimed at increasing sales
        and customer loyalty."
          fontSize={'13px'}
        />
        <MyText
          text="We are a woman-owned business, located in Washington DC suburbs. The
          organization works with clients all over the world and offers diverse
          trending marketing solutions."
          fontSize={'13px'}
        />
        <MyText
          text="We are your trusted partners in bringing your brand vision to life."
          fontSize={'13px'}
        />
      </Box>
      <TeammatesCards />
    </MyContainer>
  );
};

const teammates = [
  {
    img: '/img/avatars/img.png',
    name: 'Olivia Rhye',
    role: 'Founder & CEO',
    text: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur',
  },
  {
    img: '/img/avatars/img2.png',
    name: 'Phoenix Baker',
    role: 'Engineering Manager',
    text: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur',
  },
  {
    img: '/img/avatars/img3.png',
    name: 'Lana Steiner',
    role: 'Product Manager',
    text: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur',
  },
  {
    img: '/img/avatars/img4.png',
    name: 'Demi Wilkinson',
    role: 'Frontend Developer',
    text: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur',
  },
  {
    img: '/img/avatars/img5.png',
    name: 'Candice Wu',
    role: 'Backend Developer',
    text: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur',
  },
  {
    img: '/img/avatars/img6.png',
    name: 'Natali Craig',
    role: 'Product Designer',
    text: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur',
  },
  {
    img: '/img/avatars/img7.png',
    name: 'Drew Cano',
    role: 'UX Researcher',
    text: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur',
  },
  {
    img: '/img/avatars/img8.png',
    name: 'Orlando Diggs',
    role: 'Customer Success',
    text: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur',
  },
];

const TeammatesCards = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
      gap={4}
      mb={{ base: 5, md: 10 }}
    >
      {teammates.map((item, i) => (
        <TeamCard key={i} {...item} />
      ))}
    </Grid>
  );
};

const TeamCard = ({ img, name, role, text }: (typeof teammates)[0]) => {
  const bg = useColorModeValue('white', 'navy.900');
  const textColor = useColorModeValue('navy.700', 'white');
  return (
    <Card
      _hover={{
        transform: 'translateY(-10px)',
        transition: 'all 0.3s linear',
      }}
      display={'grid'}
      gap={3}
      boxShadow={'2xl'}
      bg={bg}
      borderRadius={6}
    >
      <CardHeader m={0}>
        <Image alt="image" src={img} w={'100%'} h="200px" objectFit={'cover'} />
      </CardHeader>
      <CardBody m={0} display={'grid'} gap={3}>
        <MyText fontSize={'16px'} text={name} fontWeight={'bold'} />
        <Text fontSize={'13px'} textColor={'#FF9900'}>
          {role}
        </Text>
        <MyText fontSize={'12px'} text={text} />
      </CardBody>

      <CardFooter display={'flex'} gap={3} alignItems={'center'}>
        <FaTwitter color={'#98A2B3'} cursor={'pointer'} />
        <FaLinkedin color={'#98A2B3'} cursor={'pointer'} />
        <FaDribbble color={'#98A2B3'} cursor={'pointer'} />
      </CardFooter>
    </Card>
  );
};
