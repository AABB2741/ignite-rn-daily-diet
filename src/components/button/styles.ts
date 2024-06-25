import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
	padding: 16px 24px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_200};

	flex-direction: row;
	justify-content: center;
	align-items: center;

	gap: 12px;
	border-radius: 6px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.BODY_S}px;
		color: ${theme.COLORS.WHITE};
	`};
`;
