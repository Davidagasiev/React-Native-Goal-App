import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const StyledButton: FC<any> = (props) => {
  return (
    <TouchableOpacity style={styles.styledButton} {...props}>
      <Text style={styles.styledButtonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  styledButton: {
    color: "white",
  },
  styledButtonText: {
    color: "white",
    fontSize: 35,
  },
});
