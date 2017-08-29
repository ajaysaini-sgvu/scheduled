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
import { StackNavigator, NavigationActions } from "react-navigation";

import CreateMessageScreen from "./CreateMessageScreen";
import RoundButton from "../views/RoundButton";
import styles from "../css/styles";
import * as strings from "../strings";

export default class EnableNotificationScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require("../img/enable_notification.png")} />
        <Text style={styles.textStyle}>
          {" "}{strings.enable_notification}{" "}
        </Text>

        <RoundButton
          buttonStyle={styles.roundButtonStyle}
          textStyle={styles.roundTextStyle}
          onPress={() => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: "CreateMessage" })
              ]
            });
            this.props.navigation.dispatch(resetAction);
          }}
        >
          {strings.continueText}
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
