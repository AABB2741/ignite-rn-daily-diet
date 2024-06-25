import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
	padding: 20px;

	background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

	border-radius: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
	color: theme.COLORS.GREEN_DARK,
	size: 24,
}))`
	position: absolute;

	top: 8px;
	right: 8px;
`;

export const Percentual = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.TITLE_G}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_100};
	`};

	text-align: center;

	width: 100%;
`;

export const Label = styled.Text`
	color: ${({ theme }) => theme.COLORS.GRAY_200};
	font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

	text-align: center;

	width: 100%;
`;
