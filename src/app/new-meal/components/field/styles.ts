import styled, { css } from "styled-components/native";

export const Container = styled.View`
	gap: 4px;
	margin-bottom: 24px;
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.TITLE_XS}px;
		color: ${theme.COLORS.GRAY_200};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`};
`;
