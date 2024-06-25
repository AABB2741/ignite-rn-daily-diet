import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
	background-color: ${({ theme }) => theme.COLORS.GRAY_500};

	flex: 1;
`;

export const Content = styled.View`
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};

	border-radius: 20px;
	flex: 1;
`;

export const Form = styled.ScrollView`
	flex: 1;
	padding: 24px;
`;

export const Row = styled.View`
	gap: 8px;

	flex-direction: row;
`;

export const SubmitContainer = styled.View`
	padding: 24px;
`;
