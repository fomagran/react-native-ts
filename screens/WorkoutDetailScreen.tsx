import { FontAwesome } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Modal } from "../components/styled/Modal";
import { PressableText } from "../components/styled/PressableText";
import WorkoutItem from "../components/WorkoutItem";
import { useCountDown } from "../hooks/useCountDown";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { Sequence } from "../models/sequence";
import { formatSec } from "../utils/time";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

export default function WorkoutDetailScreen({ route }: Navigation) {
  const [sequence, setSequence] = useState<Sequence[]>([]);
  const workout = useWorkoutBySlug(route.params.slug);
  const [trackerIdx, setTrackerIdx] = useState(-1);
  const { countDown, isRunning, stop, start } = useCountDown(trackerIdx);
  const readySeq = ["Go!", "1", "2", "3"];

  useEffect(() => {
    if (!workout) return;

    if (trackerIdx === workout.sequence.length - 1) return;

    if (countDown === 0) {
      addItemToSequence(trackerIdx + 1);
    }
  }, [countDown]);

  const addItemToSequence = (idx: number) => {
    let newSequence: any[] = [];
    if (idx > 0) {
      newSequence = [...sequence, workout!.sequence[idx]];
    } else {
      newSequence = [workout!.sequence[idx]];
    }
    setSequence(newSequence);
    setTrackerIdx(idx);
    start(newSequence[idx].duration + readySeq.length);
  };

  if (!workout) {
    return null;
  }

  const hasReachedEnd =
    sequence.length === workout.sequence.length && countDown == 0;

  return (
    <View style={styles.container}>
      <WorkoutItem item={workout} childStyles={{ marginTop: 10 }}>
        <Modal
          activator={({ handleOpen }) => (
            <PressableText onPress={handleOpen} text="Show Sequence" />
          )}
        >
          <View>
            {workout.sequence.map((seq, idx) => (
              <View key={seq.slug} style={styles.sequenceItem}>
                <Text>
                  {seq.name} | {seq.type} | {formatSec(seq.duration)}
                </Text>
                {idx !== workout.sequence.length - 1 && (
                  <FontAwesome name="arrow-down" size={20}></FontAwesome>
                )}
              </View>
            ))}
          </View>
        </Modal>
      </WorkoutItem>
      <View style={styles.wrapper}>
        <View>
          {sequence.length === 0 ? (
            <FontAwesome
              name="play-circle-o"
              size={100}
              onPress={() => addItemToSequence(0)}
            ></FontAwesome>
          ) : isRunning ? (
            <FontAwesome
              name="stop-circle-o"
              size={100}
              onPress={() => stop()}
            ></FontAwesome>
          ) : (
            <FontAwesome
              name="play-circle-o"
              size={100}
              onPress={() =>
                hasReachedEnd ? addItemToSequence(0) : start(countDown)
              }
            ></FontAwesome>
          )}
          {sequence.length > 0 && countDown >= 0 && (
            <View>
              {countDown > sequence[trackerIdx].duration
                ? readySeq[countDown - sequence[trackerIdx].duration - 1]
                : countDown}
            </View>
          )}
          <Text>
            {sequence.length === 0
              ? "Prepare"
              : hasReachedEnd
              ? "Great Jobs"
              : sequence[trackerIdx].name}
          </Text>
        </View>
      </View>
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
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sequenceItem: {
    alignItems: "center",
  },
  wrapper: {
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
  },
});
