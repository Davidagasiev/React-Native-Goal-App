import { Dispatch, SetStateAction } from "react";

import { Item } from "../types/Goal";

export const addNewGoal = (
  newGoal: string,
  setToDoGoals: Dispatch<SetStateAction<Item[]>>,
  setNewGoal: React.Dispatch<React.SetStateAction<string>>,
  setIsAddingGoal: (value: React.SetStateAction<boolean>) => void
) => {
  if (newGoal.trim()) {
    setToDoGoals((goals) => [
      ...goals,
      {
        goal: newGoal,
        id: Math.random().toString() + Math.random().toString(),
      },
    ]);
    setNewGoal("");
    setIsAddingGoal(false);
  }
};
