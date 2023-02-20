import { Link as ChakraLink, Flex } from "@chakra-ui/react";

export const Link = ({ children, ...props }) => (
  <ChakraLink fontSize="14px" color="brand.grayDark" {...props}>
    {children}
  </ChakraLink>
);

Link.Action = ({ text, actionText, ...props }) => (
  <Flex alignItems="center" justifyContent="center">
    <ChakraLink
      width="auto"
      marginRight="5px"
      fontSize="16px"
      color="brand.grayDark"
      {...props}
    >
      {text}
    </ChakraLink>
    <ChakraLink
      width="auto"
      fontWeight="bold"
      fontSize="16px"
      color="brand.black"
      {...props}
    >
      {actionText}
    </ChakraLink>
  </Flex>
);

Link.Action.displayName = "LinkAction";
