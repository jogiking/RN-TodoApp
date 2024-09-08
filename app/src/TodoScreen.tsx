import React from "react";
import { StyleSheet, View } from "react-native";
import ListView from "./ListView";
import { TodoItem } from "./ListView";

interface TodoScreenProps {}

function TodoScreen({}: TodoScreenProps) {
  const items = {
    content: "이건테스트",
    registerDate: "asdfasdf",
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ListView items={[items]} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default TodoScreen;
