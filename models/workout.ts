import { Sequence } from "./sequence";

export type Difficulty = "easy" | "normal" | "hard";

export interface Workout {
  slug: string;
  name: string;
  duration: number;
  difficulty: Difficulty;
  sequence: Sequence[];
}
