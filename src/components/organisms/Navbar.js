import { Flex, Image } from "@chakra-ui/react";
import { SearchBar, UserMenu } from "components/molecules";

export const NavBar = () => {
  return (
    <Flex
      width="100vw"
      flexDir="row"
      alignItems="flexstart"
      justifyContent={"space-between"}
    >
      <Image
        src="/images/logo.svg"
        alt="BookClub Logo"
        width="160px"
        height="48px"
        marginBottom={["18px", "76px", "76px", "48px"]}
      />
      <SearchBar />
      <UserMenu />
    </Flex>
  );
};
