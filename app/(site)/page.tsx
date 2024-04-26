'use client';

import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Landing } from './_component/Landing';

interface Props {}

const page: NextPage<Props> = ({}): JSX.Element => {
  return <Landing />;
};

export default page;
