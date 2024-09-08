import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ListView from "./ListView";
import { TodoItem } from "./ListView";

interface TodoScreenProps {}

function TodoScreen({}: TodoScreenProps) {
  const todoList: TodoItem[] = [
    {
      content: "공부하기",
      registerDate: "2024-09-08",
    },
    {
      content: "운동하기",
      registerDate: "2024-09-08",
    },
  ];

  return (
    <View style={styles.container}>
      <ListView style={styles.listViewContainer} items={todoList} />
      <TouchableOpacity style={styles.addContainer}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listViewContainer: {},
  add: {
    position: "absolute",
    bottom: 30,
    right: 15,
  },
  addContainer: {
    position: "absolute",
    bottom: 30,
    right: 15,
    marginBottom: 50,
    backgroundColor: "#f99",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
  },
  addText: {
    fontSize: 40,
    fontWeight: "700",
  },
});

export default TodoScreen;
