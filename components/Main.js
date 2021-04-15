import React from "react";
import { StyleSheet, View } from "react-native";
import CurrentLocation from "./CurrentLocation";
import CityLocation from "./CityLocation";
import Colors from "../styleConstant/Colors"

export default function Main() {
  return (
    <View style={styles.container}>
      <CurrentLocation />
      {/* <CityLocation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 0.8,
      width: "100%",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: Colors.primaryMainBackGround,
    },
  });