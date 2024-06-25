import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
	align-items: center;

	padding: 24px;
`;

export const ReturnButton = styled.TouchableOpacity`
	position: absolute;

	top: 24px;
	left: 24px;
`;

export const ReturnIcon = styled(ArrowLeft).attrs(({ theme }) => ({
	size: 24,
	color: theme.COLORS.RED_DARK,
}))``;

export const Percentual = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.TITLE_G}px;
		color: ${theme.COLORS.GRAY_200};
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
