import { Text } from "react-native";

import { Avatar, Container, HeaderLogo } from "./styles";

import avatar from "@/assets/avatar.png";

export function Header() {
	return (
		<Container>
			<HeaderLogo />

			<Avatar source={avatar} />
		</Container>
	);
}
