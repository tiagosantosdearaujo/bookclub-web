import { Text as ChakraText } from "@chakra-ui/react";

export const Text = ({ children, ...props }) => {
  <ChakraText {...props}>{children}</ChakraText>;
};

Text.ScreenTitle = ({ children, ...props }) => (
  <ChakraText
    color="brand.black"
    fontWeight="extrabold"
    fontSize="20px"
    {...props}
  >
    {children}
  </ChakraText>
);

Text.ScreenTitle.displayName = "ScreenTitle";

// Text.ScreenTitleBold = ({ children, ...props }) => (
//   <ChakraText
//     color="brand.black"
//     fontWeight="extrabold"
//     fontSize="16px"
//     {...props}
//   >
//     {children}
//   </ChakraText>
// );

// Text.ScreenTitleBold.displayName = "ScreenTitleBold";
