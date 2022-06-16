export type SequenceType = "exercise" | "stretch" | "break";

export interface Sequence {
  slug: string;
  name: string;
  duration: number;
  type: SequenceType;
  reps?: number;
}
