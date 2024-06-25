import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;

	gap: 12px;
	padding: 14px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
	border-radius: 6px;
`;

export const Date = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.BODY_XS}px;
		color: ${theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`};
`;

export const Separator = styled.View`
	height: 100%;
	width: 1px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Name = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_200};
		font-size: ${theme.FONT_SIZE.BODY_M}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`};

	flex: 1;
`;

interface IndicatorProps {
	onDiet?: boolean;
}

export const Indicator = styled.View<IndicatorProps>`
	width: 14px;
	height: 14px;

	border-radius: 7px;
	background-color: ${({ theme, onDiet }) =>
		onDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
