import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import WorkoutItem from "../components/WorkoutItem";
import { FontText } from "../components/styled/FontText";
import { Pressable } from "react-native";
import { useWorkouts } from "../hooks/useWorkouts";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const workouts = useWorkouts();

  return (
    <View style={styles.container}>
      <FontText style={styles.header}>New Workouts</FontText>
      <FlatList
        data={workouts}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("WorkoutDetail", { slug: item.slug })
              }
            >
              <WorkoutItem item={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.slug}
      />
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
