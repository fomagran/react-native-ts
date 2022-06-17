import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout } from "../models/workout";
import WorkoutItem from "../components/WorkoutItem";
import { FontText } from "../components/styled/FontText";
import { Pressable } from "react-native";
import { getWorkouts } from "../storage/workout";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    async function getData() {
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    }

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FontText style={styles.header}>New Workouts</FontText>
      <FlatList
        data={workouts}
        renderItem={({ item }: { item: Workout }) => {
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
