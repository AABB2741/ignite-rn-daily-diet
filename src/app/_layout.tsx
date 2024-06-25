import {
	NunitoSans_400Regular,
	NunitoSans_700Bold,
	useFonts,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "@/styles/themes/default";
import { Stack } from "expo-router";

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="home/index" />
				<Stack.Screen name="meal/index" />
				<Stack.Screen name="stats/index" />
				<Stack.Screen
					name="new-meal/index"
					options={{ animation: "fade_from_bottom" }}
				/>
				<Stack.Screen
					name="new-meal/message/[status]"
					options={{ animation: "fade_from_bottom" }}
				/>
			</Stack>
		</ThemeProvider>
	);
}
