import React from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

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
            <TouchableOpacity
              style={styles.delete}
              onPress={() => {
                props.deleteItem(index);
              }}
            >
              <Entypo name="circle-with-cross" size={24} color={"#C63B64"} />
            </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  textInput: {
    fontSize: 24,
  },
  delete: {
    width: 30,
    marginRight: 10,
  },
});

export default ListView;
export type { TodoItem };
