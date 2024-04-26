'use client';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  useColorModeValue,
  Button,
  Text,
} from '@chakra-ui/react';
import { LinkItem } from './LinkItem';
import { links } from './Navbar';
import { MyText } from '../../../components/ui/MyText';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export function SideBar({ isOpen, onClose }: Props) {
  const buttonBg = useColorModeValue('#FF9900', '#073E57');

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent zIndex={999999999}>
        <DrawerCloseButton />

        <DrawerBody>
          <Flex
            flexDir="column"
            gap={5}
            alignItems={'center'}
            height={'100%'}
            justifyContent={'center'}
          >
            {links.map((item, i) => (
              <LinkItem key={i} {...item} />
            ))}
          </Flex>
        </DrawerBody>

        <DrawerFooter display={'flex'} justifyContent={'center'}>
          <Button bg={buttonBg} size={'md'} borderRadius={'5px'}>
            <Text fontSize={'13px'} textColor={'white'}>
              Launch Your Project Now{' '}
            </Text>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
