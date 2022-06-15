import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("Rendering Home Screen");
  }, []);

  return (
    <View>
      <Text>I am a home screen</Text>
      <Button
        title="Go to Planner"
        onPress={() => navigation.navigate("Planner")}
      />
    </View>
  );
}
