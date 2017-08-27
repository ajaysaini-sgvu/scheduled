/**
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { NavigationActions } from "react-navigation";

import styles from "../css/styles";
import * as strings from "../strings";
import RoundButton from "../views/RoundButton";

export default class FirstProductTourScreen extends Component {
  constructor(props) {
    super(props);
    this._startDashboardScreen = this._startDashboardScreen.bind(this);

    this.state = {
      isProductTourCompleted: false
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("@ProductTour:key").then(value => {
      if (value)
        this.setState({
          isProductTourCompleted: true
        });
    });
  }

  render() {
    console.disableYellowBox = true;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {this.state.isProductTourCompleted
          ? this._startDashboardScreen()
          : <View style={styles.container}>
              <Image source={require("../img/talk_people.png")} />
              <Text style={styles.textStyle}>
                {strings.talk_people}
              </Text>

              <RoundButton
                buttonStyle={styles.roundButtonStyle}
                textStyle={styles.roundTextStyle}
                onPress={() => {
                  const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({
                        routeName: "EnableNotification"
                      })
                    ]
                  });
                  this.props.navigation.dispatch(resetAction);
                }}
              >
                {strings.continueText}
              </RoundButton>
            </View>}
      </View>
    );
  }

  _startDashboardScreen() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: "DashboardScreen"
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }
}
