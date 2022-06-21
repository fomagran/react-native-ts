import { View, Text, Button } from "react-native";
import WorkoutForm, { ExerciseForm } from "../components/WorkoutForm";

export default function PlannerScreen({ navigation }: any) {
  const handleFormSubmit = (form: ExerciseForm) => {
    alert(`${form.name} ${form.duration}`);
  };
  return (
    <View>
      <WorkoutForm onSubmit={handleFormSubmit} />
    </View>
  );
}
