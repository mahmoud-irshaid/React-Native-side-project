import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import * as Calendar from "expo-calendar";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome";

export default function Calender3() {
  useFocusEffect(
    React.useCallback(() => {
      const calenderHandler = async () => {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === "granted") {
          await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT).then(
            (calendars) => {
              console.log(calendars);
              calendars.map((cal) => {
                if (cal.id > 3) {
                  Calendar.deleteCalendarAsync(cal.id);
                }
              });
            }
          );
        }
      };
      calenderHandler();
    }, [])
  );

  return <View></View>;
}
