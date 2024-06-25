import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
	flex: 1;

	background-color: ${({ theme }) => theme.COLORS.RED_MID};
`;

export const Content = styled.ScrollView`
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};

	gap: 12px;
	border-radius: 20px;
	padding: 32px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.TITLE_XS}px;
		color: ${theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`};

	text-align: center;
	margin-bottom: 12px;
`;

export const Row = styled.View`
	flex-direction: row;
	gap: 12px;
`;
