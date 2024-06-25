import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
	flex: 1;

	background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Content = styled.ScrollView`
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};

	flex: 1;

	padding: 24px;
	border-radius: 20px;
`;

export const MealName = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`};

	font-size: 20px;
`;

export const MealDescription = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_200};
		font-size: ${theme.FONT_SIZE.BODY_M}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`};
`;
