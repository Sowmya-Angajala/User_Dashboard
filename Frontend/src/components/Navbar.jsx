import { Flex, Heading } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      p={4}
      bg="blue.600"
      color="white"
      justify="center"
      align="center"
    >
      <Heading size="md">
        User Management Dashboard
      </Heading>
    </Flex>
  );
}