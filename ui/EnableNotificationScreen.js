/**
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { StackNavigator } from "react-navigation";
import CreateMessageScreen from "./CreateMessageScreen";
import styles from "../css/styles";
import * as strings from "../strings";
import RoundButton from "../views/RoundButton";

export default class EnableNotificationScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require("../img/enable_notification.png")} />
        <Text style={styles.textStyle}> {strings.enable_notification} </Text>

        <RoundButton
          buttonStyle={styles.roundButtonStyle}
          textStyle={styles.roundTextStyle}
          onPress={() => navigate("CreateMessage")}
        >
          CONTINUE
        </RoundButton>

        <Text
          style={{
            textAlign: "center",
            marginTop: 10
          }}
        />
      </View>
    );
  }
}
