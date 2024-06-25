import React from "react";
import { TouchableOpacityProps } from "react-native";
import { IconContext, IconProps } from "phosphor-react-native";

import { Container, Title } from "./styles";
import { useTheme } from "styled-components/native";

interface Props extends TouchableOpacityProps {
	title: string;
	icon?: React.ElementType<IconProps>;
}

export function Button({ title, icon: Icon, ...rest }: Props) {
	const { COLORS } = useTheme();

	return (
		<Container {...rest}>
			{Icon && <Icon color={COLORS.WHITE} size={18} />}
			<Title>{title}</Title>
		</Container>
	);
}
