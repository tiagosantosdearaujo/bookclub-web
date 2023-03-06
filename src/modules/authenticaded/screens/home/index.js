import { Flex } from "@chakra-ui/react";
import { NavBar, BookList, CategoryList, Text } from "components";

export const HomeScreen = () => {
  return (
    <Flex
      display={"flex"}
      flexDirection={"column"}
      alignItems={["center"]}
      justifyContent={["flex-start"]}
      width={"100vw"}
      height={"100vh"}
      backgroundColor={""}
    >
      <Flex
        width={"90vw"}
        maxWidth="1216px"
        height={"90vh"}
        maxHeight="72px"
        marginTop={["18px", "76px", "76px", "45px"]}
        marginBottom={["18px", "76px", "76px", "37px"]}
      >
        <NavBar alignItems="center" justifyContent="center"></NavBar>
      </Flex>

      <Flex
        width={"90vw"}
        maxWidth="1216px"
        height={"200px"}
        maxHeight="200px"
        marginTop={["18px", "76px", "76px", "0px"]}
        marginBottom={["18px", "76px", "76px", "45px"]}
        background="brand.grayLight"
        borderRadius={"24px"}
      ></Flex>

      <Flex
        flexDirection={"column"}
        width={"90vw"}
        maxWidth="1216px"
        height={"90vh"}
        maxHeight="350px"
        marginTop={["18px", "76px", "76px", "0px"]}
        marginBottom={["18px", "76px", "76px", "18px"]}
        borderRadius={"24px"}
      >
        <Text.ScreenTitle
          marginTop="10px"
          marginBottom={"10px"}
          fontSize="24px"
        >
          Destaques
        </Text.ScreenTitle>
        <BookList />
      </Flex>

      <Flex
        flexDirection={"column"}
        width={"90vw"}
        maxWidth="1216px"
        height={"90vh"}
        maxHeight="350px"
        marginTop={["18px", "76px", "76px", "0px"]}
        marginBottom={["18px", "76px", "76px", "18px"]}
        borderRadius={"24px"}
      >
        <Text.ScreenTitle
          marginTop="10px"
          marginBottom={"16px"}
          fontSize="24px"
        >
          Categorias
        </Text.ScreenTitle>
        <CategoryList />
      </Flex>
    </Flex>
  );
};
