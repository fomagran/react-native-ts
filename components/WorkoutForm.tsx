import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { PressableText } from "./styled/PressableText";

export type ExerciseForm = {
  name: string;
  duration: string;
};

type WorkoutProps = {
  onSubmit: (form: ExerciseForm) => void;
};

export default function WorkoutForm({ onSubmit }: WorkoutProps) {
  const [form, setForm] = useState({
    name: "",
    duration: "",
  });

  const onChageText = (name: string) => (text: string) => {
    setForm({
      ...form,
      [name]: text,
    });
  };

  return (
    <View style={styles.container}>
      <Text>Exercise Form</Text>
      <View>
        <TextInput
          onChangeText={onChageText("name")}
          style={styles.input}
          value={form.name}
        />
        <TextInput
          onChangeText={onChageText("duration")}
          style={styles.input}
          value={form.duration}
        />
        <PressableText
          onPress={() => onSubmit(form)}
          text="Submit"
        ></PressableText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
