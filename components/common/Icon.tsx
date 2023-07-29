import { Image, ImageProps } from "react-native";
import { SIZE } from "../../constants";

export const Icon = (props: ImageProps) => {
	return (
		<Image
			source={props.source}
			fadeDuration={0}
			style={{width: SIZE.sm, height: SIZE.sm}}
		/>
	);
};
