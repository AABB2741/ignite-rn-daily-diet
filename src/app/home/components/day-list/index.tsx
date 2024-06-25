import dayjs from "dayjs";
import { Container, Title } from "./styles";
import { Meal } from "../meal";
import { useState } from "react";
import { MealSchema } from "@/schemas/meal";

interface Props {
	date: Date;
}

const defaultMeals: MealSchema[] = [
	{
		id: Math.random(),
		name: "X-tudo",
		date: new Date(2022, 7, 12, 20),
		isOnDiet: false,
	},
	{
		id: Math.random(),
		name: "Sanduíche",
		date: new Date(2022, 7, 12, 16),
		isOnDiet: true,
	},
	{
		id: Math.random(),
		name: "Lasanha de frango com queijo",
		date: new Date(2022, 7, 12, 12, 30),
		isOnDiet: false,
	},
	{
		id: Math.random(),
		name: "Torta de chocolate",
		date: new Date(2022, 7, 12, 9, 30),
		isOnDiet: false,
	},
];

export function DayList({ date }: Props) {
	const [meals, setMeals] = useState(defaultMeals);

	return (
		<Container>
			<Title>{dayjs(date).format("DD[.]MM[.]YY")}</Title>

			{meals.map((meal) => (
				<Meal {...meal} key={meal.id.toString()} />
			))}
		</Container>
	);
}
