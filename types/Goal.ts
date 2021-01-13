import { Dispatch, SetStateAction } from "react";

export interface Item {
  goal: string;
  id: string;
}

export interface GoalProps {
  item: Item;
  setToDoGoals: Dispatch<SetStateAction<Item[]>>;
  setDoneGoals: Dispatch<SetStateAction<Item[]>>;
  isDone?: boolean;
}
