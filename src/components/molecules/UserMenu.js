import { Text, MenuItem } from "components/atoms";
import { Avatar, Flex, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsBookmarkHeart } from "react-icons/bs";
import { BiUser, BiCheckShield } from "react-icons/bi";
import {
  HiOutlineDocumentText,
  HiOutlineClipboard,
  HiOutlineLogout,
} from "react-icons/hi";

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user);

  const menuOptions = [
    {
      id: 0,
      icon: BsBookmarkHeart,
      text: "Favoritos",
      divider: false,
    },
    {
      id: 1,
      icon: BiUser,
      text: "Dados Pessoais",
      divider: false,
    },
    {
      id: 2,
      icon: BiCheckShield,
      text: "Alterar Senha",
      divider: true,
    },
    {
      id: 3,
      icon: HiOutlineDocumentText,
      text: "Termos de uso",
      divider: false,
    },
    {
      id: 4,
      icon: HiOutlineClipboard,
      text: "Política de Privacidade",
      divider: true,
    },
    {
      id: 5,
      icon: HiOutlineLogout,
      text: "Logout",
      divider: false,
    },
  ];

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
        {menuOptions.map((item) => (
          <MenuItem key={`menu_item_${item.id}`} {...item} />
        ))}
      </MenuList>
    </Menu>
  );
};
