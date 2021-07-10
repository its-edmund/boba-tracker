import { Button, Flex } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import Navbar from './Navbar';

const Tracker = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Flex width="100vw" height="100vh">
        <Button
          borderRadius="50%"
          height="70px"
          width="70px"
          position="fixed"
          bottom="50px"
          right="50px"
        >
          <AddIcon boxSize={6} />
        </Button>
      </Flex>
    </>
  );
};
export default Tracker;
