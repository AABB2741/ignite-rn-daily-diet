import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
	gap: 8px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.TITLE_S}px;
		color: ${theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`};
`;
