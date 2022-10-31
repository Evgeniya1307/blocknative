import React from "react";
import { StatusBar,View } from "react-native";
import { HomeScreen } from "./.expo/screens/Home";

export default function App() {
  return (
    <View>
    <HomeScreen/>
      <StatusBar theme="auto" />
    </View>
  );
}
