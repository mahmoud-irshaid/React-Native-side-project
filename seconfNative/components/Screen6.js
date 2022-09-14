import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getTasks, deleteTask } from "../store";
import Carousel from "react-native-snap-carousel";
import MonthPicker from "react-native-month-year-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar } from "react-native-calendars";

function Screen6({ route, navigation }) {
  let carousel = useRef();
  const [activeIndex, setactiveIndex] = useState(0);
  const [carouselItems, setcarouselItems] = useState([
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ]);

  const [date, setDate] = useState(new Date());
  const [values, setvalues] = useState([]);
  const [show, setShow] = useState(false);

  const showPicker = useCallback((value) => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker]
  );

  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "red",
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={{ width: "100%" }}>
      <Carousel
        layout={"default"}
        ref={(ref) => (carousel = ref)}
        data={carouselItems}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width - 100}
        renderItem={_renderItem}
        onSnapToItem={(index) => setactiveIndex(index)}
        loop={true}
      />

      <View style={{ width: "100%", backgroundColor: "#000", padding: 10 }}>
        <Button onPress={() => showPicker(true)} title="open"></Button>

        {/* {show && (
          <DateTimePicker
            style={{ flex: 1, width: "100%" }}
            value={date}
            mode="default"
            display="default"
            onChange={(date) => this.setState({ date })}
          />
        )} */}
      </View>
      {console.log(
        date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
      )}
      <Calendar
        minDate={date}
        enableSwipeMonths={true}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
export default Screen6;
