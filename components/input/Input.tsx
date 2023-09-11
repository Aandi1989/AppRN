import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

type IProps = {
  id:number,
  title: string,
  changeTitle: (taskId: number, title: string) => void,
  setShow: (a:number) => void,
};

const Input = (props: IProps) => {
  const [value, setValue] = useState(props.title);

  const changeTask = () => {
    props.changeTitle(props.id, value)
    props.setShow(0)
  }
  return (
    <>
      <TextInput
        style={styles.titleInput}
        value={value}
        onChangeText={setValue}
        onEndEditing={changeTask}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  titleInput: {
    height:15,
    width:90,
    backgroundColor: "#fff",
    marginHorizontal:10,
    paddingHorizontal:3,
  }
})