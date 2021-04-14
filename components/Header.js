import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../styleConstant/Colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sunset & Sunrise </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryHeadBackGround,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
