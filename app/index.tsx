import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import { ChatConversation } from "../components/ChatConversation";
import { ChatList } from "../components/ChatList";
import { HeaderLeft } from "../components/Header/HeaderLeft";
import { HeaderRight } from "../components/Header/HeaderRight";
import { COLORS, SPACING } from "../constants";

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
			<LinearGradient colors={[COLORS.headerBold, COLORS.headerLight]} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{flex: 1, padding: SPACING.sm}}>
					<ChatList />
					<ChatConversation />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
