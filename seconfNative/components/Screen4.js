import React, { useEffect, useState } from "react";
import { View, Text, Button, TextBase, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateTask } from "../store";

function Screen4({ route, navigation }) {
  const dispatch = useDispatch();
  const [newTask, setnewTask] = useState({
    _id: route.params.task._id,
    name: route.params.task.name,
    description: "",
    type: "",
    assigneeName: "",
    claimed: false,
    priority: "",
    priorityImpact: "",
    severity: "",
    severityImpact: "",
    dueDate: "",
    dueTime: "",
    estTime: "",
    tags: "",
    checked: false,
  });

  const onChange = (e, name) => {
    let val = e.nativeEvent.text;
    setnewTask({ ...newTask, [name]: val });
  };

  const newTaskHandler = async () => {
    try {
      const result = await axios
        .put("http://192.168.85.103:4444/editTask", { payload: newTask })
        .then((results) => dispatch(updateTask(results.data)));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {/* {txtStore.items.map((item) => (
        <Text>{item.text}</Text>
      ))} */}
      <Text>Add Task</Text>
      <TextInput
        placeholder="Task Name"
        onChange={(e) => onChange(e, "name")}
        value={newTask.name}
      />
      <Button onPress={() => newTaskHandler()} title="submit" />
    </View>
  );
}
export default Screen4;
