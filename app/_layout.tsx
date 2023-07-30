import { useFonts } from "expo-font";
import { Stack } from "expo-router";

const Layout = () => {
	const [fontsLoaded] = useFonts({
		"zola": require("../assets/fonts/zola.ttf"),
		"Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
		"Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf")
	});

	if (!fontsLoaded) {
		return null;
	}

	return <Stack />;
};

export default Layout;
