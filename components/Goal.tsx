import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { GoalProps } from "../types/Goal";

const Goal: FC<GoalProps> = ({ item, setToDoGoals, setDoneGoals, isDone }) => {
  return (
    <TouchableOpacity
      style={styles.goal}
      onPress={() => {
        if (isDone) {
          setToDoGoals((goals) => [...goals, item]);
          setDoneGoals((goals) => goals.filter(({ id }) => id !== item.id));
        } else {
          setToDoGoals((goals) => goals.filter(({ id }) => id !== item.id));
          setDoneGoals((goals) => [...goals, item]);
        }
      }}
      onLongPress={() => {
        if (isDone) {
          setDoneGoals((goals) => goals.filter(({ id }) => id !== item.id));
        }
      }}
    >
      <Text>{item.goal}</Text>
    </TouchableOpacity>
  );
};

export default Goal;

const styles = StyleSheet.create({
  goal: {
    width: "100%",
    padding: 10,
    marginTop: 2.5,
    marginBottom: 2.5,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
