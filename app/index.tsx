import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import { ChatList } from "../components/ChatList";
import { HeaderLeft } from "../components/HeaderList/HeaderLeft";
import { HeaderRight } from "../components/HeaderList/HeaderRight";
import { HeaderGradient } from "../components/common/HeaderGradient";
import { COLORS } from "../constants";

const App = () => {
	const router = useRouter();
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: COLORS.layerBackground}}>
			<Stack.Screen
				options={{
					headerBackground: () => HeaderGradient,
					headerTitle: "",
                    headerLeft: HeaderLeft,
                    headerRight: HeaderRight
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{flex: 1}}>
					<ChatList />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
