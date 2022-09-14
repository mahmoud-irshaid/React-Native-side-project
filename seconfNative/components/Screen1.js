import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { testHandler } from "../test";

function Screen1() {
  const dispatch = useDispatch();
  const testStore = useSelector((state) => state.test);

  return (
    <View>
      <Text>{testStore.value}</Text>
      <Button onPress={() => dispatch(testHandler())} title="change Name" />
    </View>
  );
}
export default Screen1;
