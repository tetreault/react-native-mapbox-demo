import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Mapbox from "@mapbox/react-native-mapbox-gl";
import { MAPBOX_KEY, MAPBOX_CUSTOM_MAP_STYLE } from "react-native-dotenv";

class Map extends Component {
  constructor(props) {
    super(props);
    Mapbox.setAccessToken(MAPBOX_KEY);
  }

  render() {
    return (
      <Mapbox.MapView
        styleURL={MAPBOX_CUSTOM_MAP_STYLE}
        zoomLevel={8}
        centerCoordinate={[-74.006, 40.7128]}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Map;
