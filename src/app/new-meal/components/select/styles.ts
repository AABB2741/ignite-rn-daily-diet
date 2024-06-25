import { defaultTheme } from "@/styles/themes/default";
import styled, { css } from "styled-components/native";

export type SelectVariant = "onDiet" | "notOnDiet";

interface ContainerProps {
	active: boolean;
	variant: SelectVariant;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
	${({ theme, active, variant }) => css`
		background-color: ${active
			? variant === "onDiet"
				? theme.COLORS.GREEN_LIGHT
				: theme.COLORS.RED_LIGHT
			: theme.COLORS.GRAY_600};
		border: 1px solid
			${active
				? variant === "onDiet"
					? theme.COLORS.GREEN_DARK
					: theme.COLORS.RED_DARK
				: "transparent"};
	`};

	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	gap: 8px;
	padding: 16px;
	border-radius: 6px;
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.TITLE_XS}px;
		color: ${theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`};
`;

interface IndicatorProps {
	variant: SelectVariant;
}

export const Indicator = styled.View<IndicatorProps>`
	width: 8px;
	height: 8px;
	border-radius: 4px;

	background-color: ${({ theme, variant }) =>
		variant === "onDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
