import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SplashScreen from "react-native-splash-screen"

export default function App() {
  useEffect (()=>{
    SplashScreen.hide();
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});