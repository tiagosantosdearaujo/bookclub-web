import { useState } from "react";
import { Text } from "components/atoms";
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const Input = (props) => (
  <>
    {props.error && (
      <Text.ScreenText color="red">{props.error}</Text.ScreenText>
    )}
    <ChakraInput
      height="56px"
      fontSize="16px"
      focusBorderColor="brand.primary"
      {...props}
    />
  </>
);

Input.Password = ({
  value,
  onChange,
  id,
  name,
  placeholder,
  type,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      {props.error && (
        <Text.ScreenText color="red">{props.error}</Text.ScreenText>
      )}
      <InputGroup size="md" {...props}>
        <Input
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          focusBorderColor="brand.primary"
          pr="4.5rem"
          type={show ? "text" : "password"}
        />
        <InputRightElement height="100%" width="4.5rem">
          <Button
            background="transparent"
            _hover={{ background: "transparent" }}
            h="1.75rem"
            size="sm"
            onClick={handleClick}
          >
            {show ? (
              <ViewOffIcon boxSize="18px" color="brand.primary" />
            ) : (
              <ViewIcon boxSize="18px" color="brand.primary" />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

Input.Password.displayName = "InputPassword";
