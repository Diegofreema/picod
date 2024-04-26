'use client';

import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Footer from '../../components/footer/FooterAdmin';
import SiteNavBar from './_component/Navbar';
import FixedPlugin from '../../components/fixedPlugin/FixedPlugin';

export default function AppLayout({ children }: { children: ReactNode }) {
  const bg = useColorModeValue('secondaryGray.300', 'navy.900');

  return (
    <Box bg={bg} w="100%">
      <Box minH="100vh" pos="relative">
        <SiteNavBar />
        {children}
      </Box>

      <Box>
        <Footer />
        <FixedPlugin />
      </Box>
    </Box>
  );
}
