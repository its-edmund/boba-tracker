import { Button, Flex, Link, Spacer } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

const Navbar = (): ReactElement => {
  return (
    <Flex width="100vw" position="fixed" padding="30px">
      <Spacer />
      <Button
        backgroundColor="orange.300"
        color="white"
        _hover={{ backgroundColor: 'orange.500' }}
      >
        <Link href="/login">Login</Link>
      </Button>
      <Button marginLeft="30px" color="orange.300" variant="link">
        <Link href="/register">Register</Link>
      </Button>
    </Flex>
  );
};

export default Navbar;
