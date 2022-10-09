import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getTasks, deleteTask } from "../store";
import { ProgressChart } from "react-native-chart-kit";
import Calender from "./Calender";
import Calender2 from "./Calender2";
import Calender3 from "./Calender3";

//import LocalCalendarModalComponent from "./LocalCalendarModalComponent";
//import { addCalendarEvent } from "./LocalCalendarService";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SvgXml } from "react-native-svg";
import img from "../undraw_dog_re_7l04.js";
import img2 from "../50n.6180d07b.js";

const MyProgressChart = () => {
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8],
  };
  return (
    <ScrollView>
      <Text style={styles.header}>Progress Chart</Text>
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </ScrollView>
  );
};

function Screen2({ route, navigation }) {
  const dispatch = useDispatch();
  const txtStore = useSelector((state) => state.txtstore);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios
        .get("http://192.168.85.103:4444/tasks")
        .then((results) => dispatch(getTasks(results.data)));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTaskHandler = async (task) => {
    try {
      const result = await axios
        .put(`http://192.168.85.103:4444/deleteTask/${task._id}`)
        .then((results) => dispatch(deleteTask(task._id)));
    } catch (error) {
      console.log(error);
    }
  };

  // const [isVisibleCalendars, setIsVisibleCalendars] = useState(false);
  // const [event, setEvent] = useState(null);

  // const [title, setTitle] = useState("");
  // const [startDateStr, setStartDateStr] = useState("");
  // const [endDateStr, setEndDateStr] = useState("");

  // const openLocalCalendarModal = () => setIsVisibleCalendars(true);

  // const closeLocalCalendarModal = () => setIsVisibleCalendars(false);

  // const saveEvent = async (calendar) => {
  //   await addCalendarEvent(event, calendar);
  //   closeLocalCalendarModal();
  // };

  // const saveEventCalendar = async () => {
  //   const startDate = new Date(startDateStr);
  //   const endDate = new Date(endDateStr);

  //   const event = {
  //     title: title,
  //     startDate: startDate.toISOString(),
  //     endDate: endDate.toISOString(),
  //     allDay: true,
  //   };

  //   setEvent(event);
  //   openLocalCalendarModal();
  // };]]

  useEffect(() => {
    async function sett(params) {
      try {
        // await AsyncStorage.setItem("@MySuperStore:key", "I like to save it.");
        let val = await AsyncStorage.getItem("@MySuperStore:key");
        console.log(val, "async");
      } catch (error) {
        // Error saving data
      }
    }
    sett();
  }, []);

  return (
    <ScrollView>
      {/* {txtStore.items.map((item) => (
        <Text>{item.text}</Text>
      ))} */}
      {txtStore.items.map((task, i) => {
        return (
          <View key={i}>
            <Text>{task.name}</Text>
            <Button onPress={() => deleteTaskHandler(task)} title="delete" />
            <Button
              title="edit"
              onPress={() => navigation.navigate("Screen4", { task })}
            />
          </View>
        );
      })}
      <View style={{ borderColor: "gray", borderWidth: 4, margin: 30 }}>
        <Button
          title="screen 1"
          onPress={() => navigation.navigate("Screen1")}
        />
        <Button
          title="screen 3"
          onPress={() => navigation.navigate("Screen3")}
        />
        <Button
          title="screen 6"
          onPress={() => navigation.navigate("Screen6")}
        />
        <Button
          title="screen 7"
          onPress={() => navigation.navigate("Screen7")}
        />
        <Button
          title="screen 8"
          onPress={() => navigation.navigate("Screen8")}
        />
        <Button
          title="screen 9"
          onPress={() => navigation.navigate("Screen9")}
        />
        <Button
          title="screen 10"
          onPress={() => navigation.navigate("Screen10")}
        />
      </View>
      <MyProgressChart />
      <Calender3 />
      {/* <View>
        <SvgXml xml={img} width="50%" height="50%" />
      </View> */}
      <SvgXml xml={img2} width="50%" height="50%" />

      {/* 
      <LocalCalendarModalComponent
        isVisible={isVisibleCalendars}
        closeModal={closeLocalCalendarModal}
        handleCalendarSelected={saveEvent}
        label={"Select a calendar"}
      />
      <View style={styles.form}>
        <Text style={styles.title}>Save calendar event</Text>
        <TextInput
          style={styles.textInput}
          placeholder={"Title"}
          onChangeText={setTitle}
          value={title}
        />
        <TextInput
          style={styles.textInput}
          placeholder={"Start date YYYY-mm-dd"}
          onChangeText={setStartDateStr}
          value={startDateStr}
        />
        <TextInput
          style={styles.textInput}
          placeholder={"End date YYYY-mm-dd"}
          onChangeText={setEndDateStr}
          value={endDateStr}
        />
        <Button onPress={saveEventCalendar} title={"Save"} />
      </View> */}
      <DateTimePicker
        style={{ flex: 1, width: "100%" }}
        value={date}
        mode="default"
        display="default"
        onChange={(date) => this.setState({ date })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
export default Screen2;
