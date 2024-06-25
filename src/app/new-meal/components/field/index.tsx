import { Container, Label } from "./styles";
import React from "react";

interface Props {
	label: string;
	children?: React.ReactNode;
}

export function Field({ label, children }: Props) {
	return (
		<Container>
			<Label>{label}</Label>
			{children}
		</Container>
	);
}
