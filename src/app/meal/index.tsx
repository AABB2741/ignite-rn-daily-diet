import { Container, Content, MealDescription, MealName } from "./styles";
import { Header } from "./components/header";

export default function Meal() {
	return (
		<Container>
			<Header />

			<Content>
				<MealName>Sanduíche íche</MealName>
				<MealDescription>
					Sanduíche de pão integral com atum e salada de alface e
					tomate
				</MealDescription>
			</Content>
		</Container>
	);
}
