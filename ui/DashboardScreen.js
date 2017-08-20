/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../css/styles";
import * as strings from "../strings";
import RoundButton from "../views/RoundButton";
import ActionButton from "react-native-action-button";
import { StackNavigator } from "react-navigation";

export default class DashboardScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ActionButton
          buttonColor="#FE434C"
          onPress={() => {
            navigate("CreateSMS");
          }}
        />
      </View>
    );
  }
}
