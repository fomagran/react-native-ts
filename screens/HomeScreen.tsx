import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout } from "../models/workout";
import WorkoutItem from "../components/WorkoutItem";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("Rendering Home Screen");
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data as Array<Workout>}
        renderItem={WorkoutItem}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
