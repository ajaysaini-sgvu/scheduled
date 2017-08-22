/* @flow */

import React, { Component } from "react";
import {
  View,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";
import * as strings from "../strings";
import styles from "../css/styles";
import RoundButton from "../views/RoundButton";
import realm from "../db/realm";
import DateTimePicker from "react-native-modal-datetime-picker";

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
            onPress={() => this._onPress(navigate)}
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

  _onPress(navigate) {
    try {
      if (!this.state.receiptnumber.trim()) {
        this.refs.receiptTextInput.focus();
        Alert.alert(strings.app_name, strings.validate_receipt);
      } else if (!this.state.text.trim()) {
        this.refs.messageTextInput.focus();
        Alert.alert(strings.app_name, strings.validate_text);
      } else if (!this.state.time.trim()) {
        this.refs.timeTextInput.focus();
        Alert.alert(strings.app_name, strings.validate_time);
      } else {
        realm.write(() => {
          realm.create("NewMessage", {
            receiptNumber: this.state.receiptnumber,
            text: this.state.text,
            time: this.state.time
          });
          navigate("DashboardScreen");
        });
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
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFFFFF"
  }
});
