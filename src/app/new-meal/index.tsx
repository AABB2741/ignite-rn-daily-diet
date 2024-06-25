import { useRef } from "react";
import { TextInput } from "react-native";
import dayjs from "dayjs";

import { Input } from "@/components/input";

import { Header } from "./components/header";
import { Field } from "./components/field";
import { Select } from "./components/select";

import { Container, Content, Form, Row, SubmitContainer } from "./styles";
import { Button } from "@/components/button";
import { router } from "expo-router";

export default function NewMeal() {
	const descriptionInputRef = useRef<TextInput>(null);

	return (
		<Container>
			<Header />

			<Content>
				<Form>
					<Field label="Nome">
						<Input
							onSubmitEditing={() => {
								descriptionInputRef.current?.focus();
							}}
						/>
					</Field>

					<Field label="Descrição">
						<Input
							multiline
							textAlignVertical="top"
							style={{ height: 120 }}
							ref={descriptionInputRef}
						/>
					</Field>

					<Field label="Data">
						<Input placeholder={dayjs().format("DD/MM/YYYY")} />
					</Field>

					<Field label="Hora">
						<Input placeholder={dayjs().format("HH:mm")} />
					</Field>

					<Field label="Está dentro da dieta?">
						<Row>
							<Select label="Sim" value="onDiet" active />
							<Select label="Não" value="notOnDiet" />
						</Row>
					</Field>
				</Form>

				<SubmitContainer>
					<Button
						title="Cadastrar refeição"
						onPress={() =>
							router.replace("new-meal/message/onDiet")
						}
					/>
				</SubmitContainer>
			</Content>
		</Container>
	);
}
