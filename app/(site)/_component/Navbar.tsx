/* eslint-disable */
// Chakra Imports
import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  IconButton,
  MenuIcon,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'next-view-transitions';
import { useState, useEffect } from 'react';
import AdminNavbarLinks from '../../../components/navbar/NavbarLinksAdmin';
import { isWindowAvailable } from '../../../utils/navigation';
import { MyText } from '../../../components/ui/MyText';
import { usePathname } from 'next/navigation';
import { SideBar } from './MobileNav';
import { HamburgerIcon } from '@chakra-ui/icons';
import { LinkItem } from './LinkItem';
import { MyButton } from './MyButton';

export const links = [
  {
    label: 'Home',
    href: '/#home',
  },
  {
    label: 'Services',
    href: '/#services',
  },
  {
    label: 'Our Team',
    href: '/#our-team',
  },
  {
    label: 'Our Work',
    href: '/#our-work',
  },
];
export default function SiteNavBar(props: {}) {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonBg = useColorModeValue('#FF9900', '#073E57');

  useEffect(() => {
    if (isWindowAvailable()) {
      // You now have access to `window`
      window.addEventListener('scroll', changeNavbar);

      return () => {
        window.removeEventListener('scroll', changeNavbar);
      };
    }
  });

  // const { secondary, message, brandText } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let textColor = useColorModeValue('white', 'white');
  let navbarFilter = 'none';
  let navbarBackdrop = 'blur(20px)';
  let navbarShadow = 'none';
  let navbarBg = useColorModeValue(
    'rgba(244, 247, 254, 0.2)',
    'rgba(11,20,55,0.5)',
  );
  let navbarBorder = 'transparent';
  let secondaryMargin = '0px';
  let paddingX = '15px';
  let gap = '0px';
  const changeNavbar = () => {
    if (isWindowAvailable() && window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <>
      <SideBar isOpen={isOpen} onClose={onClose} />

      <Box
        zIndex={5}
        pos={'fixed'}
        boxShadow={navbarShadow}
        bg={navbarBg}
        borderColor={navbarBorder}
        filter={navbarFilter}
        backdropFilter={navbarBackdrop}
        backgroundPosition="center"
        backgroundSize="cover"
        borderRadius="16px"
        borderWidth="1.5px"
        borderStyle="solid"
        transitionDelay="0s, 0s, 0s, 0s"
        transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
        transition-property="box-shadow, background-color, filter, border"
        transitionTimingFunction="linear, linear, linear, linear"
        alignItems={{ xl: 'center' }}
        display={'flex'}
        minH="75px"
        justifyContent={{ xl: 'center' }}
        lineHeight="25.6px"
        mx="auto"
        mt={secondaryMargin}
        pb="8px"
        right={{ base: '12px', md: '30px', lg: '30px', xl: '30px' }}
        px={{
          sm: paddingX,
          md: '10px',
        }}
        ps={{
          xl: '12px',
        }}
        pt="8px"
        top={{ base: '12px', md: '16px', xl: '18px' }}
        w={'90%'}
      >
        <Flex
          w="100%"
          justifyContent={'space-between'}
          alignItems={{ xl: 'center' }}
          mb={gap}
        >
          <Avatar src="/img/site/logo.png" size={{ base: 'md', md: 'lg' }} />
          <Flex gap="10px" alignItems={'center'} hideBelow={'md'}>
            <Flex gap="5px" w={{ sm: '100%', md: 'unset' }}>
              {links.map((item, i) => (
                <LinkItem key={i} {...item} />
              ))}
            </Flex>

            <MyButton>
              <Text fontSize={'13px'} textColor={textColor}>
                Launch Your Project Now{' '}
              </Text>
            </MyButton>
          </Flex>
          <IconButton
            aria-label="button"
            icon={<HamburgerIcon color="white" />}
            hideFrom={'md'}
            bg={buttonBg}
            borderRadius={5}
            onClick={onOpen}
          />
        </Flex>
      </Box>
    </>
  );
}
