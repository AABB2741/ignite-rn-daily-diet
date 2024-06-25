import { defaultTheme } from "@/styles/themes/default";
import styled, { css } from "styled-components/native";

export type StatisticVariant = "normal" | "onDiet" | "notOnDiet";

interface ContainerProps {
	variant: StatisticVariant;
}

const containerColor: Record<
	StatisticVariant,
	keyof typeof defaultTheme.COLORS
> = {
	normal: "GRAY_600",
	onDiet: "GREEN_LIGHT",
	notOnDiet: "RED_LIGHT",
};

export const Container = styled.View<ContainerProps>`
	background-color: ${({ theme, variant }) =>
		theme.COLORS[containerColor[variant]]};

	flex: 1;
	margin-top: 12px;
	border-radius: 8px;
	padding: 16px;
	gap: 8px;
`;

export const Value = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.TITLE_M}px;
		color: ${theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`};

	text-align: center;
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.BODY_S}px;
		color: ${theme.COLORS.GRAY_200};
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`};

	text-align: center;
`;
