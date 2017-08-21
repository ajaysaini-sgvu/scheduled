import { StackNavigator } from "react-navigation";

import FirstProductTourScreen from "./ui/FirstProductTourScreen";
import EnableNotificationScreen from "./ui/EnableNotificationScreen";
import CreateMessageScreen from "./ui/CreateMessageScreen";
import DashboardScreen from "./ui/DashboardScreen";
import CreateSMS from "./ui/CreateSMS";

export const StackNav = StackNavigator(
  {
    FirstProductTourScreen: {
      screen: FirstProductTourScreen,
      navigationOptions: {
        header: null
      }
    },
    EnableNotification: {
      screen: EnableNotificationScreen,
      navigationOptions: {
        header: null
      }
    },
    CreateMessage: {
      screen: CreateMessageScreen,
      navigationOptions: {
        header: null
      }
    },
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: {
        headerLeft: null,
        headerTitleStyle: {
          alignSelf: "center",
          fontWeight: "100"
        }
      }
    },
    CreateSMS: {
      screen: CreateSMS
    }
  },
  {
    initialRouteName: "FirstProductTourScreen"
  }
);
