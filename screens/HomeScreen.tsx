import { useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  useEffect(() => {
    console.log("Rendering Home Screen");
  }, []);

  return (
    <View>
      <Text>I am a home screen</Text>
      <Button
        title="Go to Planner"
        onPress={() => navigation.push("Planner")}
      />
    </View>
  );
}
