import { StyleSheet } from "react-native";
import { COLORS, SIZE, SPACING, isIos } from "../../constants";

export const styles = StyleSheet.create({
	headerLeft: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		maxWidth: SIZE.xxl,
		gap: SPACING.sm,
	},
	headerRight: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: SPACING.sm,
	},
	searchInput: {
		color: COLORS.textWhite,
		fontSize: SIZE.sm,
	},
});
export const placeholderTextColor = isIos ? COLORS.textWhite : COLORS.grey[300];
