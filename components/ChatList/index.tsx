import { useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants";
import { ChatPreviewData } from "../../types/chat";
import { Icon } from "../common/Icon";
import { P } from "../common/P";
import { badgeStyle, statusName, styles } from "./index.styles";

const mock: ChatPreviewData[] = [
	{
		avatarSource: require("../../assets/icons/logo.png"),
		sender: "Zalo",
		message: "Đăng nhập trên zalo máy tính thành công",
		time: "17 giờ",
		badge: "N",
		badgeType: "grey",
	},
	{
		avatarSource: require("../../assets/icons/avatar_default.png"),
		sender: "Petrit Pranvera",
		message: "Xin chào, mình là Petrit Pranvera. Kết bạn với mình nhé ",
		time: "1 giây",
	},
	{
		avatarSource: require("../../assets/icons/avatar_default.png"),
		sender: "Vasil Ibrahim",
		message: "Xin chào, mình là Vasil Ibrahim. Kết bạn với mình nhé ",
		time: "5 giây",
	},
	{
		avatarSource: require("../../assets/icons/avatar_default.png"),
		sender: "Fadil Gjergj",
		message: "Xin chào, mình là Fadil Gjergj. Kết bạn với mình nhé ",
		time: "6 giây",
		badge: "3",
		badgeType: "red",
		status: ["muted"],
	},
	{
		avatarSource: require("../../assets/icons/mock_avatar.png"),
		sender: "Nguyễn Thị Thanh Thuận ",
		message: "Hello anh chị em :))",
		time: "22/07",
		badge: "N",
		badgeType: "red",
		status: ["muted"],
	},
	{
		avatarSource: require("../../assets/icons/mock_avatar_2.jpg"),
		sender: "Thanh Danh",
		message: "Hello anh em :))",
		time: "22/07",
		badge: "N",
		badgeType: "red",
		status: ["pinned"],
	},
];

interface Props {
	data: ChatPreviewData;
	onPress: () => void;
}

const ChatPreview = (props: Props) => {
	const data = props.data;
	return (
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<View>
				<Image source={data.avatarSource} style={styles.avatar} />
			</View>
			<View style={styles.containerDetail}>
				<View style={styles.containerNameAndText}>
					<View>
						<P numberOfLines={1} style={styles.sender} bold={true}>
							{data.sender}
						</P>
					</View>
					<View style={styles.messageContainer}>
						<P
							numberOfLines={1}
							style={!!data.badge ? styles.messageBold : styles.message}
							bold={!!data.badge}
						>
							{data.message}
						</P>
					</View>
				</View>
				<View style={styles.notifyContainer}>
					<View style={{flex: 1}}>
						<View style={styles.notifyDetail}>
							{data.status?.map((s, i) => {
								return (
									<View
										key={`status-${i}`}
										style={{
											display: "flex",
											justifyContent: "flex-end",
											flexDirection: "row",
										}}
									>
										<Icon
											name={statusName(s)}
											size={14}
											style={{color: COLORS.grey[300]}}
										/>
									</View>
								);
							})}
							<P style={styles.time} bold={!!data.badge}>
								{data.time}
							</P>
						</View>
					</View>
					{!!data.badge && (
						<View style={badgeStyle(data.badgeType)}>
							<P style={styles.badgeText}>{data.badge}</P>
						</View>
					)}
				</View>
			</View>
		</TouchableOpacity>
	);
};

export const ChatList = () => {
	const router = useRouter();
	const onPress = () => {
		router.push(`/chat/1`);
	};
	return (
		<View>
			{mock.map((data, index) => {
				return (
					<ChatPreview
						onPress={onPress}
						data={data}
						key={`chat-preview-${index}`}
					/>
				);
			})}
		</View>
	);
};
