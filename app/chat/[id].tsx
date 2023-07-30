import { Stack } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import { ChatConversation } from "../../components/ChatConversation";
import { HeaderRight } from "../../components/HeaderConversation/HeaderRight";
import { HeaderGradient } from "../../components/common/HeaderGradient";
import { COLORS, isAndroid } from "../../constants";

const ChatDetail = () => {
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: COLORS.layerBackground}}>
			<Stack.Screen
				options={{
					headerBackground: () => HeaderGradient,
					headerTitle: "",
					animation: isAndroid ? "fade" : undefined,
					animationDuration: 50,
					headerRight: HeaderRight,
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{flex: 1}}>
					<ChatConversation />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ChatDetail;
