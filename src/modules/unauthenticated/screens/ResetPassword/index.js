import { Flex, Image, useToast } from "@chakra-ui/react";
import { Text, Input, Button, Link } from "components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { resetPasswordCall } from "services/api/requests";

export const ResetPasswordScreen = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [searchParams] = useSearchParams();

  const mutation = useMutation((data) => resetPasswordCall(data), {
    onError: (error) => {
      toast({
        title: "Falha na requisição.",
        description:
          error?.response?.data?.error || "Por favor, tente novamente.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
    onSuccess: () => {
      toast({
        title: "Senha salva com sucesso!",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      navigate("/");
    },
  });

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(6, "Token deve conter 6 caracteres.")
        .required("Token é obrigatório."),
      password: Yup.string()
        .min(6, "Senha deve ter ao menos 6 caracteres.")
        .required("Senha é obrigatório."),
      confirmPassword: Yup.string()
        .min(6, "Confirmar a senha deve ter ao menos 6 caracteres.")
        .required("Confirmar a senha é obrigatório.")
        .oneOf([Yup.ref("password"), null], "Senhas não são iguais."),
    }),
    onSubmit: (data) => {
      mutation.mutate({
        email: searchParams.get("email"),
        token: data.token,
        password: data.password,
      });
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
              id="token"
              name="token"
              value={values.token}
              onChange={handleChange}
              error={errors.token}
              maxLength={6}
              marginBottom={["6px", "6px", "16px", "24px"]}
              placeholder="000000"
            />
            <Input.Password
              type="text"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Nova Senha"
              marginBottom={["6px", "6px", "8px", "24px"]}
            />
            <Input.Password
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="Confirmar nova senha"
              marginBottom={["6px", "6px", "8px", "24px"]}
            />
            <Button
              isLoading={mutation.isLoading}
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
