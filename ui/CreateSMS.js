/* @flow */

import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import * as strings from "../strings";
import styles from "../css/styles";
import RoundButton from "../views/RoundButton";
import realm from "../db/realm";

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
      time: ""
    };
  }

  render() {
    return (
      <View style={localStyles.container}>
        <TextInput
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

        <TouchableOpacity
          onPress={() => console.log("Pressed")}
          style={{
            width: "100%"
          }}
        >
          <Text
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginTop: 8,
              paddingTop: 10,
              paddingLeft: 4
            }}
          >
            {strings.schedule_date}
          </Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <RoundButton
            textStyle={styles.roundTextStyle}
            buttonStyle={styles.roundButtonStyle}
            onPress={this._onPress}
          >
            {strings.schedule_message}
          </RoundButton>
        </View>
      </View>
    );
  }

  _onPress() {
    try {
      realm.write(() => {
        realm.create("NewMessage", {
          receiptNumber: this.state.receiptnumber,
          text: this.state.text,
          time: ""
        });
      });
      let message = realm.objects("NewMessage");
      console.log(message.length);
    } catch (error) {
      console.log(error);
    }
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
