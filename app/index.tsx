import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import { ChatList } from "../components/ChatList";
import { HeaderLeft } from "../components/Header/HeaderLeft";
import { HeaderRight } from "../components/Header/HeaderRight";
import { COLORS } from "../constants";

const App = () => {
	const router = useRouter();
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: COLORS.layerBackground}}>
			<Stack.Screen
				options={{
					headerBackground: () => (
						<LinearGradient
							colors={[COLORS.headerBold, COLORS.headerLight]}
							style={{flex: 1}}
							start={{x: 0, y: 0}}
							end={{x: 1, y: 0}}
						/>
					),
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
