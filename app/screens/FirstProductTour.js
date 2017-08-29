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

import RoundButton from "../components/Button/RoundButton";
import styles from "../config/styles";
import * as strings from "../config/strings";

export default class FirstProductTour extends Component {
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
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {this.state.isProductTourCompleted
          ? this._startDashboardScreen()
          : <View style={styles.container}>
              <Image source={require("../../img/talk_people.png")} />
              <Text style={styles.centerAlignTextStyle}>
                {strings.talk_people}
              </Text>

              <RoundButton
                robotoThinStyle={styles.roundButtonStyle}
                centerAlignTextStyle={styles.whiteColorStyle}
                onPress={() => {
                  const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({
                        routeName: "SecondProductTour"
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
          routeName: "Dashboard"
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }
}
