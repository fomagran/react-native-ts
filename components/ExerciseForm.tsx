import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { PressableText } from "./styled/PressableText";
import { useForm, Controller } from "react-hook-form";

export type ExerciseFormData = {
  name: string;
  duration: string;
  type: string;
  reps?: number;
};

type ExerciseProps = {
  onSubmit: (form: ExerciseFormData) => void;
};

export default function ExerciseForm({ onSubmit }: ExerciseProps) {
  const { control, handleSubmit } = useForm();
  const [isSelectionOn, setSelectionOn] = useState(false);
  const selectionItem: string[] = ["Exercise", "break", "stretch"];

  return (
    <View style={styles.container}>
      <Text>Exercise Form</Text>
      <View>
        <View style={styles.rowContainer}>
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
                placeholder="Enter a exercise name"
              />
            )}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="duration"
            defaultValue={""}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholder="Enter a duration"
              />
            )}
          />
        </View>
        <View style={styles.rowContainer}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="type"
            defaultValue={""}
            render={({ field: { onChange, value } }) => (
              <View>
                {isSelectionOn ? (
                  <View>
                    {selectionItem.map((selection) => (
                      <PressableText
                        style={styles.selection}
                        key={selection}
                        text={selection}
                        onPress={() => {
                          onChange(selection);
                          setSelectionOn(false);
                        }}
                      />
                    ))}
                  </View>
                ) : (
                  <TextInput
                    onFocus={() => setSelectionOn(true)}
                    style={styles.input}
                    value={value}
                    placeholder="Enter a type"
                  />
                )}
              </View>
            )}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="reps"
            defaultValue={""}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholder="Enter reps"
              />
            )}
          />
        </View>
        <PressableText
          onPress={handleSubmit((data) => {
            onSubmit(data as ExerciseFormData);
          })}
          text="Submit"
        />
      </View>
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
    flex: 1,
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: "row",
  },
  selection: {
    margin: 2,
    padding: 3,
    alignSelf: "center",
  },
});
