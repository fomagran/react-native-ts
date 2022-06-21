import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Sequence } from "../models/sequence";

export default function ExerciseItem({
  item,
  children,
}: {
  item: Sequence;
  children?: ReactNode;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {item.name}
        {item.reps ? `- ${item.reps}` : ""} - {item.duration} sec | {item.type}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 15,
    marginBottom: 5,
  },
});
