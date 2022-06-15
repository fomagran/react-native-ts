import { useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function PlannerScreen({ navigation }: any) {
  useEffect(() => {
    console.log("Rendering Planner Screen");
  }, []);

  return (
    <View>
      <Text>I am a planner screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
