import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
	margin: 32px 0;
`;

export const Label = styled.Text`
	margin-bottom: 8px;

	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.BODY_M}px;
		color: ${theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`};
`;
