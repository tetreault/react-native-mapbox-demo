import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Map from "./components/Map/Map";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
