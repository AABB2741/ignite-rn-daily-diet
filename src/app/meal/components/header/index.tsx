import { View } from "react-native";
import { router } from "expo-router";

import { Container, ReturnButton, ReturnIcon, Title } from "./styles";

export function Header() {
	return (
		<Container>
			<ReturnButton onPress={() => router.navigate("home")}>
				<ReturnIcon />
			</ReturnButton>

			<Title>Refeição</Title>

			<View style={{ width: 24 }} />
		</Container>
	);
}
