import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
	align-items: center;
	flex-direction: row;
	gap: 12px;

	padding: 24px;
`;

export const ReturnButton = styled.TouchableOpacity`
	width: 24px;
	height: 24px;
`;

export const ReturnIcon = styled(ArrowLeft).attrs(({ theme }) => ({
	size: 24,
	color: theme.COLORS.GRAY_200,
}))``;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.TITLE_S}px;
		color: ${theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`};

	flex: 1;
	text-align: center;
`;
