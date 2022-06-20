import { useEffect, useState } from "react";
import { Workout } from "../models/workout";
import { getWorkouts } from "../storage/workout";
import { useIsFocused } from "@react-navigation/native";

export const useWorkouts = () => {
  const [workout, setWorkouts] = useState<Workout[]>([]);
  //데이터가 있는 화면이 있는지 없는지 확인하는 Hooks
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getData() {
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    }

    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return workout;
};
