'use client';
import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  useColorModeValue,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import { MyText } from '../components/ui/MyText';
import { Link } from 'next-view-transitions';

interface Props {}

export const Services = ({}: Props) => {
  const textColor = useColorModeValue('navy.700', 'white');
  const bg = useColorModeValue('#073E57', 'white');
  return (
    <SimpleGrid
      id={'services'}
      columns={{ base: 1, md: 2, lg: 4 }}
      gap={{ base: '20px', md: '20px' }}
      w={{ base: '90%', md: '80%' }}
      mx={'auto'}
      pt={{ base: '40px', md: '100px' }}
    >
      <Box>
        <Box
          width={{ base: '70px', md: '100px' }}
          height={{ base: '10px', md: '20px' }}
          bg={bg}
          mb={{ base: 2, md: 3 }}
        />
        <Heading
          textColor={textColor}
          mb={5}
          size={{ base: 'md', md: 'lg', lg: 'xl' }}
        >
          SERVICES WE PROVIDE
        </Heading>
        <MyText
          fontSize={'14px'}
          text="Discover our extensive array of tailored digital services crafted to amplify your brand's online presence and achieve your business objectives."
        />
      </Box>

      <GridItem colSpan={{ base: 1, md: 1, lg: 3 }}>
        <GridBlocks />
      </GridItem>
    </SimpleGrid>
  );
};

const items = [
  {
    heading: 'Impactful Consulting',
    text: 'Optimizing brand potential through external marketing, tailored activations, industry networking, and memorable launch experiences. ',
    link: '',
  },
  {
    heading: 'Event Strategy Evolved',
    text: 'Harnessing data for optimal brand positioning: meticulous coordination, strategic industry presence, brand-aligned planning, and precision-targeted marketing initiatives.',
    link: '',
  },
  {
    heading: 'Visual & Content Storytelling',
    text: 'Crafting resonant visuals and content: strategic product positioning, event promotion materials, multimedia portrayals, multi-platform brand voice amplification, and industry-focused discussions.',
    link: '',
  },
  {
    heading: 'Cultivated Connections',
    text: 'Fostering brand growth through targeted consumer campaigns, strategic networking, captivating activations, and memorable promotions at events.',
    link: '',
  },
  {
    heading: 'Narrative Excellence',
    text: "Narrating your brand's journey seamlessly: authoritative speaking roles, impactful visual aids, captivating speech outlines, and unified brand voice with presentation design.",
    link: '',
  },
  {
    heading: 'Brand Experiences',
    text: 'Crafting memorable event experiences: direct brand activations, captivating pop-ups, tailored client engagements, immersive marketing campaigns, and brand-aligned event designs.',
    link: '',
  },
];

const GridBlocks = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
      gap={4}
    >
      {items.map((item, i) => (
        <Item key={i} index={i} {...item} />
      ))}
    </Grid>
  );
};

const Item = ({
  heading,
  link,
  text,
  index,
}: (typeof items)[0] & { index: number }) => {
  const bg = useColorModeValue('white', 'navy.900');
  const textColor = useColorModeValue('navy.700', 'white');
  const accurateIndex = index * 40;
  return (
    <Card
      _hover={{
        transform: 'translateY(-10px)',
        transition: 'all 0.3s ease',
      }}
      display={'grid'}
      gap={3}
      boxShadow={'xl'}
      shadow={'xl'}
      bg={bg}
      borderRadius={6}
      mt={{ base: 0, md: `${accurateIndex}px` }}
      borderColor={'white'}
      borderWidth={1}
    >
      <CardHeader>
        <Heading textColor={textColor} fontSize={'20px'}>
          {heading}
        </Heading>
      </CardHeader>
      <CardBody>
        <MyText fontSize={'14px'} text={text} />
      </CardBody>

      <CardFooter display={'flex'} justify={'end'}>
        <Button variant={'ghost'} color="#FF9900">
          <Link href={link}>learn more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
