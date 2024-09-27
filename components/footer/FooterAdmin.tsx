/*eslint-disable*/

import {
  Flex,
  Icon,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const textColor = useColorModeValue('gray.400', 'white');
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      px={{ base: '30px', md: '50px' }}
      gap={10}
      pb="30px"
      flexDirection={{ base: 'column', xl: 'row' }}
    >
      <Flex
        zIndex="3"
        flexDirection={{
          base: 'column',
          xl: 'row',
        }}
        alignItems={{
          base: 'center',
          xl: 'start',
        }}
        justifyContent="space-between"
      >
        <Text
          color={textColor}
          textAlign={{
            base: 'center',
            xl: 'start',
          }}
          mb={{ base: '20px', xl: '0px' }}
        >
          &copy; {new Date().getFullYear()}
          <Text as="span" fontWeight="500" ms="4px">
            PICOD. All Rights Reserved. Made with love by
            <Link
              mx="3px"
              color={textColor}
              href="https://my-portfolio-sooty-nine.vercel.app"
              target="_blank"
              fontWeight="700"
            >
              GENCO Tech Services!
            </Link>
          </Text>
        </Text>
      </Flex>
      <Flex gap={10} alignItems={'center'}>
        <Link href="https://www.facebook.com/share/p/id28wmTudLkVVBma/?mibextid=qi2Omg">
          <Icon
            as={FaFacebook}
            boxSize={8}
            cursor={'pointer'}
            _hover={{ scale: 1.2, transition: 'all 0.3s ease' }}
          />
        </Link>
        <Link href="https://x.com/PicodMarketing?t=ZZTfLeGT-sUfSAzanVP0kw&s=08">
          <Icon
            as={FaTwitter}
            boxSize={8}
            _hover={{ scale: 1.2, transition: 'all 0.3s ease' }}
          />
        </Link>
      </Flex>
    </Flex>
  );
}
