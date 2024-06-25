import { router } from "expo-router";
import { Container, Icon, Label, Percentual } from "./styles";

export function Percent() {
	return (
		<Container onPress={() => router.navigate("stats")}>
			<Icon />
			<Percentual>90,86%</Percentual>
			<Label>das refeições dentro da dieta</Label>
		</Container>
	);
}
