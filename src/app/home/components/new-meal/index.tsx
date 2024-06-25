import { Plus } from "phosphor-react-native";
import { router } from "expo-router";

import { Button } from "@/components/button";
import { Container, Label } from "./styles";

export function NewMeal() {
	return (
		<Container>
			<Label>Refeições</Label>

			<Button
				title="Nova refeição"
				icon={Plus}
				onPress={() => router.navigate("new-meal")}
			/>
		</Container>
	);
}
