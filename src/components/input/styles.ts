import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-size: ${theme.FONT_SIZE.BODY_M}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};

		border: 1px solid ${theme.COLORS.GRAY_500};
	`};

	padding: 14px;
	border-radius: 6px;
`;
