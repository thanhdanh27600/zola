
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants";

export const HeaderGradient = (
	<LinearGradient
		colors={[COLORS.headerBold, COLORS.headerLight]}
		style={{flex: 1}}
		start={{x: 0, y: 0}}
		end={{x: 1, y: 0}}
	/>
);
