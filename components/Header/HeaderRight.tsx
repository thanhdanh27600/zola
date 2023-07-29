import { HeaderBackButtonProps } from "@react-navigation/native-stack/src/types";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "../../assets/icons";
import { Icon } from "../common/Icon";
import { styles } from "./header.styles";

export const HeaderRight = (props: HeaderBackButtonProps) => (
	<View style={styles.headerRight}>
		<TouchableOpacity>
			<Icon source={icons.qr} />
		</TouchableOpacity>
		<TouchableOpacity>
			<Icon source={icons.add} />
		</TouchableOpacity>
	</View>
);
