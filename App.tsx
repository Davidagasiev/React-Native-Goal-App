import React, { FC, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";

import Goal from "./components/Goal";
import GoalInput from "./components/GoalInput";
import StyledButton from "./components/StyledButton";
import { Item } from "./types/Goal";

const App: FC = () => {
  const [toDoGoals, setToDoGoals] = useState<Item[]>([]);
  const [doneGoals, setDoneGoals] = useState<Item[]>([]);
  const [isAddingGoal, setIsAddingGoal] = useState<boolean>(false);

  return (
    <View style={styles.screen}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Echolize 2021 Goals</Text>
        <StyledButton onPress={() => setIsAddingGoal(true)}>+</StyledButton>
      </View>
      <Modal
        animationType="slide"
        visible={isAddingGoal}
        onRequestClose={() => {
          setIsAddingGoal(false);
        }}
      >
        <GoalInput
          setToDoGoals={setToDoGoals}
          setIsAddingGoal={setIsAddingGoal}
        />
      </Modal>
      <Text style={styles.listHeader}>To-Do</Text>
      <FlatList
        style={styles.list}
        data={toDoGoals}
        renderItem={({ item }) => (
          <Goal
            setToDoGoals={setToDoGoals}
            setDoneGoals={setDoneGoals}
            item={item}
          />
        )}
      />
      <Text style={styles.listHeader}>Done</Text>
      <FlatList
        style={styles.list}
        data={doneGoals}
        renderItem={({ item }) => (
          <Goal
            isDone
            item={item}
            setToDoGoals={setToDoGoals}
            setDoneGoals={setDoneGoals}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: "#EC506A",
    height: "100%",
    justifyContent: "flex-start",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
  },
  listHeader: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
  list: {
    height: "40%",
  },
});

export default App;
