import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Text } from "components/atoms";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user);

  return (
    <Menu>
      <MenuButton alignItems={"flex-start"}>
        <Flex alignItems={"center"}>
          <Avatar
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            size={"md"}
            borderWidth={"2px"}
            borderColor={"brand.primary"}
            background={"brand.grayLight"}
            textColor={"brand.black"}
          />
          <Text.ScreenText
            fontWeight={"bold"}
            maxLength={"40px"}
            marginLeft={"12px"}
          >
            {userStore?.user?.name}
          </Text.ScreenText>
          <ChevronDownIcon boxSize={"24px"} />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Favoritos</MenuItem>
        <MenuItem>Dados Pessoais</MenuItem>
      </MenuList>
    </Menu>
  );
};
