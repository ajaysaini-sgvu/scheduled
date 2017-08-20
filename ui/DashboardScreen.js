/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../css/styles";
import * as strings from "../strings";
import RoundButton from "../views/RoundButton";
import ActionButton from "react-native-action-button";

export default class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MyComponent component</Text>
        <ActionButton
          buttonColor="#FE434C"
          onPress={() => {
            console.log("hi");
          }}
        />
      </View>
    );
  }
}
