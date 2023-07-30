import { StyleSheet } from "react-native";
import { COLORS, SIZE, SPACING, isIos } from "../../constants";

export const styles = StyleSheet.create({
	headerLeft: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
	},
	headerRight: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: SPACING.sm,
	},
	searchInput: {
		color: COLORS.white,
		fontSize: SIZE.sm,
		maxWidth: "60%",
	},
});
export const placeholderTextColor = isIos ? COLORS.white : COLORS.grey[300];
