import dayjs from "dayjs";

import { Container, Indicator, Name, Date, Separator } from "./styles";
import { router } from "expo-router";

interface Props {
	date: Date;
	name: string;
	isOnDiet: boolean;
}

export function Meal({ date, name, isOnDiet }: Props) {
	return (
		<Container onPress={() => router.navigate("meal")}>
			<Date>{dayjs(date).format("HH:mm")}</Date>
			<Separator />
			<Name>{name}</Name>
			<Indicator onDiet={isOnDiet} />
		</Container>
	);
}
