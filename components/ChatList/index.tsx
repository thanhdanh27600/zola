import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const ChatPreview = () => {
	return (
		<View>
			<Image source={require("../../assets/icons/logo.png")} />
		</View>
	);
};

export const ChatList = () => {
	const router = useRouter();
	return (
		<View>
			<Text>ChatList</Text>
		</View>
	);
};
