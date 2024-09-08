import React from "react";
import { FlatList, StyleSheet, TextInput, View, Text } from "react-native";

interface ListViewProps {
  items?: TodoItem[];
}

type TodoItem = {
  content: string;
  registerDate: string;
};

function ListView(props: ListViewProps) {
  const items = props.items ?? [];

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TextInput style={styles.textInput} value={item.content} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  itemContainer: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "#C4C4E7",
    marginBottom: 3,
  },
  textInput: {
    fontSize: 24,
  },
});

export default ListView;
export type { TodoItem };
