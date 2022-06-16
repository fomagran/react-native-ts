import { View, Text } from "react-native";
import { Workout } from "../models/workout";

export default function WorkoutItem({ item }: { item: Workout }) {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>Duration:{item.duration}</Text>
      <Text>Difficulty:{item.difficulty}</Text>
    </View>
  );
}
