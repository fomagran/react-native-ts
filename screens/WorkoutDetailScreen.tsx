import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { PressableText } from "../components/styled/PressableText";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

export default function WorkoutDetailScreen({ route }: Navigation) {
  const workout = useWorkoutBySlug(route.params.slug);

  if (!workout) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout?.name}</Text>
      <PressableText onPress={() => alert("open")} text="Check"></PressableText>
      <PressableText onPress={() => alert("Hi")} text="Hi"></PressableText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
