import { Input, InputGroup, InputLeftElement, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <Flex
      width="478px"
      height="52px"
      background="brand.grayLight"
      borderRadius="12px"
    >
      <InputGroup>
        <InputLeftElement height={"100%"}>
          <SearchIcon color={"brand.grayDark"} />
        </InputLeftElement>
        <Input
          borderWidth={"0px"}
          width={"100%"}
          height={"100%"}
          placeholder="Digite o nome do livro ou autor"
          _placeholder={"brand.grayDark"}
          focusBorderColor="transparent"
        />
      </InputGroup>
    </Flex>
  );
};
