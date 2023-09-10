import { ReactElement, ReactNode, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";

export default function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "CSS", isDone: true },
    { id: 3, title: "JS", isDone: false },
    { id: 4, title: "React", isDone: true },
    { id: 5, title: "React Native", isDone: false },
  ]);

  return (
    <View style={styles.container}>
      <HideKeyboard>
        <View>
          <TextInput style={styles.input} value={value} onChangeText={setValue} />
        </View>
      </HideKeyboard>
      <View style={styles.boxTasks}>
        {tasks.map((task) => {
          return (
            <View key={task.id} style={styles.boxTask}>
              <Checkbox value={task.isDone} onValueChange={() => {}} />
              <Text>{task.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const HideKeyboard = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e4c62",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    backgroundColor: "#fff",
    fontSize: 18,
    padding: 8,
    marginBottom: 15,
    borderRadius: 5,
  },
  boxTasks: {
    width: 120,
  },
  boxTask: {
    flexDirection: "row",
    // backgroundColor:'#ffffff',
    justifyContent: "space-between",
    marginBottom: 5,
  },
});

const globalStyles = StyleSheet.create({
  border: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
  },
});
