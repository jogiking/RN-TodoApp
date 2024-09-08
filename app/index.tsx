import { Text, View } from "react-native";
import TodoScreen from "./src/TodoScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TodoScreen />
    </View>
  );
}
