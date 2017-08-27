/* @flow */

import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import styles from "../css/styles";
import * as strings from "../strings";
import RoundButton from "../views/RoundButton";
import ActionButton from "react-native-action-button";
import { StackNavigator } from "react-navigation";
import realm from "../db/realm";
import { Container, Card, CardItem } from "native-base";
import Icon from "react-native-vector-icons/SimpleLineIcons";

export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: "Scheduled"
  };

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    let scheduledMessages = realm.objects("NewMessage");
    this.state.data = [...scheduledMessages];
    return (
      <View style={styles.container}>
        <FlatList
          style={{
            width: "100%"
          }}
          data={this.state.data}
          renderItem={({ item }) =>
            <TouchableOpacity>
              <View>
                <Card>
                  <CardItem>
                    <View style={{ flexDirection: "row", width: "100%" }}>
                      <Icon name="user" size={30} />
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "column",
                          marginLeft: 20
                        }}
                      >
                        <Text style={{ color: "black" }}>
                          {item.receiptNumber}
                        </Text>
                        <Text style={{ color: "black" }}>
                          {item.text}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end"
                        }}
                      >
                        <Text
                          style={{
                            textAlignVertical: "top",
                            color: "black",
                            marginTop: 30,
                            fontSize: 10
                          }}
                        >
                          {item.time}
                        </Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              </View>
            </TouchableOpacity>}
        />
        <ActionButton
          buttonColor="#FE434C"
          onPress={() => {
            navigate("CreateSMS");
          }}
        />
      </View>
    );
  }
}
