import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    flex: 1,
    flexDirection: "column"
  },
  textStyle: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "RobotoThin"
  },
  buttonStyle: {
    fontFamily: "RobotoThin"
  },
  roundTextStyle: {
    color: "white"
  },
  roundButtonStyle: {
    backgroundColor: "#FE434C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 240,
    marginTop: 30,
    height: 40
  }
});

module.exports = styles;
