import React from "react";
import { Text, TouchableOpacity } from "react-native";

const RoundButton = ({ onPress, children, robotoThinStyle, centerAlignTextStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={robotoThinStyle}>
      <Text style={centerAlignTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

module.exports = RoundButton;
