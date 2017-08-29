import { StackNavigator } from "react-navigation";

import FirstProductTour from "../screens/FirstProductTour";
import SecondProductTour from "../screens/SecondProductTour";
import ThirdProductTour from "../screens/ThirdProductTour";
import Dashboard from "../screens/Dashboard";
import CreateSMS from "../screens/CreateSMS";

export const StackNav = StackNavigator(
  {
    FirstProductTour: {
      screen: FirstProductTour,
      navigationOptions: {
        header: null
      }
    },
    SecondProductTour: {
      screen: SecondProductTour,
      navigationOptions: {
        header: null
      }
    },
    ThirdProductTour: {
      screen: ThirdProductTour,
      navigationOptions: {
        header: null
      }
    },
    Dashboard: {
      screen: Dashboard,
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
    initialRouteName: "FirstProductTour"
  }
);
