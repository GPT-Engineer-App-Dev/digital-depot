import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "smartphone.jpg",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    image: "laptop.jpg",
    price: "$999",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet",
    image: "tablet.jpg",
    price: "$499",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="brand.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Flex>
          <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
          <Link to="/products">Products</Link>
        </Flex>
      </Flex>

      <VStack spacing={8} mt={8} align="stretch">
        <Box textAlign="center">
          <Heading>Welcome to ElectroShop</Heading>
          <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading size="md">{product.name}</Heading>
                <Text mt={4}>{product.description}</Text>
                <Text mt={4} fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;