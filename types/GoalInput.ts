import { Dispatch, SetStateAction } from "react";

import { Item } from "./Goal";

export interface GoalInputProps {
  setToDoGoals: Dispatch<SetStateAction<Item[]>>;
  setIsAddingGoal: Dispatch<SetStateAction<boolean>>;
}
