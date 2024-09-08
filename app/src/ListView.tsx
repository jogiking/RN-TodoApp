import React from "react";
import { FlatList, StyleSheet, TextInput, View, Text } from "react-native";

interface ListViewProps {
  items?: TodoItem[];
  updateItem: (index: number, content: string) => void;
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
        extraData={items}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <TextInput
              style={styles.textInput}
              value={item.content}
              placeholder="내용을 입력하세요."
              onChangeText={(newtext) => {
                props.updateItem(index, newtext);
              }}
              onSubmitEditing={() => {
                console.log(item.content, index);
                props.updateItem(index, item.content);
              }}
            />
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
