import { View, Text, StyleSheet, FlatList } from "react-native";
import WorkoutForm, { ExerciseForm } from "../components/WorkoutForm";
import { Sequence, SequenceType } from "../models/sequence";
import slugify from "slugify";
import { useState } from "react";
import ExerciseItem from "../components/ExerciseItem";
import { PressableText } from "../components/styled/PressableText";

export default function PlannerScreen({ navigation }: any) {
  const [seqItems, setSeqItems] = useState<Sequence[]>([]);

  const handleFormSubmit = (form: ExerciseForm) => {
    const sequence: Sequence = {
      slug: slugify(form.name + Date.now(), { lower: true }),
      name: form.name,
      type: form.type as SequenceType,
      duration: Number(form.duration),
    };

    if (form.reps) {
      sequence.reps = Number(form.reps);
    }

    setSeqItems([...seqItems, sequence]);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={seqItems}
        keyExtractor={(item) => item.slug}
        renderItem={({ item, index }) => (
          <ExerciseItem item={item}>
            <PressableText
              text="Remove"
              onPressIn={() => {
                const items = [...seqItems];
                items.splice(index, 1);
                setSeqItems(items);
              }}
            />
          </ExerciseItem>
        )}
      />
      <WorkoutForm onSubmit={handleFormSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
