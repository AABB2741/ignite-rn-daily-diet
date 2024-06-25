import { router } from "expo-router";
import {
	Container,
	Label,
	Percentual,
	ReturnButton,
	ReturnIcon,
} from "./styles";

export function Header() {
	return (
		<Container>
			<ReturnButton onPress={() => router.navigate("home")}>
				<ReturnIcon />
			</ReturnButton>
			<Percentual>30,21%</Percentual>
			<Label>das refeições dentro da dieta</Label>
		</Container>
	);
}
