import { Container, Indicator, Label } from "./styles";

interface Props {
	label: string;
	active?: boolean;
	value: "onDiet" | "notOnDiet";
}

export function Select({ label, value, active = false }: Props) {
	return (
		<Container variant={value} active={active}>
			<Indicator variant={value} />
			<Label>{label}</Label>
		</Container>
	);
}
