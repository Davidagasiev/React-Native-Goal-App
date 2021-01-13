import React, { FC, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

import { addNewGoal } from "../utils/GoalInput";
import { GoalInputProps } from "../types/GoalInput";

const GoalInput: FC<GoalInputProps> = ({ setToDoGoals, setIsAddingGoal }) => {
  const [newGoal, setNewGoal] = useState<string>("");

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="Goal"
        style={styles.styledInput}
        value={newGoal}
        onChangeText={(text) => setNewGoal(text)}
      />
      <View style={styles.buttonWrapper}>
        <Button
          title="Cancel"
          color="red"
          onPress={() => setIsAddingGoal(false)}
        />
        <Button
          title="ADD"
          onPress={() =>
            addNewGoal(newGoal, setToDoGoals, setNewGoal, setIsAddingGoal)
          }
        />
      </View>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20,
    alignItems: "stretch",
    justifyContent: "center",
    height: "100%",
  },
  styledInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
