import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Appy extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >
        <View style={{ backgroundColor: "orange", flex: 0.6 }} />
        <View style={{ backgroundColor: "white", flex: 0.5 }} />
        <View style={{ backgroundColor: "green", flex: 0.6}} />
     
      </View>
    );
  }
}

