import { ImageSourcePropType } from "react-native";

export type BadgeType = "grey" | "red";
export type ChatStatus = "pinned" | "muted";

export interface ChatPreviewData {
	avatarSource: ImageSourcePropType;
	sender: string;
	message: string;
	time: string;
	badge?: string;
	badgeType?: BadgeType;
	status?: ChatStatus[];
}
