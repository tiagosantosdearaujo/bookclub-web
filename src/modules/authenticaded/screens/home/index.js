// import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import { NavBar, BookList, BookListImage, Text } from "components";
import { useQuery } from "react-query";
import { getHighLightedBooks } from "services/api/requests";

export const HomeScreen = () => {
  // const userStore = useSelector((state) => state.user);
  const { data } = useQuery("highlighted", getHighLightedBooks);

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
        <BookList data={data?.data} />
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
          marginBottom={"10px"}
          fontSize="24px"
        >
          Categorias
        </Text.ScreenTitle>
        <BookListImage data={data?.data} />
      </Flex>
    </Flex>
  );
};
