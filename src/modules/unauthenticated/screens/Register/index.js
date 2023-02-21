import { Flex, Image } from "@chakra-ui/react";
import { Text, Input, Link, Button } from "components";
import { useNavigate } from "react-router-dom";

export const RegisterScreen = () => {
  const navigate = useNavigate();
  return (
    <Flex
      flexDirection={"row"}
      alignItems={["center"]}
      justifyContent={["center"]}
      width={"100vw"}
      height={"100vh"}
      backgroundColor={""}
    >
      <Flex width={"90vw"} maxWidth="1440px" maxHeight="940px" height={"90vh"}>
        <Flex
          flexDirection={"column"}
          alignItems={["flex-start", "flex-start", "center", "flex-start"]}
          justifyContent={["flex-start", "flex-start", "center", "center"]}
          width={["100%", "100%", "100%", "50%"]}
          height={"100%"}
        >
          <Image
            src="/images/logo.svg"
            alt="BookClub Logo"
            width="160px"
            height="48px"
            marginBottom={["18px", "76px", "76px", "48px"]}
          />
          <Flex flexDirection={"column"} width="100%" maxWidth="416px">
            <Text.ScreenTitle marginBottom={["6px", "6px", "20px", "24px"]}>
              Cadastro
            </Text.ScreenTitle>
            <Input
              marginBottom={["6px", "6px", "16px", "24px"]}
              placeholder="Nome completo"
            />
            <Input
              marginBottom={["6px", "6px", "16px", "24px"]}
              placeholder="email@exemplo.com"
            />
            <Input.Password
              placeholder="Senha"
              marginBottom={["6px", "6px", "8px", "24px"]}
            />
            <Input.Password
              placeholder="Confirmar Senha"
              marginBottom={["6px", "6px", "8px", "24px"]}
            />

            <Button marginBottom={["60px", "60px", "206px", "24px"]}>
              Cadastrar
            </Button>
            <Link.Action
              onClick={() => navigate("/")}
              text="Já possui uma conta ? "
              actionText="Faça login aqui"
            />
          </Flex>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex"]}
          width={["50%"]}
          height={["100%"]}
        >
          <Image
            width={["100%"]}
            height={["100%"]}
            backgroundImage="url('/images/auth_background.svg')"
            backgroundSize="auto"
            backgroundPosition="botton"
            backgroundRepeat="no-repeat"
            borderRadius={"32px"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
