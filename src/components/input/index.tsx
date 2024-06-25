import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";
import { forwardRef } from "react";

interface Props extends TextInputProps {}

export const Input = forwardRef<TextInput, Props>(({ ...rest }, ref) => {
	return <Container {...rest} ref={ref} />;
});
