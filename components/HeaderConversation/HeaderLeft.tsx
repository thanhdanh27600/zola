import { HeaderBackButtonProps } from "@react-navigation/native-stack/src/types";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Icon } from "../common/Icon";
import { placeholderTextColor, styles } from "./index.styles";

export const HeaderLeft = (props: HeaderBackButtonProps) => (
	<TouchableOpacity style={styles.headerLeft}>
		<Icon name="icon-outline-search" size={24} />
		<TextInput
			placeholderTextColor={placeholderTextColor}
			style={styles.searchInput}
			placeholder="Tìm kiếm"
		/>
	</TouchableOpacity>
);
