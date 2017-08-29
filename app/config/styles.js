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
  centerAlignTextStyle: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "RobotoThin"
  },
  robotoThinStyle: {
    fontFamily: "RobotoThin"
  },
  whiteColorStyle: {
    color: "white"
  },
  blackColorStyle: {
    color: "black"
  },
  roundButtonStyle: {
    backgroundColor: "#FE434C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 240,
    marginTop: 30,
    height: 40
  },
  createSMSInputBoxStyle: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1
  }
});

module.exports = styles;
