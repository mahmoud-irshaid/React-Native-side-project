import React, { useEffect, useState, useRef } from "react";
import { View, Text, Button, TextBase, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addNewTask } from "../store";
import { io } from "socket.io-client";

function Screen3({ route, navigation }) {
  const dispatch = useDispatch();
  const txtStore = useSelector((state) => state.txtstore);
  const [newTask, setnewTask] = useState({
    name: "",
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
  const socket = useRef();
  const [user, setuser] = useState({ _id: 1 });
  const [notifies, setnotifies] = useState([]);

  const onChange = (e, name) => {
    let val = e.nativeEvent.text;
    setnewTask({ ...newTask, [name]: val });
  };

  const newTaskHandler = async () => {
    try {
      const result = await axios
        .post("http://192.168.85.103:4444/newTask", { payload: newTask })
        .then((results) => dispatch(addNewTask(results.data)));

      socket.current.emit("sendMessage", {
        senderId: user._id,
        receiverId: user._id,
        text: `A ${newTask.name} from ${user._id}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.current = io("ws://192.168.85.103:8900", {
      transports: ["websocket"],
      upgrade: false,
    });

    socket.current.emit("addUser", user._id);

    socket.current.on("getMessage", (data) => {
      setnotifies([
        ...notifies,
        {
          sender: data.senderId,
          text: data.text,
        },
      ]);
    });
  }, []);

  return (
    <View>
      {/* {txtStore.items.map((item) => (
        <Text>{item.text}</Text>
      ))} */}
      <Text>Add Task</Text>
      <TextInput
        placeholder="Task Name"
        onChange={(e) => onChange(e, "name")}
      />
      <Button onPress={() => newTaskHandler()} title="submit" />
      {notifies.map((n) => (
        <Text>
          sender{n.sender} ,, text{n.text}
        </Text>
      ))}
    </View>
  );
}
export default Screen3;
