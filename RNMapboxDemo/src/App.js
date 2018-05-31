import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapScreen from "./layouts/MapScreen/MapScreen";
import HomeScreen from "./layouts/HomeScreen/HomeScreen";
import { StackNavigator } from "react-navigation";

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen }
});

export default App;
