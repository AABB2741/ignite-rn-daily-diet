import { View } from "react-native";
import { Container, ReturnButton, ReturnIcon, Title } from "./styles";
import { router } from "expo-router";

export function Header() {
	return (
		<Container>
			<ReturnButton onPress={() => router.navigate("home")}>
				<ReturnIcon />
			</ReturnButton>

			<Title>Nova refeição</Title>

			<View style={{ width: 24 }} />
		</Container>
	);
}
