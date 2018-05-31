import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Map from "../../components/Map/Map";

class MapScreen extends Component {
  constructor(props) {
    super(props);
    // const { navigate } = this.props.navigation;
  }

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

export default MapScreen;
