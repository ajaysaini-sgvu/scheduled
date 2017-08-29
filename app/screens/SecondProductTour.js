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

import RoundButton from "../components/Button/RoundButton";
import styles from "../config/styles";
import * as strings from "../config/strings";

export default class SecondProductTour extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require("../../img/enable_notification.png")} />
        <Text style={styles.centerAlignTextStyle}>
          {" "}{strings.enable_notification}{" "}
        </Text>

        <RoundButton
          robotoThinStyle={styles.roundButtonStyle}
          centerAlignTextStyle={styles.whiteColorStyle}
          onPress={() => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: "ThirdProductTour" })
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
