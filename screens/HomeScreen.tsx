import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout } from "../models/workout";
import WorkoutItem from "../components/WorkoutItem";
import { FontText } from "../components/styled/FontText";
import { Pressable } from "react-native";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("Rendering Home Screen");
  }, []);

  return (
    <View style={styles.container}>
      <FontText style={styles.header}>New Workouts</FontText>
      <FlatList
        data={data as Array<Workout>}
        renderItem={({ item }: { item: Workout }) => {
          return (
            <Pressable onPress={() => navigation.navigate("WorkoutDetail")}>
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
