
import { StyleSheet } from "react-native";
import { COLORS, SIZE, SPACING } from "../../constants";
import { BadgeType, ChatStatus } from "../../types/chat";

export const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 4,
		paddingLeft: SPACING.sm,
	},
	containerDetail: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
		marginLeft: 16,
		borderBottomWidth: 0.5,
		padding: SIZE.sm,
		paddingLeft: 4,
		borderBottomColor: COLORS.grey[300],
	},
	containerNameAndText: {
		flexShrink: 1,
	},
	sender: {fontSize: 16},
	messageContainer: {paddingTop: 2},
	message: {fontSize: 14, color: COLORS.grey[500]},
	messageBold: {fontSize: 14, color: COLORS.grey[900]},
	notifyContainer: {
		display: "flex",
		flexShrink: 0,
		marginLeft: 8,
		alignItems: "flex-end",
		justifyContent: "space-between",
	},
	notifyDetail: {display: "flex", flexDirection: "row", gap: 4},
	time: {
		fontSize: 12,
		display: "flex",
	},
	badge: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: SIZE.lg,
		height: 12,
	},
	badgeText: {
		fontSize: 10,
		color: COLORS.white,
		width: 24,
		textAlign: "center",
	},
	badgeGrey: {
		backgroundColor: COLORS.grey[300],
	},
	badgeRed: {
		backgroundColor: COLORS.red[500],
	},
	avatar: {
		width: 52,
		height: 52,
		borderRadius: SIZE.xxl,
	},
	statusIcon: {color: COLORS.grey[300]},
});

export const badgeStyle = (type?: BadgeType) =>
	Object.assign(
		{},
		styles.badge,
		type === "red" ? styles.badgeRed : styles.badgeGrey
	);

export const statusName = (status: ChatStatus) => {
	switch (status) {
		case "muted":
			return "icon-solid-muted";
		case "pinned":
			return "icon-solid-pin";
	}
};
