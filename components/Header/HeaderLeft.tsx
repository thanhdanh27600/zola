import { HeaderBackButtonProps } from "@react-navigation/native-stack/src/types";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { icons } from "../../assets/icons";
import { Icon } from "../common/Icon";
import { placeholderTextColor, styles } from "./header.styles";

export const HeaderLeft = (props: HeaderBackButtonProps) => (
	<TouchableOpacity style={styles.headerLeft}>
		<Icon source={icons.search} />
		<TextInput
			placeholderTextColor={placeholderTextColor}
			style={styles.searchInput}
			placeholder="Tìm kiếm"
		/>
	</TouchableOpacity>
);
