import { View, Text, StyleSheet } from "react-native";

export default function WorkoutDetailScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Detail!</Text>
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
