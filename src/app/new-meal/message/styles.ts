import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
	flex: 1;

	align-items: center;
	justify-content: center;
`;

export const Header = styled.View`
	gap: 8px;
`;

interface TitleProps {
	onDiet: boolean;
}

export const Title = styled.Text<TitleProps>`
	${({ theme, onDiet }) => css`
		color: ${onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
		font-size: ${theme.FONT_SIZE.TITLE_M}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
	`};

	text-align: center;
`;

export const Description = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-size: ${theme.FONT_SIZE.BODY_M}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`};

	text-align: center;
`;

export const Image = styled.Image`
	margin: 32px 0;

	align-self: center;
`;
