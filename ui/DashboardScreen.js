/* @flow */

import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import styles from "../css/styles";
import * as strings from "../strings";
import RoundButton from "../views/RoundButton";
import ActionButton from "react-native-action-button";
import { StackNavigator } from "react-navigation";
import realm from "../db/realm";

export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: "Scheduled"
  };

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    let scheduledMessages = realm.objects("NewMessage");
    this.state.data = [...scheduledMessages];
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
