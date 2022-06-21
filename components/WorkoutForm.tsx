import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { PressableText } from "./styled/PressableText";
import { useForm, Controller } from "react-hook-form";

export type WorkoutFormData = {
  name: string;
};

type WorkoutProps = {
  onSubmit: (form: WorkoutFormData) => void;
};

export default function WorkoutForm({ onSubmit }: WorkoutProps) {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: true }}
        name="name"
        defaultValue={""}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            style={styles.input}
            placeholder="Workout name"
          />
        )}
      />

      <PressableText
        onPress={handleSubmit((data) => {
          onSubmit(data as WorkoutFormData);
        })}
        text="Confirm"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    width: 200,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
