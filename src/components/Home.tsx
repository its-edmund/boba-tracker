import React, { ReactElement } from 'react';
import { Button, Flex, Heading, Link } from '@chakra-ui/react';
import Navbar from './Navbar';

const Home = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Flex
        justify="center"
        alignItems="center"
        height="100vh"
        width="100vw"
        direction="column"
      >
        <Heading>Boba Tracker!</Heading>
        <Button marginTop="10px" colorScheme="telegram">
          <Link href="/register">Get Started!</Link>
        </Button>
      </Flex>
    </>
  );
};

export default Home;
