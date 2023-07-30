import { Text, TextProps } from "react-native";

interface Props extends TextProps {
	bold?: boolean;
}

export const P = (props: Props) => {
	return (
		<Text
			{...props}
			style={{
				fontFamily: props.bold ? "Roboto-Medium" : "Roboto-Regular",
				...(props.style as any),
			}}
		/>
	);
};
