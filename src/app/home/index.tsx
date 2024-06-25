import { Text } from "react-native";
import { Header } from "./components/header";
import { Container, Content } from "./styles";
import { Percent } from "./components/percent";
import { NewMeal } from "./components/new-meal";
import { DayList } from "./components/day-list";

export default function Home() {
	return (
		<Container>
			<Header />

			<Content>
				<Percent />

				<NewMeal />

				<DayList date={new Date()} />
			</Content>
		</Container>
	);
}
