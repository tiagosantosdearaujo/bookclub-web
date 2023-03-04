import { Flex, Image, useToast } from "@chakra-ui/react";
import { Text, Input, Link, Button } from "components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { loginCall } from "services/api/requests";
import { saveItem } from "services/storage";
import { setAll } from "services/store/slices/user";

export const LoguinScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const mutation = useMutation((newUser) => loginCall(newUser), {
    onError: (error) => {
      toast({
        title: "Falha ao realizar login.",
        description:
          error?.response?.data?.error || "Por favor, tente novamente.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    },
    onSuccess: (data) => {
      toast({
        title: "Login feito com sucesso!",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      saveItem("@bookclub_token", data?.data.token);
      dispatch(
        setAll({
          token: data?.data?.token,
          user: data?.data?.user,
        })
      );
      navigate("/home");
    },
  });

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("E-mail inválido")
        .required("E-mail é obrigatório."),
      password: Yup.string()
        .min(6, "Senha deve ter ao menos 6 caracteres")
        .required("Senha é obrigatório."),
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
              Loguin
            </Text.ScreenTitle>
            <Input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="email@exemplo.com"
              marginBottom={["6px", "6px", "16px", "24px"]}
            />
            <Input.Password
              id="password"
              name="password"
              value={values.password}
              placeholder="Senha"
              onChange={handleChange}
              error={errors.password}
              marginBottom={["6px", "6px", "8px", "24px"]}
            />
            <Link
              onClick={() => navigate("./forgot-password")}
              textAlign="right"
              width="100%"
              marginBottom={["6px", "6px", "47px", "24px"]}
            >
              Esqueceu sua senha ?
            </Link>
            <Button
              isLoading={mutation.isLoading}
              onClick={handleSubmit}
              marginBottom={["60px", "60px", "206px", "24px"]}
            >
              Entrar
            </Button>
            <Link.Action
              onClick={() => navigate("./signup")}
              text="Não possui uma conta ?"
              actionText="Cadastre-se aqui"
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
