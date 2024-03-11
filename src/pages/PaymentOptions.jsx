import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { FaCreditCard } from "react-icons/fa";

const PaymentOptions = () => {
  return (
    <Flex direction="column" align="center" mb={5}>
      <Text fontSize="xl" mb={4} fontWeight="bold">
        Payment Options
      </Text>
      <Flex direction="column" align="center" mb={5}>
        <Button rightIcon={<FaCreditCard />} colorScheme="green" mb={3}>
          Checkout with Ozow
        </Button>
        <Text mb={1}>Secure and easy payment processing</Text>
      </Flex>
      <Flex direction="column" align="center" mb={5}>
        <Text mb={2} fontWeight="bold">
          South African Payments
        </Text>
        <Button rightIcon={<FaCreditCard />} colorScheme="blue" mb={3}>
          Pay with Visa (SA)
        </Button>
        <Text mb={1}>South African Visa card payments</Text>
      </Flex>
      <Flex direction="column" align="center">
        <Text mb={2} fontWeight="bold">
          International Payments
        </Text>
        <Button rightIcon={<FaCreditCard />} colorScheme="blue">
          Pay with Visa (International)
        </Button>
        <Text>International Visa card payments</Text>
      </Flex>
    </Flex>
  );
};

export default PaymentOptions;
