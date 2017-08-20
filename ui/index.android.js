/**
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { StackNavigator } from "react-navigation";
import EnableNotificationScreen from "./EnableNotificationScreen";
import CreateMessageScreen from "./CreateMessageScreen";
import DashboardScreen from "./DashboardScreen";
import styles from "../css/styles";
import * as strings from "../strings";
import RoundButton from "../views/RoundButton";

class SplashScreen extends Component {
  render() {
    console.disableYellowBox = true;
    const { navigate } = this.props.navigation;

    try {
      AsyncStorage.getItem("@ProductTour:key").then(value => {
        // control goes inside if when user has completed product tour
        if (value) {
          navigate("DashboardScreen");
        }
      });
    } catch (error) {
      console.log(error);
    }

    return (
      <View style={styles.container}>
        <Image source={require("../img/talk_people.png")} />
        <Text style={styles.textStyle}>
          {strings.talk_people}
        </Text>

        <RoundButton
          buttonStyle={styles.roundButtonStyle}
          textStyle={styles.roundTextStyle}
          onPress={() => navigate("EnableNotification")}
        >
          CONTINUE
        </RoundButton>
      </View>
    );
  }
}

const ScheduledApp = StackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    },
    EnableNotification: {
      screen: EnableNotificationScreen,
      navigationOptions: {
        header: null
      }
    },
    CreateMessage: {
      screen: CreateMessageScreen,
      navigationOptions: {
        header: null
      }
    },
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Splash"
  }
);

AppRegistry.registerComponent("Scheduled", () => ScheduledApp);
