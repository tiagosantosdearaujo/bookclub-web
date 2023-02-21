import { Flex, Image } from "@chakra-ui/react";
import { Text, Input, Link, Button } from "components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const ResetPasswordScreen = () => {
  const navigate = useNavigate();

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(4, "O token deve conter ao menos 4 caracteres.")
        .required("O token é obrigatório."),
      newPassword: Yup.string()
        .min(6, "Senha deve ter ao menos 6 caracteres")
        .required("Senha é obrigatório."),
      confirmNewPassword: Yup.string()
        .min(6, "Confirmar a senha deve ter ao menos 6 caracteres")
        .required("Confirmar a senha é obrigatório.")
        .oneOf([Yup.ref("newPassword"), null], "Senhas nao sao iguais"),
    }),
    onSubmit: (data) => {
      console.log({ data });
      navigate("/");
    },
  });
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
              Nova senha
            </Text.ScreenTitle>
            <Text.ScreenText marginBottom={["6px", "6px", "20px", "24px"]}>
              Digite o código enviado e uma nova senha nos campos abaixo:
            </Text.ScreenText>
            <Input
              type="number"
              id="token"
              name="token"
              value={values.token}
              onChange={handleChange}
              error={errors.token}
              maxLenght={4}
              marginBottom={["6px", "6px", "16px", "24px"]}
              placeholder="0000"
            />
            <Input.Password
              type="text"
              id="newPassword"
              name="newPassword"
              value={values.newPassword}
              onChange={handleChange}
              error={errors.newPassword}
              placeholder="Nova Senha"
              marginBottom={["6px", "6px", "8px", "24px"]}
            />
            <Input.Password
              type="text"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={values.confirmNewPassword}
              onChange={handleChange}
              error={errors.confirmNewPassword}
              placeholder="Confirmar nova senha"
              marginBottom={["6px", "6px", "8px", "24px"]}
            />
            <Button
              onClick={handleSubmit}
              marginBottom={["60px", "60px", "206px", "24px"]}
            >
              Salvar
            </Button>
            <Link.Action
              text="Não recebeu o código?"
              actionText="Clique aqui para reenviar."
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
