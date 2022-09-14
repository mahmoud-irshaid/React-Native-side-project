import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as AddCalendarEvent from "react-native-add-calendar-event";
import moment from "moment";

export default Calender = () => {
  const eventTitle = "Lunch";
  const nowUTC = moment.utc();

  const addToCalendar = (title, startDateUTC) => {
    const eventConfig = {
      title,
      startDate: utcDateToString(startDateUTC),
      endDate: utcDateToString(moment.utc(startDateUTC).add(1, "hours")),
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then((eventId) => {
        //handle success (receives event id) or dismissing the modal (receives false)
        if (eventId) {
          console.warn(eventId);
        } else {
          console.warn("dismissed");
        }
      })
      .catch((error) => {
        // handle error such as when user rejected permissions
        console.warn(error);
      });
  };

  const utcDateToString = (momentInUTC) => {
    let s = moment.utc(momentInUTC).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    // console.warn(s);
    return s;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Event title: {eventTitle}</Text>
      <Text>date: {moment.utc(nowUTC).local().format("lll")}</Text>

      <Button
        onPress={() => {
          addToCalendar(eventTitle, nowUTC);
        }}
        title="Add to calendar"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
