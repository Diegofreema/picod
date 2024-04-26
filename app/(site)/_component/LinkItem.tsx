import { Button } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { MyText } from '../../../components/ui/MyText';
import { links } from './Navbar';

type LinkProps = (typeof links)[0];
export const LinkItem = ({ href, label }: LinkProps) => {
  let mainText = useColorModeValue('navy.700', 'white');
  const pathname = usePathname();
  const isActive = href.toLowerCase() === pathname.toLowerCase();
  return (
    <Button
      _hover={{
        bg: 'transparent',
        transform: 'translateY(-3px)',
        transition: 'all 0.3s ease',

        boxShadow:
          '0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 2px -1px rgb(0 0 0 / 6%), 0 1px 1px -1px rgb(0 0 0 / 9%)',
      }}
      variant={'ghost'}
      role="group"
      borderBottom={isActive ? `2px solid ${mainText}` : 'none'}
    >
      <Link href={href} color={mainText}>
        <MyText
          text={label}
          _groupHover={{
            transform: 'scale(1.1)',
            transition: 'all 0.3s ease',
          }}
        />
      </Link>
    </Button>
  );
};
