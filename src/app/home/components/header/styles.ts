import { Logo } from "@/assets/logo";
import styled from "styled-components/native";

export const Container = styled.View`
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};

	flex-direction: row;
	justify-content: space-between;

	padding: 24px;
`;

export const HeaderLogo = styled(Logo)`
	height: 37px;
`;

export const Avatar = styled.Image`
	width: 40px;
	height: 40px;

	border-radius: 20px;

	border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;
