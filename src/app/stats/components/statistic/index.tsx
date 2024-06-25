import { Container, Label, StatisticVariant, Value } from "./styles";

interface Props {
	value: number;
	label: string;
	variant?: StatisticVariant;
}

export function Statistic({ value, label, variant = "normal" }: Props) {
	return (
		<Container variant={variant}>
			<Value>{value}</Value>
			<Label>{label}</Label>
		</Container>
	);
}
