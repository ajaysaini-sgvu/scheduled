/**
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";

import { StackNav } from "./router";
export default class ScheduledApp extends Component {
  render() {
    return <StackNav />;
  }
}

AppRegistry.registerComponent("Scheduled", () => ScheduledApp);
