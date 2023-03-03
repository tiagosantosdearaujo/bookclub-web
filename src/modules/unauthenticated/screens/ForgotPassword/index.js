import { Flex, Image, useToast } from "@chakra-ui/react";
import { Text, Input, Link, Button } from "components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { forgotPasswordCall } from "services/api/requests";

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const mutation = useMutation((data) => forgotPasswordCall(data), {
    onError: (error) => {
      toast({
        title: "Falha ao resetar a senha.",
        description:
          error?.response?.data?.error || "Por favor, tente novamente.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    },
    onSuccess: (data) => {
      toast({
        title: "E-mail enviado com sucesso!",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      navigate(`/reset-password?email=${values.email}`);
    },
  });

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("E-mail inválido")
        .required("E-mail é obrigatório."),
    }),
    onSubmit: (data) => {
      mutation.mutate(data);
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
              Esqueceu senha
            </Text.ScreenTitle>
            <Text.ScreenText marginBottom={["6px", "6px", "20px", "24px"]}>
              Digite abaixo seu e-mail que enviaremos um código de recuperação
              de senha:
            </Text.ScreenText>
            <Input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              marginBottom={["6px", "6px", "16px", "24px"]}
              placeholder="email@exemplo.com"
            />
            <Button
              isLoading={mutation.isLoading}
              onClick={handleSubmit}
              marginBottom={["60px", "60px", "206px", "24px"]}
            >
              Enviar
            </Button>
            <Link.Action
              onClick={() => navigate("/")}
              text="Lembrou da senha ?"
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
