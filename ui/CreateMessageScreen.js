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
import styles from "../css/styles";
import * as strings from "../strings";
import RoundButton from "../views/RoundButton";

export default class CreateMessageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../img/create_message.png")} />
        <Text style={styles.textStyle}>
          {strings.create_message}
        </Text>

        <RoundButton
          textStyle={styles.roundTextStyle}
          buttonStyle={styles.roundButtonStyle}
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
            routeName: "DashboardScreen"
          })
        ]
      });
      this.props.navigation.dispatch(resetAction);
    } catch (error) {
      console.log(error);
    }
  };
}
