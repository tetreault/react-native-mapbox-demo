import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    const { navigate } = this.props.navigation;
    navigate("Map");
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Go to Map Screen" onPress={this.onPressButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default HomeScreen;
