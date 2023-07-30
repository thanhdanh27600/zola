import { Icon as I, IconProps } from "@expo/vector-icons/build/createIconSet";
import { Image, ImageProps } from "react-native";
import { SIZE } from "../../constants";

import { createIconSetFromFontello } from "@expo/vector-icons";
import config from "../../assets/fonts/zola.json";

export const IconImage = (props: ImageProps) => {
	return (
		<Image
			source={props.source}
			fadeDuration={0}
			style={{width: SIZE.sm, height: SIZE.sm}}
		/>
	);
};

const IconFont = createIconSetFromFontello(config, "zola", "zola.ttf") as I<
	string,
	string
>;
export const Icon = (props: IconProps<string>) => {
	return (
		<IconFont
			{...props}
			size={props.size ?? 18}
			style={{color: "white", ...(props.style as any)}}
		/>
	);
};
