import { Text } from "components/atoms";
import { MenuItem as ChakraMenuItem, Icon } from "@chakra-ui/react";

export const MenuItem = ({ icon, text, divider }) => (
  <ChakraMenuItem
    h="48px"
    borderBottomWidth={divider ? "1px" : "0px"}
    borderBottomStyle="solid"
    borderBottomColor="brand.grayLight"
  >
    <Icon color="brand.grayDark" boxSize="18px" mr="8px" as={icon} />
    <Text.ScreenText color="brand.grayDark" fontWeight="600" size="14px">
      {text}
    </Text.ScreenText>
  </ChakraMenuItem>
);
