import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout } from "../models/workout";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const workout: Workout = {
    slug: "slug",
    name: "Fomagran",
    duration: 123,
    difficulty: "hard",
    sequence: [],
  };

  const renderItem = ({ item }: { item: Workout }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.difficulty}</Text>
      </View>
    );
  };

  useEffect(() => {
    console.log("Rendering Home Screen");
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data as Array<Workout>}
        renderItem={renderItem}
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
