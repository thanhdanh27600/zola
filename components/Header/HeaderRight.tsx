import { HeaderBackButtonProps } from "@react-navigation/native-stack/src/types";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "../common/Icon";
import { styles } from "./index.styles";

export const HeaderRight = (props: HeaderBackButtonProps) => (
	<View style={styles.headerRight}>
		<TouchableOpacity>
			<Icon name="invalid-qrcode" />
		</TouchableOpacity>
		<TouchableOpacity>
			<Icon name="add" />
		</TouchableOpacity>
	</View>
);
