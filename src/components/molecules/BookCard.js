/* eslint-disable camelcase */
import { Flex, Image } from "@chakra-ui/react";
import { Text } from "components/atoms";

export const BookCard = ({ cover_url, name, author }) => {
  return (
    <Flex
      width="153px"
      height="278px"
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={"10px"}
      marginLeft={"0px"}
      marginBottom={"10px"}
      marginRight={"24px"}
      boxSizing="border-box"
    >
      <Image
        src={cover_url}
        width="153px"
        maxWidth={"153px"}
        height="230px"
        maxHeight={"230px"}
        borderRadius={"12px"}
      />
      <Text.ScreenText mt="10px" fontSize="12px" fontWeight="600">
        {name}
      </Text.ScreenText>
      <Text.ScreenText mt="5px" fontSize="10px">
        {author?.name}
      </Text.ScreenText>
    </Flex>
  );
};

export const BookCardImage = ({ cover_url }) => {
  return (
    <Flex
      width="153px"
      height="278px"
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={"10px"}
      marginLeft={"0px"}
      marginBottom={"10px"}
      marginRight={"24px"}
      boxSizing="border-box"
    >
      <Image
        src={cover_url}
        width="153px"
        maxWidth={"153px"}
        height="230px"
        maxHeight={"230px"}
        borderRadius={"12px"}
        transform="rotate(25deg)"
      />
    </Flex>
  );
};
