import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { Button, Link } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

const Register = (): ReactElement => {
  return (
    <Flex
      justify="center"
      align="center"
      bgGradient="linear(to-tr, orange.200, orange.500)"
      height="100vh"
      width="100vw"
    >
      <Box
        width="400px"
        backgroundColor="white"
        borderRadius="10px"
        padding="5"
      >
        <Button
          leftIcon={<ArrowBackIcon />}
          color="orange.400"
          variant="link"
          marginBottom="10px"
        >
          <Link href="/">Return</Link>
        </Button>
        <Heading marginBottom="10px">Register</Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
          <FormLabel marginTop="10px">Email Address</FormLabel>
          <Input type="email" />
          <FormLabel marginTop="10px">Password</FormLabel>
          <Input type="password" />
          <Flex marginTop="10px">
            <Button
              backgroundColor="orange.300"
              _hover={{ backgroundColor: 'orange.500' }}
              color="white"
            >
              Register
            </Button>
            <Button marginLeft="25px" variant="link" color="orange.300">
              <Link href="/login">Login</Link>
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Register;
