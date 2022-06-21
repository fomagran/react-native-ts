import { View, Text, StyleSheet, FlatList } from "react-native";
import WorkoutForm, { WorkoutFormData } from "../components/WorkoutForm";
import { ExerciseFormData } from "../components/ExerciseForm";
import ExerciseForm from "../components/ExerciseForm";
import { Sequence, SequenceType } from "../models/sequence";
import slugify from "slugify";
import { useState } from "react";
import ExerciseItem from "../components/ExerciseItem";
import { PressableText } from "../components/styled/PressableText";
import { Modal } from "../components/styled/Modal";
import { storeWorkout } from "../storage/workout";
import { Difficulty } from "../models/workout";

export default function PlannerScreen({ navigation }: any) {
  const [seqItems, setSeqItems] = useState<Sequence[]>([]);

  const handleExerciseSubmit = (form: ExerciseFormData) => {
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

  const computeDiff = (exerciseCount: number, workoutDuration: number) => {
    const intensity = workoutDuration / exerciseCount;

    if (intensity <= 60) {
      return "hard";
    } else if (intensity <= 100) {
      return "normal";
    } else {
      return "easy";
    }
  };

  const handleWorkoutSubmit = async (form: WorkoutFormData) => {
    if (seqItems.length > 0) {
      const duration = seqItems.reduce((acc, item) => {
        return acc + item.duration;
      }, 0);

      const workout = {
        name: form.name,
        slug: slugify(form.name + Date.now(), { lower: true }),
        difficulty: computeDiff(seqItems.length, duration) as Difficulty,
        sequence: [...seqItems],
        duration,
      };

      await storeWorkout(workout);
    }
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
      <ExerciseForm onSubmit={handleExerciseSubmit} />
      <Modal
        activator={({ handleOpen }) => (
          <PressableText text="Create Workout" onPress={handleOpen} />
        )}
      >
        {({ handleClose }) => (
          <View>
            <WorkoutForm
              onSubmit={async (data) => {
                await handleWorkoutSubmit(data);
                handleClose();
                navigation.navigate("Home");
              }}
            />
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
