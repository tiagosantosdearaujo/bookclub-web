import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ children, ...props }) => (
  <ChakraButton
    fontFamily="Inter"
    fontSize="16px"
    fontWeight="bold"
    borderRadius="16px"
    height="56px"
    background="brand.primary"
    _hover={{
      background: "brand.primary",
    }}
    {...props}
  >
    {children}
  </ChakraButton>
);
