import { Flex, Image } from "@chakra-ui/react";
import { Text, Input, Link, Button } from "components";

export const LoguinScreen = () => {
  return (
    <Flex
      flexDirection={"row"}
      alignItems="center"
      justifyContent="center"
      width={"100vw"}
      height={"100vh"}
      backgroundColor={""}
    >
      <Flex width={"90vw"} maxWidth="1440px" maxHeight="940px" height={"90vh"}>
        <Flex
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent="center"
          width={"30%"}
          height={"100%"}
        >
          <Image
            src="/images/logo.svg"
            alt="BookClub Logo"
            width="160px"
            height="48px"
            marginBottom="48px"
          />
          <Flex flexDirection={"column"} width="416px">
            <Text.ScreenTitle marginBottom="24px">Loguin</Text.ScreenTitle>
            <Input marginBottom="24px" placeholder="email@exemplo.com" />
            <Input.Password marginBottom="24px" />
            <Link textAlign="right" width="100%" marginBottom="24px">
              Esqueceu sua senha ?
            </Link>
            <Button marginBottom="24px">Entrar</Button>
            <Link.Action
              marginBottom="24px"
              text="Não possui uma conta ?"
              actionText="Cadastre-se aqui"
            />
          </Flex>
        </Flex>
        <Flex
          width={"70%"}
          height={"100%"}
          backgroundImage="url('/images/auth_background.svg')"
          backgroundSize="contain"
          backgroundPosition="right"
          backgroundRepeat="no-repeat"
          borderRadius={"32px"}
        />
      </Flex>
    </Flex>
  );
};
