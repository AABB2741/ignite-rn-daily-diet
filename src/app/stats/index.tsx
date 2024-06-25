import { Text } from "react-native";
import { Container, Content, Row, Title } from "./styles";
import { Header } from "./components/header";
import { Statistic } from "./components/statistic";

export default function Stats() {
	return (
		<Container>
			<Header />

			<Content>
				<Title>Estatísticas gerais</Title>

				<Statistic
					value={4}
					label="melhor sequência de pratos dentro da lista"
				/>
				<Statistic value={109} label="refeições registradas" />

				<Row>
					<Statistic
						value={32}
						label="refeições dentro da dieta"
						variant="onDiet"
					/>
					<Statistic
						value={77}
						label="refeições fora da dieta"
						variant="notOnDiet"
					/>
				</Row>
			</Content>
		</Container>
	);
}
