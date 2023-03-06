import { Flex } from "@chakra-ui/react";
import { Text } from "components/atoms";

export const CategoryCard = ({ onClick, name, selected }) => {
  return (
    <Flex
      onClick={onClick}
      alignItems={"center"}
      justifyContent={"center"}
      height={"36px"}
      paddingX={"14px"}
      paddingY={"12px"}
      borderStyle={"solid"}
      borderWidth={"1px"}
      borderColor={selected ? "brand.black" : "brand.grayLight"}
      background={selected ? "brand.black" : "brand.background"}
      borderRadius={"8px"}
      marginRight={"8px"}
      cursor={"pointer"}
    >
      <Text.ScreenText
        fontSize={"14px"}
        fontWeight={"500"}
        color={selected ? "brand.white" : "brand.black"}
      >
        {name}
      </Text.ScreenText>
    </Flex>
  );
};
