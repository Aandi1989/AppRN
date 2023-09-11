import { ReactElement, ReactNode, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View, Button,
} from "react-native";
import Checkbox from "expo-checkbox";
import Input from "./components/input/Input";

export default function App() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "CSS", isDone: true },
    { id: 3, title: "JS", isDone: false },
    { id: 4, title: "React", isDone: true },
    { id: 5, title: "React Native", isDone: false },
  ]);



  const addTask = () => {
    const newTask = {id: tasks.length + 1, title: value, isDone: false};
    setTasks([...tasks, newTask]);
    setValue('');
  };

  const changeStatus = (taskId: number, status: boolean) => {
    setTasks(tasks.map(task => task.id === taskId ? {...task, isDone: status} : task))
  }

  const changeTitle = (taskId: number, title: string) => {
    setTasks(tasks.map(task => task.id === taskId ? {...task, title: title} : task))
  }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <TextInput style={styles.input} value={value} onChangeText={setValue} />
        <View style={[styles.button, {}]}>
          <Button title={"Add task"} onPress={addTask} color="#223747" />
        </View>
        <View style={styles.boxTasks}>
          {tasks.map((task) => {
            return (
              <View key={task.id} style={styles.boxTask}>
                <Checkbox value={task.isDone} onValueChange={(value) => {changeStatus(task.id, value)}} 
                color={task.isDone ? "#4630EB" : undefined}/>
                {show === task.id ? <Input id={task.id} setShow={setShow} changeTitle={changeTitle} title={task.title} /> : 
                                    <Text onPress={()=>setShow(task.id)}>{task.title}</Text>}
              </View>
            );
          })}
        </View>
      </View>
    </HideKeyboard>
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
    alignItems:"center",
    marginBottom: 5,
  },
  button: {
    marginBottom: 10,
  },
  
});

const globalStyles = StyleSheet.create({
  border: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
  },
});
