import React, { ReactElement } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const Login = (): ReactElement => {
  return (
    <Flex
      justify="center"
      align="center"
      bgGradient="linear(to-l, orange.300, orange.600)"
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
        <Heading marginBottom="10px">Login</Heading>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" />
          <FormLabel marginTop="10px">Password</FormLabel>
          <Input type="password" />
          <Flex marginTop="10px">
            <Button
              backgroundColor="orange.300"
              _hover={{ backgroundColor: 'orange.400' }}
              color="white"
            >
              Login
            </Button>
            <Button marginLeft="25px" variant="link" color="orange.300">
              <Link href="/register">Register</Link>
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Login;
