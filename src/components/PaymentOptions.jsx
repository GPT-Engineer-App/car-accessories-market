import React from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { FaCreditCard } from "react-icons/fa";

const PaymentOptions = () => {
  return (
    <Flex align="center" mb={5}>
      <Flex direction="column" align="center" mb={5}>
        <Button rightIcon={<FaCreditCard />} colorScheme="green" mb={3}>
          Checkout with Ozow
        </Button>
        <Text mb={1}>Secure and easy payment processing</Text>
        <Button rightIcon={<FaCreditCard />} colorScheme="blue" mb={3}>
          Pay with Visa (SA)
        </Button>
        <Text mb={1}>South African Visa card payments</Text>
        <Button rightIcon={<FaCreditCard />} colorScheme="blue">
          Pay with Visa (International)
        </Button>
        <Text>International Visa card payments</Text>
      </Flex>
    </Flex>
  );
};

export default PaymentOptions;
