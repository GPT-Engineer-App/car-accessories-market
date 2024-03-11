import React, { useState } from "react";
import { Box, Flex, Grid, Heading, Text, Button, Image, Input, Link } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaCreditCard } from "react-icons/fa";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Placeholder data for car and bakkie accessories
  const products = [
    { id: 1, name: "Car Cover", price: "199.99", image: 'https://images.unsplash.com/photo-1586920749875-2a3c3bf9f279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBjb3ZlcnxlbnwwfHx8fDE3MTAxMzg5MDN8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 2, name: "Steering Wheel Cover", price: "49.99", image: 'https://images.unsplash.com/photo-1694648827693-1b9fcc81c556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGVlcmluZyUyMHdoZWVsJTIwY292ZXJ8ZW58MHx8fHwxNzEwMTM4OTA0fDA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 3, name: "Air Freshener", price: "5.99", image: 'https://images.unsplash.com/photo-1599800343870-f8bf5e266732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaXIlMjBmcmVzaGVuZXJ8ZW58MHx8fHwxNzEwMTM4OTA0fDA&ixlib=rb-4.0.3&q=80&w=1080' },
    // Add more products as needed
  ];

  // Search handler (front-end only)
  const handleSearch = () => {
    // This would filter products based on the search term
  };

  return (
    <Flex direction="column" align="center" p={5}>
      <Heading mb={10}>Car & Bakkie Accessories Shop</Heading>

      <Flex mb={5} align="center">
        <Input placeholder="Search for accessories..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button onClick={handleSearch} ml={2}>
          <FaSearch />
        </Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <Heading size="md" my="2">
              {product.name}
            </Heading>
            <Text mb="2">Price: R{product.price}</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="blue">
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>

      <Flex align="center" mb={5}>
        <Button rightIcon={<FaCreditCard />} colorScheme="green">
          Checkout with Ozow
        </Button>
        <Text ml={3}>Secure and easy payment processing</Text>
      </Flex>

      <Box as="footer" mt="auto">
        <Text textAlign="center">&copy; {new Date().getFullYear()} Car & Bakkie Accessories Shop</Text>
      </Box>
    </Flex>
  );
};

export default Index;
