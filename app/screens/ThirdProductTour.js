import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { StackNavigator, NavigationActions } from "react-navigation";

import styles from "../config/styles";
import * as strings from "../config/strings";
import RoundButton from "../components/Button/RoundButton";

export default class ThirdProductTour extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../img/create_message.png")} />
        <Text style={styles.centerAlignTextStyle}>
          {strings.create_message}
        </Text>

        <RoundButton
          centerAlignTextStyle={styles.whiteColorStyle}
          robotoThinStyle={styles.roundButtonStyle}
          onPress={this.onPressButton}
        >
          {strings.continueText}
        </RoundButton>
      </View>
    );
  }

  onPressButton = async () => {
    // save status that user has completed product tour
    try {
      await AsyncStorage.setItem("@ProductTour:key", "true");
      const { navigate } = this.props.navigation;
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "Dashboard"
          })
        ]
      });
      this.props.navigation.dispatch(resetAction);
    } catch (error) {
      console.log(error);
    }
  };
}
