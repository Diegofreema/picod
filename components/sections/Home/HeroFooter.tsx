'use client';
import { Flex, List, ListItem } from '@chakra-ui/react';
import { MyText } from '../../ui/MyText';

interface Props {}

const lists = [
  {
    percent: '70%',
    text: 'Growth in leads',
  },
  {
    percent: '65%',
    text: 'Website Traffic',
  },
  {
    percent: '50+',
    text: 'Satisfied clients',
  },
  {
    percent: '69',
    text: 'Projects Completed',
  },
];
export const HeroFooter = ({}: Props) => {
  return (
    <List
      display="grid"
      gridTemplateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
      gap={5}
      mt={10}
    >
      {lists.map((list, index) => (
        <Item key={index} {...list} />
      ))}
    </List>
  );
};

type ItemType = (typeof lists)[0];

const Item = ({ percent, text }: ItemType) => {
  return (
    <ListItem display="flex" alignItems="center" gap={{ base: 2, md: 5 }}>
      <MyText text={percent} fontWeight={'bold'} fontSize={'lg'} />
      <MyText text={text} fontSize={'12px'} />
    </ListItem>
  );
};
