import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

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
          <Text style={styles.item}>{item.content}</Text>
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ListView;
export type { TodoItem };
