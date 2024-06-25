import { router, useLocalSearchParams } from "expo-router";

import { Button } from "@/components/button";

import { Container, Description, Header, Image, Title } from "./styles";

import cheer from "@/assets/cheer.png";
import shame from "@/assets/shame.png";

export default function Message() {
	const { status } = useLocalSearchParams();

	return (
		<Container>
			<Header>
				<Title onDiet={status === "onDiet"}>
					{status === "onDiet" ? "Continue assim!" : "Que pena!"}
				</Title>
				<Description>
					{status === "onDiet"
						? "Você continua dentro da dieta. Muito bem!"
						: "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
				</Description>
				<Image source={status === "onDiet" ? cheer : shame} />
				<Button
					title="Ir para a página inicial"
					onPress={() => router.navigate("home")}
				/>
			</Header>
		</Container>
	);
}
