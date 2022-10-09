import React, { useEffect, useState, useRef, useCallback } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Audio } from "expo-av";

function Screen7({ route, navigation }) {
  const [recording, setRecording] = React.useState();
  const [URI, setURI] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [result, setResult] = useState();
  const [playStatus, setPlayStatus] = useState(false);

  const [sound, setSound] = useState();

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setURI(uri);

    let updatedRecordings = [];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: uri,
    });
    setRecordings(updatedRecordings);

    // utitlity function to convert BLOB to BASE64
    // const blobToBase64 = (blob) => {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(blob[0]);
    //   return new Promise((resolve) => {
    //     reader.onloadend = () => {
    //       resolve(reader.result);
    //     };
    //   });
    // };

    // const audioBase64 = await blobToBase64(updatedRecordings);

    const response = await axios
      .post("http://192.168.85.103:4444/audio", {
        payload: recordings[0],
      })
      .then((res) => {
        // console.log("hhghghghg", res.data);
        setResult(res.data);
      });

    // console.log("Recording stopped and stored at", uri);
  }

  useEffect(() => {
    async function soundPlacement(params) {
      const nsound = new Audio.Sound();
      setSound(nsound);
      await sound.loadAsync({ uri: recordings[0].file });
      console.log(sound);
    }
    soundPlacement();
  }, [recordings[0]]);

  async function playSound() {
    //  if(sound.playStatus){
    await sound.playAsync();
    // console.log(sound.playStatus);

    //  }
    // else{

    // }
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      <Text>{URI}</Text>
      {result && (
        <View>
          {console.log("zzzzzzzzzzzzzz", result)}

          <Text>Recording - {result?.duration}</Text>
          <Button onPress={() => playSound(result)} title="Play"></Button>
          {/* <Button  onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button> */}
        </View>
      )}

      {recordings[0] && (
        <View>
          <Text>Recording - {recordings[0]?.duration}</Text>
          <Button
            onPress={() => playSound()}
            title={playStatus ? "Pause" : "Play"}
          ></Button>
          {/* <Button  onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button> */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});

export default Screen7;
