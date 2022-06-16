import { Text } from "react-native";

export function FontText(props: Text["props"]) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "anton-regular" }]} />
  );
}
