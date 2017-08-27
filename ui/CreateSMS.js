/* @flow */

import React, { Component } from "react";
import {
  View,
  Text,
  Keyboard,
  TextInput,
  Platform,
  TouchableOpacity,
  ToastAndroid,
  AlertIOS,
  Alert,
  StyleSheet
} from "react-native";
import * as strings from "../strings";
import styles from "../css/styles";
import RoundButton from "../views/RoundButton";
import realm from "../db/realm";
import DateTimePicker from "react-native-modal-datetime-picker";
import { NavigationActions } from "react-navigation";
import ScheduleText from "../utils/ScheduleSMS";
var utils = require("../utils/PermissionManager.js");

export default class CreateSMS extends Component {
  static navigationOptions = {
    title: strings.new_message
  };

  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
    this.state = {
      receiptnumber: "",
      text: "",
      time: "",
      isDateTimePickerVisible: false
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={localStyles.container}>
        <TextInput
          ref="receiptTextInput"
          style={{
            height: 40,
            width: "100%",
            borderColor: "gray",
            borderWidth: 1
          }}
          keyboardType="phone-pad"
          underlineColorAndroid="transparent"
          placeholder={strings.select_recipient}
          onChangeText={receiptnumber => this.setState({ receiptnumber })}
        />

        <TextInput
          ref="messageTextInput"
          style={{
            height: 40,
            width: "100%",
            borderColor: "gray",
            borderWidth: 1,
            marginTop: 8
          }}
          underlineColorAndroid="transparent"
          placeholder={strings.enter_your_message}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          ref="timeTextInput"
          style={{
            height: 40,
            width: "100%",
            borderColor: "gray",
            borderWidth: 1,
            marginTop: 8
          }}
          underlineColorAndroid="transparent"
          placeholder={strings.schedule_date}
          onFocus={this._showDateTimePicker}
          value={this.state.time.toString()}
        />
        <View style={{ alignItems: "center" }}>
          <RoundButton
            textStyle={styles.roundTextStyle}
            buttonStyle={styles.roundButtonStyle}
            onPress={() => this._onPress()}
          >
            {strings.schedule_message}
          </RoundButton>
        </View>

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode="datetime"
        />
      </View>
    );
  }

  _onPress() {
    try {
      if (!this.state.receiptnumber.trim()) {
        if (Platform.OS === "android") {
          //code of android platform
          ToastAndroid.show(strings.validate_receipt, ToastAndroid.SHORT);
        } else {
          //code of iOS platform
          AlertIOS.alert(strings.app_name, strings.validate_receipt);
        }
        this.refs.receiptTextInput.focus();
      } else if (!this.state.text.trim()) {
        if (Platform.OS === "android") {
          //code of android platform
          ToastAndroid.show(strings.validate_text, ToastAndroid.SHORT);
        } else {
          //code of iOS platform
          AlertIOS.alert(strings.app_name, strings.validate_text);
        }
        this.refs.messageTextInput.focus();
      } else if (!this.state.time.trim()) {
        if (Platform.OS === "android") {
          //code of android platform
          ToastAndroid.show(strings.validate_time, ToastAndroid.SHORT);
        } else {
          //code of iOS platform
          AlertIOS.alert(strings.app_name, strings.validate_time);
        }
        this.refs.timeTextInput.focus();
      } else {
        if (Platform.OS === "android") {
          if (Platform.Version >= 23) {
            Promise.resolve(utils.requestSendSMSPermission()).then(result => {
              // user granted SMS permission
              if (result) {
                // save message into local database and calling native module schedule method
                this._saveScheduleMessage();
                ScheduleText.schedule(
                  this.state.receiptnumber,
                  this.state.text,
                  this.state.time
                );
              } else {
                // user denied SMS permission
                Alert.alert(
                  strings.permission_required,
                  strings.send_sms_deny_permission
                );
              }
            });
          } else {
            // save message into local database and calling native module schedule method
            this._saveScheduleMessage();
            ScheduleText.schedule(
              this.state.receiptnumber,
              this.state.text,
              this.state.time
            );
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  _showDateTimePicker = () => {
    Keyboard.dismiss(0); // hide the keyboard
    this.setState({ isDateTimePickerVisible: true });
  };

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    this.setState({ time: date.toLocaleString() });
    this._hideDateTimePicker();
  };

  _saveScheduleMessage() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: "DashboardScreen"
        })
      ]
    });
    realm.write(() => {
      realm.create("NewMessage", {
        receiptNumber: this.state.receiptnumber,
        text: this.state.text,
        time: this.state.time
      });
      this.props.navigation.dispatch(resetAction);
    });
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFFFFF"
  }
});
